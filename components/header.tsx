"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Doctors", href: "#doctors" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border font-sans">
      {/* Top Bar */}
      <div className="bg-[#002B49] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              Emergency: +91 01234 56789
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3" />
              info@maahilyabaihospital.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Indore, Madhya Pradesh
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>Follow Us:</span>
            <div className="flex gap-3">
              <Link href="#" className="hover:text-[#00bcd4] transition-colors"><Facebook className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-[#00bcd4] transition-colors"><Instagram className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-[#00bcd4] transition-colors"><Twitter className="w-4 h-4" /></Link>
              <Link href="#" className="hover:text-[#00bcd4] transition-colors"><Linkedin className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-14 w-auto">
              <img
                src="/hospital-logo.png"
                alt="Maa Ahilya Bai Hospital"
                className="h-14 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[15px] font-semibold text-[#002B49] hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="hidden xl:flex gap-2 text-[#002B49] font-bold hover:text-primary hover:bg-transparent">
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="w-4 h-4" />
              </span>
              <div className="flex flex-col items-start text-xs">
                <span>Call Emergency</span>
                <span className="text-sm">+91 12345 67890</span>
              </div>
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-6 shadow-lg shadow-primary/30">
              GET APPOINTMENT
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#002B49]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-white absolute top-full left-0 right-0 shadow-xl z-50">
            <div className="container mx-auto px-4 space-y-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white w-full">
                    GET APPOINTMENT
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
