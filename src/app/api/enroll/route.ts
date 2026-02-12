import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enrollment from '@/models/Enrollment';

export async function POST(req: Request) {
    try {
        await dbConnect();
        const body = await req.json();

        // Basic validation
        if (!body.fullName || !body.email || !body.jurisdiction || !body.portfolioScope) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const enrollment = await Enrollment.create({
            fullName: body.fullName,
            email: body.email,
            jurisdiction: body.jurisdiction,
            portfolioScope: body.portfolioScope,
        });

        return NextResponse.json(
            { message: 'Enrollment initiated successfully', id: enrollment._id },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('MongoDB Error:', error);
        return NextResponse.json(
            {
                error: 'Failed to initiate enrollment protocol',
                details: error.message
            },
            { status: 500 }
        );
    }
}
