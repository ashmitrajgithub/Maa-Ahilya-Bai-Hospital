import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from "lucide-react"

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Our Service", href: "#services" },
  { label: "Our Team", href: "#doctors" },
  { label: "Contact Us", href: "#contact" }
]

const importantLinks = [
  { label: "Our Process", href: "#" },
  { label: "Appointment", href: "#" },
  { label: "Faq", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" }
]

const quickLinks = [
  { label: "Why Choose Us", href: "#" },
  { label: "Pricing Plan", href: "#pricing" },
  { label: "News & Articles", href: "#blog" },
  { label: "Login", href: "#" },
  { label: "Subscribe", href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-tight">MAA AHILYA BAI</p>
                <p className="text-xs font-semibold text-primary">HOSPITAL</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-6 max-w-xs">
              There are to popular belie Lorem is Ipsum is not simply random.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important */}
          <div>
            <h4 className="font-semibold text-white mb-4">Important</h4>
            <ul className="space-y-3">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Link</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white text-sm">Official Info</p>
                <p className="text-white/70 text-sm">2767 Sunrise Street, NY 1002, USA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-white/70 text-sm">company@gmail.com</p>
                <p className="text-white/70 text-sm">Hello to: support@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-white/70 text-sm">+965548547564</p>
                <p className="text-white/70 text-sm">Follow: fin</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-white/50 text-sm">
            © 2024 Maa Ahilya Bai Hospital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
