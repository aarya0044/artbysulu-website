import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Studio() {
  return (
    <section id="studio" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Studio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into Sulakshana's creative workspace where art comes to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Studio+${i}`}
                    alt={`Studio workspace ${i}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    {i === 1 ? "Creative Corner" : i === 2 ? "Painting Station" : "Inspiration Wall"}
                  </h3>
                  <p className="text-gray-600">
                    {i === 1
                      ? "Where ideas take shape and creativity flows"
                      : i === 2
                        ? "The heart of artistic creation"
                        : "Sources of inspiration and reference materials"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Step into Sulakshana's studio, a sanctuary of creativity where nature's beauty transforms into stunning
              artworks. Each corner tells a story of artistic passion, from the carefully arranged brushes to the
              canvases waiting to bloom with life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
