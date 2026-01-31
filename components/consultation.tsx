"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, ArrowRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Consultation() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Consultation Booking
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Apply For Free Now
              </h2>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Patient Name*
                  </label>
                  <Input placeholder="Enter your name" className="bg-muted/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number*
                  </label>
                  <Input type="tel" placeholder="Enter phone number" className="bg-muted/50" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address*
                  </label>
                  <Input type="email" placeholder="Enter email" className="bg-muted/50" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Select Doctor
                  </label>
                  <Select>
                    <SelectTrigger className="bg-muted/50">
                      <SelectValue placeholder="Select Doctor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-ankita">Dr. Ankita Agarwaal</SelectItem>
                      <SelectItem value="dr-rahul">Dr. Rahul Sharma</SelectItem>
                      <SelectItem value="dr-priya">Dr. Priya Singh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Select Department
                  </label>
                  <Select>
                    <SelectTrigger className="bg-muted/50">
                      <SelectValue placeholder="Select Department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cardiology">Cardiology</SelectItem>
                      <SelectItem value="neurology">Neurology</SelectItem>
                      <SelectItem value="orthopedics">Orthopedics</SelectItem>
                      <SelectItem value="mental-health">Mental Health</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    DD-MM-YYYY
                  </label>
                  <Input type="date" className="bg-muted/50" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Select Time
                </label>
                <Select>
                  <SelectTrigger className="bg-muted/50">
                    <SelectValue placeholder="Select Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                    <SelectItem value="16:00">04:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4">
                Send Consultation Request
              </Button>
            </form>
          </div>

          {/* Right - General Ward Card */}
          <div className="flex items-center">
            <Card className="w-full bg-gradient-to-br from-accent to-accent/80 text-white overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold mb-4">Genral Ward</h3>
                <p className="text-white/90 mb-6">
                  It Ensures Accurate Diagnostics With Advanced Laboratory Technology, Delivering Fast, Reliable, And Trusted Test Results For Better Healthcare Decisions.
                </p>

                <div className="bg-white/10 rounded-xl p-6 mb-6">
                  <p className="text-white/80 text-sm mb-2">Give Us A Call</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-2xl font-bold">+91-123457890</span>
                  </div>
                </div>

                <p className="text-white/90 mb-6">
                  It Ensures Accurate Diagnostics With Advanced Laboratory Technology, Delivering Fast, Reliable, And Trusted Test Results For Better Healthcare Decisions.
                </p>

                <Button className="bg-white text-accent hover:bg-white/90 gap-2">
                  Get Appointment
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
