"use client"

import { Mail, Linkedin, Download, Github } from "lucide-react"

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "hello@harshalirane.com",
      icon: Mail,
      href: "mailto:hello@harshalirane.com",
      color: "text-primary",
    },
    {
      label: "LinkedIn",
      value: "harshali-rane",
      icon: Linkedin,
      href: "https://linkedin.com/in/harshali-rane",
      color: "text-secondary",
    },
    {
      label: "Resume",
      value: "View PDF",
      icon: Download,
      href: "/resume",
      color: "text-accent",
    },
    {
      label: "GitHub",
      value: "@harshalir23",
      icon: Github,
      href: "https://github.com/harshalir23",
      color: "text-primary",
    },
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-12 sm:space-y-16">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Let's get in touch!
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-4">
              I'm always interested in discussing product strategy, collaboration opportunities, or just chatting about
              tech.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            {contacts.map((contact, idx) => {
              const Icon = contact.icon
              return (
                <a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 text-center hover:text-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <div className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {contact.label}
                  </div>
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center text-xs sm:text-sm text-muted-foreground">
          <p>© 2025 Harshali Rane. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
