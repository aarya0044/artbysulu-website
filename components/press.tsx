"use client"

import { useState } from "react"

const soloExhibitions = [
  {
    year: "2018",
    title: "PN Gadgil Art Gallery",
    venue: "Pune, Karve Nagar",
    type: "Solo Exhibition",
  },
  {
    year: "2010",
    title: "Gallery Leela",
    venue: "Mumbai",
    type: "Solo Exhibition",
  },
]

const groupExhibitions = [
  {
    year: "2018",
    title: "National Group Show for Women",
    venue: "Raja Ravi Varma Art Gallery, Pune",
    type: "Group Exhibition",
  },
  {
    year: "2018",
    title: "Society of Indian Marine Artists",
    venue: "Balgandharva, Pune",
    type: "Group Exhibition",
  },
  {
    year: "2016",
    title: "Sea Scape by SIMA",
    venue: "Balgandharva Gallery, Pune",
    type: "Group Exhibition",
  },
  {
    year: "2005",
    title: "Rama Art Gallery",
    venue: "Aurangabad",
    type: "Group Exhibition",
  },
  {
    year: "2002",
    title: "Khushboo Art Gallery",
    venue: "Pune",
    type: "Group Exhibition",
  },
]

export default function Press() {
  const [currentView, setCurrentView] = useState<"solo" | "group">("solo")
  const [isHovering, setIsHovering] = useState(false)

  return (
    <section id="press" className="py-12 px-4 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/gallery-interior.png')",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/80" />
      {/* Content container */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-white drop-shadow-lg mb-4">Press & Exhibitions</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Recent exhibitions, press coverage, and recognition</p>
        </div>

        <div className="w-full">
          <div className="relative">
            <div className="text-center mb-6">
              <h3 className="text-4xl font-bold text-white drop-shadow-lg">
                {currentView === "solo" ? "Solo Shows" : "Group Shows"}
              </h3>
            </div>

            {/* Left Arrow */}
            <button
              onClick={() => setCurrentView("solo")}
              className={`absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-amber-400 transition-colors duration-200 ${
                currentView === "solo" ? "text-amber-400" : ""
              }`}
            >
              &lt;
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentView("group")}
              onMouseEnter={() => {
                setIsHovering(true)
                setCurrentView("group")
              }}
              onMouseLeave={() => setIsHovering(false)}
              className={`absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-white hover:text-amber-400 transition-colors duration-200 ${
                currentView === "group" ? "text-amber-400" : ""
              }`}
            >
              &gt;
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[300px]">
            <div className="space-y-3">
              {(currentView === "solo" ? soloExhibitions : groupExhibitions)
                .slice(0, Math.ceil((currentView === "solo" ? soloExhibitions : groupExhibitions).length / 2))
                .map((exhibition, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 bg-transparent hover:bg-white/10 transition-all duration-200 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-amber-400 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-bold text-white drop-shadow-md">{exhibition.year}</span>
                        <span className="text-white/80">•</span>
                        <span className="text-sm text-white/90">{exhibition.type}</span>
                      </div>
                      <h4 className="text-lg font-medium text-white drop-shadow-md mb-1">{exhibition.title}</h4>
                      <p className="text-white/90 drop-shadow-sm">{exhibition.venue}</p>
                    </div>
                  </div>
                ))}
            </div>

            <div className="space-y-3">
              {(currentView === "solo" ? soloExhibitions : groupExhibitions)
                .slice(Math.ceil((currentView === "solo" ? soloExhibitions : groupExhibitions).length / 2))
                .map((exhibition, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 bg-transparent hover:bg-white/10 transition-all duration-200 rounded-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-3 h-3 bg-amber-400 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xl font-bold text-white drop-shadow-md">{exhibition.year}</span>
                        <span className="text-white/80">•</span>
                        <span className="text-sm text-white/90">{exhibition.type}</span>
                      </div>
                      <h4 className="text-lg font-medium text-white drop-shadow-md mb-1">{exhibition.title}</h4>
                      <p className="text-white/90 drop-shadow-sm">{exhibition.venue}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-3">
            <button
              onClick={() => setCurrentView("solo")}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                currentView === "solo" ? "bg-white" : "bg-white/40"
              }`}
            />
            <button
              onClick={() => setCurrentView("group")}
              className={`w-4 h-4 rounded-full transition-all duration-200 ${
                currentView === "group" ? "bg-white" : "bg-white/40"
              }`}
            />
          </div>
        </div>
      </div>{" "}
      {/* end content container */}
    </section>
  )
}
