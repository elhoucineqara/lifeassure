import React from 'react';
import dbConnect from '@/lib/mongodb';
import Resource from '@/models/Resource';
import ResourcesContent from '@/components/marketing/ResourcesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Legacy Intelligence | Knowledge Portal",
    description: "Curated wisdom and strategic insights designed to help you navigate the complexities of long-term protection. Access our whitepapers and guides.",
};

export default async function ResourcesPage() {
    await dbConnect();
    const resourcesData = await Resource.find({}).sort({ order: 1 });
    const resources = JSON.parse(JSON.stringify(resourcesData));

    return <ResourcesContent resources={resources} />;
}
