"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 500)
        },
      })

      // Animate the geometric shapes
      tl.fromTo(
        ".loader-shape",
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
      )

      // Animate progress bar
      tl.fromTo(
        progressRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.5",
      )

      // Animate text
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=1.5",
      )

      // Continuous rotation for shapes
      gsap.to(".loader-shape-1", {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".loader-shape-2", {
        rotation: -360,
        duration: 4,
        repeat: -1,
        ease: "none",
      })

      gsap.to(".loader-shape-3", {
        rotation: 360,
        duration: 5,
        repeat: -1,
        ease: "none",
      })

      // Floating animation
      gsap.to(".loader-shape", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      })

      // Final exit animation
      tl.to(
        loaderRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "+=0.5",
      )
    }, loaderRef)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(16,185,129,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="text-center">
        {/* Geometric Shapes */}
        <div className="relative mb-12">
          <div className="loader-shape loader-shape-1 absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg rotate-45"></div>
          <div className="loader-shape loader-shape-2 absolute -top-4 -right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
          <div className="loader-shape loader-shape-3 absolute -bottom-8 -left-4 w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg"></div>

          {/* Main Logo */}
          <div className="loader-shape w-24 h-24 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
            <span className="text-3xl font-bold text-white">AK</span>
          </div>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mb-8">
          <h2 className="text-2xl font-bold gradient-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
            Aniket.Dev
          </h2>
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
