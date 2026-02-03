"use client"

import { useState } from "react"
import { Product } from "@/lib/products-data"
import { TimelineRail } from "./timeline-rail"
import { CaseStudyCard } from "./case-study-card"

interface ProductDetailProps {
  product: Product
  isExpanded: boolean
}

export function ProductDetail({ product, isExpanded }: ProductDetailProps) {
  const [expandedCaseStudyId, setExpandedCaseStudyId] = useState<string | null>(
    null
  )

  if (!isExpanded) return null

  return (
    <div className="py-8 sm:py-12 md:py-16">
      {/* Centered Timeline with Alternating Cards */}
      <div className="relative">
        {/* Timeline Rail - Centered */}
        <div className="absolute left-1/2 top-0 bottom-0 w-12 transform -translate-x-1/2 flex justify-center">
          <TimelineRail itemCount={product.caseStudies.length} activeIndex={0} />
        </div>

        {/* Case Study Cards - Alternating Left/Right */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 md:px-12 lg:px-16">
          {product.caseStudies.map((caseStudy, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={caseStudy.id}
                className={`flex ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Card Container - Takes 50% minus timeline gutter */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="w-full max-w-md">
                    <CaseStudyCard
                      caseStudy={caseStudy}
                      isExpanded={expandedCaseStudyId === caseStudy.id}
                      onToggle={() =>
                        setExpandedCaseStudyId(
                          expandedCaseStudyId === caseStudy.id ? null : caseStudy.id
                        )
                      }
                    />
                  </div>
                </div>
                {/* Right side spacer on desktop */}
                <div className="hidden md:block w-1/2" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
