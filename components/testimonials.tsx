import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur on piscing elit, sed do eiusmod tempor incidids is magna aliqua established fact",
    name: "Jenny Wilson",
    role: "Customer",
    image: "/testimonial-1.jpg",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur on piscing elit, sed do eiusmod tempor incidids is magna aliqua established fact",
    name: "Vlack Marvin",
    role: "Customer",
    image: "/testimonial-2.jpg",
    rating: 5
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur on piscing elit, sed do eiusmod tempor incidids is magna aliqua established fact",
    name: "Robert Floxder",
    role: "Customer",
    image: "/testimonial-3.jpg",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Our Client Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
