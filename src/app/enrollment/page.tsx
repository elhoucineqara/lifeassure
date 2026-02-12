import React from 'react';
import EnrollmentContent from '@/components/marketing/EnrollmentContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elite Enrollment | LifeAssure",
    description: "Initiate your journey toward absolute legacy protection. Our senior architects will review your request with the highest level of discretion.",
};

export default function EnrollmentPage() {
    return <EnrollmentContent />;
}
