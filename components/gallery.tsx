"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const artworkSeries = [
  {
    title: "Nature's Basket",
    works: [
      { id: 1, title: "Lotus Garden", medium: "Oil on canvas", year: "2024", size: "36x36" },
      { id: 2, title: "Lotus and Butterfly", medium: "Oil on canvas", year: "2024", size: "18x24" },
      { id: 3, title: "River Bend", medium: "Oil on canvas", year: "2023", size: "30x40" },
      { id: 4, title: "Autumn Path", medium: "Oil on canvas", year: "2023", size: "16x20" },
    ],
  },
  {
    title: "Buddha",
    works: [
      { id: 5, title: "Meditation", medium: "Oil on canvas", year: "2024", size: "36x48" },
      { id: 6, title: "Enlightenment", medium: "Oil on canvas", year: "2024", size: "20x24" },
      { id: 7, title: "Inner Peace", medium: "Oil on canvas", year: "2023", size: "24x30" },
    ],
  },
]

export default function Gallery() {
  const [selectedSeries, setSelectedSeries] = useState(0)
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const allWorks = artworkSeries.flatMap((series) => series.works)

  const openLightbox = (imageId: number) => {
    const index = allWorks.findIndex((work) => work.id === imageId)
    setLightboxIndex(index)
    setLightboxImage(imageId)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % allWorks.length
    setLightboxIndex(nextIndex)
    setLightboxImage(allWorks[nextIndex].id)
  }

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + allWorks.length) % allWorks.length
    setLightboxIndex(prevIndex)
    setLightboxImage(allWorks[prevIndex].id)
  }

  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-4">Gallery</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore my complete collection of paintings and pastels, organized by series
        </p>
      </div>

      {/* Series Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {artworkSeries.map((series, index) => (
          <Button
            key={index}
            variant={selectedSeries === index ? "default" : "outline"}
            onClick={() => setSelectedSeries(index)}
            className={
              selectedSeries === index
                ? "bg-amber-600 hover:bg-amber-700"
                : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
            }
          >
            {series.title}
          </Button>
        ))}
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworkSeries[selectedSeries].works.map((work) => (
          <Card
            key={work.id}
            className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => openLightbox(work.id)}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={
                    work.id === 1
                      ? "/lotus-garden.jpg"
                      : work.id === 2
                        ? "/butterfly-flowers.jpg"
                        : work.id === 3
                          ? "/lotus-pond-large.jpg"
                          : work.id === 4
                            ? "/white-flowers-butterflies.jpg"
                            : work.id === 5
                              ? "/buddha-1.jpg"
                              : work.id === 6
                                ? "/buddha-2.jpg"
                                : work.id === 7
                                  ? "/buddha-3.jpg"
                                  : `/placeholder.svg?height=600&width=480`
                  }
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-800 mb-2">{work.title}</h3>
                <p className="text-gray-600 mb-1">{work.medium}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{work.year}</span>
                  <Badge variant="outline" className="text-xs">
                    {work.size}"
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          <div className="max-w-4xl max-h-full">
            <Image
              src={`/placeholder.svg?height=800&width=640`}
              alt={allWorks[lightboxIndex].title}
              width={640}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-medium mb-2">{allWorks[lightboxIndex].title}</h3>
              <p className="text-gray-300">
                {allWorks[lightboxIndex].medium} • {allWorks[lightboxIndex].year}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
