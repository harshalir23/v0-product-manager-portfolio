import { Image } from "next/image"

const PortfolioPage = ({ params }) => {
  const slug = params.slug
  const study = { sectionImages: Array(10).fill("/placeholder.svg") } // Example study object
  const subsec = { title: "Redesigning the Post-Meeting Experience" } // Example subsec object

  return (
    <div>
      {/* Other code here */}

      {subsec.title === "Redesigning the Post-Meeting Experience" &&
        study.sectionImages &&
        study.sectionImages.length >= 9 && (
          <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 overflow-x-auto pb-4">
            {/* Image 1 */}
            <div className="relative w-60 h-96 flex-shrink-0 rounded-lg overflow-hidden bg-muted shadow-lg border border-border">
              <Image
                src={study.sectionImages[6] || "/placeholder.svg"}
                alt="Chat with recording events"
                fill
                className="object-contain p-2"
              />
            </div>

            <span className="text-primary font-bold text-2xl flex-shrink-0 hidden lg:block">→</span>

            {/* Image 2 */}
            <div className="relative w-60 h-96 flex-shrink-0 rounded-lg overflow-hidden bg-muted shadow-lg border border-border">
              <Image
                src={study.sectionImages[7] || "/placeholder.svg"}
                alt="Meeting scheduled view"
                fill
                className="object-contain p-2"
              />
            </div>

            <span className="text-primary font-bold text-2xl flex-shrink-0 hidden lg:block">→</span>

            {/* Image 3 */}
            <div className="relative w-60 h-96 flex-shrink-0 rounded-lg overflow-hidden bg-muted shadow-lg border border-border">
              <Image
                src={study.sectionImages[8] || "/placeholder.svg"}
                alt="Meeting Recap interface"
                fill
                className="object-contain p-2"
              />
            </div>

            {/* Caption */}
            <div className="text-center text-sm text-foreground/60 pt-4 w-full lg:hidden">
              <p className="font-medium">From scattered data to unified Meeting Recap experience</p>
            </div>
          </div>
        )}

      {/* Other code here */}
    </div>
  )
}

export default PortfolioPage
