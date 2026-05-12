import { createFileRoute } from "@tanstack/react-router";

import { CafeLayout } from "@/components/cafe-layout";
import { Card, CardContent } from "@/components/ui/card";
import { historyTimeline, teamMembers } from "@/lib/cafe-data";

const BASE_URL = "https://id-preview--d120fd56-95b4-4fc5-be52-2293470547e0.lovable.app";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Brew Haven Café | Story, Mission & Team" },
      {
        name: "description",
        content:
          "Explore Brew Haven Café's journey, mission, values, passionate team, and the warm atmosphere behind every cup.",
      },
      { property: "og:title", content: "About Brew Haven Café" },
      {
        property: "og:description",
        content: "Meet our baristas and chefs, and discover the story behind Brew Haven Café.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <CafeLayout>
      <section className="section-wrap py-16">
        <h1 className="reveal-up text-4xl font-bold sm:text-5xl" data-reveal>
          Our Story
        </h1>
        <p className="reveal-up mt-4 max-w-3xl text-muted-foreground" data-reveal>
          Brew Haven Café began with one idea: create a warm gathering place where craft coffee meets meaningful connection. Every detail—from bean selection to interior ambiance—is designed to feel personal.
        </p>
      </section>

      <section className="section-wrap grid gap-6 md:grid-cols-2">
        <article className="glass-card reveal-up rounded-xl p-7" data-reveal>
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            To serve exceptional coffee and cuisine while creating a welcoming daily ritual for our community.
          </p>
        </article>
        <article className="glass-card reveal-up rounded-xl p-7" data-reveal>
          <h2 className="text-2xl font-semibold">Values</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Quality ingredients and ethical sourcing</li>
            <li>Warm hospitality and inclusive service</li>
            <li>Consistency, craft, and care in every detail</li>
          </ul>
        </article>
      </section>

      <section className="section-wrap mt-20">
        <h2 className="reveal-up text-3xl font-semibold" data-reveal>
          Meet Our Team
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Card key={member.name} className="glass-card reveal-up overflow-hidden" data-reveal>
              <img src={member.image} alt={member.name} className="h-72 w-full object-cover" loading="lazy" width={900} height={1200} />
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-primary">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-20">
        <h2 className="reveal-up text-3xl font-semibold" data-reveal>
          Cozy Atmosphere
        </h2>
        <p className="reveal-up mt-4 max-w-3xl text-muted-foreground" data-reveal>
          Gentle lighting, handcrafted wood textures, and curated music create a calm premium space for conversations, focused work, and slow mornings.
        </p>
      </section>

      <section className="section-wrap mt-20">
        <h2 className="reveal-up text-3xl font-semibold" data-reveal>
          Brew Haven by Numbers
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Happy Customers", value: 12500 },
            { label: "Coffee Cups Served", value: 98500 },
            { label: "Years of Experience", value: 10 },
          ].map((stat) => (
            <article key={stat.label} className="glass-card reveal-up rounded-xl p-6 text-center" data-reveal>
              <p className="text-3xl font-bold text-primary" data-counter-target={stat.value}>
                0
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-20">
        <h2 className="reveal-up text-3xl font-semibold" data-reveal>
          Café Timeline
        </h2>
        <div className="mt-8 space-y-4 border-l-2 border-primary/40 pl-6">
          {historyTimeline.map((entry) => (
            <article key={entry.year} className="reveal-up relative" data-reveal>
              <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-primary" />
              <p className="text-sm font-semibold text-primary">{entry.year}</p>
              <h3 className="text-xl font-semibold">{entry.title}</h3>
              <p className="text-sm text-muted-foreground">{entry.description}</p>
            </article>
          ))}
        </div>
      </section>
    </CafeLayout>
  );
}
