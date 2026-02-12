import React from 'react';
import dbConnect from '@/lib/mongodb';
import CompanyValue from '@/models/CompanyValue';
import HistoryStep from '@/models/HistoryStep';
import AboutContent from '@/components/marketing/AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The LifeAssure Standard | Our Heritage",
    description: "Since 1892, we have redefined the architecture of security for the world's most prominent legacies. Discover our foundation and timeline.",
};

export default async function AboutPage() {
    await dbConnect();

    // Fetch data server-side
    const [valuesData, historyData] = await Promise.all([
        CompanyValue.find({}).sort({ order: 1 }),
        HistoryStep.find({}).sort({ order: 1 })
    ]);

    // Convert to plain objects
    const values = JSON.parse(JSON.stringify(valuesData));
    const history = JSON.parse(JSON.stringify(historyData));

    return <AboutContent values={values} history={history} />;
}
