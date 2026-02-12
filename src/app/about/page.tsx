'use client';

import React from 'react';
import PageHero from '@/components/marketing/PageHero';
import { motion } from 'framer-motion';
import { Award, Shield, Users, MapPin } from 'lucide-react';

export default function AboutPage() {
    const [values, setValues] = React.useState<any[]>([]);
    const [history, setHistory] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const [vRes, hRes] = await Promise.all([
                    fetch('/api/content?type=values'),
                    fetch('/api/content?type=history')
                ]);
                const vData = await vRes.json();
                const hData = await hRes.json();
                setValues(Array.isArray(vData) ? vData : []);
                setHistory(Array.isArray(hData) ? hData : []);
            } catch (error) {
                console.error('Failed to fetch about data', error);
                setValues([]);
                setHistory([]);
            } finally {
                setLoading(false);
            }
        };
        fetchAboutData();
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Shield': return <Shield className="w-8 h-8" />;
            case 'Award': return <Award className="w-8 h-8" />;
            case 'Users': return <Users className="w-8 h-8" />;
            case 'Lock': return <Shield className="w-8 h-8" />; // Fallback for values seed
            case 'Target': return <Award className="w-8 h-8" />; // Fallback for values seed
            case 'Eye': return <Users className="w-8 h-8" />; // Fallback for values seed
            default: return <Shield className="w-8 h-8" />;
        }
    };

    if (loading) return (
        <main className="min-h-screen bg-ivory flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
        </main>
    );

    return (
        <main className="min-h-screen bg-ivory">
            <PageHero
                badge="Our Heritage"
                title="The LifeAssure Standard"
                subtitle="Since 1892, we have redefined the architecture of security for the world's most prominent legacies."
            />

            <section className="py-32 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif text-navy-900 italic mb-10 leading-tight">
                            A century of <br />
                            <span className="text-gold-600">unwavering</span> promise.
                        </h2>
                        <p className="text-navy-900/60 text-lg font-medium leading-relaxed mb-8">
                            LifeAssure was founded on a simple yet profound principle: high-value legacies require high-fidelity protection. What began as a boutique advisory in New York has evolved into a global sentinel for wealth and family security.
                        </p>
                        <p className="text-navy-900/60 text-lg font-medium leading-relaxed">
                            Today, we manage a portfolio of over $45 billion in safeguarded assets, serving families across six continents with the same artisanal dedication that defined our founding years.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                alt="Modern Architecture"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 p-10 glass rounded-3xl shadow-xl max-w-xs">
                            <MapPin className="w-8 h-8 text-gold-500 mb-4" />
                            <div className="text-xs font-black uppercase tracking-widest text-navy-900">Headquartered at One Rockefeller Plaza, New York.</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 bg-navy-900 text-ivory">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 mb-6 block">Our Foundation</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic mb-10 leading-tight text-ivory">Principles of <span className="text-gold-500">Excellence</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {values.map((v, i) => (
                            <motion.div
                                key={v._id || i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center text-gold-500 mx-auto mb-8 group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-500">
                                    {getIcon(v.icon)}
                                </div>
                                <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{v.title}</h3>
                                <p className="text-ivory/40 font-medium leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-24">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 mb-6 block">Our Timeline</span>
                            <h2 className="text-4xl md:text-6xl font-serif italic text-navy-900 leading-tight">Legacy in the <span className="text-gold-500">making.</span></h2>
                        </div>
                        <div className="space-y-20 relative">
                            {/* Line */}
                            <div className="absolute left-0 right-0 top-0 bottom-0 w-px bg-slate-100 left-1/2 -translate-x-1/2 hidden md:block" />

                            {history.map((h, i) => (
                                <motion.div
                                    key={h._id || i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className={`relative flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-1 text-center md:text-left">
                                        <div className="text-4xl font-serif italic text-gold-500 mb-4">{h.year}</div>
                                        <h3 className="text-2xl font-black uppercase italic tracking-tighter text-navy-900 mb-4">{h.title}</h3>
                                        <p className="text-navy-900/50 font-medium leading-relaxed">{h.description}</p>
                                    </div>
                                    <div className="w-4 h-4 rounded-full bg-gold-500 relative z-10 border-4 border-white shadow-xl shadow-gold-500/20" />
                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
