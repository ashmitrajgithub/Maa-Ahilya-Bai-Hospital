import { Button } from "@/components/ui/button"
import { ArrowRight, Microscope } from "lucide-react"
import Image from "next/image"

export function Pathology() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2">
              <Microscope className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Pathology Tests</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              It Ensures Accurate Diagnostics With Advanced Laboratory Technology, Providing Pathology Testing Service For Your Health & Family&apos;s
            </h2>
            
            <p className="text-lg text-muted-foreground">
              It Ensures Accurate Diagnostics With Advanced Laboratory Technology, Delivering Fast, Reliable, And Trusted Test Results For Better Healthcare Decisions.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              Explore Tests
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/laboratory.jpg"
                alt="Laboratory equipment and testing"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
