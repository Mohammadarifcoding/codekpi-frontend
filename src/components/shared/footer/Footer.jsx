"use client"

import { Mail, MapPin, Github, Linkedin, Twitter, ArrowRight, Youtube, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import SocialLinks from "../social/SocialLinks"
import CustomButton from "../Button/CustomButton"
import logo from '/src/assets/Logo/logo2.png'
import Image from "next/image"
import Link from "next/link"
import Container from "../Container"



const Footer = ({ className = "" }) => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
        { href: "https://www.facebook.com/Codekpi/", icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
    { href: "https://github.com/CodeKPI", icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { href: "https://www.youtube.com/channel/UCp2PaqHwu86L_xw1GY2smYA", icon: <Youtube className="w-5 h-5" />, label: "Youtube" },

  ]

  return (
    <footer className={`relative bg-gradient-to-br from-gray-50 to-white border-t border-gray-100 ${className}`}>
      <Container className=" px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand and Contact */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Link href="/" className="flex-shrink-0">
          <Image
            src={logo || "/placeholder.svg"}
            width={90}
            height={30}
            alt="Company Logo"
            className={`transition-all duration-300 hover:scale-105 h-auto sm:w-[80px] w-[60px]`}
            priority
          />
          </Link>
              <p className="text-sm text-gray-500">Khulna Polytechnic Institute</p>
            </div>

            {/* Contact Info - Simplified */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm">Khulna Polytechnic Institute, Khulna</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm">contact@codekpi.club</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Simplified */}
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Join CTA - Simplified */}
          <div className="flex flex-col items-start md:items-end">
            <CustomButton Icon={ArrowRight}>
Join Our Community

            </CustomButton>

            <div className="flex gap-2 mt-4">
              {socialLinks.map((social) => (
                <SocialLinks key={social.label} href={social.href} icon={social.icon} label={social.label} />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright - Simplified */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {currentYear} CodeKPI. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="#privacy" className="text-gray-500 hover:text-orange-500 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-orange-500 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer