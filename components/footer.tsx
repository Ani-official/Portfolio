"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp, Code, Coffee, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Ani-official",
      icon: Github,
      color: "hover:text-emerald-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/aniket-kirtane",
      icon: Linkedin,
      color: "hover:text-cyan-400",
    },
    {
      name: "Email",
      href: "mailto:aniketkirtane633@gmail.com",
      icon: Mail,
      color: "hover:text-teal-400",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-emerald-500/20 overflow-x-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/5 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl mr-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Aniket Kirtane
                </span>
                <p className="text-sm text-muted-foreground">Software Developer</p>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Passionate about creating exceptional digital experiences and solving complex problems through innovative
              code solutions. Always learning, always building.
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Coffee className="w-4 h-4 mr-2 text-emerald-400" />
                <span>Fueled by coffee</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                <span>Powered by passion</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-emerald-400 transition-all duration-200 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Let's Connect</h3>
            <div className="space-y-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-muted-foreground ${link.color} transition-all duration-300 group`}
                >
                  <div className="p-2 bg-slate-800 rounded-lg mr-3 group-hover:bg-slate-700 transition-colors">
                    <link.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="text-white border-emerald-500/30 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 bg-transparent"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p className="flex items-center">© 2025 Aniket Kirtane. All rights reserved.</p>
              <p className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" /> and lots of{" "}
                <Coffee className="w-4 h-4 ml-1 text-emerald-400" />
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Built with Next.js</span>
              <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Styled with Tailwind</span>
              <span className="px-3 py-1 bg-slate-800 rounded-full border border-slate-700">Animated with GSAP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500"></div>
    </footer>
  )
}
