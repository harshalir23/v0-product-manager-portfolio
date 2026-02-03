"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronRight } from "lucide-react"
import { CaseStudy, CaseStudySection } from "@/lib/products-data"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  isExpanded: boolean
  onToggle: () => void
}

export function CaseStudyCard({
  caseStudy,
  isExpanded,
  onToggle,
}: CaseStudyCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Trigger animation when card enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% visible
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-500 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5"
      }`}
    >
      <div className="bg-background border border-border rounded-lg overflow-hidden">
        {/* Collapsed State */}
        {!isExpanded && (
          <div className="p-4 sm:p-6 md:p-8 space-y-4">
            {/* Image */}
            <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted">
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              {caseStudy.title}
            </h3>

            {/* One-line Outcome */}
            <p className="text-sm sm:text-base text-foreground leading-relaxed">
              {caseStudy.overview}
            </p>

            {/* Know More Button */}
            <button
              onClick={onToggle}
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 relative group"
            >
              <span className="relative">
                Know More
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        )}

        {/* Expanded State */}
        {isExpanded && (
          <div className="p-4 sm:p-6 md:p-8 space-y-6">
            {/* Image */}
            <div className="relative w-full aspect-video rounded-md overflow-hidden bg-muted">
              <img
                src={caseStudy.image || "/placeholder.svg"}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              {caseStudy.title}
            </h3>

            {/* Expanded Sections */}
            <div className="space-y-6 pt-4 border-t border-border">
              {caseStudy.sections.map((section: CaseStudySection, idx: number) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-foreground">
                    {section.title}
                  </h4>

                  {section.content && (
                    <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify whitespace-pre-wrap">
                      {section.content}
                    </p>
                  )}

                  {section.bullets && (
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-foreground">
                      {section.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="text-justify">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && (
                    <div className="ml-4 space-y-3">
                      {section.subsections.map((subsection, subIdx) => (
                        <div key={subIdx} className="space-y-1">
                          <h5 className="text-sm sm:text-base font-semibold text-foreground">
                            {subsection.title}
                          </h5>
                          <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Show Less Button */}
            <button
              onClick={onToggle}
              className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 relative group"
            >
              <span className="relative">
                Show Less
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </span>
              <ChevronRight className="w-4 h-4 transition-transform duration-300 rotate-180 group-hover:-translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
