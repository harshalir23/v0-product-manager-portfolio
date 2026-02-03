"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [activeNav, setActiveNav] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveNav(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "timeline", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 200 // Offset for sticky nav

      // Start from the last section and work backwards for better bottom detection
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i]
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop } = element
          if (scrollPosition >= offsetTop) {
            setActiveNav(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Call on mount to set initial active section
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 py-3 sm:py-4 flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">Harshali Rane</h1>
          <div className="flex gap-1 sm:gap-2">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-xs sm:text-sm font-medium px-4 py-2 transition-all duration-300 relative rounded-md ${
                activeNav === "home" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-t hover:from-[#ece5d8] hover:to-background"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                activeNav === "home"
                  ? "after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary"
                  : "after:w-0 after:bg-gradient-to-r after:from-primary/50 after:to-secondary/50 hover:after:w-full"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("timeline")}
              className={`text-xs sm:text-sm font-medium px-4 py-2 transition-all duration-300 relative rounded-md ${
                activeNav === "timeline" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-t hover:from-[#ece5d8] hover:to-background"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                activeNav === "timeline"
                  ? "after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary"
                  : "after:w-0 after:bg-gradient-to-r after:from-primary/50 after:to-secondary/50 hover:after:w-full"
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`text-xs sm:text-sm font-medium px-4 py-2 transition-all duration-300 relative rounded-md ${
                activeNav === "portfolio" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-t hover:from-[#ece5d8] hover:to-background"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                activeNav === "portfolio"
                  ? "after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary"
                  : "after:w-0 after:bg-gradient-to-r after:from-primary/50 after:to-secondary/50 hover:after:w-full"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-xs sm:text-sm font-medium px-4 py-2 transition-all duration-300 relative rounded-md ${
                activeNav === "contact" ? "text-foreground font-bold" : "text-muted-foreground hover:text-foreground hover:bg-gradient-to-t hover:from-[#ece5d8] hover:to-background"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                activeNav === "contact"
                  ? "after:w-full after:bg-gradient-to-r after:from-primary after:to-secondary"
                  : "after:w-0 after:bg-gradient-to-r after:from-primary/50 after:to-secondary/50 hover:after:w-full"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl w-full">
            <div className="flex flex-col justify-between order-2 md:order-1 h-auto gap-12 sm:gap-16">
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
            <div className="relative order-1 md:order-2 flex justify-center md:justify-end px-4 md:px-6">
              <div className="w-96 md:w-[28rem] h-auto">
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
        </div>
      </section>
    </>
  )
}
