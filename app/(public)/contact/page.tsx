import { ContactForm } from "@/components/contact-form";
import { Icons } from "@/components/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - DevKit",
  description: "Get in touch with the DevKit team",
};

export default function ContactPage() {
  return (
    <div className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Icons.messageSquare className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have an idea, suggestion, or want to collaborate? Reach out anytime.
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
