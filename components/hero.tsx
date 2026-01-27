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
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-3 sm:py-4 flex items-center justify-between">
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
      <section id="home" className="px-6 sm:px-12 md:px-16 lg:px-24 py-12 sm:py-16 md:py-32">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl w-full">
            <div className="flex flex-col justify-between order-2 md:order-1 h-auto">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Creating value
                  </span>
                  <span className="block text-foreground text-2xl sm:text-3xl md:text-4xl">where tech meet users.</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-tight pt-3 sm:pt-4">
                  Product Manager · FMS Delhi · NIT Warangal
                </p>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-snug text-justify">
                  B2B SaaS Product Manager building enterprise collaboration and cPaaS platforms. Led AI-powered, API-first products at scale; spanning real-time communication, AI powered, and industry-specific enterprise solutions & driving measurable gains in adoption, engagement, and revenue.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-foreground leading-snug text-justify">
                  Started as a Software Engineer, building scalable platforms and automation frameworks for large-scale systems. Strong foundation in APIs, data pipelines, and ML-assisted automation enables me to design products that are technically sound, execution-ready, and scalable from day one.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2 w-80 md:w-96 h-auto mx-auto md:mx-0">
              <div className="aspect-square bg-gradient-to-br from-muted to-card rounded-xl sm:rounded-2xl overflow-hidden">
                <img
                  src="/professional-product-manager-portrait.jpg"
                  alt="Harshali Rane"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
