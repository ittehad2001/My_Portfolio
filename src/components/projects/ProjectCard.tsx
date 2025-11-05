"use client"

import { useEffect, useState } from "react"
import { useRef } from "react"
import Image from "next/image"
import { ExternalLink, Github, X } from "lucide-react"
import type { Project } from "@/types"
import { useAppContext } from "@/context/AppContext"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: Project;
  index: number;
};
interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string
}

// Image Modal Component
function ImageModal({ isOpen, onClose, image, title }: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal content */}
      <div
        className={`relative max-w-7xl w-full transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute -top-12 right-0 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>

        {/* Image */}
        <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

// ProjectCard Component
export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const { techIcons } = useAppContext()

  // Get tech icons for the project
  const projectTechs = project.techIds.map(techId =>
    techIcons.find(tech => tech.id === techId)
  ).filter(Boolean) as typeof techIcons

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
        ref={ref}
        className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        style={{
          transitionDelay: `${index * 0.1}s`,
        }}
      >
        <div
          className={`group h-full relative rounded-2xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 hover:border-white/20 ${isHovered ? 'z-10' : ''
            }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <div className="grid md:grid-cols-[350px,2fr] gap-0 h-full">
         
            <div
              className="relative h-full min-h-[280px] overflow-hidden bg-black/60 cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/20 border border-green-500/30 text-green-300 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Featured
                  </span>
                </div>
              )}
              {/* Currently Working badge */}
              {project.current && (
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/20 border border-blue-500/30 text-blue-300 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    Currently Working
                  </span>
                </div>
              )}

              <div
                className={`absolute inset-0 transition-all duration-500 ease-out ${isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-90'
                  }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />



              {/* Hover overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <div className="text-white text-xs font-medium px-3 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  Click to enlarge
                </div>
              </div>
            </div>

            {/* Content - Right side */}
            <div className="p-8 flex flex-col justify-between">
              {/* Title and description */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-white/70 text-base leading-relaxed mb-4">
                  {project.shortDescription}
                </p>
                {project.longDescription && (
                  <div className="text-white/60 text-sm leading-relaxed whitespace-pre-line space-y-1">
                    {project.longDescription.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
              {/* Tech stack icons overlay */}
             {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projectTechs.map((tech) => (
                tech && (
                  <span
                    key={tech.id}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${tech.color}`}
                  >
                    {tech.icon && <span className="text-sm">{tech.icon}</span>}
                    {tech.name}
                  </span>
                )
              ))}
            </div>
              {/* Actions */}
              <div className="flex gap-3 pt-6 mt-6 border-t border-white/10">
                {project.demoUrl && (
                  <Button size="sm" asChild className="flex-1">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={project.image}
        title={project.title}
      />
    </>
  )
}