import Hero from "@/components/hero"
import Timeline from "@/components/timeline"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Timeline />
      <Portfolio />
      <Contact />
    </main>
  )
}
