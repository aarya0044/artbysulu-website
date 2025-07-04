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
              src="/artist-photo.jpg"
              alt="Sulakshana Dharmadhikari in her studio"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-light text-gray-800">Sulakshana Dharmadhikari</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="">
                {
                  "Born: June 10, 1975 | Pune, Maharashtra, India\n\nSulakshana Dharmadhikari is a contemporary freelance artist based in Pune, passionately working in the field of fine arts for the past five years. Her paintings delicately portray the emotional depth of women and explore the profound relationship between women and nature, alongside the broader aspects of human existence."
                }
              </p>
              <p>
                {
                  "Inspired by the elemental forces of nature, her art bridges the beauty of rural simplicity with the complexity of modern life. Sulakshana believes that every living being is an embodiment of the five elements—earth, water, fire, air, and space—and through her expressive brushwork, she brings this vision to life on canvas.\n"
                }
              </p>
              <p>
                {
                  "Her artistic journey began during her engineering education, where she discovered her true calling in visual storytelling. Over time, she developed a deep fascination with the organic forms of flowers, butterflies, and leaves, translating their subtle details into graceful oil-on-canvas compositions."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
