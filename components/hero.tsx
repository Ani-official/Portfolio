"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = ["Software Developer", "Full-Stack Developer", "Problem Solver", "Tech Explorer "]

  // Typing effect
  useEffect(() => {
    const currentRole = roles[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [typedText, currentIndex, isDeleting, roles])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        },
      )

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1,
        },
      )

      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 1.5,
        },
      )

      // Enhanced floating animation for shapes
      gsap.to(".shape-1", {
        x: 30,
        y: -40,
        rotation: 180,
        duration: 10,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".shape-2", {
        x: -25,
        y: 35,
        rotation: -90,
        duration: 12,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(".shape-3", {
        x: 40,
        y: 20,
        rotation: 270,
        duration: 14,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      // Blurry background shapes animation
      gsap.to(".blur-shape", {
        scale: 1.2,
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".blur-shape-2", {
        scale: 0.8,
        rotation: -360,
        duration: 25,
        ease: "none",
        repeat: -1,
      })

      gsap.to(".blur-shape-3", {
        scale: 1.1,
        rotation: 180,
        duration: 30,
        ease: "none",
        repeat: -1,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

      {/* Blurry Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large blurry shapes - more constrained */}
        <div className="blur-shape absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-emerald-300/40 to-teal-300/40 dark:from-emerald-600/30 dark:to-teal-600/30 rounded-full blur-3xl"></div>
        <div className="blur-shape-2 absolute -bottom-32 -right-32 w-56 h-56 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-300/40 to-emerald-300/40 dark:from-cyan-600/30 dark:to-emerald-600/30 rounded-full blur-3xl"></div>
        <div className="blur-shape-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-teal-300/30 to-cyan-300/30 dark:from-teal-600/20 dark:to-cyan-600/20 rounded-full blur-3xl"></div>

        {/* Medium blurry shapes - more constrained */}
        <div className="absolute top-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 dark:from-emerald-500/20 dark:to-teal-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-56 sm:h-56 bg-gradient-to-r from-cyan-200/50 to-emerald-200/50 dark:from-cyan-500/20 dark:to-emerald-500/20 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-[1px]"></div>

      {/* Enhanced Floating Shapes (smaller and more constrained) */}
      <div className="floating-shapes absolute inset-0 overflow-hidden">
        <div className="shape shape-1 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 dark:from-emerald-400/30 dark:to-teal-400/30 rounded-full blur-lg"></div>
        <div className="shape shape-2 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 dark:from-cyan-400/30 dark:to-emerald-400/30 rounded-2xl rotate-45 blur-md"></div>
        <div className="shape shape-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 dark:from-teal-400/30 dark:to-cyan-400/30 rounded-full blur-md"></div>
        <div className="shape w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 dark:from-emerald-400/25 dark:to-cyan-400/25 rounded-lg rotate-12 blur-sm"></div>
        <div className="shape w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-r from-cyan-400/15 to-teal-400/15 dark:from-cyan-400/25 dark:to-teal-400/25 rounded-full blur-lg"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[linear-gradient(rgba(16,185,129,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div ref={textRef} className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 relative">
            <span className="moving-gradient-text">Aniket Kirtane</span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-500 dark:via-teal-500 dark:to-cyan-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div ref={subtitleRef} className="mb-12">
          <div className="text-2xl sm:text-3xl text-slate-700 dark:text-muted-foreground mb-6 font-light h-12 flex items-center justify-center">
            <span className="text-emerald-700 dark:text-primary font-medium">
              {typedText}
              <span className="animate-pulse text-emerald-600 dark:text-emerald-400">|</span>
            </span>
          </div>
          <p className="text-lg text-slate-600 dark:text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and clean, efficient code. Passionate about building impactful solutions through code. I love turning ideas into reality and solving real-world problems with creativity and precision.
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#projects"
            className="group px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 border-2 border-emerald-600/30 dark:border-border text-slate-700 dark:text-foreground rounded-full font-medium hover:bg-emerald-50 dark:hover:bg-accent hover:border-emerald-600/50 dark:hover:border-emerald-500 hover:scale-105 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-slate-500 dark:text-muted-foreground" />
      </div>
    </section>
  )
}
