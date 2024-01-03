import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/components/EmailTemplate';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const reqBody = await req.json()

    try {
        const data = await resend.emails.send({
            text: 'Hello world',
            from: 'onboarding@resend.dev',
            to: 'dimeji.ogunleye20@gmail.com',
            subject: 'New Message',
            react: EmailTemplate({ email: reqBody.email, message: reqBody.message }),
        });
        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error });
    }
}