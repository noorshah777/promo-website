"use client"

import { motion } from "framer-motion"
import { Trophy, Car, Heart, Plane, Snowflake, Dice6, Laptop, Globe, CupSoda, Notebook, Volleyball, Star, Linkedin, Mail, Coffee, Gamepad2, Music, Camera, Book, Dumbbell, Award, Users, Target, Crown, Cat } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeader } from "@/components/ui/section-header"
import HeroSection from "@/components/ui/hero-section"
import Navigation from "@/components/ui/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { TbYoga, TbStretching } from "react-icons/tb"
import { FaTableTennis, FaBirthdayCake } from "react-icons/fa"
import { GiLipstick, GiPokerHand, GiSoccerBall} from "react-icons/gi"
import { PiYarnThin } from "react-icons/pi"
import { LuChefHat } from "react-icons/lu"

import Footer from "@/components/ui/footer"

export default function OurTeamPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)

  const eboard = [
  {
    name: "Jerusha Manoj",
    role: "President",
    company: "Computer Science",
    bio: "Chickentarian + Cold Brew Lover + Pickleballer + Nyc Lover",
    image: "images/JerushaM.jpg",
    interests: [Book, Dumbbell, Music],
    linkedin: "https://www.linkedin.com/in/jerusha-manoj-ba830023b/",
    email: "jerusham@umich.edu",
  },
  {
    name: "Selay Erturk",
    role: "VP of Internal Relations",
    company: "Computer Science",
    bio: "Notion Nerd + Chicken Nuggie Devotee",
    image: "images/SelayE.jpg",
    interests: [Car, Music, TbYoga],
    linkedin: "www.linkedin.com/in/selayerturk",
    email: "selay@umich.edu",
  },
  {
    name: "Naman Jain",
    role: "VP of Professional Development",
    company: "Computer Science",
    bio: "Travel Lover (30 Countries and Counting!) + Pizza Maker",
    image: "images/NamanJ.jpg",
    interests: [FaTableTennis, Crown, Plane],
    linkedin: "linkedin.com/in/naman-jain04",
    email: "jainaman@umich.edu",
  },
  {
    name: "Noor Shah",
    role: "VP of Marketing",
    company: "Business and Computer Science",
    bio: "Professional Balloon Twister + Owala Enthusiast",
    image: "images/NoorS.JPG",
    interests: [Dumbbell, GiLipstick, Cat],
    linkedin: "https://www.linkedin.com/in/noor-u-shah",
    email: "noorshah@umich.edu",
  },
  {
    name: "Leon Wang",
    role: "Event Lead",
    company: "Computer Science",
    bio: "Avid Milk Drinker",
    image: "images/LeonW.jpg",
    interests: [Dumbbell, Trophy, Gamepad2],
    linkedin: "https://www.linkedin.com/in/leonwang3/",
    email: "wangleon@umich.edu",
  },
  {
    name: "Pat Socha",
    role: "Event Lead",
    company: "Business and UX Design",
    bio: "Avid Drag Racer, Deep Web Enthusiast, A Scam Operation's Worst Nightmare",
    image: "images/PatS.jpeg",
    interests: [Laptop, GiPokerHand, Music],
    linkedin: "https://www.linkedin.com/in/patrick-socha?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "patsocha@umich.edu",
  },
  {
    name: "Duli Kim",
    role: "Project Lead",
    company: "Data Analytics and Computer Science",
    bio: "Snowboard Lover",
    image: "images/DuliK.png",
    interests: [GiSoccerBall, Coffee, Plane],
    linkedin: "https://www.linkedin.com/in/duli-kim",
    email: "Duli@umich.edu",
  },
  {
    name: "Katie Lee",
    role: "Project Lead",
    company: "Computer Science and UX Design",
    bio: "Notion Enthusiast + Avid LinkedIn Games Player + History Documentary Buff",
    image: "images/KatieL.jpg",
    interests: [PiYarnThin, Camera, FaBirthdayCake],
    linkedin: "www.linkedin.com/in/ktjlee",
    email: "leekatie@umich.edu",
  },
  {
    name: "Neelu Jaberi",
    role: "Project Lead",
    company: "Computer Science and UX Design",
    bio: "TV Show Binger + Code Tinkerer",
    image: "images/NeeluJ.jpeg",
    interests: [TbStretching, Book, LuChefHat],
    linkedin: "https://www.linkedin.com/in/neelufarjaberi",
    email: "jaberin@umich.edu",
  },
  {
    name: "Sanika Kothari",
    role: "Project Lead",
    company: "Computer Science",
    bio: "Professional Yapper + Impact-Driven Builder",
    image: "images/SanikaK.jpg",
    interests: [Plane, Music, Camera],
    linkedin: "https://www.linkedin.com/in/sanika-kothari/",
    email: "sanikako@umich.edu",
  },
]

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Navigation />

        <HeroSection
          title="Meet the motion makers"
          description="Our team is made up of product-obsessed students who are here to build something better—for themselves and others. We're passionate about mentorship, community, and creating opportunities."
          primaryButton={{
            text: "Join Our Team",
            href: "/apply-now",
          }}
        />

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              label="Leadership Team"
              title="The people behind the motion"
              description="Meet the passionate students leading Product Motion and driving our mission forward."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {eboard.map((member, index) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  hoverScale={1.03}
                  glowEffect={true}
                  className="overflow-hidden group h-full"
                >
                  <div
                    className="p-0 h-full flex flex-col"
                    onMouseEnter={() => setHoveredMember(index)}
                    onMouseLeave={() => setHoveredMember(null)}
                  >
                    <div className="relative">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredMember === index ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex space-x-4">
                          {member.interests.map((Interest, i) => (
                            <div
                              key={i}
                              className="rounded-full p-3 hover:scale-110 transition-transform duration-200"
                              style={{
                                backgroundImage: "url('/images/mesh-bg.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                              }}
                            >
                              <Interest className="h-6 w-6 text-white group-hover:text-white" />
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-2xl font-bold mb-1 text-black">{member.name}</h3>
                      <div className="text-[#0C8731] font-semibold mb-2">{member.role}</div>
                      <div className="text-gray-600 text-sm mb-3 font-medium">{member.company}</div>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">{member.bio}</p>
                      <div className="flex space-x-3">
                        <a href={member.linkedin} className="text-gray-600 hover:text-[#0C8731] transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-600 hover:text-[#0C8731] transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* <section id="testimonials" className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              label="Community Impact"
              title="What our members achieve"
              description="Real stories from students whose careers were transformed by Product Motion."
            />

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={index} delay={index * 0.1} hoverScale={1.02} glowEffect={true} className="h-full">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <div className="font-bold text-black">{testimonial.author}</div>
                        <div className="text-[#0C8731] text-sm font-semibold">{testimonial.role}</div>
                        <div className="text-gray-600 text-xs">{testimonial.company}</div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 leading-relaxed font-medium">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section> */}

        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-black">Ready to join our team?</h2>
              <p className="text-xl text-gray-700 mb-12 font-medium">
                We're always looking for passionate students who want to make an impact in the product world and help
                others grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/apply-now">
                  <Button className="bg-gradient-to-r from-[#0C8731] to-[#0f9c0c] text-white hover:from-[#0f9c0c] hover:to-[#0C8731] text-lg px-12 py-4 rounded-lg font-bold shadow-2xl shadow-[#0C8731]/25 hover:shadow-[#0C8731]/40 transition-all duration-300 transform hover:scale-105">
                    Apply to Join Us
                  </Button>
                </Link>
                <Link href="/events">
                  <Button
                    variant="outline"
                    className="border-2 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-black text-lg px-8 py-4 rounded-lg font-bold bg-transparent transition-all duration-300 transform hover:scale-105"
                  >
                    Meet Us at Events
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      <div
        style={{
          backgroundImage: "url('/images/mesh-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Footer />
      </div>
    </div>
  )
}
