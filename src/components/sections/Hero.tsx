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
      className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 md:px-6 overflow-hidden"
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
      <div className="relative max-w-5xl mx-auto text-center z-10 w-full">
        <SectionReveal>
          <ShinyBadge text="Actively looking for opportunities" className="mb-4 sm:mb-5 md:mb-6" />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h1 className="text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-white leading-tight tracking-tight px-2 sm:px-0">
            <span className="inline-block bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              Crafting Beautiful &
            </span>
            <br className="hidden min-[375px]:block" />
            <span className="inline-block bg-gradient-to-r from-white/60 via-white to-white bg-clip-text text-transparent min-[375px]:mt-1 sm:mt-0">
              Functional Web Experiences
            </span>
          </h1>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p className="text-xs min-[375px]:text-sm sm:text-base md:text-lg text-white/70 mb-6 sm:mb-7 md:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed px-2 min-[375px]:px-3 sm:px-4 md:px-6">
            Hey there, I&apos;m Ittehad Bin Rahim, a Full Stack Developer driven by the challenge of building applications that are performant, intuitive, and built to scale.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 md:gap-4 justify-center items-center mb-12 sm:mb-14 md:mb-16 px-2 sm:px-0">
            <Button 
              size="default" 
              asChild 
              className="w-full min-[375px]:w-auto px-4 min-[375px]:px-5 sm:px-6 py-2.5 min-[375px]:py-3 md:p-6 hover:bg-neutral-700 text-sm min-[375px]:text-base"
            >
              <a href="#projects" className="group relative overflow-hidden">
                <span className="relative z-10">View Projects</span>
              </a>
            </Button>
            <Button
              size="default"
              variant="default"
              asChild
              className="w-full min-[375px]:w-auto bg-white px-4 min-[375px]:px-5 sm:px-6 py-2.5 min-[375px]:py-3 md:p-6 text-black hover:bg-gray-100 text-sm min-[375px]:text-base"
            >
              <a href="https://drive.google.com/file/d/1yr08sNgvscJyWhApYE5vxoGvJCX__qqR/view?usp=sharing" className="group flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
                <File className="w-4 h-4 min-[375px]:w-4 min-[375px]:h-4" />
                <span>Resume</span>
              </a>
            </Button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1.5 sm:gap-2 text-white/50 hover:text-white transition-colors duration-300 group"
            aria-label="Scroll to about section"
          >
            <span className="text-xs min-[375px]:text-sm font-medium tracking-wide">Scroll to explore</span>
            <ArrowDown
              className="w-4 h-4 min-[375px]:w-5 min-[375px]:h-5 group-hover:translate-y-1 transition-transform duration-300"
              style={{ animation: "float 3s ease-in-out infinite" }}
            />
          </a>
        </SectionReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 min-[375px]:h-28 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}