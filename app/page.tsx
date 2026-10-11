import Image from "next/image";
import { Mail, Sparkles, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const products = [
  {
    name: "Jumbo Butter Stick Squishy",
    description: "Extra-large, super soft and slow rising.",
    price: "$13.99",
  },
  {
    name: "Strawberry Butter Stick Squishy",
    description: "Strawberry-scented butter stick with a satisfying squish.",
    price: "$13.99",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-16 px-6 py-10">
      <header className="flex items-center justify-between">
        <Image src="/logo.png" alt="Squishy Toybox" width={180} height={60} className="h-14 w-auto" priority />
        <Button variant="outline">Cart</Button>
      </header>

      <section className="flex flex-col items-start gap-6">
        <span className="bg-secondary text-secondary-foreground inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
          <Sparkles className="size-4" /> New squishies every month
        </span>
        <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
          Squish. Stretch. Smile.
        </h1>
        <p className="text-muted-foreground max-w-xl text-lg">
          Soft, slow-rise squishy toys that feel as good as they look. Shipped across the USA.
        </p>
        <div className="flex gap-3">
          <Button size="lg">Shop squishies</Button>
          <Button size="lg" variant="secondary">
            <Truck /> Free shipping info
          </Button>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {products.map((p) => (
          <Card key={p.name}>
            <CardHeader>
              <CardTitle className="text-xl">{p.name}</CardTitle>
              <CardDescription>{p.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{p.price}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to cart</Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      <section>
        <Card className="bg-accent">
          <CardHeader>
            <CardTitle className="text-xl">Get squishy news</CardTitle>
            <CardDescription>Be first to hear about new drops.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input type="email" placeholder="you@example.com" className="bg-card" />
              <Button type="submit">
                <Mail /> Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
