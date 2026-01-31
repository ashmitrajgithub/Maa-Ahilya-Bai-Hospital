import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  { src: "/gallery-1.jpg", alt: "Hospital corridor" },
  { src: "/gallery-2.jpg", alt: "Medical equipment" },
  { src: "/gallery-3.jpg", alt: "Patient room" },
  { src: "/gallery-4.jpg", alt: "Surgery room" },
  { src: "/gallery-5.jpg", alt: "Reception area" },
  { src: "/gallery-6.jpg", alt: "Doctor consultation" }
]

export function Gallery() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Our Gallery
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Providing Medical Services<br />
              <span className="text-primary">For Your Health Family.</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
            View All
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl bg-muted group cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
