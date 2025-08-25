import { motion } from "framer-motion" 
import { Button } from "@/components/ui/button" 
import Link from "next/link" 

interface HeroSectionProps { 
  title: string 
  description?: string
  primaryButton?: 
  { text: string 
    href: string 
  } 
} 

export default function HeroSection(
  { title, description, primaryButton }: HeroSectionProps) 
  { return ( 
  <section className="min-h-screen flex items-center relative overflow-hidden"> 
  <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
    style={{ backgroundImage: "url('/images/wave.png')", backgroundSize: "100% 100%", }} 
  /> 
  <div className="relative z-20 max-w-7xl mx-auto px-4 w-full"> 
    <div className="max-w-2xl"> 
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }} > 
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight text-black drop-shadow-lg" 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} > {title} 
        </motion.h1> {description && ( <motion.p className="text-lg md:text-xl text-gray-700 mb-8 font-medium leading-relaxed" 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} > {description} </motion.p> )} 
        </motion.div> {primaryButton && ( <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} > <Link href={primaryButton.href}> <Button style={{ backgroundImage: "url('/images/mesh-bg.png')", backgroundSize: "cover", backgroundPosition: "center", }} className="text-white text-lg px-10 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-2xl hover:shadow-green-500/25" > {primaryButton.text} </Button> </Link> </motion.div> )} </div> </div> </section> ) }