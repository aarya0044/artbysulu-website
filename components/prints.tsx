"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const prints = [
  {
    id: 1,
    title: "Forest Light",
    image: "/placeholder.svg?height=400&width=320",
    sizes: [
      { size: "8x10", price: 45, edition: "50" },
      { size: "11x14", price: 75, edition: "25" },
      { size: "16x20", price: 125, edition: "15" },
    ],
  },
  {
    id: 2,
    title: "Mountain Mist",
    image: "/placeholder.svg?height=400&width=320",
    sizes: [
      { size: "8x10", price: 45, edition: "50" },
      { size: "11x14", price: 75, edition: "25" },
      { size: "16x20", price: 125, edition: "15" },
    ],
  },
  {
    id: 3,
    title: "City Dawn",
    image: "/placeholder.svg?height=400&width=320",
    sizes: [
      { size: "8x10", price: 45, edition: "50" },
      { size: "11x14", price: 75, edition: "25" },
      { size: "16x20", price: 125, edition: "15" },
    ],
  },
  {
    id: 4,
    title: "Contemplation",
    image: "/placeholder.svg?height=400&width=320",
    sizes: [
      { size: "8x10", price: 45, edition: "50" },
      { size: "11x14", price: 75, edition: "25" },
      { size: "16x20", price: 125, edition: "15" },
    ],
  },
]

export default function Prints() {
  const [selectedPrint, setSelectedPrint] = useState<any>(null)
  const [selectedSize, setSelectedSize] = useState<any>(null)

  const handleInquiry = (print: any, size: any) => {
    setSelectedPrint(print)
    setSelectedSize(size)
  }

  return (
    <section id="prints" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">Limited Edition Prints</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            High-quality giclée prints on archival paper, signed and numbered by the artist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prints.map((print) => (
            <Card key={print.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={print.image || "/placeholder.svg"}
                    alt={print.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-4">{print.title}</h3>
                  <div className="space-y-3">
                    {print.sizes.map((size, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{size.size}"</span>
                          <Badge variant="outline" className="text-xs">
                            Ed. {size.edition}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">${size.price}</span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                className="bg-amber-600 hover:bg-amber-700"
                                onClick={() => handleInquiry(print, size)}
                              >
                                Inquire
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-md">
                              <DialogHeader>
                                <DialogTitle>Print Inquiry</DialogTitle>
                                <DialogDescription>
                                  Interested in "{print.title}" ({size.size}")? Send us a message and we'll get back to
                                  you soon.
                                </DialogDescription>
                              </DialogHeader>
                              <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" required />
                                  </div>
                                  <div>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" required />
                                  </div>
                                </div>
                                <div>
                                  <Label htmlFor="email">Email</Label>
                                  <Input id="email" type="email" required />
                                </div>
                                <div>
                                  <Label htmlFor="message">Message</Label>
                                  <Textarea
                                    id="message"
                                    placeholder={`I'm interested in "${print.title}" (${size.size}") for $${size.price}...`}
                                    rows={4}
                                  />
                                </div>
                                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                                  Send Inquiry
                                </Button>
                              </form>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-2xl font-medium text-gray-800 mb-4">Print Information</h3>
            <div className="text-gray-600 space-y-2">
              <p>• Printed on museum-quality archival paper</p>
              <p>• Signed and numbered by the artist</p>
              <p>• Ships within 2-3 business days</p>
              <p>• Includes certificate of authenticity</p>
              <p>• Free shipping on orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
