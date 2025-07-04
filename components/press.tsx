import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const exhibitions = [
  {
    title: "Landscapes of Memory",
    venue: "Gallery Modern, Seattle",
    type: "Solo Exhibition",
    date: "March 2024",
    status: "Current",
  },
  {
    title: "Pacific Northwest Painters",
    venue: "Museum of Contemporary Art",
    type: "Group Exhibition",
    date: "September 2023",
    status: "Past",
  },
  {
    title: "Emerging Voices",
    venue: "Portland Art Center",
    type: "Group Exhibition",
    date: "June 2023",
    status: "Past",
  },
  {
    title: "Nature Reimagined",
    venue: "Tacoma Art Museum",
    type: "Group Exhibition",
    date: "January 2023",
    status: "Past",
  },
]

const press = [
  {
    title: "Rising Star: Sulu's Evocative Landscapes",
    publication: "Art in America",
    date: "February 2024",
    excerpt: "Sulu's work demonstrates a masterful understanding of color and atmosphere...",
  },
  {
    title: "Pacific Northwest's New Generation",
    publication: "Artforum",
    date: "November 2023",
    excerpt: "Among the most promising artists working in the region today...",
  },
  {
    title: "The Poetry of Paint",
    publication: "Seattle Art Review",
    date: "August 2023",
    excerpt: "Her paintings capture something ineffable about the relationship between...",
  },
]

const mediaLogos = [
  { name: "Art in America", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Artforum", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Seattle Times", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Hyperallergic", logo: "/placeholder.svg?height=60&width=120" },
]

export default function Press() {
  return (
    <section id="press" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Press & Exhibitions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Recent exhibitions, press coverage, and recognition</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Exhibitions */}
          <div>
            <h3 className="text-2xl font-medium text-gray-800 mb-8">Exhibitions</h3>
            <div className="space-y-6">
              {exhibitions.map((exhibition, index) => (
                <Card key={index} className="border-l-4 border-l-amber-600">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-gray-800">{exhibition.title}</h4>
                      <Badge
                        variant={exhibition.status === "Current" ? "default" : "outline"}
                        className={exhibition.status === "Current" ? "bg-amber-600" : ""}
                      >
                        {exhibition.status}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-2">{exhibition.venue}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>{exhibition.type}</span>
                      <span>•</span>
                      <span>{exhibition.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Press Coverage */}
          <div>
            <h3 className="text-2xl font-medium text-gray-800 mb-8">Press Coverage</h3>
            <div className="space-y-6">
              {press.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-medium text-gray-800 leading-tight">{article.title}</h4>
                      <ExternalLink className="h-4 w-4 text-gray-400 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-amber-600 font-medium mb-2">{article.publication}</p>
                    <p className="text-gray-600 mb-3 italic">"{article.excerpt}"</p>
                    <p className="text-sm text-gray-500">{article.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Media Logos */}
        <div className="mt-20">
          <h3 className="text-2xl font-medium text-gray-800 text-center mb-12">Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((media, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={media.logo || "/placeholder.svg"}
                  alt={media.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
