import { createFileRoute } from "@tanstack/react-router";

import { CafeLayout } from "@/components/cafe-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { menuItems } from "@/lib/cafe-data";

const BASE_URL = "https://id-preview--d120fd56-95b4-4fc5-be52-2293470547e0.lovable.app";

const categories = [
  { value: "all", label: "All" },
  { value: "breakfast", label: "Breakfast" },
  { value: "lunch", label: "Lunch" },
  { value: "coffee", label: "Coffee" },
  { value: "cold-drinks", label: "Cold Drinks" },
  { value: "desserts", label: "Desserts" },
] as const;

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Brew Haven Café Menu | Breakfast, Coffee & Desserts" },
      {
        name: "description",
        content:
          "Explore Brew Haven Café's premium menu featuring breakfast, lunch, handcrafted coffee, cold drinks, and elegant desserts.",
      },
      { property: "og:title", content: "Brew Haven Café Menu" },
      {
        property: "og:description",
        content: "Browse our modern café menu with artisan drinks and fresh dishes.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${BASE_URL}/menu` }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <CafeLayout>
      <section className="section-wrap py-16">
        <h1 className="reveal-up text-4xl font-bold sm:text-5xl" data-reveal>
          Our Menu
        </h1>
        <p className="reveal-up mt-4 max-w-2xl text-muted-foreground" data-reveal>
          Curated flavors for every mood—from classic brunch to signature brews and indulgent desserts.
        </p>

        <div className="reveal-up mt-8 flex flex-wrap gap-2" data-reveal>
          {categories.map((category) => (
            <Button
              key={category.value}
              variant="soft"
              data-menu-filter={category.value}
              data-active={category.value === "all"}
              aria-pressed={category.value === "all"}
              className="data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </section>

      <section className="section-wrap pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <Card
              key={`${item.category}-${item.name}`}
              className="glass-card menu-card-hover reveal-up overflow-hidden"
              data-reveal
              data-menu-category={item.category}
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <span className="text-sm font-semibold text-primary">{item.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </CafeLayout>
  );
}
