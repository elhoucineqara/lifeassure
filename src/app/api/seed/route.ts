import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Solution from '@/models/Solution';
import Partner from '@/models/Partner';
import Testimonial from '@/models/Testimonial';
import FAQ from '@/models/FAQ';
import Resource from '@/models/Resource';
import Feature from '@/models/Feature';
import Metric from '@/models/Metric';
import ProcessStep from '@/models/ProcessStep';
import CompanyValue from '@/models/CompanyValue';
import HistoryStep from '@/models/HistoryStep';
import BlogPost from '@/models/BlogPost';

export async function GET() {
    try {
        await dbConnect();

        // 1. Initial Solutions
        const initialSolutions = [
            { title: "Legacy Planning", description: "Bespoke estate strategies for multi-generational wealth preservation.", icon: "Shield", category: "Wealth", order: 1 },
            { title: "Retirement", description: "Sophisticated income solutions for a life of continued excellence.", icon: "Sparkles", category: "Wealth", order: 2 },
            { title: "Wealth Transfer", description: "Seamless transition of assets with maximum tax efficiency.", icon: "Award", category: "Wealth", order: 3 },
            { title: "Executive Benefits", description: "Elite protection packages tailored for corporate leadership.", icon: "Wallet", category: "Business", order: 4 }
        ];

        // 2. Initial Partners
        const initialPartners = [
            { name: "Prudential", logoUrl: "/logos/prudential.svg", order: 1 },
            { name: "MetLife", logoUrl: "/logos/metlife.svg", order: 2 },
            { name: "New York Life", logoUrl: "/logos/nylife.svg", order: 3 },
            { name: "MassMutual", logoUrl: "/logos/massmutual.svg", order: 4 },
            { name: "State Farm", logoUrl: "/logos/statefarm.svg", order: 5 }
        ];

        // 3. Initial Testimonials
        const initialTestimonials = [
            { quote: "The strategic curation of my legacy portfolio was nothing short of artistic. LifeAssure understands that wealth isn't just about numbers; it's about the future of my grandchildren.", author: "Alexander Rothschild", role: "Estate Managing Director", image: "https://i.pravatar.cc/150?u=a", order: 1 },
            { quote: "Switching to LifeAssure was the best decision for our family's security. The concierge team handled every detail with such grace and precision that the process felt effortless.", author: "Eleanor Vanderbilt", role: "Philanthropic Founder", image: "https://i.pravatar.cc/150?u=b", order: 2 },
            { quote: "Their rapid payout performance and bespoke policy structure give me a peace of mind that I couldn't find with traditional high-street insurers. Truly platinum service.", author: "Julian Sterling", role: "Venture Capital Partner", image: "https://i.pravatar.cc/150?u=c", order: 3 }
        ];

        // 4. Initial FAQs
        const initialFAQs = [
            { question: "What distinguishes LifeAssure from traditional insurers?", answer: "We provide a concierge-led approach, focusing on complex legacy structures and multi-generational wealth preservation rather than simple commodity products.", category: "General", order: 1 },
            { question: "How does the concierge enrollment process work?", answer: "It begins with a private consultation with a senior legacy architect to analyze your unique asset footprint and long-term protection goals.", category: "Process", order: 2 },
            { question: "Are these policies valid internationally?", answer: "Yes, our coverage is designed for global citizens, providing seamless protection across multiple jurisdictions and international asset classes.", category: "Coverage", order: 3 },
            { question: "What is the typical time for a claim payout?", answer: "Our signature 'Rapid Release' protocol aims for strategic review completion within 24-48 hours for immediate assistance.", category: "Claims", order: 4 }
        ];

        // 5. Initial Resources
        const initialResources = [
            { title: "The 2024 Legacy Report", description: "An in-depth analysis of global wealth transfer trends and tax efficiency strategies.", type: "Whitepaper", category: "Strategy", order: 1 },
            { title: "Wealth Preservation 101", description: "A fundamental guide for protecting and growing multi-generational family assets.", type: "Guide", category: "Education", order: 2 },
            { title: "The Concierge Experience", description: "A visual journey through our bespoke approach to elite life insurance.", type: "Video", category: "About", order: 3 }
        ];

        // 6. Initial Features
        const initialFeatures = [
            { title: "Immediate Liquidity", description: "Accelerated benefit disbursement protocols ensuring beneficiaries receive funds within 24 hours.", icon: "Zap", order: 1 },
            { title: "Tax-Efficient Sourcing", description: "Bespoke policy architectures designed to minimize estate tax liability.", icon: "Award", order: 2 },
            { title: "Global Protection", description: "Strategically located coverage that respects international treaty laws.", icon: "Globe", order: 3 },
            { title: "Vault-Grade Privacy", description: "Military-grade encryption for all client communications.", icon: "Lock", order: 4 },
            { title: "Concierge Wellness", description: "Exclusive access to private medical consultants and longevity experts.", icon: "Sparkles", order: 5 },
            { title: "Irrevocable Trust Support", description: "Deep integration with ILIT structures for superior asset protection.", icon: "Shield", order: 6 }
        ];

        // 7. Initial Metrics
        const initialMetrics = [
            { label: "Total Assets Safeguarded", value: "$45B+", order: 1 },
            { label: "Elite Families Served", value: "50k+", order: 2 },
            { label: "Claims Released (2023)", value: "$2.4B", order: 3 },
            { label: "Average Review Time", value: "4.5h", order: 4 }
        ];

        // 8. Initial Process Steps
        const initialProcessSteps = [
            { title: "Private Consultation", description: "A discreet analysis of your legacy objectives and asset architecture.", icon: "User", order: 1 },
            { title: "Strategic Modeling", description: "Designing a bespoke policy structure for maximum efficiency.", icon: "FileText", order: 2 },
            { title: "Integration", description: "Seamless coordination with your existing trust and estate legal teams.", icon: "Link", order: 3 },
            { title: "Lifelong Concierge", description: "Continuous monitoring and adjustment of your protection framework.", icon: "Shield", order: 4 }
        ];

        // 9. Initial Values
        const initialValues = [
            { title: "Unwavering Discretion", description: "Privacy is not a feature; it is the foundation of our architecture.", icon: "Lock", order: 1 },
            { title: "Strategic Precision", description: "Every policy is a calculated masterpiece of financial engineering.", icon: "Target", order: 2 },
            { title: "Generational Vision", description: "We protect legacies that are built to last for centuries.", icon: "Eye", order: 3 }
        ];

        // 10. Initial History Steps
        const initialHistorySteps = [
            { year: "1892", title: "Foundation", description: "Established as a private insurance guild for New York's elite families.", order: 1 },
            { year: "1945", title: "Global Expansion", description: "Opening premier offices in London and Zurich to serve international interests.", order: 2 },
            { year: "2010", title: "Concierge Evolution", description: "Pioneering the modern lifestyle-integrated protection model.", order: 3 },
            { year: "2024", title: "Digital Security", description: "Implementing vault-grade encryption for all legacy documents.", order: 4 }
        ];

        // 11. Initial Blog Posts
        const initialBlogPosts = [
            {
                title: "The Architecture of Multi-Generational Wealth",
                slug: "architecture-multi-generational-wealth",
                excerpt: "Exploring the strategic frameworks required to preserve and grow family legacies across centuries.",
                content: "Full article content on wealth preservation architectures...",
                author: "Julian Sterling",
                authorRole: "Senior Legacy Architect",
                authorImage: "https://i.pravatar.cc/150?u=julian",
                coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
                date: "2024-05-15",
                category: "Legacy",
                readTime: "8 min",
                featured: true,
                order: 1
            },
            {
                title: "Global Jurisdictions: A 2024 Strategic Review",
                slug: "global-jurisdictions-strategic-review-2024",
                excerpt: "Analyzing the shifting landscape of international insurance law and tax-efficient protection structures.",
                content: "In-depth review of Switzerland, London, and Singapore jurisdictions...",
                author: "Eleanor Vanderbilt",
                authorRole: "International Treaty Specialist",
                authorImage: "https://i.pravatar.cc/150?u=eleanor",
                coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                date: "2024-05-10",
                category: "Global",
                readTime: "12 min",
                featured: false,
                order: 2
            },
            {
                title: "Bespoke Protection: Beyond the Commodity",
                slug: "bespoke-protection-beyond-commodity",
                excerpt: "Why traditional high-street insurance fails the world's most discerning families and the case for concierge curation.",
                content: "Comparison between retail insurance and bespoke legacy protection...",
                author: "Alexander Rothschild",
                authorRole: "Managing Director",
                authorImage: "https://i.pravatar.cc/150?u=alex",
                coverImage: "https://images.unsplash.com/photo-1507679722338-958ad2bf0ed7?q=80&w=2070&auto=format&fit=crop",
                date: "2024-05-05",
                category: "Strategy",
                readTime: "6 min",
                featured: false,
                order: 3
            }
        ];

        // Clean and Seed
        const seedCollection = async (Model: any, data: any[], name: string) => {
            try {
                await Model.deleteMany({});
                await Model.insertMany(data);
            } catch (err: any) {
                console.error(`Failed to seed ${name}:`, err.message);
                throw new Error(`Failed to seed ${name}: ${err.message}`);
            }
        };

        await seedCollection(Solution, initialSolutions, 'Solutions');
        await seedCollection(Partner, initialPartners, 'Partners');
        await seedCollection(Testimonial, initialTestimonials, 'Testimonials');
        await seedCollection(FAQ, initialFAQs, 'FAQs');
        await seedCollection(Resource, initialResources, 'Resources');
        await seedCollection(Feature, initialFeatures, 'Features');
        await seedCollection(Metric, initialMetrics, 'Metrics');
        await seedCollection(ProcessStep, initialProcessSteps, 'ProcessSteps');
        await seedCollection(CompanyValue, initialValues, 'CompanyValues');
        await seedCollection(HistoryStep, initialHistorySteps, 'HistorySteps');
        await seedCollection(BlogPost, initialBlogPosts, 'BlogPosts');

        return NextResponse.json({ message: 'Database seeded successfully with premium content' }, { status: 200 });
    } catch (error: any) {
        console.error('Seed Error:', error);
        return NextResponse.json({ error: 'Failed to seed database', details: error.message }, { status: 500 });
    }
}
