import Image from "next/image";
import { ArrowRight, Mail, ShieldCheck, Sparkles, Star, Truck, Undo2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const products = [
  {
    name: "Jumbo Butter Stick Squishy",
    description: "Extra-large, super soft and slow rising. Our signature desk squishy.",
    price: "$13.99",
    tag: "Best seller",
    gradient: "from-secondary via-accent to-card",
  },
  {
    name: "Strawberry Butter Stick Squishy",
    description: "Strawberry-scented butter stick with a deeply satisfying squish.",
    price: "$13.99",
    tag: "Premium favorite",
    gradient: "from-[#f6b3b8] via-accent to-card",
  },
];

const perks = [
  { icon: Truck, title: "Free USA shipping", text: "Delivered in 2-4 business days." },
  { icon: Undo2, title: "7-day returns", text: "Easy return window after delivery." },
  { icon: ShieldCheck, title: "Secure checkout", text: "Protected, encrypted payment." },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-secondary/40 blur-3xl" />
      <div className="pointer-events-none absolute top-96 -right-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Image src="/logo.png" alt="Squishy Toybox" width={180} height={60} className="h-11 w-auto" priority />
          <nav className="text-muted-foreground hidden gap-8 text-sm font-medium sm:flex">
            <a href="#shop" className="hover:text-primary transition-colors">Shop</a>
            <a href="#why" className="hover:text-primary transition-colors">Why us</a>
            <a href="#news" className="hover:text-primary transition-colors">Newsletter</a>
          </nav>
          <Button variant="outline" className="rounded-full">Cart</Button>
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col items-start gap-7">
            <span className="border-border bg-card/80 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur">
              <Sparkles className="text-primary size-4" /> Squishy desk toys for teens &amp; adults
            </span>
            <h1 className="text-primary text-5xl leading-[1.05] font-extrabold tracking-tight sm:text-7xl">
              Squish.
              <br />
              Stretch.{" "}
              <span className="from-primary bg-gradient-to-r to-[#d9482f] bg-clip-text text-transparent">Smile.</span>
            </h1>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              Slow-rise butter sticks and food squishies that feel as good as they look. Premium softness, shipped
              free across the USA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="shadow-primary/30 h-12 rounded-full px-8 shadow-lg" asChild>
                <a href="#shop">
                  Shop squishies <ArrowRight />
                </a>
              </Button>
              <Button size="lg" variant="secondary" className="h-12 rounded-full px-8">
                <Truck /> Shipping info
              </Button>
            </div>
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <span className="flex text-secondary-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="fill-secondary stroke-secondary size-4" />
                ))}
              </span>
              Loved by desk-toy fans across the USA
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="from-secondary via-accent to-card absolute inset-0 rotate-3 rounded-[3rem] bg-gradient-to-br shadow-2xl" />
            <div className="bg-card/80 border-border absolute inset-6 -rotate-3 rounded-[2.5rem] border p-8 shadow-xl backdrop-blur">
              <Image src="/logo.png" alt="" width={400} height={400} className="h-full w-full object-contain" />
            </div>
          </div>
        </section>

        <section id="why" className="grid gap-4 sm:grid-cols-3">
          {perks.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-border bg-card/70 flex items-start gap-4 rounded-3xl border p-6 backdrop-blur">
              <span className="bg-secondary text-secondary-foreground grid size-11 shrink-0 place-items-center rounded-2xl">
                <Icon className="size-5" />
              </span>
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm">{text}</p>
              </div>
            </div>
          ))}
        </section>

        <section id="shop" className="py-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-primary text-sm font-semibold tracking-widest uppercase">Premium favorites</p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight">Butter Stick Squishies</h2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {products.map((p) => (
              <article
                key={p.name}
                className="group border-border bg-card overflow-hidden rounded-[2rem] border shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className={`relative grid h-64 place-items-center bg-gradient-to-br ${p.gradient}`}>
                  <span className="bg-primary text-primary-foreground absolute top-5 left-5 rounded-full px-3 py-1 text-xs font-semibold">
                    {p.tag}
                  </span>
                  <Image
                    src="/logo.png"
                    alt=""
                    width={160}
                    height={160}
                    className="h-32 w-32 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />
                </div>
                <div className="space-y-4 p-7">
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{p.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-primary text-2xl font-extrabold">{p.price}</p>
                    <Button className="rounded-full px-6">Add to cart</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="news" className="pb-24">
          <div className="from-primary relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br to-[#5a1119] p-10 text-primary-foreground sm:p-16">
            <div className="bg-secondary/20 absolute -top-20 -right-20 size-72 rounded-full blur-3xl" />
            <div className="relative max-w-xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Get squishy news</h2>
              <p className="mt-2 opacity-80">Be first to hear about new drops and exclusive offers.</p>
              <form className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Input type="email" placeholder="you@example.com" className="bg-card text-foreground h-12 rounded-full px-5" />
                <Button type="submit" variant="secondary" className="h-12 rounded-full px-7">
                  <Mail /> Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-border text-muted-foreground border-t py-8 text-center text-sm">
        © 2026 Squishy Toybox · KOLIK LLC
      </footer>
    </div>
  );
}
