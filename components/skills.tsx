"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTheme } from "next-themes"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        color: "#F7DF1E",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Python",
        color: "#3776AB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        color: "#ED8B00",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "TypeScript",
        color: "#3178C6",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      {
        name: "React.js",
        color: "#61DAFB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        color: "#000000",
        logo: {
          light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        },
      },
      {
        name: "Node.js",
        color: "#339933",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Docker",
        color: "#2496ED",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
  },
  {
    title: "Development Tools",
    skills: [
      {
        name: "Git",
        color: "#F05032",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "VS Code",
        color: "#007ACC",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "GitHub",
        color: "#181717",
        logo: {
          light: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          dark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
        },
        customIcon: true,
      },
      {
        name: "Figma",
        color: "#F24E1E",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
    ],
  },
  {
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        color: "#336791",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        color: "#47A248",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "MySQL",
        color: "#4479A1",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        color: "#DC382D",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
    ],
  },
]

// Custom GitHub SVG component for better theme handling
const GitHubIcon = ({ isDark }: { isDark: boolean }) => (
  <svg viewBox="0 0 24 24" className="w-12 h-12" fill={isDark ? "#ffffff" : "#181717"}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

// Custom Next.js icon - official "N" logo style
const NextJSIcon = ({ isDark }: { isDark: boolean }) => (
  <div
    className="w-12 h-12 rounded-lg flex items-center justify-center"
    style={{ backgroundColor: isDark ? "#ffffff" : "#000000" }}
  >
    <span className="text-xl font-bold" style={{ color: isDark ? "#000000" : "#ffffff" }}>
      N
    </span>
  </div>
)

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()

  const isDarkMode = theme === "dark" || resolvedTheme === "dark"

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

      // Skills categories animation
      gsap.fromTo(
        ".skill-category",
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Skill logos animation
      gsap.fromTo(
        ".skill-logo",
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Continuous floating animation for logos
      gsap.to(".skill-logo", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      })

      // Hover animations
      const skillItems = document.querySelectorAll(".skill-item")
      skillItems.forEach((item) => {
        const logo = item.querySelector(".skill-logo")
        const name = item.querySelector(".skill-name")

        item.addEventListener("mouseenter", () => {
          gsap.to(logo, { scale: 1.2, rotation: 360, duration: 0.3, ease: "power2.out" })
          gsap.to(name, { y: -5, duration: 0.3, ease: "power2.out" })
        })

        item.addEventListener("mouseleave", () => {
          gsap.to(logo, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" })
          gsap.to(name, { y: 0, duration: 0.3, ease: "power2.out" })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const getLogoSrc = (skill: any) => {
    if (typeof skill.logo === "string") {
      return skill.logo
    }
    return isDarkMode ? skill.logo.dark : skill.logo.light
  }

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border/50">
                <h3 className="text-2xl font-bold mb-8 text-center">{category.title}</h3>

                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-item flex flex-col items-center p-4 rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="skill-logo mb-3 relative">
                        {skill.name === "GitHub" ? (
                          <GitHubIcon isDark={isDarkMode} />
                        ) : skill.name === "Next.js" ? (
                          <NextJSIcon isDark={isDarkMode} />
                        ) : (
                          <img
                            src={getLogoSrc(skill) || "/placeholder.svg"}
                            alt={`${skill.name} logo`}
                            className="w-12 h-12 object-contain"
                            style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))" }}
                            loading="lazy"
                            onError={(e) => {
                              // Fallback to a simple colored square if image fails to load
                              const target = e.target as HTMLImageElement
                              target.style.display = "none"
                              const fallback = document.createElement("div")
                              fallback.className =
                                "w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                              fallback.style.backgroundColor = skill.color
                              fallback.textContent = skill.name.slice(0, 2).toUpperCase()
                              target.parentNode?.appendChild(fallback)
                            }}
                          />
                        )}
                        <div
                          className="absolute inset-0 rounded-full opacity-20 blur-xl"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                      </div>
                      <span className="skill-name font-medium text-center text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
