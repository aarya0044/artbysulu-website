import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Gallery from "@/components/gallery"
import About from "@/components/about"
import Prints from "@/components/prints"
import Press from "@/components/press"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Signature artwork by Sulu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl md:text-8xl font-light tracking-wide mb-4">Art by Sulu</h1>
            <p className="text-xl md:text-2xl font-light opacity-90">Contemporary paintings & pastels</p>
            <Button asChild className="mt-8 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
              <Link href="#gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Works Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Featured Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of recent paintings exploring themes of nature, emotion, and human connection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=600&width=480`}
                    alt={`Featured artwork ${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Untitled Series {i}</h3>
                  <p className="text-gray-600">Oil on canvas, 2024</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white bg-transparent"
          >
            <Link href="#gallery">View All Works</Link>
          </Button>
        </div>
      </section>

      <Gallery />
      <About />
      <Prints />
      <Press />
      <Contact />
    </div>
  )
}
