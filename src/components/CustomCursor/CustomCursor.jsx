import React, { useEffect, useRef, useState, useCallback } from 'react';
import './CustomCursor.css';

const CLICKABLE = [
    'a', 'button', 'input[type="submit"]', 'input[type="button"]',
    'label[for]', 'select', 'details', '.project-icon-box', '.link-circle',
    '.submit-btn', '.accordion-header', '.nav-links a', '.navbar-logo',
    '.footer-logo', '.pill', '.liquid-badge', '.tech-tag',
].join(', ');

const LINK = 'a[href]';

const CustomCursor = () => {
    const ringRef = useRef(null);
    const dotRef = useRef(null);
    const labelRef = useRef(null);
    const pos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const rafId = useRef(null);
    const [ready, setReady] = useState(false);

    // ---- Animation loop: dot sticks, ring trails ----
    const animate = useCallback(() => {
        const dx = pos.current.x - ringPos.current.x;
        const dy = pos.current.y - ringPos.current.y;
        // Smooth lerp for the ring (0.15 = trailing strength)
        ringPos.current.x += dx * 0.15;
        ringPos.current.y += dy * 0.15;

        if (dotRef.current) {
            dotRef.current.style.transform =
                `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
        }
        if (ringRef.current) {
            ringRef.current.style.transform =
                `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
        }
        if (labelRef.current) {
            labelRef.current.style.left = `${ringPos.current.x}px`;
            labelRef.current.style.top = `${ringPos.current.y}px`;
        }

        rafId.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        setReady(true);

        const onMove = (e) => {
            pos.current.x = e.clientX;
            pos.current.y = e.clientY;

            const el = document.elementFromPoint(e.clientX, e.clientY);
            if (!el) return;

            // Check if hovering a text input → hide custom cursor
            const isInput = el.closest('input:not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]');
            if (isInput) {
                ringRef.current?.classList.add('hide');
                dotRef.current?.classList.add('hide');
                labelRef.current?.classList.remove('visible');
                return;
            } else {
                ringRef.current?.classList.remove('hide');
                dotRef.current?.classList.remove('hide');
            }

            // Check clickable
            const clickable = el.closest(CLICKABLE);
            if (clickable) {
                ringRef.current?.classList.add('hovering');
                dotRef.current?.classList.add('hovering');

                // Show a contextual label for links
                const link = el.closest(LINK);
                if (link && labelRef.current) {
                    const isExternal = link.getAttribute('target') === '_blank';
                    labelRef.current.textContent = isExternal ? 'Open' : 'View';
                    labelRef.current.classList.add('visible');
                } else {
                    labelRef.current?.classList.remove('visible');
                }
            } else {
                ringRef.current?.classList.remove('hovering');
                dotRef.current?.classList.remove('hovering');
                labelRef.current?.classList.remove('visible');
            }
        };

        const onDown = () => {
            ringRef.current?.classList.add('clicked');
            dotRef.current?.classList.add('clicked');
        };
        const onUp = () => {
            ringRef.current?.classList.remove('clicked');
            dotRef.current?.classList.remove('clicked');
        };
        const onLeave = () => {
            if (ringRef.current) ringRef.current.style.opacity = '0';
            if (dotRef.current) dotRef.current.style.opacity = '0';
            labelRef.current?.classList.remove('visible');
        };
        const onEnter = () => {
            if (ringRef.current) ringRef.current.style.opacity = '1';
            if (dotRef.current) dotRef.current.style.opacity = '1';
        };

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        document.body.addEventListener('mouseleave', onLeave);
        document.body.addEventListener('mouseenter', onEnter);

        rafId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            document.body.removeEventListener('mouseleave', onLeave);
            document.body.removeEventListener('mouseenter', onEnter);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [animate]);

    if (!ready) return null;

    return (
        <div className="cursor-wrapper">
            <div ref={ringRef} className="cursor-ring" />
            <div ref={dotRef} className="cursor-dot" />
            <div ref={labelRef} className="cursor-label" />
        </div>
    );
};

export default CustomCursor;
