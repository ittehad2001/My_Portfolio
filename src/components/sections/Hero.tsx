"use client"

import { SectionReveal } from "@/components/ui/SectionReveal"
import { ShinyBadge } from "@/components/ui/ShinyBadge"
import { Button } from "@/components/ui/button"
import { ArrowDown, File } from "lucide-react"
import LightRays from "../LightRays"

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Light Rays */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <LightRays
          raysOrigin="top-center"
          raysColor="hsl(0 0% 100% / 0.1)"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        <SectionReveal>
          <ShinyBadge text="Actively looking for opportunities" className="mb-6" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight tracking-tight">
            <span className="inline-block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Crafting Beautiful &
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-white/60 via-white to-white bg-clip-text text-transparent">
              Functional Web Experiences
            </span>
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Hey there, I’m Ittehad Bin Rahim, a Full Stack Developer driven by the challenge of building applications that are performant, intuitive, and built to scale.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" asChild>
              <a href="#projects" className="group relative overflow-hidden">
                <span className="relative z-10">View Projects</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="default"
              asChild
              className="bg-white text-black hover:bg-white/10 hover:text-white"
            >
              <a href="https://drive.google.com/file/d/1ImAFJPGWglhds6j65s6m_fU2Ok6MR32S/view?usp=sharing" className="group" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center justify-between gap-2"><span><File /></span> Resume </span>
              </a>
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium tracking-wide">Scroll to explore</span>
            <ArrowDown
              className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300"
              style={{ animation: "float 3s ease-in-out infinite" }}
            />
          </a>
        </SectionReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
