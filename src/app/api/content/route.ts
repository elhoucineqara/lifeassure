import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Solution from '@/models/Solution';
import Testimonial from '@/models/Testimonial';
import FAQ from '@/models/FAQ';
import Partner from '@/models/Partner';
import Resource from '@/models/Resource';
import Feature from '@/models/Feature';
import Metric from '@/models/Metric';
import ProcessStep from '@/models/ProcessStep';
import CompanyValue from '@/models/CompanyValue';
import HistoryStep from '@/models/HistoryStep';
import BlogPost from '@/models/BlogPost';

export async function GET(req: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const type = searchParams.get('type');

        let data;
        switch (type) {
            case 'solutions': data = await Solution.find({}).sort({ order: 1 }); break;
            case 'partners': data = await Partner.find({}).sort({ order: 1 }); break;
            case 'testimonials': data = await Testimonial.find({}).sort({ order: 1 }); break;
            case 'faqs': data = await FAQ.find({}).sort({ order: 1 }); break;
            case 'resources': data = await Resource.find({}).sort({ order: 1 }); break;
            case 'features': data = await Feature.find({}).sort({ order: 1 }); break;
            case 'metrics': data = await Metric.find({}).sort({ order: 1 }); break;
            case 'process': data = await ProcessStep.find({}).sort({ order: 1 }); break;
            case 'blog': data = await BlogPost.find({}).sort({ order: 1, date: -1 }); break;
            case 'values': data = await CompanyValue.find({}).sort({ order: 1 }); break;
            case 'history': data = await HistoryStep.find({}).sort({ order: 1 }); break;
            default: return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error: any) {
        console.error('Content Fetch Error:', error);
        return NextResponse.json({ error: 'Failed to fetch dynamic content' }, { status: 500 });
    }
}
