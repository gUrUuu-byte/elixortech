import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './HeroBackground.css';

// -------------------------------------------------------------
// CONSTANTS & PALETTE
// -------------------------------------------------------------
const COLORS = ['#14b8a6', '#22d3ee', '#38bdf8', '#6366f1', '#0f172a'];
const MAX_CONNECT_DISTANCE = 4.5;
const PARTICLES_COUNT = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 150;

// Reusable Basic Geometries
const boxGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const hexGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 6);
const triGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.1, 3);
const ringGeo = new THREE.TorusGeometry(0.3, 0.05, 8, 24);
const diamGeo = new THREE.OctahedronGeometry(0.4, 0);

const getRandomColor = () => new THREE.Color(COLORS[Math.floor(Math.random() * COLORS.length)]);
const getRandomGeo = () => {
    const r = Math.random();
    if (r < 0.2) return { geo: boxGeo, wireframe: true };
    if (r < 0.4) return { geo: hexGeo, wireframe: false };
    if (r < 0.6) return { geo: triGeo, wireframe: false };
    if (r < 0.8) return { geo: ringGeo, wireframe: false };
    return { geo: diamGeo, wireframe: false };
};

// -------------------------------------------------------------
// LAYER 1: DEEP SPACE FIELD (Static Points)
// -------------------------------------------------------------
const DeepSpaceField = () => {
    const count = 1000;
    const positions = useMemo(() => {
        const arr = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            arr[i * 3] = (Math.random() - 0.5) * 60;
            arr[i * 3 + 1] = (Math.random() - 0.5) * 60;
            arr[i * 3 + 2] = (Math.random() - 0.5) * 40 - 20; // Deep back
        }
        return arr;
    }, []);

    return (
        <Points positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial transparent color="#94a3b8" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.3} />
        </Points>
    );
};

// -------------------------------------------------------------
// LAYERS 2-4 & CONNECTIONS: DYNAMIC PARTICLE ECOSYSTEM
// -------------------------------------------------------------
const ParticleEcosystem = ({ mouse }) => {
    const groupRef = useRef();
    const materialRefs = useRef([]);
    const { camera } = useThree();

    // Pre-generate particle data
    const particlesData = useMemo(() => {
        const data = [];
        for (let i = 0; i < PARTICLES_COUNT; i++) {
            // Distribute layers: 2: Atmos, 3: Geo, 4: Foreground
            const r = Math.random();
            let layer, zScale;
            if (r < 0.5) {
                layer = 2; // Mid-back atmospheric
                zScale = (Math.random() - 0.5) * 10 - 5;
            } else if (r < 0.8) {
                layer = 3; // Mid-geo
                zScale = (Math.random() - 0.5) * 5;
            } else {
                layer = 4; // Close 
                zScale = Math.random() * 8 + 2;
            }

            const x = (Math.random() - 0.5) * 30;
            const y = (Math.random() - 0.5) * 20;
            const { geo, wireframe } = getRandomGeo();

            data.push({
                x, y, z: zScale,
                vx: (Math.random() - 0.5) * 0.02,
                vy: (Math.random() - 0.5) * 0.02,
                vz: (Math.random() - 0.5) * 0.01,
                layer, geo, wireframe,
                color: getRandomColor(),
                scale: Math.random() * 0.5 + 0.3 * (layer * 0.25),
                rx: Math.random() * Math.PI, ry: Math.random() * Math.PI,
                rvx: (Math.random() - 0.5) * 0.01,
                rvy: (Math.random() - 0.5) * 0.01
            });
        }
        return data;
    }, []);

    // Line drawing refs
    const linesRef = useRef();
    const pointsArray = useMemo(() => new Float32Array(PARTICLES_COUNT * PARTICLES_COUNT * 3), []);
    const colorsArray = useMemo(() => new Float32Array(PARTICLES_COUNT * PARTICLES_COUNT * 4), []);

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        const mx = mouse.current.x; // normalized -1 to +1
        const my = mouse.current.y;

        // 1. Scene Tilt
        // Smoothly lerp the entire group's rotation towards mouse, limited to roughly 4 degrees
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -my * 0.07, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mx * 0.07, 0.05);

        // 2. Parallax Shift on camera
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mx * 2, 0.05);
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, -my * 2, 0.05);
        camera.lookAt(0, 0, 0);

        let lineIdx = 0;
        let colorIdx = 0;

        const children = groupRef.current.children;

        // 3. Particle Movement & Attraction
        for (let i = 0; i < PARTICLES_COUNT; i++) {
            const pd = particlesData[i];
            const mesh = children[i];
            
            // Mouse attraction for close layers
            if (pd.layer === 4) {
                const distToMouseStr = Math.max(0, 1 - (Math.abs(pd.x - mx * 10) + Math.abs(pd.y + my * 10)) * 0.05);
                pd.x += (mx * 10 - pd.x) * 0.01 * distToMouseStr;
                pd.y += (-my * 10 - pd.y) * 0.01 * distToMouseStr;
            }

            // Drift
            pd.x += pd.vx;
            pd.y += pd.vy;
            pd.z += pd.vz;

            // Simple bounds wrapping
            if (pd.x > 20) pd.x = -20;
            if (pd.x < -20) pd.x = 20;
            if (pd.y > 15) pd.y = -15;
            if (pd.y < -15) pd.y = 15;

            // Rotations
            pd.rx += pd.rvx;
            pd.ry += pd.rvy;

            // Apply to mesh
            if (mesh) {
                mesh.position.set(pd.x, pd.y, pd.z);
                mesh.rotation.set(pd.rx, pd.ry, 0);
                
                // Subtle scale pulsing
                const s = pd.scale + Math.sin(t * 2 + i) * 0.05;
                mesh.scale.set(s, s, s);
            }
        }

        // 4. Dynamic Connection Mesh (only compute if not too mobile-constrained)
        if (PARTICLES_COUNT > 60) {
            for (let i = 0; i < PARTICLES_COUNT; i++) {
                const p1 = particlesData[i];
                if (p1.layer < 3) continue; // Only connect mid/front layers
                for (let j = i + 1; j < PARTICLES_COUNT; j++) {
                    const p2 = particlesData[j];
                    if (p2.layer < 3) continue;

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const dz = p1.z - p2.z;
                    const distSq = dx*dx + dy*dy + dz*dz;

                    if (distSq < MAX_CONNECT_DISTANCE * MAX_CONNECT_DISTANCE) {
                        const alpha = (1 - Math.sqrt(distSq) / MAX_CONNECT_DISTANCE) * 0.3; // Very soft opacity
                        
                        // Line start
                        pointsArray[lineIdx++] = p1.x; pointsArray[lineIdx++] = p1.y; pointsArray[lineIdx++] = p1.z;
                        colorsArray[colorIdx++] = p1.color.r; colorsArray[colorIdx++] = p1.color.g; colorsArray[colorIdx++] = p1.color.b; colorsArray[colorIdx++] = alpha;
                        
                        // Line end
                        pointsArray[lineIdx++] = p2.x; pointsArray[lineIdx++] = p2.y; pointsArray[lineIdx++] = p2.z;
                        colorsArray[colorIdx++] = p2.color.r; colorsArray[colorIdx++] = p2.color.g; colorsArray[colorIdx++] = p2.color.b; colorsArray[colorIdx++] = alpha;
                    }
                }
            }
        }

        if (linesRef.current) {
            linesRef.current.geometry.attributes.position.needsUpdate = true;
            linesRef.current.geometry.attributes.color.needsUpdate = true;
            linesRef.current.geometry.setDrawRange(0, lineIdx / 3);
        }
    });

    return (
        <group ref={groupRef}>
            {particlesData.map((data, i) => (
                <mesh key={i} geometry={data.geo}>
                    <meshBasicMaterial 
                        color={data.color} 
                        wireframe={data.wireframe} 
                        transparent 
                        opacity={data.layer === 4 ? 0.9 : data.layer === 3 ? 0.5 : 0.2} 
                        depthWrite={false}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            ))}

            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute attach="attributes-position" count={pointsArray.length / 3} array={pointsArray} itemSize={3} />
                    <bufferAttribute attach="attributes-color" count={colorsArray.length / 4} array={colorsArray} itemSize={4} />
                </bufferGeometry>
                <lineBasicMaterial vertexColors transparent depthWrite={false} blending={THREE.AdditiveBlending} />
            </lineSegments>
        </group>
    );
};

// -------------------------------------------------------------
// MAIN COMPONENT & LAYER 5 AMBIENT LIGHT
// -------------------------------------------------------------
const HeroBackground3D = () => {
    // Detect mobile / touch devices — skip heavy WebGL entirely
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
        setIsMobile(mobile);
    }, []);

    // We use normalized motion values for mouse: -1 to 1
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 40, stiffness: 200, mass: 1.5 };
    const smoothedX = useSpring(mouseX, springConfig);
    const smoothedY = useSpring(mouseY, springConfig);

    // Motion transforms for pure volumetric CSS tracking
    const moveX = useTransform(smoothedX, [-1, 1], ['-20vw', '20vw']);
    const moveY = useTransform(smoothedY, [-1, 1], ['-20vh', '20vh']);
    const moveX2 = useTransform(smoothedX, [-1, 1], ['15vw', '-15vw']);
    const moveY2 = useTransform(smoothedY, [-1, 1], ['15vh', '-15vh']);

    // Raw refs for WebGL loop bridging without re-renders
    const rawMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            mouseX.set(x);
            mouseY.set(y);
            rawMouse.current = { x, y: -y }; // Inverse y for three.js tilt vs screen
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="hero-3d-wrapper">
            {/* Layer 5: Ambient Volumetric Gradient Lighting */}
            <motion.div 
                className="ambient-glow glow-primary"
                style={{ x: moveX, y: moveY }}
            />
            <motion.div 
                className="ambient-glow glow-secondary"
                style={{ x: moveX2, y: moveY2 }}
            />

            {/* Canvas layer — only render on desktop to avoid mobile freeze */}
            {!isMobile && (
                <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }}>
                    <ambientLight intensity={0.5} />
                    <DeepSpaceField />
                    <ParticleEcosystem mouse={rawMouse} />
                </Canvas>
            )}

            {/* Overlays to blend with page context */}
            <div className="hero-3d-vignette" />
            <div className="hero-3d-bottom-fade" />
            <div className="hero-3d-noise" />
        </div>
    );
};

export default HeroBackground3D;
