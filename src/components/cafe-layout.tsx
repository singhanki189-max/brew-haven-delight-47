import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ArrowUp,
  Coffee,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Twitter,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteMeta } from "@/lib/cafe-data";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
] as const;

const socialLinks = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
] as const;

export function CafeLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setShowTop(y > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.2 },
    );

    const nodes = document.querySelectorAll("[data-reveal]");
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 780);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const currentPath = useMemo(() => location.pathname, [location.pathname]);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <div className="loading-shimmer h-18 w-18 rounded-full border border-border/80" />
        </div>
      ) : null}

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
          scrolled ? "border-border/70 bg-background/85 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <div className="section-wrap flex h-20 items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center gap-2 font-heading text-xl text-foreground">
            <span className="rounded-full bg-primary/10 p-2 text-primary">
              <Coffee className="size-4" />
            </span>
            {siteMeta.name}
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((item) => {
              const active = currentPath === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                    active ? "bg-primary text-primary-foreground" : "text-foreground/90 hover:bg-accent",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="hero" size="sm" asChild className="hidden md:inline-flex">
              <Link to="/contact">Book a Table</Link>
            </Button>
            <Button
              variant="soft"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="section-wrap pb-4 md:hidden">
            <div className="glass-card rounded-xl p-3">
              <nav className="flex flex-col gap-1">
                {navLinks.map((item) => {
                  const active = currentPath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={cn(
                        "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                        active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        ) : null}
      </header>

      <main className="pt-20">{children}</main>

      <footer className="mt-24 border-t border-border/70 bg-surface/80 py-12">
        <div className="section-wrap grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-heading text-2xl">{siteMeta.name}</h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">{siteMeta.description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:justify-end">
            {socialLinks.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-card text-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      <button
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
        )}
      >
        <ArrowUp className="size-4" />
      </button>
    </>
  );
}
