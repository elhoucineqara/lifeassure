'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Lock, Zap, Award, Globe } from 'lucide-react';

const features = [
    {
        title: "Immediate Liquidity",
        description: "Accelerated benefit disbursement protocols ensuring beneficiaries receive critical funds often within 24 hours of notification.",
        icon: Zap
    },
    {
        title: "Tax-Efficient Sourcing",
        description: "Bespoke policy architectures designed to minimize estate tax liability and maximize the net transfer of wealth.",
        icon: Award
    },
    {
        title: "Global Jurisdictional Protection",
        description: "Strategically located coverage that respects international treaty laws for seamless protection across 180+ countries.",
        icon: Globe
    },
    {
        title: "Vault-Grade Privacy",
        description: "Military-grade encryption for all client communications and absolute discretionary handling of all legacy documents.",
        icon: Lock
    },
    {
        title: "Concierge Wellness",
        description: "Exclusive access to private medical consultants and longevity experts to help preserve your most valuable asset: health.",
        icon: Sparkles
    },
    {
        title: "Irrevocable Trust Support",
        description: "Deep integration with ILIT structures to provide a level of asset protection that standard policies cannot match.",
        icon: Shield
    }
];

const FeatureGrid = () => {
    const [features, setFeatures] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const res = await fetch('/api/content?type=features');
                const data = await res.json();
                setFeatures(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch features', error);
                setFeatures([]);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatures();
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Shield': return <Shield className="w-6 h-6" />;
            case 'Sparkles': return <Sparkles className="w-8 h-8" />;
            case 'Lock': return <Lock className="w-6 h-6" />;
            case 'Zap': return <Zap className="w-6 h-6" />;
            case 'Award': return <Award className="w-6 h-6" />;
            case 'Globe': return <Globe className="w-6 h-6" />;
            default: return <Shield className="w-6 h-6" />;
        }
    };

    if (loading) return null;

    return (
        <section className="py-32 bg-navy-900 text-ivory relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Header Card */}
                    <div className="lg:col-span-1 space-y-8 pr-8">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 block"
                        >
                            The Platinum Edge
                        </motion.span>
                        <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
                            Elite <span className="text-gold-500">Advantages</span> <br />
                            for the Elite.
                        </h2>
                        <p className="text-ivory/40 text-lg font-medium leading-relaxed">
                            Discover why the world's most discerning families choose LifeAssure for their legacy preservation.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
                        {features.map((f, i) => (
                            <motion.div
                                key={f._id || i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-gold-500/20 hover:bg-white/10 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
                                    {getIcon(f.icon)}
                                </div>
                                <h3 className="text-xl font-black uppercase tracking-tighter italic mb-4 group-hover:text-gold-500 transition-colors">
                                    {f.title}
                                </h3>
                                <p className="text-ivory/40 text-sm font-medium leading-relaxed">
                                    {f.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
