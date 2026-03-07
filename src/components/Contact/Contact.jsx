import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Calendar, Clock, User, Mail, MessageSquare, Loader2, CheckCircle2 } from 'lucide-react';
import MagneticIcon from '../Common/MagneticIcon';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';

const Contact = () => {
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: null,
        time: null,
        idea: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const SCRIPT_URL = import.meta.env.VITE_SCRIPT_URL;

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formattedDate = formData.date ? formData.date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }) : '';
            const formattedTime = formData.time ? formData.time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '';

            const payload = {
                ...formData,
                date: formattedDate,
                time: formattedTime
            };

            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            // Since mode is no-cors, we won't get a proper JSON response back, 
            // but if it didn't throw an error, we assume success.
            setIsSuccess(true);
            setFormData({ name: '', email: '', date: null, time: null, idea: '' });

            // Revert success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting your request. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const slideRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring", stiffness: 80 } }
    };

    return (
        <section className="contact-section" id="contact" aria-label="Schedule a meeting with Elixor Technologies">
            {/* Ambient Background Elements */}
            <div className="contact-bg-glow glow-1"></div>
            <div className="contact-bg-glow glow-2"></div>

            <div className="contact-container">
                {/* Left Side: Motivational Text & Info */}
                <motion.div
                    className="contact-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideRight}
                >
                    <div className="liquid-badge-wrapper contact-badge">
                        <div className="liquid-badge">
                            <span className="badge-content-text">Let's Build The Future</span>
                            <div className="liquid-container">
                                <div className="liquid-wave wave-1"></div>
                                <div className="liquid-wave wave-2"></div>
                            </div>
                        </div>
                    </div>

                    <h2 className="contact-headline">
                        Ready to make <br />
                        a <span className="text-gradient">dent in the universe?</span>
                    </h2>

                    <p className="contact-motivational">
                        Some ideas are too important to wait. Whether you're a visionary founder
                        or a scaling enterprise, if you have a product that needs to exist,
                        we have the velocity to build it.
                    </p>

                    <div className="contact-saying">
                        "The best way to predict the future is to invent it."
                        <span className="saying-author">— Alan Kay</span>
                    </div>
                </motion.div>

                {/* Right Side: The Form */}
                <motion.div
                    className="contact-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={slideLeft}
                >
                    <div className="contact-form-glass">
                        <div className="form-glow"></div>

                        <form className="elixor-form" onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="input-group">
                                    <label htmlFor="name"><User size={14} /> Name</label>
                                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required disabled={isSubmitting} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="email"><Mail size={14} /> Email</label>
                                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@startup.com" required disabled={isSubmitting} />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="input-group">
                                    <label htmlFor="date"><Calendar size={14} /> Preferred Date</label>
                                    <DatePicker
                                        selected={formData.date}
                                        onChange={(date) => setFormData(prev => ({ ...prev, date }))}
                                        dateFormat="MMMM d, yyyy"
                                        placeholderText="Select a date"
                                        className="custom-react-datepicker"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="time"><Clock size={14} /> Preferred Time</label>
                                    <DatePicker
                                        selected={formData.time}
                                        onChange={(time) => setFormData(prev => ({ ...prev, time }))}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                        placeholderText="Select a time"
                                        className="custom-react-datepicker"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="idea"><MessageSquare size={14} /> The Idea (Crisp & Clear)</label>
                                <textarea
                                    id="idea"
                                    value={formData.idea}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="We are building the uber for X. We need it to have AI mapping and real-time sockets..."
                                    required
                                    disabled={isSubmitting}
                                ></textarea>
                            </div>

                            <button type="submit" className={`submit-btn ${isSuccess ? 'success' : ''}`} disabled={isSubmitting || isSuccess}>
                                {isSubmitting ? (
                                    <>
                                        <span>Submitting...</span>
                                        <Loader2 size={18} className="spin-icon" />
                                    </>
                                ) : isSuccess ? (
                                    <>
                                        <span>Request Sent!</span>
                                        <CheckCircle2 size={18} />
                                    </>
                                ) : (
                                    <>
                                        <span>Schedule Discovery Call</span>
                                        <MagneticIcon>
                                            <Send size={18} />
                                        </MagneticIcon>
                                    </>
                                )}
                            </button>
                        </form>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
