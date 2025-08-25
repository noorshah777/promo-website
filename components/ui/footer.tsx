"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Mail, Instagram, Linkedin, Twitter, MapPin, Phone, PencilLine} from "lucide-react"

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/our-team" },
    { name: "Events", href: "/events" },
    { name: "Prospective Members", href: "/prospective-members" },
    { name: "Apply Now", href: "/apply-now" },
  ]

  const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/product.motion/", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/product-motion-umich/", icon: Linkedin },
    { name: "Application", href: "https://docs.google.com/forms/d/e/1FAIpQLSdpFom1GCV6S_HzauPqPLQHdh9roGLSgVXWuRs_dbp9MvMPgw/viewform?usp=header", icon: PencilLine },
  ]

  const contactInfo = [
    { icon: Mail, text: "product.motion.umich@gmail.com" },
    { icon: MapPin, text: "University of Michigan, Ann Arbor" },
  ]

  return (
    <footer className="bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center space-x-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image src="/images/promologo.png" alt="Product Motion Logo" width={80} height={80} />
              </div>
            </motion.div>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Building the next generation of product leaders at the University of Michigan through mentorship, hands-on
              projects, and community.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="relative rounded-xl p-3 transition-all duration-300 transform hover:scale-110"
                    style={{
                      backgroundImage: "url('/images/mesh-bg.png')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <IconComponent className="h-5 w-5 text-white transition-colors duration-300 group-hover:text-black" />
                    <span className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-100 border-black border-2"></span>
                  </a>
                )
              })}
            </motion.div>
          </div>

          {/* Navigation Links */}
          <div>
            <motion.h3
              className="font-bold text-black text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Navigation
            </motion.h3>
            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#0C8731] transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div>
            <motion.h3
              className="font-bold text-black text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h3>
            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <li key={index} className="flex items-center space-x-3">
                    <IconComponent className="h-5 w-5 text-[#0C8731] flex-shrink-0" />
                    <span className="text-gray-400 font-medium">{contact.text}</span>
                  </li>
                )
              })}
            </motion.ul>
          </div>
        </div>

      </div>
    </footer>
  )
}
