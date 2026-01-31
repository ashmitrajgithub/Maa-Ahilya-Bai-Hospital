import { Stethoscope, FlaskConical, Scissors, HeartPulse, Pill, Siren } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const facilities = [
  {
    icon: Stethoscope,
    title: "Medical Counselling",
    description: "We provide wide range of medical counselling by the professional doctor & therapist."
  },
  {
    icon: FlaskConical,
    title: "Laboratory Test",
    description: "We provide wide range of laboratory tests with accurate results."
  },
  {
    icon: Scissors,
    title: "Surgical Operation",
    description: "Expert surgical procedures with state-of-the-art facilities."
  },
  {
    icon: HeartPulse,
    title: "Medical Treatment",
    description: "Comprehensive medical treatment for all health conditions."
  },
  {
    icon: Pill,
    title: "Pharmacy Service",
    description: "24/7 pharmacy services with all essential medicines."
  },
  {
    icon: Siren,
    title: "Emergency Service",
    description: "Round-the-clock emergency services for critical care."
  }
]

const stats = [
  { value: "25", label: "Years of Experience" },
  { value: "470", label: "Medical Specialities" },
  { value: "689", label: "Happy Patients" },
  { value: "9036", label: "Medical Specialities" }
]

export function Facilities() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Specialities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Facilities
          </h2>
        </div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((facility) => (
            <Card key={facility.title} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <facility.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{facility.title}</h3>
                    <p className="text-sm text-muted-foreground">{facility.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
