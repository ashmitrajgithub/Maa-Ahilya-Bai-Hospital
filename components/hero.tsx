"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const tags = [
  "WELLNESS", "THERAPIST", "NURSING", "PATIENT CARE", "HEALTH CENTER",
  "EMERGENCY", "MEDICAL SERVICES", "MEDICAL", "HEALTHCARE", "CLINIC",
  "DOCTOR", "DENTIST", "SURGERY", "PHARMACY"
]

export function Hero() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ticker = tickerRef.current
    if (!ticker) return

    let animationId: number
    let position = 0
    const speed = 1

    const animate = () => {
      position -= speed
      if (position <= -ticker.scrollWidth / 2) {
        position = 0
      }
      ticker.style.transform = `translateX(${position}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-new.png"
          alt="Hospital interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#1a3a4a]/70" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div className="space-y-6">
              <p className="text-sm font-medium text-white/90 uppercase tracking-[0.2em]">
                TRUSTED CARE FOR A HEALTHIER, HAPPIER LIFE
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-semibold leading-[1.15]" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                <em className="not-italic font-semibold" style={{ fontStyle: "italic", color: "#e8f4f8" }}>
                  Exceptional
                </em>{" "}
                <em className="not-italic font-semibold" style={{ fontStyle: "italic", color: "#2ec1e6" }}>
                  Care,
                </em>
                <br />
                <em className="not-italic font-semibold" style={{ fontStyle: "italic", color: "#e8f4f8" }}>
                  Always
                </em>{" "}
                <span className="font-semibold" style={{ color: "#ffffff" }}>
                  Trusted.
                </span>
              </h1>

              <p className="text-white/80 text-base max-w-lg leading-relaxed">
                Exceptional Care For Every Stage Of Life, From Advanced Diagnostics To Personalized Treatments, Ensuring Your Health And Well-Being.
              </p>

              {/* Buttons and Badges Row */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#00bcd4] hover:bg-[#00a5bb] text-white font-bold uppercase h-12 px-6 text-xs tracking-[0.15em] rounded-sm"
                >
                  Quick Connect
                </Button>
                <Button
                  size="lg"
                  className="bg-[#1a2d4a] hover:bg-[#152438] text-white font-bold uppercase h-12 px-6 text-xs tracking-[0.15em] rounded-sm border border-[#2a4060]"
                >
                  Book Appointment
                </Button>

                {/* Certification Badges - inline with buttons */}
                <div className="flex items-center gap-4 ml-6">
                  {/* NABH Badge */}
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/nabh-logo.png"
                      alt="NABH Accredited"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* PM-JAY Badge */}
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden shadow-lg bg-white">
                    <Image
                      src="/pmjay-logo.png"
                      alt="PM-JAY Ayushman Bharat"
                      width={60}
                      height={60}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Doctor Image */}
            <div className="absolute right-0 bottom-12 hidden lg:flex justify-end items-end -mr-12">
              <div className="relative w-[550px] h-[620px]">
                <Image
                  src="/doctor-hero.png"
                  alt="Female doctor in white lab coat with stethoscope"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="bg-[#0a1f2a] py-4 overflow-hidden">
          <div className="relative">
            <div
              ref={tickerRef}
              className="flex whitespace-nowrap"
            >
              {[...tags, ...tags].map((tag, index) => (
                <span key={index} className="flex items-center text-white/80 text-sm font-medium uppercase tracking-wider">
                  {tag}
                  <span className="mx-6 text-cyan-400">•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
