"use client"

import { SectionReveal } from "@/components/ui/SectionReveal"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()

    // Simple mobile detection
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

    if (!isMobile) {
      // Open Gmail in browser
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ittehadbinrahim@gmail.com`
      window.open(gmailUrl, "_blank")
    }
    
  }
  const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/ittehad2001" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ittehadbinrahim/" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  ]

  return (
    <section id="contact" className="relative min-h-screen pt-32 px-6 flex items-center overflow-hidden">


      <div className="relative max-w-4xl mx-auto text-center w-full">
        <SectionReveal>
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities. Whether you have a question or just
            want to say hi, feel free to reach out!
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mb-16">
            <Button size="lg" asChild className="group relative overflow-hidden">
              <a 
              href="mailto:ittehadbinrahim@gmail.com"
               className="flex items-center gap-2"
               onClick={handleClick}
               >
                <Mail className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Send me an email</span>

              </a>
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="flex justify-center gap-4 mb-16">
            {socials.map((social, index) => (
              <div
                key={social.label}
                className="group relative"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="relative rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 hover:scale-110 hover:rotate-6 transition-all duration-300 p-7"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center"
                  >
                    <social.icon className="size-7 text-white/70 group-hover:text-white transition-colors duration-300" />
                  </a>
                </Button>

                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:-translate-y-1">
                  {social.label}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-t border-l border-white/20 rotate-45" />
                </span>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} All Rights Reserved. Built with passion by{" "}
              <span className="text-white/60 font-medium">Ittehad Bin Rahim</span>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
