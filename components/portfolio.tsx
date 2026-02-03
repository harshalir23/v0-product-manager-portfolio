"use client"

import { useState } from "react"
import { caseStudiesData } from "@/lib/case-studies"
import { ChevronRight } from "lucide-react"

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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {/* Left column: Image - Prominent */}
                <div className="relative w-full aspect-video lg:aspect-square rounded-lg overflow-hidden bg-muted shadow-md order-1">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Right column: Title, Description, and Expanded Content */}
                <div className="flex flex-col justify-start order-2 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                      {study.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-foreground leading-relaxed text-justify mt-2 sm:mt-3">
                      {study.overview}
                    </p>
                  </div>
                  
                  {/* Know More Button when not expanded */}
                  {expandedIndex !== idx && (
                    <button
                      onClick={() => setExpandedIndex(idx)}
                      className="inline-flex items-center gap-1 mt-2 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 relative w-fit group"
                    >
                      <span className="relative">
                        Know More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                      </span>
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}

                  {/* Expanded Content - Dynamically rendered from case study data */}
                  {expandedIndex === idx && study.sections && (
                    <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 pt-4 border-t border-border">
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
                        className="inline-flex items-center gap-1 mt-3 px-4 py-2 text-sm font-semibold text-primary transition-all duration-300 relative w-fit group"
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
              {idx !== caseStudiesData.length - 1 && <div className="mt-8 sm:mt-12 md:mt-16 border-t border-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
