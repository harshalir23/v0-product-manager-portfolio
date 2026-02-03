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
    <div className="py-8 sm:py-12 md:py-16 space-y-8">
      {/* Timeline + Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Left: Timeline Rail */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <div className="w-full max-w-12">
            <TimelineRail itemCount={product.caseStudies.length} activeIndex={0} />
          </div>
        </div>

        {/* Right: Case Study Cards */}
        <div className="md:col-span-10 space-y-6 sm:space-y-8 md:space-y-10">
          {product.caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              isExpanded={expandedCaseStudyId === caseStudy.id}
              onToggle={() =>
                setExpandedCaseStudyId(
                  expandedCaseStudyId === caseStudy.id ? null : caseStudy.id
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}
