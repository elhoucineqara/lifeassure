'use client';

import React from 'react';
import PageHero from '@/components/marketing/PageHero';
import Solutions from '@/components/marketing/Solutions';
import Process from '@/components/marketing/Process';
import FeatureGrid from '@/components/marketing/FeatureGrid';
import CTA from '@/components/marketing/CTA';

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-ivory">
            <PageHero
                badge="Bespoke Portfolio"
                title="Platinum Solutions"
                subtitle="Exquisite financial protection architectures designed for the modern legacy. Every policy is a signature of security."
            />
            <div className="py-20">
                <Solutions />
            </div>
            <FeatureGrid />
            <Process />
            <CTA />
        </main>
    );
}
