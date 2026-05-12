import { createFileRoute, Link } from "@tanstack/react-router";
import { Coffee, Leaf, Sparkles, Star } from "lucide-react";

import { CafeLayout } from "@/components/cafe-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuredItems, galleryImages, heroImage, testimonials } from "@/lib/cafe-data";

const BASE_URL = "https://id-preview--d120fd56-95b4-4fc5-be52-2293470547e0.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Brew Haven Café | Fresh Coffee, Warm Moments" },
      {
        name: "description",
        content:
          "Discover Brew Haven Café — handcrafted coffee, elegant menu, cozy ambiance, and warm hospitality in a premium modern café setting.",
      },
      { property: "og:title", content: "Brew Haven Café | Fresh Coffee, Warm Moments" },
      {
        property: "og:description",
        content: "Premium cozy café with handcrafted coffee, featured menu, and warm atmosphere.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${BASE_URL}/src/assets/hero-cafe.jpg` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Brew Haven Café | Fresh Coffee, Warm Moments" },
      { name: "twitter:description", content: "Fresh coffee, warm moments, and premium café atmosphere." },
      { name: "twitter:image", content: `${BASE_URL}/src/assets/hero-cafe.jpg` },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/` }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <CafeLayout>
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Brew Haven Café interior with coffee cup"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="section-wrap relative flex min-h-[88vh] items-center py-20">
          <div className="max-w-2xl text-primary-foreground">
            <p className="reveal-up inline-flex items-center rounded-full border border-primary-foreground/30 bg-card/10 px-4 py-2 text-sm" data-reveal>
              Brew Haven Café
            </p>
            <h1 className="reveal-up mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" data-reveal>
              Fresh Coffee, Warm Moments
            </h1>
            <p className="reveal-up mt-5 max-w-xl text-base text-primary-foreground/90 sm:text-lg" data-reveal>
              Experience handcrafted brews, artisan pastries, and a premium cozy atmosphere designed for everyday comfort.
            </p>
            <div className="reveal-up mt-8 flex flex-wrap items-center gap-3" data-reveal>
              <Button variant="hero" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
              <Button variant="soft" asChild>
                <Link to="/contact">Book a Table</Link>
              </Button>
            </div>
          </div>

          <div className="float-cup absolute bottom-10 right-8 hidden rounded-full border border-primary-foreground/30 bg-card/15 p-5 text-primary-foreground shadow-xl lg:block">
            <Coffee className="size-12" />
          </div>
        </div>
      </section>

      <section className="section-wrap mt-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="reveal-up text-3xl font-semibold" data-reveal>
            Featured Menu
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredItems.map((item) => (
            <Card key={item.name} className="glass-card menu-card-hover overflow-hidden reveal-up" data-reveal>
              <img src={item.image} alt={item.name} className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy" width={1024} height={768} />
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                <p className="mt-4 text-base font-semibold text-primary">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap mt-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Premium Ingredients",
              description: "We source specialty beans and fresh seasonal produce for every dish.",
            },
            {
              icon: Leaf,
              title: "Warm Cozy Atmosphere",
              description: "Relax in a thoughtfully designed space with natural textures and calm lighting.",
            },
            {
              icon: Star,
              title: "Exceptional Service",
              description: "Our team crafts each visit with consistency, care, and attentive hospitality.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <article key={title} className="glass-card reveal-up rounded-xl p-6" data-reveal>
              <span className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <TestimonialsSlider />

      <section className="section-wrap mt-24">
        <h2 className="reveal-up text-3xl font-semibold" data-reveal>
          Gallery
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div key={image.alt} className="glass-card reveal-up overflow-hidden rounded-xl" data-reveal>
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                width={1200}
                height={900}
              />
            </div>
          ))}
        </div>
      </section>
    </CafeLayout>
  );
}

function TestimonialsSlider() {
  return (
    <section className="section-wrap mt-24">
      <h2 className="reveal-up text-3xl font-semibold" data-reveal>
        Loved by Our Guests
      </h2>
      <div className="mt-8">
        <div className="glass-card reveal-up rounded-xl p-7" data-reveal>
          <div id="testimonial-track" className="overflow-hidden">
            <div className="flex w-full transition-transform duration-500" id="testimonial-inner">
              {testimonials.map((item, idx) => (
                <article key={item.name} className="min-w-full" data-testimonial={idx}>
                  <p className="text-lg leading-relaxed">“{item.quote}”</p>
                  <p className="mt-5 text-sm font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-6 flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                data-testimonial-dot={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className="h-2.5 w-2.5 rounded-full bg-primary/40 transition-all data-[active=true]:w-8 data-[active=true]:bg-primary"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
