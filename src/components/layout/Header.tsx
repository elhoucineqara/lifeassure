'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Solutions', href: '/solutions' },
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Claims', href: '/claims' },
        { name: 'Resources', href: '/resources' }
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "py-4 glass shadow-lg backdrop-blur-md" : "py-8 bg-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <Shield className="w-8 h-8 text-gold-500 transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gold-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className={cn(
                        "text-2xl font-black tracking-tighter uppercase italic transition-colors duration-500",
                        isScrolled ? "text-navy-900" : "text-ivory"
                    )}>
                        Life<span className="text-gold-500">Assure</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-500 hover:text-gold-500",
                                    isActive ? "text-gold-500" : (isScrolled ? "text-navy-900/60" : "text-ivory/60")
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/enrollment"
                        className={cn(
                            "h-12 px-8 rounded-full font-black uppercase tracking-[0.2em] text-[10px] transition-all shadow-xl group/btn flex items-center justify-center gap-2",
                            isScrolled
                                ? "bg-navy-900 text-ivory hover:bg-gold-500 hover:text-white"
                                : "bg-ivory text-navy-900 hover:bg-gold-500 hover:text-ivory"
                        )}
                    >
                        Get Started <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden transition-colors duration-500",
                        isScrolled ? "text-navy-900" : "text-ivory"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white dark:bg-navy-900 border-t border-slate-100 dark:border-navy-800 p-6 md:hidden animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-xs font-black uppercase tracking-[0.3em] transition-colors",
                                    pathname === item.href ? "text-gold-500" : "text-navy-900 dark:text-ivory"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/enrollment"
                            className="h-14 w-full bg-navy-900 dark:bg-ivory text-ivory dark:text-navy-900 rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Start Enrollment <ArrowRight className="w-4 h-4" />
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
