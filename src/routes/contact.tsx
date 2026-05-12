import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

import { CafeLayout } from "@/components/cafe-layout";
import { Button } from "@/components/ui/button";

const BASE_URL = "https://id-preview--d120fd56-95b4-4fc5-be52-2293470547e0.lovable.app";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Brew Haven Café | Reservations & Location" },
      {
        name: "description",
        content:
          "Contact Brew Haven Café for reservations, opening hours, location details, and general inquiries.",
      },
      { property: "og:title", content: "Contact Brew Haven Café" },
      {
        property: "og:description",
        content: "Book a table, send us a message, and find Brew Haven Café details.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <CafeLayout>
      <section className="section-wrap py-16">
        <h1 className="reveal-up text-4xl font-bold sm:text-5xl" data-reveal>
          Contact Us
        </h1>
        <p className="reveal-up mt-4 max-w-2xl text-muted-foreground" data-reveal>
          We’d love to hear from you—reserve a table, ask a question, or plan your next cozy coffee break.
        </p>
      </section>

      <section className="section-wrap grid gap-6 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-card reveal-up rounded-xl p-6" data-reveal>
          <h2 className="text-2xl font-semibold">Send a Message</h2>
          <form id="contact-form" className="mt-6 space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>

            <Button variant="hero" type="submit">
              Send
            </Button>
            <p id="form-feedback" className="mt-3 text-sm text-muted-foreground" aria-live="polite" />
          </form>
        </div>

        <aside className="space-y-6">
          <div className="glass-card reveal-up rounded-xl p-6" data-reveal>
            <h2 className="text-xl font-semibold">Contact Details</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 text-primary" /> +1 (555) 847-2233
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 text-primary" /> hello@brewhavencafe.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-primary" /> 128 Maple Street, Downtown
              </li>
              <li className="flex items-start gap-2">
                <Clock3 className="mt-0.5 size-4 text-primary" /> Mon–Sun: 7:00 AM – 9:00 PM
              </li>
            </ul>
          </div>

          <div className="glass-card reveal-up rounded-xl p-3" data-reveal>
            <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-border bg-muted text-center text-sm text-muted-foreground">
              Google Maps Embed Placeholder
            </div>
          </div>
        </aside>
      </section>
    </CafeLayout>
  );
}
