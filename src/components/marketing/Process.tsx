'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, FileSearch, ShieldCheck, Link2 } from 'lucide-react';

const Process = () => {
    const [steps, setSteps] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchSteps = async () => {
            try {
                const res = await fetch('/api/content?type=process');
                const data = await res.json();
                setSteps(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch process steps', error);
                setSteps([]);
            } finally {
                setLoading(false);
            }
        };
        fetchSteps();
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'User': return <UserCheck className="w-8 h-8 md:w-10 md:h-10" />;
            case 'FileText': return <FileSearch className="w-8 h-8 md:w-10 md:h-10" />;
            case 'Link': return <Link2 className="w-8 h-8 md:w-10 md:h-10" />;
            case 'Shield': return <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />;
            default: return <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />;
        }
    };

    if (loading) return null;

    return (
        <section id="process" className="py-32 bg-ivory relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 mb-6 block"
                    >
                        The Concierge Experience
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-serif text-navy-900 italic leading-tight">
                        A path as unique as <br />
                        <span className="text-gold-600">your legacy.</span>
                    </h2>
                </div>

                <div className="relative grid md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-24">
                    {/* Visual Connector Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent -translate-y-1/2 hidden md:block" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step._id || i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-navy-900 flex items-center justify-center text-gold-500 mb-10 relative z-10 transition-transform duration-700 group-hover:rotate-[10deg] group-hover:scale-110 shadow-2xl">
                                {getIcon(step.icon)}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gold-500 text-navy-900 font-black text-xs flex items-center justify-center italic">
                                    0{i + 1}
                                </div>
                            </div>

                            <h3 className="text-2xl font-black text-navy-900 mb-6 tracking-tight uppercase italic transition-colors group-hover:text-gold-600">
                                {step.title}
                            </h3>
                            <p className="text-navy-900/50 font-medium leading-relaxed max-w-xs">
                                {step.description}
                            </p>

                            {/* Hover Decorative Element */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-gold-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
        </section>
    );
};

export default Process;
