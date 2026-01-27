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
                  
                  {/* Know More Button - Only for first case study when not expanded */}
                  {idx === 0 && expandedIndex !== idx && (
                    <button
                      onClick={() => setExpandedIndex(idx)}
                      className="mt-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Know More
                    </button>
                  )}

                  {/* Expanded Content - Only for first case study */}
                  {expandedIndex === idx && idx === 0 && (
                    <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 pt-4">
                      {/* Problem Section */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bold text-foreground">Problem</h4>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify">
                          Enterprise teams using JioMeet struggled to recall outcomes from meetings. Key decisions were buried across long recordings, inaccurate transcripts, and cluttered chat threads. Although JioMeet had rich data (audio, transcripts, attendance), users lacked a clear, actionable summary. An AI-based meeting recap was on the roadmap, but poor transcription quality made it unusable.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-foreground">
                          <li>Multiple recordings and raw transcripts overwhelmed users</li>
                          <li>Low transcription accuracy due to background noise and speaker misidentification</li>
                          <li>Teams couldn't easily search, recall, or act on meeting outcomes, reducing post-meeting engagement</li>
                        </ul>
                      </div>

                      {/* Role & Approach Section */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bold text-foreground">Role & Approach</h4>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify">
                          As the Product Manager for the in-meeting experience, I owned both live-call quality and post-meeting outcomes. The first priority was fixing transcription accuracy. I partnered closely with Media and AI teams to redesign speaker detection using noise cancellation and decibel-based filters, improving speaker attribution across varied environments—from quiet home offices to noisy conference rooms.
                        </p>
                        <p className="text-sm sm:text-base text-foreground leading-relaxed text-justify">
                          Once accuracy reached production-ready benchmarks, I led the redesign of the post-meeting experience into a unified Meeting Recap. This consolidated recordings, transcripts, AI-generated summaries, action items, and participant details into a single structured view. Role-based access controls were added to help hosts manage sensitive content.
                        </p>
                      </div>

                      {/* Outcome Section */}
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-bold text-foreground">Outcome</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-foreground">
                          <li>40% increase in post-meeting re-engagement after rollout</li>
                          <li>Enterprise users adopted the recap as their single source of truth</li>
                          <li>Shifted meetings from passive archives to actionable decision-tracking tools</li>
                        </ul>
                      </div>

                      {/* Show Less Button - At the end */}
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
