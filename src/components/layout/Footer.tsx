'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-900 text-ivory/60 py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Shield className="w-8 h-8 text-gold-500 transition-transform duration-500 group-hover:rotate-12" />
                            <span className="text-2xl font-black tracking-tighter text-ivory uppercase italic">
                                Life<span className="text-gold-500">Assure</span>
                            </span>
                        </Link>
                        <p className="text-sm font-medium leading-relaxed max-w-xs">
                            Luxury life insurance and legacy preservation for the discerning elite. Protecting generations since 1924.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-all">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-ivory text-[10px] font-black uppercase tracking-[0.4em] mb-8">Solutions</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'Legacy Planning', href: '/solutions' },
                                { name: 'Retirement', href: '/solutions' },
                                { name: 'Wealth Transfer', href: '/solutions' },
                                { name: 'Executive Benefits', href: '/solutions' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm font-medium hover:text-gold-500 transition-colors uppercase tracking-widest text-[10px]">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-ivory text-[10px] font-black uppercase tracking-[0.4em] mb-8">Corporate</h4>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Concierge Team', href: '/about' },
                                { name: 'Claims Support', href: '/claims' },
                                { name: 'Contact', href: '/enrollment' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-sm font-medium hover:text-gold-500 transition-colors uppercase tracking-widest text-[10px]">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-ivory text-[10px] font-black uppercase tracking-[0.4em] mb-8">Global HQ</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                                <span className="text-xs font-medium leading-relaxed uppercase tracking-tighter italic">One Rockefeller Plaza, <br />New York, NY 10020</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                                <span className="text-xs font-black tracking-widest">+1 (800) LEGACY-PRO</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                                <span className="text-xs font-medium">concierge@lifeassure.premium</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] italic">
                        &copy; 2024 LifeAssure International Group. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {['Privacy Protocol', 'Terms of Service', 'Cookie Policy', 'Security'].map((policy) => (
                            <Link key={policy} href="#" className="text-[8px] font-black uppercase tracking-[0.2em] hover:text-gold-500">{policy}</Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Grain */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        </footer>
    );
};

export default Footer;
