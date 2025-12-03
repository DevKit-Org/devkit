import { ContactForm } from "@/components/contact-form";
import { MessageSquare, Mail, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - DevKit",
  description: "Get in touch with the DevKit team",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 mx-auto max-w-2xl px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <Sparkles className="h-4 w-4" />
            <span>We&apos;d love to hear from you</span>
          </div>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/30">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
            Have an idea, suggestion, or want to collaborate? Reach out anytime
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-10 px-4 pb-20 md:pb-32">
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>

        {/* Additional Contact Info */}
        <div className="mx-auto max-w-xl mt-12">
          <div className="flex items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-sm">info.devkit@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
