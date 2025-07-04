import Navigation from "@/components/navigation"
import About from "@/components/about"
import Press from "@/components/press"
import Studio from "@/components/studio"
import Contact from "@/components/contact"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Back to Gallery Button */}
      <section className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Button asChild variant="outline" className="mb-8 bg-transparent">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Gallery
            </Link>
          </Button>
        </div>
      </section>

      <About />
      <Press />
      <Studio />
      <Contact />
    </div>
  )
}
