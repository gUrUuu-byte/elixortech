import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers, Smartphone, Sparkles } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Projects.css';

const Projects = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    // Mock project data reflecting the logos used in the previous carousel
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
        <section className="projects-section" id="projects">
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

            <motion.div
                className="projects-list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {projects.map((project, index) => (
                    <motion.div className={`project-card-horizontal card-${project.color} ${index % 2 !== 0 ? 'image-right' : 'image-left'}`} key={index} variants={fadeUp}>
                        <div className="project-card-glow"></div>

                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>

                        <div className="project-content-horizontal">
                            <div className="project-top">
                                <div className="project-icon-box">
                                    {project.icon}
                                </div>
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
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
