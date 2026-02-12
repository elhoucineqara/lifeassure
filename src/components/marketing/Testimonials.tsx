'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        quote: "The strategic curation of my legacy portfolio was nothing short of artistic. LifeAssure understands that wealth isn't just about numbers; it's about the future of my grandchildren.",
        author: "Alexander Rothschild",
        role: "Estate Managing Director",
        image: "https://i.pravatar.cc/150?u=a"
    },
    {
        quote: "Switching to LifeAssure was the best decision for our family's security. The concierge team handled every detail with such grace and precision that the process felt effortless.",
        author: "Eleanor Vanderbilt",
        role: "Philanthropic Founder",
        image: "https://i.pravatar.cc/150?u=b"
    },
    {
        quote: "Their rapid payout performance and bespoke policy structure give me a peace of mind that I couldn't find with traditional high-street insurers. Truly platinum service.",
        author: "Julian Sterling",
        role: "Venture Capital Partner",
        image: "https://i.pravatar.cc/150?u=c"
    }
];

const Testimonials = () => {
    const [testimonials, setTestimonials] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch('/api/content?type=testimonials');
                const data = await res.json();
                setTestimonials(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch testimonials', error);
                setTestimonials([]);
            } finally {
                setLoading(false);
            }
        };
        fetchTestimonials();
    }, []);

    if (loading) return null;

    return (
        <section className="py-32 bg-navy-900 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gold-500/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 mb-6 block"
                    >
                        Success Stories
                    </motion.span>
                    <h2 className="text-4xl md:text-7xl font-serif text-ivory italic leading-tight">
                        Words from the <br />
                        <span className="text-gold-500">fully protected.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t._id || i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-md relative group hover:bg-white/10 transition-all duration-700"
                        >
                            <Quote className="w-12 h-12 text-gold-500/20 absolute top-10 right-10 group-hover:scale-125 transition-transform" />

                            <div className="flex gap-1 mb-8">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 text-gold-500 fill-gold-500" />
                                ))}
                            </div>

                            <p className="text-ivory/70 text-lg font-medium leading-relaxed italic mb-10">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-gold-500/20 shadow-xl">
                                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="text-ivory font-black italic tracking-tight">{t.author}</div>
                                    <div className="text-[10px] text-gold-500 font-black uppercase tracking-widest">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
