"use client"

import { useState } from "react"
import { caseStudiesData } from "@/lib/case-studies"

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {/* Left column: Title, Description, and Expanded Content */}
                <div className="order-2 md:order-1 md:col-span-2 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-justify">{study.overview}</p>
                  
                  {/* Know More Button when not expanded */}
                  {expandedIndex !== idx && (
                    <button
                      onClick={() => setExpandedIndex(idx)}
                      className="mt-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Know More
                    </button>
                  )}

                  {/* Expanded Content - Dynamically rendered from case study data */}
                  {expandedIndex === idx && study.sections && (
                    <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 pt-4">
                      {study.sections.map((section, sectionIdx) => (
                        <div key={sectionIdx} className="space-y-2">
                          <h4 className="text-base sm:text-lg font-bold text-foreground">{section.title}</h4>
                          
                          {section.content && (
                            <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify whitespace-pre-wrap">
                              {section.content}
                            </p>
                          )}
                          
                          {section.bullets && (
                            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-foreground">
                              {section.bullets.map((bullet, bulletIdx) => (
                                <li key={bulletIdx}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                          
                          {section.subsections && (
                            <div className="ml-4 space-y-3">
                              {section.subsections.map((subsection, subIdx) => (
                                <div key={subIdx} className="space-y-1">
                                  <h5 className="text-sm sm:text-base font-semibold text-foreground">{subsection.title}</h5>
                                  <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify">
                                    {subsection.content}
                                  </p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}

                      {/* Show Less Button */}
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className="mt-3 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Show Less
                      </button>
                    </div>
                  )}
                </div>

                {/* Right column: Image - Smaller size */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-muted order-1 md:order-2 h-fit">
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
