import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', elasticity = 0.4, magneticRadius = 100 }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;

            const { clientX, clientY } = e;
            const rect = ref.current.getBoundingClientRect();

            // Find the original center of the button
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate distance between mouse and the center of the button
            const deltaX = clientX - centerX;
            const deltaY = clientY - centerY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            // If the mouse is within the "magnetic radius" (diameter), pull the button
            if (distance < magneticRadius) {
                // Move button a fraction of the distance towards the mouse
                const moveX = deltaX * elasticity;
                const moveY = deltaY * elasticity;
                setPosition({ x: moveX, y: moveY });
            } else {
                // Return to original position if out of range
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [elasticity, magneticRadius]);

    return (
        <motion.div
            ref={ref}
            animate={{ x: position.x, y: position.y }}
            transition={{
                type: 'spring',
                stiffness: 150,
                damping: 15,
                mass: 0.1
            }}
            className={className}
            style={{ display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
};

export default MagneticButton;
