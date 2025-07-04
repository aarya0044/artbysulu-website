import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Gallery from "@/components/gallery"
import Prints from "@/components/prints"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero-artwork.jpg"
          alt="Signature artwork by Sulu featuring lotus flowers and butterflies"
          fill
          className="object-cover object-center"
          style={{ objectPosition: "center 20%" }}
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <div className="text-center text-white">
            <h1 className="text-6xl font-light tracking-wide mb-4 opacity-100 bg-transparent md:text-7xl">
              Glimpse of Nature
            </h1>
            <p className="text-xl font-light opacity-90 leading-6 md:text-xl">
              {"Contemporary paintings by-Sulakshana Dharmadhikari"}{" "}
            </p>
            <Button asChild className="mt-16 hover:bg-amber-700 px-8 py-3 text-lg bg-slate-300 text-slate-500">
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
                  {i === 1 ? (
                    <Image
                      src="/lotus-pond.jpg"
                      alt="Lotus Pond - Oil on canvas by Sulakshana"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : i === 2 ? (
                    <Image
                      src="/lotus-butterflies.jpg"
                      alt="Lotus with Butterflies - Oil on canvas by Sulakshana"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Image
                      src="/water-lilies.jpg"
                      alt="Water Lilies - Oil on canvas by Sulakshana"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6">
                  {i === 1 ? (
                    <>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Lotus Pond</h3>
                      <p className="text-gray-600">Oil on canvas, 36x60"</p>
                    </>
                  ) : i === 2 ? (
                    <>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Lotus with Butterflies</h3>
                      <p className="text-gray-600">Oil on canvas, 30x54"</p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">Water Lilies</h3>
                      <p className="text-gray-600">Oil on canvas, 24x36"</p>
                    </>
                  )}
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
      <Prints />

      {/* Navigation to About Page */}
      <section className="py-20 px-4 bg-slate-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-gray-800 mb-6">Learn More About the Artist</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover Sulakshana's artistic journey, exhibitions, and get in touch for commissions
          </p>
          <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg">
            <Link href="/about">About & Contact</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
