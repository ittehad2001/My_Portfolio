"use client"

import { createContext, useContext, type ReactNode } from "react"
import { Home, User, Briefcase, Mail, Linkedin, Github } from "lucide-react"
import type { NavItem, Project, TechIcon, Experience } from "../types"
import { FaLaravel, FaReact, FaPhp, FaWordpressSimple, FaHtml5, FaBootstrap } from "react-icons/fa"
import { SiMysql } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri"
import { PiFileCss } from "react-icons/pi"

interface AppContextType {
  navItems: NavItem[]
  projects: Project[]
  techIcons: TechIcon[]
  experiences: Experience[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const navItems: NavItem[] = [
    {
      id: "home",
      title: "Home",
      href: "#home",
      icon: <Home className="w-5 h-5" />,
      tooltip: "Home",
    },
    {
      id: "about",
      title: "About",
      href: "#about",
      icon: <User className="w-5 h-5" />,
      tooltip: "About",
    },
    {
      id: "projects",
      title: "Projects",
      href: "#projects",
      icon: <Briefcase className="w-5 h-5" />,
      tooltip: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
      href: "#contact",
      icon: <Mail className="w-5 h-5" />,
      tooltip: "Contact",
    },
    {
      id: "Linkedin",
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ittehadbinrahim/",
      icon: <Linkedin className="w-5 h-5" />,
      tooltip: "LinkedIn"
    },
    {
      id: "github",
      title: "github",
      href: "https://github.com/ittehad2001",
      icon: <Github className="w-5 h-5" />,
      tooltip: "github"
    },
  ]

  const techIcons: TechIcon[] = [
    { id: "Laravel", name: "Laravel", color: "text-red-500", icon: <FaLaravel /> },
    { id: "PHP", name: "PHP", color: "text-purple-500", icon: <FaPhp /> },
    { id: "WordPress", name: "WordPress", color: "text-blue-500", icon: <FaWordpressSimple /> },
    { id: "HTML5", name: "HTML5", color: "text-orange-500", icon: <FaHtml5 /> },
    { id: "CSS3", name: "CSS3", color: "text-blue-400", icon: <PiFileCss /> },
    { id: "Bootstrap", name: "Bootstrap", color: "text-purple-400", icon: <FaBootstrap /> },
    { id: "Tailwind", name: "Tailwind", color: "text-cyan-500", icon: <RiTailwindCssFill /> },
    { id: "React", name: "React", color: "text-cyan-700", icon: <FaReact /> },
    { id: "MySQL", name: "MySQL", color: "text-blue-500", icon: <SiMysql /> },

  ]

  const projects: Project[] = [
    {
      id: "1",
      title: "Oxbridge Launchpad (Growthly IT)",
      shortDescription: "A modern Learning Management System (LMS) built specifically for Oxford and Cambridge admission preparation. The platform delivers structured online courses, personalized coaching, and interactive tools to help students excel in their applications.Since its launch, it has guided learners from schools across the UK, with hundreds of candidates successfully securing places at Oxford and Cambridge.",
      longDescription:
        "",
      image: "/oxbrige-launchpad.jpeg",
      demoUrl: "https://oxbridgelaunchpad.com/",
      repoUrl: "",
      techIds: ["Laravel", "PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
      featured: false,
      current: true
    },
    {
      id: "2",
      title: "COSMIC (W3explorers)",
      shortDescription: `COSMIC – Laravel 8 Container Management ERP
A comprehensive ERP system that streamlines container logistics from assignment to delivery. Features include container & client management, survey & loading operations, tallying with barcode/QR scanning, PDF/document generation, role-based multi-user access, Excel import/export, API integration via Laravel Passport, and advanced reporting. `,
      longDescription:
        "",
      image: "/cosmic.jpeg",
      demoUrl: "https://www.cosmicctg.com/",
      repoUrl: "",
      techIds: ["Laravel", "PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
      featured: true,
      current: false,
    },
    {
      id: "3",
      title: "Bangladesh Maritime Training Institute LMS (W3explorers)",
      shortDescription: "A Laravel 8-based Learning Management System for maritime education, supporting Administrators, Teachers, and Students. The platform features multimedia-based essay learning, exam management, course enrollment, student evaluation, and comprehensive reporting.With Laravel Passport authentication, DataTables integration, and backup/restore functionality, it ensures secure and efficient management of academic data.",
      longDescription:
        "",
      image: "/BCSIR.jpeg",
      demoUrl: "https://onlineexam.w3schoolbd.org/",
      repoUrl: "",
      techIds: ["Laravel", "PHP", "HTML", "CSS", "Bootstrap", "MySQL"],
      featured: false,
      current: false,
    },

  ]

  /*  <p className="text-white/70 leading-relaxed mb-4">
                    {exp.description}
                  </p> */
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Full Stack Developer",
      company: "Growthly IT",
      companyUrl: "https://growthlyit.com/",
      companyLogo: "/growtly.jpg",
      period: "2025 — Present",
      description:
        ` <p className="text-white/70 leading-relaxed mb-4">
                    Currently managing a Learning Management System with active users, where I handle full-stack operations from backend logic and database management to frontend updates and user experience improvements.
                  </p>`,
      techIds: ["Laravel", "PHP", "HTML5", "CSS3", "Bootstrap", "MySQL"],
    },
    {
      id: "2",
      title: "Full Stack Developer",
      company: "W3explorers",
      companyUrl: "https://www.w3xplorers.com/",
      companyLogo: "/w3-explorer-logo.jpeg",
      period: "2024 — 2025",
      description: `<div class="space-y-4">
        <div>
          <h4 class="font-bold text-white mb-2">Bangladesh Maritime Training Institute LMS</h4>
         <p>Built a Laravel 8 LMS supporting Admins, Teachers, and Students, with multimedia-based learning, exams, course management, reporting, and secure authentication/data handling.</p>
        </div>
        <div>
          <h4 class="font-semibold text-white mb-2">COSMIC – Container Management ERP</h4>
         <p>Developed a Laravel 8 ERP for container logistics, handling full lifecycle operations, container tracking, barcode/QR scanning, document generation, role-based access, API integration, and advanced reporting.</p>
        </div>
      </div>

`,
      techIds: ["Laravel", "PHP", "HTML5", "CSS3", "Bootstrap", "MySQL"],
    },
  ]

  return <AppContext.Provider value={{ navItems, projects, techIcons, experiences }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}