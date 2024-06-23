"use server";

import { SendEmailResponse } from "@/lib/utils";
import { FormData } from "@/app/contact/page";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

console.log(process.env.RESEND_API_KEY);


export const sendEmail = async (formData: FormData): Promise<SendEmailResponse> => {
    
    try {
        const data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['anubhavmaurya8521@gmail.com'],
            subject: "Message from contact form",
            text: "Hello from Resend",
        });

        console.log("Email sent successfully:", data);
        return { data };
    } catch (error : any) {
        console.error("Error sending email:", error);
        return {
            data: null,
            error: error.message || "Unknown error occurred"
        };
    }
};
