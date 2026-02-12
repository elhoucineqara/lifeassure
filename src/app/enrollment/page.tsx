'use client';

import React from 'react';
import PageHero from '@/components/marketing/PageHero';
import { motion } from 'framer-motion';
import { Shield, User, Mail, Globe, ArrowRight, CheckCircle } from 'lucide-react';

export default function EnrollmentPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            jurisdiction: formData.get('jurisdiction'),
            portfolioScope: formData.get('portfolioScope'),
        };

        try {
            const response = await fetch('/api/enroll', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Failed to initiate protocol');
            }

            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-ivory">
            <PageHero
                badge="The First Step"
                title="Elite Enrollment"
                subtitle="Initiate your journey toward absolute legacy protection. Our senior architects will review your request with the highest level of discretion."
            />

            <section className="py-32 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Information Sidebar */}
                        <div className="lg:col-span-1 space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500 mb-6">Security Protocol</h4>
                                <p className="text-navy-900/50 text-sm font-medium leading-relaxed italic">
                                    Your data is protected by military-grade encryption and will only be accessible by your assigned legacy advisor.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    "Discreet Consultation",
                                    "Custom Asset Analysis",
                                    "Concierge Integration",
                                    "Global Protection Setup"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-navy-900">
                                        <CheckCircle className="w-5 h-5 text-gold-500" />
                                        <span className="text-xs font-black uppercase tracking-widest">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Enrollment Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-12 md:p-16 rounded-[4rem] bg-white shadow-2xl border border-slate-100 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl" />

                                {isSuccess ? (
                                    <div className="text-center py-20 relative z-10 transition-all duration-700">
                                        <div className="w-20 h-20 bg-gold-500/10 text-gold-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                            <Shield className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-3xl font-black text-navy-900 tracking-tighter uppercase italic mb-4">Protocol Initiated.</h3>
                                        <p className="text-navy-900/50 font-medium leading-relaxed max-w-sm mx-auto">
                                            A senior legacy architect will contact you within the next 4 business hours to finalize your elite protection strategy.
                                        </p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 hover:text-navy-900 transition-colors"
                                        >
                                            Submit another request
                                        </button>
                                    </div>
                                ) : (
                                    <form
                                        className="space-y-10 relative z-10"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-navy-900/40 ml-4">Full Legal Name</label>
                                                <div className="relative">
                                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500" />
                                                    <input
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="Johnathan Sterling"
                                                        required
                                                        className="w-full h-16 pl-16 pr-8 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold-500 transition-all font-medium text-navy-900"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-navy-900/40 ml-4">Primary Email</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="john@sterling-estates.com"
                                                        required
                                                        className="w-full h-16 pl-16 pr-8 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold-500 transition-all font-medium text-navy-900"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-navy-900/40 ml-4">Global Jurisdiction</label>
                                            <div className="relative">
                                                <Globe className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-500" />
                                                <select
                                                    name="jurisdiction"
                                                    required
                                                    className="w-full h-16 pl-16 pr-8 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-gold-500 transition-all font-medium text-navy-900 appearance-none"
                                                >
                                                    <option value="United States / New York">United States / New York</option>
                                                    <option value="United Kingdom / London">United Kingdom / London</option>
                                                    <option value="Switzerland / Zurich">Switzerland / Zurich</option>
                                                    <option value="Singapore / Marina Bay">Singapore / Marina Bay</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-navy-900/40 ml-4">Initial Portfolio Scope</label>
                                            <textarea
                                                name="portfolioScope"
                                                required
                                                placeholder="Briefly describe your legacy objectives..."
                                                className="w-full h-48 p-8 bg-slate-50 border-none rounded-3xl focus:ring-2 focus:ring-gold-500 transition-all font-medium text-navy-900 resize-none"
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-500 text-xs font-black uppercase tracking-widest text-center">{error}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full h-20 bg-navy-900 text-ivory rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold-500 hover:text-navy-900 transition-all shadow-2xl flex items-center justify-center gap-4 group disabled:opacity-50"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
                                                    Processing Protocol...
                                                </span>
                                            ) : (
                                                <>
                                                    <Shield className="w-5 h-5 text-gold-500" />
                                                    Submit Enrollment Protocol
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
