import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-800 mb-4">About the Artist</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="Artist Sulu in studio"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-light text-gray-800">Sulu</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Born in 1985, Sulu is a contemporary artist whose work explores the intersection of nature and human
                emotion through vibrant oils and delicate pastels. Based in the Pacific Northwest, her paintings capture
                the ephemeral beauty of landscapes while delving into deeper themes of connection, solitude, and
                transformation.
              </p>
              <p>
                Drawing inspiration from both the rugged coastlines of her childhood and the urban environments of her
                adult life, Sulu's work bridges the gap between representational and abstract art. Her technique
                combines traditional painting methods with contemporary approaches to color and composition.
              </p>
              <p>
                "My artistic mission is to create works that serve as windows into moments of quiet contemplation and
                profound beauty. I believe art has the power to slow us down and reconnect us with the natural world and
                our inner selves."
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-xl font-medium text-gray-800 mb-4">Education & Credentials</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• MFA in Painting, Rhode Island School of Design (2010)</li>
                <li>• BFA in Fine Arts, University of Washington (2007)</li>
                <li>• Member, American Society of Contemporary Artists</li>
                <li>• Represented by Gallery Modern, Seattle</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
