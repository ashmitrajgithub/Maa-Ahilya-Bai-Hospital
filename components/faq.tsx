"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "About Doutor",
    answer: "Lorem ipsum dolor sit amet, consectetur. Booking a virtual visit is easy. Just create an account, log in, choose the medical service or specialty you need, and select an available time slot. You can often find same-day appointments."
  },
  {
    question: "Can I use Doutor if I don't have insurance?",
    answer: "Yes, you can use our services without insurance. We offer affordable self-pay options and flexible payment plans."
  },
  {
    question: "What types of conditions can Doutor treat?",
    answer: "We can treat a wide range of conditions including cold, flu, allergies, skin conditions, mental health concerns, and more."
  },
  {
    question: "Will I receive a prescription after my consultation?",
    answer: "If medically appropriate, our doctors can prescribe medications which can be sent to your preferred pharmacy."
  },
  {
    question: "Is my health information safe and private?",
    answer: "Yes, we use industry-standard encryption and follow all HIPAA guidelines to protect your health information."
  },
  {
    question: "Can I choose which doctor I see?",
    answer: "Yes, you can browse our doctor profiles and choose the one that best fits your needs and preferences."
  },
  {
    question: "What devices can I use for my virtual visit?",
    answer: "You can use any device with a camera and microphone - smartphone, tablet, laptop, or desktop computer."
  }
]

export function FAQ() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              Frequently Ask Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-muted-foreground">
              Find quick answers to common questions about virtual visits, insurance, prescriptions, and more.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-muted/50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
