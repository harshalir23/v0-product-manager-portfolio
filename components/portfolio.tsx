"use client"

import { caseStudiesData } from "@/lib/case-studies"

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Portfolio</h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Selected case studies that blend design, data, and impact.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {caseStudiesData.map((study, idx) => (
            <div key={idx}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
                {/* Left column: Title and Description */}
                <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed">{study.overview}</p>
                </div>

                {/* Right column: Image */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-muted order-1 md:order-2">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {idx !== caseStudiesData.length - 1 && <div className="mt-8 sm:mt-12 md:mt-12 border-t border-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
