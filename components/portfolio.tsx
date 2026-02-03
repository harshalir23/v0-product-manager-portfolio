"use client"

import { useState } from "react"
import { productsData } from "@/lib/products-data"
import { ProductCard } from "./product-card"
import { ProductDetail } from "./product-detail"

export default function Portfolio() {
  const [expandedProductId, setExpandedProductId] = useState<string | null>(null)

  const handleViewWork = (productId: string) => {
    setExpandedProductId(productId)
    
    // Scroll to first case study after expansion
    setTimeout(() => {
      const firstCaseStudy = document.querySelector(
        `[data-product="${productId}"] [data-case-study-card]`
      )
      if (firstCaseStudy) {
        firstCaseStudy.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)
  }

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-32 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            Portfolio
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Selected case studies that blend design, data, and impact.
          </p>
        </div>

        <div className="space-y-0">
          {productsData.map((product) => (
            <div key={product.id} data-product={product.id}>
              <ProductCard
                title={product.title}
                subtitle={product.subtitle}
                overview={product.overview}
                roles={product.roles}
                isExpanded={expandedProductId === product.id}
                onToggle={() =>
                  expandedProductId === product.id
                    ? setExpandedProductId(null)
                    : handleViewWork(product.id)
                }
              />

              {expandedProductId === product.id && (
                <ProductDetail
                  product={product}
                  isExpanded={expandedProductId === product.id}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
