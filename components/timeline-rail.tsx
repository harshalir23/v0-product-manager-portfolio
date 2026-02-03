"use client"

import { useEffect, useRef, useState } from "react"

interface TimelineRailProps {
  itemCount: number
  activeIndex: number
}

export function TimelineRail({ itemCount, activeIndex }: TimelineRailProps) {
  const railRef = useRef<HTMLDivElement>(null)
  const [fillPercentage, setFillPercentage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!railRef.current) return

      const railRect = railRef.current.getBoundingClientRect()
      const railHeight = railRef.current.offsetHeight
      const viewportCenter = window.innerHeight / 2

      // Calculate how much of the rail is above the viewport center
      const railTop = railRect.top
      const railBottom = railRect.bottom

      let percentage = 0

      if (railBottom < viewportCenter) {
        // Rail is completely above center
        percentage = 100
      } else if (railTop > viewportCenter) {
        // Rail is completely below center
        percentage = 0
      } else {
        // Rail is intersecting with center
        const distFromTop = viewportCenter - railTop
        percentage = (distFromTop / railHeight) * 100
      }

      setFillPercentage(Math.min(100, Math.max(0, percentage)))
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nodePositions = Array.from({ length: itemCount }, (_, i) => {
    return (i / (itemCount - 1 || 1)) * 100
  })

  return (
    <div
      ref={railRef}
      className="relative flex flex-col items-center h-full min-h-96"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Unfilled line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

      {/* Filled line - gradient */}
      <div
        className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary to-secondary transform -translate-x-1/2 transition-all duration-500 ease-in-out"
        style={{
          height: `${fillPercentage}%`,
        }}
      />

      {/* Nodes */}
      {nodePositions.map((position, idx) => {
        const isFilled = fillPercentage >= position
        return (
          <div
            key={idx}
            className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-500"
            style={{
              top: `${position}%`,
            }}
          >
            {/* Node circle */}
            <div
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                isFilled
                  ? "bg-primary ring-2 ring-primary ring-offset-2 ring-offset-background scale-125"
                  : "bg-border ring-2 ring-border ring-offset-2 ring-offset-background"
              }`}
            />
          </div>
        )
      })}
    </div>
  )
}
