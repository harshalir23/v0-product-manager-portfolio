"use client"

import { useState } from "react"

export default function Hero() {
  const [activeNav, setActiveNav] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveNav(sectionId)
    }
  }

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-serif font-bold tracking-tight">Harshali Rane</h1>
          <div className="flex gap-4 sm:gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-xs sm:text-sm font-medium transition-colors ${
                activeNav === "home" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className={`text-xs sm:text-sm font-medium transition-colors ${
                activeNav === "timeline" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`text-xs sm:text-sm font-medium transition-colors ${
                activeNav === "portfolio" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-xs sm:text-sm font-medium transition-colors ${
                activeNav === "contact" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 order-2 md:order-1">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Creating value
                </span>
                <span className="block text-foreground text-3xl sm:text-4xl md:text-5xl">where tech meet users.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Product Manager · FMS Delhi · NIT Warangal
              </p>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed max-w-lg">
              A B2B SaaS Product Manager who thrives at the intersection of strategy, design, and engineering. Driving
              enterprise collaboration at JioMeet with AI-powered, API-first products that scale.
            </p>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="aspect-square bg-gradient-to-br from-muted to-card rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="/professional-product-manager-portrait.jpg"
                alt="Harshali Rane"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
