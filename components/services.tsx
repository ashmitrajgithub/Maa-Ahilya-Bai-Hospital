import { Heart, Wind, Scan, Activity, Brain, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Cardiologist",
    description: "Objectively integrate enterprise-wide strategic theme areas with functionalized infrastructures.",
    color: "bg-red-50 text-red-500"
  },
  {
    icon: Wind,
    title: "Pulmonary",
    description: "Interactively productize premium technologies where interdependent quality vectors available.",
    color: "bg-blue-50 text-blue-500"
  },
  {
    icon: Scan,
    title: "Radiology",
    description: "The point of using Lorem Ipsum that it has a more-or-less distribution of look like readable English.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Activity,
    title: "Urology",
    description: "Uniquely matrix economically sound value through the cooperative technology competently.",
    color: "bg-green-50 text-green-500"
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Quickly communicate enabled technology and turnkey leadership skills for the doctor.",
    color: "bg-purple-50 text-purple-500"
  },
  {
    icon: Sparkles,
    title: "Hypnotherapy",
    description: "Services and helps to complete and file the necessary paperwork with county and state offices.",
    color: "bg-pink-50 text-pink-500"
  }
]

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Department
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="outline" className="gap-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
            VIEW ALL DEPARTMENT
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
