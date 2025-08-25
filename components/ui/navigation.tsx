"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Team", href: "/our-team" },
    { name: "Events", href: "/events" },
    { name: "Prospective Members", href: "/prospective-members" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <Image src="/images/promologo.png" alt="Product Motion Logo" width={80} height={80} />
            </div>
          </motion.div>

          {/* Centered Navigation Items */}
          <div className="hidden md:flex items-center justify-center space-x-8 flex-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  scroll={true}
                  className={`font-medium transition-all duration-300 relative group ${
                    pathname === item.href ? "text-[#0C8731]" : "text-black hover:text-[#0C8731]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#0C8731] transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Apply Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
          <Link href="/apply-now" scroll={true}>
            <Button
              className="text-white font-bold px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-[#0C8731]/25 transition-all duration-300 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/mesh-bg.png')",
              }}
            >
              Apply Now
            </Button>
          </Link>

          </motion.div>
        </div>
      </div>
    </nav>
  )
}
