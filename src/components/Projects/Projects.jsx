import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Code2, Layers, Smartphone, Sparkles } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Projects.css';

const ProjectCard = ({ project, index, totalCards }) => {
    const cardContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardContainerRef,
        offset: ['start start', 'end start'] // When the card hits the top, start tracking how far it has been scrolled past
    });

    // As you scroll past this sticky card, it shrinks
    const targetScale = 1 - ((totalCards - index) * 0.05);

    // Cards scale down to targetScale as they are scrolled past. 
    // Once scrollYProgress reaches 1 (fully scrolled past), it hits targetScale.
    const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

    // As you scroll past, dim the card
    const dimOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.6]);

    return (
        <div
            className="project-card-wrapper"
            ref={cardContainerRef}
            style={{
                height: '100vh', // Each wrapper takes full viewport height to provide scroll distance
                position: 'relative',
                marginBottom: index === totalCards - 1 ? '0' : '40vh' // Space between cards to see the scroll effect
            }}
        >
            <motion.div
                className={`project-card-horizontal card-${project.color} ${index % 2 !== 0 ? 'image-right' : 'image-left'}`}
                style={{
                    scale,
                    top: `calc(100px + ${index * 40}px)`, // Sticky gap
                    position: 'sticky',
                    transformOrigin: 'top center',
                    zIndex: index // Ensure later cards overlap correctly
                }}
            >
                {/* Dimming overlay when card gets stacked upon */}
                <motion.div className="project-stacked-dim" style={{ opacity: dimOpacity }} />

                <div className="project-card-glow" />

                <div className="project-image-container">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                    />
                    <div className="project-image-overlay" />
                </div>

                <div className="project-content-horizontal">
                    <div className="project-top">
                        <motion.div
                            className="project-icon-box"
                            whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                        >
                            {project.icon}
                        </motion.div>
                        <div className="project-links">
                            {project.demoUrl && (
                                <MagneticIcon>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="link-circle">
                                        <ExternalLink size={16} />
                                    </a>
                                </MagneticIcon>
                            )}
                        </div>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <div className="project-tech-stack">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const projects = [
        {
            title: "Book My CA",
            description: "BookMyCA is a financial services platform that provides end-to-end solutions including tax filing, GST, accounting, company registration, compliance, audits, and advisory — designed for individuals, startups, and enterprises.",
            tech: ["Next.js", "Razorpay", "MongoDB"],
            color: "blue",
            icon: <Sparkles size={24} />,
            image: "/bookmyca.png",
            demoUrl: "https://www.bookmyca.in"
        },
        {
            title: "ACTTS CRM",
            description: "A customer relationship management system designed to help businesses manage their customer interactions. Features contact management, lead tracking, and sales analytics to improve customer relationships and sales processes.",
            tech: ["React", "TypeScript", "Tailwind", "Databases"],
            color: "purple",
            icon: <Layers size={24} />,
            image: "/actts-crm.png"
        },
        {
            title: "Enterprise Resource Planning Portal",
            description: "A comprehensive, full-stack enterprise management system designed to streamline project tracking, financial calculations, and invoicing. Features interactive data grids, secure role-based employee management, and robust reporting.",
            tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            color: "green",
            icon: <Code2 size={24} />,
            image: "/erp.png"
        },
        {
            title: "Hansha Pharmaceuticals",
            description: "Leading pharmaceutical company website focused on manufacturing and supplying high-quality medicines and healthcare products. Features a product catalogue, responsive design, and optimized fast performance.",
            tech: ["Next.js", "React", "Tailwind"],
            color: "orange",
            icon: <Smartphone size={24} />,
            image: "/hansha.png",
            demoUrl: "https://www.hanshapharmaceuticals.in"
        }
    ];

    return (
        <section className="projects-section" id="projects" ref={sectionRef}>
            <div className="projects-glow-bg"></div>

            <motion.div
                className="projects-header"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
            >
                <div className="liquid-badge-wrapper section-badge">
                    <div className="liquid-badge">
                        <span className="badge-content-text">Proven Track Record</span>
                        <div className="liquid-container">
                            <div className="liquid-wave wave-1"></div>
                            <div className="liquid-wave wave-2"></div>
                        </div>
                    </div>
                </div>
                <h2 className="projects-headline">
                    Projects we have built<br />so far
                </h2>
                <p className="projects-subtext">
                    A glimpse into the digital experiences we've shipped for our partners.
                </p>
            </motion.div>

            <div className="projects-list">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                        totalCards={projects.length}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
