"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink, Github, Globe, Shield, CreditCard, Users, Zap, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    id: 1,
    title: "Background Removal Website",
    description:
      "A seamless tool for removing image backgrounds with user authentication, payment integration via Razorpay, and a credits system. Built with React, Node.js, and MongoDB Atlas.",
    icon: Globe,
    image: "/bg-project.png",
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Clerk", "Razorpay"],
    github: "https://github.com/Ani-official/Remove-Bg",
    demo: "https://bg-remove-one.vercel.app/",
    gradient: "from-emerald-500 to-teal-500",
    features: [
      { icon: Users, text: "User Authentication with Clerk" },
      { icon: Zap, text: "AI-Powered Background Removal" },
      { icon: CreditCard, text: "Razorpay Payment Integration" },
      { icon: Shield, text: "Secure Credits System" },
    ],
  },
  {
    id: 2,
    title: "YouTube Ad Blocker Extension",
    description:
      "A browser extension demonstrating ad blocking using declarativeNetRequest API (Manifest V3). Features toggle functionality and educational implementation of Chrome Extension APIs.",
    icon: Shield,
    image: "/ad-block-project.jpg",
    technologies: ["JavaScript", "Chrome Extension API", "Manifest V3", "HTML", "CSS"],
    github: "https://github.com/Ani-official/Youtube-Ad-Blocker-Extension",
    demo: "#",
    gradient: "from-cyan-500 to-blue-500",
    features: [
      { icon: Shield, text: "Declarative Network Rules" },
      { icon: Code, text: "Manifest V3 Compatible" },
      { icon: Zap, text: "Toggle Ad Blocking" },
      { icon: Users, text: "Educational Purpose" },
    ],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Projects animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Feature items animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".feature-item",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Image hover animations
      const projectImages = document.querySelectorAll(".project-image")
      projectImages.forEach((img) => {
        img.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.05, duration: 0.3, ease: "power2.out" })
        })
        img.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="project-card group overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-sm transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} preview`}
                    width={800}
                    height={400}
                    className="project-image w-full h-48 sm:h-65 object-cover transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                    >
                      <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 dark:bg-black/90 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                      </a>
                    )}
                  </div>

                  {/* Project Type Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full shadow-lg`}
                    >
                      {project.id === 1 ? "Web Application" : "Browser Extension"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg mr-4`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="feature-item flex items-center text-xs text-muted-foreground">
                          <feature.icon className="w-3 h-3 mr-2 text-primary flex-shrink-0" />
                          <span>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Educational Notice for Ad Blocker */}
                  {project.id === 2 && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <div className="flex items-start">
                        <Shield className="w-3 h-3 text-amber-600 dark:text-amber-400 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-xs text-amber-700 dark:text-amber-300">
                          <strong>Educational Purpose Only:</strong> This project demonstrates browser extension
                          development. Please consider the ethical implications and support content creators.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a
            href="https://github.com/Ani-official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}
