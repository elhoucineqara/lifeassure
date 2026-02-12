import React from 'react';
import PageHero from '@/components/marketing/PageHero';
import Solutions from '@/components/marketing/Solutions';
import Process from '@/components/marketing/Process';
import FeatureGrid from '@/components/marketing/FeatureGrid';
import CTA from '@/components/marketing/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Platinum Solutions | LifeAssure",
    description: "Exquisite financial protection architectures designed for the modern legacy. Every policy is a signature of security.",
};

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
