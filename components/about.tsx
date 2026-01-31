"use client"

import { Ambulance, Building2 } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative corner triangles */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-[#00bcd4] opacity-80" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#00bcd4] opacity-80" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Content */}
          <div className="space-y-6">
            <div>
              <p className="text-base font-semibold text-[#00bcd4] mb-3">
                About Our Hospital
              </p>
              <div className="flex items-start gap-3 flex-wrap">
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1a2d4a] leading-tight" style={{ fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif" }}>
                  <span className="italic">Your Health, Our Priority</span>
                  <br />
                  <span className="italic">Every Single Day.</span>
                </h2>
                {/* NABH Badge */}
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-md bg-white flex-shrink-0 mt-2">
                  <Image
                    src="/nabh-logo.png"
                    alt="NABH Accredited"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Heartbeat line icon */}
            <div className="py-2">
              <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 15 H15 L20 5 L25 25 L30 10 L35 20 L40 15 H60" stroke="#00bcd4" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <div className="text-gray-600 text-sm leading-relaxed">
              <p>
                Where You Are At The Heart Of Our Mission. We Hope You Will Consider Us As Your Medical Home—The Place Where You Feel Safe, Comfortable And Cared For. As A Multi-Specialty Medical Group .Where You Are At The Heart Of Our Mission. We Hope You Will Consider Us As Your Medical Home—The Place Where You Feel Safe, Comfortable And Cared For. As A Multi-Specialty Medical Group. Where You Are At The Heart Of Our Mission. We Hope You Will Consider Us As Your Medical Home—The Place Where You Feel Safe, Comfortable And Cared For. As A Multi-Specialty Medical Group.Where You Are At The Heart Of Our Mission. We Hope You Will
              </p>
            </div>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {/* Ambulance Card - Teal Background */}
              <div className="bg-[#00bcd4] rounded-lg p-5 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                    <Ambulance className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">Ambulance 24 / 7</h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  AWhere you are at the heart of our mission. We hope you will Where you are
                </p>
              </div>

              {/* Book Appointment Card - White with border */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
                <h3 className="font-bold text-lg text-[#1a2d4a] mb-1">Book Apointment</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  AWhere you are at the heart of our mission. We hope you will Where you are
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image with decorative frame */}
          <div className="relative lg:pl-8">
            {/* Teal decorative border frame */}
            <div className="absolute top-4 right-0 w-[95%] h-[95%] border-[3px] border-[#00bcd4] rounded-lg z-0" />

            {/* Main image container */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-muted z-10 shadow-lg">
              <Image
                src="/about-hospital-new.jpg"
                alt="Hospital interior with medical equipment"
                fill
                className="object-cover"
              />
            </div>

            {/* PM-JAY Logo Badge - Bottom Right */}
            <div className="absolute -bottom-6 right-4 z-20">
              <div className="w-20 h-20 rounded-full overflow-hidden shadow-xl bg-white border-4 border-white">
                <Image
                  src="/pmjay-logo.png"
                  alt="PM-JAY Ayushman Bharat"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
