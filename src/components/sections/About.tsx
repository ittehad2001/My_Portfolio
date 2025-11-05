"use client"

import { SectionReveal } from "@/components/ui/SectionReveal"
import { useAppContext } from "@/context/AppContext"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function About() {
  const { techIcons, experiences } = useAppContext()

  return (
    <section id="about" className="relative min-h-screen py-32 px-6">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 mb-20">
          {/* Profile Section */}
          <SectionReveal delay={0.1} className="lg:col-span-2">
            <div className="relative">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl" />
                <div className="relative w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
                  <Image
                    src="/ittehad-pic.jpeg"
                    alt="Profile"
                    width={192}
                    height={192}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-semibold mb-6 text-white">Background</h3>
                <div className="space-y-4 text-white/70 leading-relaxed text-justify">
                  <p>
                    I’m a developer with over <span className="font-bold text-xl text-white">2+ years</span> of experience, passionate about building scalable and reliable backends that power modern web applications. While I enjoy crafting clean and efficient code, my strength lies in architecting systems that balance performance, security, and usability
                  </p>
                  <p>
                    I specialize in <span className="font-bold text-purple-600">PHP</span> and <span className="font-bold text-red-600">Laravel</span>, <span className="font-bold text-blue-500">MySQL</span> with a strong foundation in <span className="font-bold text-orange-600">HTML</span>, <span className="font-bold text-blue-500">CSS</span>, and <span className="font-bold text-blue-300">Bootstrap</span>, enabling me to deliver complete solutions when needed. My focus is always on writing maintainable, well-structured code and creating applications that are as robust under the hood as they are smooth for users.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Technologies Section */}
          <SectionReveal delay={0.2} className=" lg:col-span-3">
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold mb-6 text-white">Technologies & Tools</h3>
              <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl mt-4 p-6">
                {/* Subtle corner accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-500/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-500/10 to-transparent rounded-tr-full" />

                <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {techIcons.map((tech) => (
                    <div
                      key={tech.id}
                      className="group relative"
                    >
                      {/* Card background with gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-gray-600/20 to-gray-700/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />

                      {/* Main card */}
                      <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-5 group-hover:border-white/30 transition-all duration-300">
                        <div className="flex flex-col items-center text-center space-y-3">
                          {/* Icon container with background */}
                          <div className="relative w-14 h-14 flex items-center justify-center">
                            <div className={`absolute inset-0 ${tech.color.replace('text-', 'bg-')}/10 rounded-lg blur-md group-hover:blur-lg transition-all duration-300`} />
                            <div className={`relative text-5xl ${tech.color} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                              {tech.icon}
                            </div>
                          </div>

                          {/* Tech name */}
                          <div className="space-y-1">
                            <div className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                              {tech.name}
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>


              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Experience Section */}
        <SectionReveal delay={0.3}>
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-500 to-gray-600 rounded-l-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={exp.companyLogo || "/company-placeholder.png"}
                          alt={exp.company}
                          width={70}
                          height={70}
                          className="object-contain"
                        />
                      </a>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-white/50 font-medium bg-white/5 px-4 py-2 rounded-full border border-white/10 whitespace-nowrap self-start">
                      {exp.period}
                    </span>
                  </div>

                  {exp.description && (
                    <div
                      className="text-white/70 leading-relaxed mb-4 decoration-1 [&_li]:list-item [&_li]:pl-5 [&_li]:mb-2"
                      dangerouslySetInnerHTML={{ __html: exp.description }}
                    />
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.techIds.map((techId) => {
                      const tech = techIcons.find((t) => t.id === techId)
                      return tech ? (
                        <Badge key={techId} variant="default" className={tech.color}>
                          {tech.name}
                        </Badge>
                      ) : null
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}