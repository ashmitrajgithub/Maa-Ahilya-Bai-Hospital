import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const doctors = [
  {
    name: "Dr. Ankita Agarwaal",
    qualification: "MBBS FBCS (Gold Medalist)",
    specialty: "Mental Health",
    experience: "10+ Years",
    image: "/doctor-1.jpg"
  },
  {
    name: "Dr. Ankita Agarwaal",
    qualification: "MBBS FBCS (Gold Medalist)",
    specialty: "Mental Health",
    experience: "10+ Years",
    image: "/doctor-2.jpg"
  },
  {
    name: "Dr. Ankita Agarwaal",
    qualification: "MBBS FBCS (Gold Medalist)",
    specialty: "Mental Health",
    experience: "10+ Years",
    image: "/doctor-3.jpg"
  }
]

export function Doctors() {
  return (
    <section id="doctors" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Doctors
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Team of Specialist Doctors
            </h2>
          </div>
          <Button variant="link" className="text-primary gap-2 p-0">
            Explore All Doctors
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[3/4] bg-gradient-to-b from-primary/10 to-muted">
                <Image
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-white text-foreground hover:bg-white shadow-md">
                    {doctor.specialty}
                  </Badge>
                  <Badge className="bg-primary text-white hover:bg-primary shadow-md">
                    {doctor.experience}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{doctor.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{doctor.qualification}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
