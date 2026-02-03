"use client"

import { ChevronDown } from "lucide-react"

interface ProductCardProps {
  title: string
  subtitle: string
  overview: string
  roles: string[]
  isExpanded: boolean
  onToggle: () => void
}

export function ProductCard({
  title,
  subtitle,
  overview,
  roles,
  isExpanded,
  onToggle,
}: ProductCardProps) {
  return (
    <div className="border-t border-border pt-8 sm:pt-12 md:pt-16">
      <div className="space-y-4 sm:space-y-6">
        {/* Product Header */}
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic mt-1 sm:mt-2">
            {subtitle}
          </p>
        </div>

        {/* Overview */}
        <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed text-justify">
          {overview}
        </p>

        {/* Role Bullets */}
        <div className="space-y-2">
          <h3 className="text-sm sm:text-base font-semibold text-foreground">Role:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-foreground">
            {roles.map((role, idx) => (
              <li key={idx} className="text-justify">
                {role}
              </li>
            ))}
          </ul>
        </div>

        {/* View Work Button */}
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm sm:text-base font-semibold text-primary transition-all duration-300 relative group"
        >
          <span className="relative">
            View Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  )
}
