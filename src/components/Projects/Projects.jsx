import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, Smartphone, Sparkles } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Projects.css';

const ProjectCard = ({ project, index, totalCards }) => {
    const cardRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Cards slide in from alternating sides
    const isLeft = index % 2 === 0;
    const xStart = isLeft ? -120 : 120;

    const x = useTransform(scrollYProgress, [0, 0.25, 0.45, 0.85, 1], [xStart, xStart * 0.3, 0, 0, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.35, 0.85, 1], [0, 0.4, 1, 1, 0.6]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.8, 1], [0.88, 0.94, 1, 1, 0.96]);
    const rotateY = useTransform(scrollYProgress, [0, 0.3, 0.5], [isLeft ? -6 : 6, isLeft ? -2 : 2, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.2, 0.35], [8, 3, 0]);
    const imageScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [1.15, 1.05, 1]);

    // Glow pulse tied to scroll
    const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 0.9, 0.5]);

    return (
        <motion.div
            ref={cardRef}
            className={`project-card-horizontal card-${project.color} ${index % 2 !== 0 ? 'image-right' : 'image-left'}`}
            style={{
                x,
                opacity,
                scale,
                rotateY,
                filter: blur.get ? undefined : undefined,
                perspective: 1200,
            }}
        >
            <motion.div className="project-card-glow" style={{ opacity: glowOpacity }} />

            <div className="project-image-container">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    style={{ scale: imageScale }}
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
                        <MagneticIcon>
                            <div className="link-circle"><Github size={16} /></div>
                        </MagneticIcon>
                        <MagneticIcon>
                            <div className="link-circle"><ExternalLink size={16} /></div>
                        </MagneticIcon>
                    </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-stack">
                    {project.tech.map((tech, i) => (
                        <motion.span
                            key={i}
                            className="tech-tag"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
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
            title: "Bloom SaaS",
            description: "A comprehensive AI-driven analytics dashboard built for scaling startups. Features real-time data processing and predictive user modeling.",
            tech: ["React", "Node.js", "Python"],
            color: "blue",
            icon: <Sparkles size={24} />,
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        },
        {
            title: "Jobby Mobile",
            description: "Next-generation remote job board and hiring platform. Connects premium freelancers to visionary founders instantly.",
            tech: ["React Native", "Firebase"],
            color: "purple",
            icon: <Smartphone size={24} />,
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
        },
        {
            title: "CredBoost",
            description: "Fintech platform helping young professionals build and track credit scores through gamified financial habits.",
            tech: ["Next.js", "Tailwind", "Stripe"],
            color: "green",
            icon: <Layers size={24} />,
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
        },
        {
            title: "MedConnect",
            description: "HIPAA-compliant telemedicine portal for seamless doctor-patient scheduling and secure video consultations.",
            tech: ["Vue", "WebRTC", "AWS"],
            color: "orange",
            icon: <Code2 size={24} />,
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
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
