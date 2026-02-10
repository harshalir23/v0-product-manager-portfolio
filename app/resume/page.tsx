"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

// Set up PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [pageWidth, setPageWidth] = useState(800)

  useEffect(() => {
    // Set page width based on window size
    const calculateWidth = () => {
      if (typeof window !== "undefined") {
        setPageWidth(Math.min(800, window.innerWidth - 32))
      }
    }
    
    calculateWidth()
    window.addEventListener("resize", calculateWidth)
    return () => window.removeEventListener("resize", calculateWidth)
  }, [])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
  }

  const goToPreviousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 1))
  }

  const goToNextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, numPages || 1))
  }

  return (
    <div className="min-h-screen bg-background py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Resume
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Product Manager | Strategy & Growth
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm mb-8">
          {isLoading && (
            <div className="flex items-center justify-center h-96 bg-muted">
              <p className="text-muted-foreground">Loading resume...</p>
            </div>
          )}
          
          <div className="flex justify-center overflow-auto">
            <Document
              file="/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-96">
                  <p className="text-muted-foreground">Loading...</p>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-96">
                  <p className="text-destructive">Failed to load PDF. Please download instead.</p>
                </div>
              }
            >
              <Page 
                pageNumber={pageNumber}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={pageWidth}
              />
            </Document>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              variant="outline"
              size="icon"
              title="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <span className="text-sm text-muted-foreground">
              Page {pageNumber} {numPages && `of ${numPages}`}
            </span>
            
            <Button
              onClick={goToNextPage}
              disabled={pageNumber >= (numPages || 1)}
              variant="outline"
              size="icon"
              title="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <a
            href="/resume.pdf"
            download="Harshali_Rane_Resume.pdf"
          >
            <Button variant="default" className="gap-2">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
