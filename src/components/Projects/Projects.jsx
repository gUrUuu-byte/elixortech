import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Layers, Smartphone, Sparkles } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import './Projects.css';

const projects = [
    {
        title: "Book My CA",
        description:
            "BookMyCA is a financial services platform that provides end-to-end solutions including tax filing, GST, accounting, company registration, compliance, audits, and advisory — designed for individuals, startups, and enterprises.",
        tech: ["Next.js", "Razorpay", "MongoDB"],
        color: "blue",
        icon: <Sparkles size={24} />,
        image: "/bookmyca.png",
        demoUrl: "https://www.bookmyca.in",
        altText: "BookMyCA - Financial SaaS platform built by Elixor MVP development company",
    },
    {
        title: "ACTTS CRM",
        description:
            "A customer relationship management system designed to help businesses manage their customer interactions. Features contact management, lead tracking, and sales analytics to improve customer relationships and sales processes.",
        tech: ["React", "TypeScript", "Tailwind", "Databases"],
        color: "purple",
        icon: <Layers size={24} />,
        image: "/actts-crm.png",
        altText: "ACTTS CRM - Custom SaaS customer relationship management system engineered by Elixor",
    },
    {
        title: "Enterprise Resource Planning Portal",
        description:
            "A comprehensive, full-stack enterprise management system designed to streamline project tracking, financial calculations, and invoicing. Features interactive data grids, secure role-based employee management, and robust reporting.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        color: "green",
        icon: <Code2 size={24} />,
        image: "/erp.png",
        altText: "ERP Portal - Enterprise web app and SaaS development by Elixor Technologies",
    },
    {
        title: "Hansha Pharmaceuticals",
        description:
            "Leading pharmaceutical company website focused on manufacturing and supplying high-quality medicines and healthcare products. Features a product catalogue, responsive design, and optimized fast performance.",
        tech: ["Next.js", "React", "Tailwind"],
        color: "orange",
        icon: <Smartphone size={24} />,
        image: "/hansha.png",
        demoUrl: "https://www.hanshapharmaceuticals.in",
        altText: "Hansha Pharmaceuticals - High performance corporate website built by modern development agency",
    },
];

const ProjectCard = ({ project, index, isLast }) => {
    return (
        <div
            className={`stack-card card-${project.color} ${index % 2 !== 0 ? 'image-right' : ''}`}
            style={{ 
                top: `${index * 25 + 100}px`, 
                zIndex: index + 1,
                marginBottom: isLast ? '10vh' : '40vh' 
            }}
        >
            <div className="project-card-glow" />

            {/* Image side */}
            <div className="stack-card-image">
                <img src={project.image} alt={project.altText || `${project.title} — project screenshot`} loading="lazy" width="800" height="600" />
                <div className="stack-card-image-overlay" />
            </div>

            {/* Content side */}
            <div className="stack-card-content">
                <div className="stack-card-top-row">
                    <motion.div
                        className="project-icon-box"
                        whileHover={{
                            rotate: [0, -10, 10, -5, 0],
                            transition: { duration: 0.5 },
                        }}
                    >
                        {project.icon}
                    </motion.div>

                    <div className="project-links">
                        {project.demoUrl && (
                            <MagneticIcon>
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-circle"
                                    aria-label={`Visit ${project.title} live demo`}
                                    title={`View Live Demo of ${project.title} Application`}
                                >
                                    <ExternalLink size={16} />
                                </a>
                            </MagneticIcon>
                        )}
                    </div>
                </div>

                <h3 className="stack-card-title">{project.title}</h3>
                <p className="stack-card-desc">{project.description}</p>

                <div className="stack-card-tags">
                    {project.tech.map((t, i) => (
                        <span key={i} className="tech-tag">{t}</span>
                    ))}
                </div>

                {/* Dynamic SEO Structured Data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": project.title,
                        "operatingSystem": "Web",
                        "applicationCategory": "BusinessApplication",
                        "description": project.description,
                        "creator": {
                            "@type": "Organization",
                            "name": "Elixor Technologies"
                        }
                    })
                }} />
            </div>
        </div>
    );
};

const Projects = () => {
    const sectionRef = useRef(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, type: 'spring', stiffness: 80 },
        },
    };

    return (
        <section className="projects-section" id="projects" ref={sectionRef} aria-label="Our portfolio projects">
            <div className="projects-glow-bg" />

            {/* Header */}
            <motion.div
                className="projects-header"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
            >
                <div className="liquid-badge-wrapper section-badge">
                    <div className="liquid-badge">
                        <span className="badge-content-text">Proven Track Record</span>
                        <div className="liquid-container">
                            <div className="liquid-wave wave-1" />
                            <div className="liquid-wave wave-2" />
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

            {/* Stacking card list */}
            <div className="stack-list">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                        isLast={index === projects.length - 1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
