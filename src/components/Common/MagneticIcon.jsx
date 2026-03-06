import React, { useState, useEffect, useRef } from 'react';

const MagneticIcon = ({ children, className = '', maxRotation = 15, maxDistance = 300 }) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const iconRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!iconRef.current) return;

            const rect = iconRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

            if (distance < maxDistance) {
                // Calculate rotation based on distance and direction
                // The closer the cursor, the more it "looks" at it
                const rotateX = (deltaY / maxDistance) * -maxRotation;
                const rotateY = (deltaX / maxDistance) * maxRotation;
                setRotation({ x: rotateX, y: rotateY });
            } else {
                setRotation({ x: 0, y: 0 });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [maxRotation, maxDistance]);

    return (
        <div
            ref={iconRef}
            className={`magnetic-icon-wrapper ${className}`}
            style={{
                transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: 'transform 0.1s ease-out',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {children}
        </div>
    );
};

export default MagneticIcon;
