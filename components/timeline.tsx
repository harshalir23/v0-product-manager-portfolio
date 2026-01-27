export default function Timeline() {
  const experiences = [
    {
      year: "2023- Present",
      company: "Jio Platforms Limited",
      role: "Role: Product Manager for JioMeet cPaaS and Enterprise Platform",
      description:
        "Built and scaled AI-driven collaboration features in JioMeet, owning the journey from user insight to product adoption to deliver seamless enterprise experiences.",
    },
    {
      year: "2022",
      company: "Media.Net",
      role: "Role: Product Management Internship",
      description:
        "Designed an AI-powered Video Contextualization solution tapping into the $250M contextual advertising market, driving smarter ad placement through content intelligence.",
    },
    {
      year: "2021 - 2023",
      company: "MBA at FMS",
      role: "Specialization: Strategy and Information Technology",
      description:
        "Awarded 1st Runner Up (1/2) among 100+ teams for Microsoft PM Engage Corporate Competition. President of FMS Scholastic Council and member of Executive Board",
    },
    {
      year: "2018 – 2021",
      company: "Visteon Corporation",
      role: "Role: Software Developer for Infotainment Validation Platform",
      description:
        "Led the 0–1 design and development of the RoboFIT Validation Platform, a scalable automation solution for a $200M product, successfully deployed across 3 enterprise clients.",
    },
    {
      year: "2014 – 2018",
      company: "B.Tech at NIT Warangal",
      role: "Specialization: Electronics and Communication",
      description: "Received PPI Offer for qualifying All India Level Event Code UR Way 2018 organized by VISA India",
    },
  ]

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-32 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16">
          Experience & Education
        </h2>

        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 md:gap-8">
              {/* Timeline dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary ring-4 ring-background flex-shrink-0 mt-1" />
                {idx !== experiences.length - 1 && (
                  <div className="w-1 bg-gradient-to-b from-primary to-secondary flex-grow mt-4 min-h-20 sm:min-h-24" />
                )}
              </div>

              {/* Content */}
              <div className="pb-4 md:pb-0 flex-grow min-w-0">
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground font-semibold">{exp.year}</div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{exp.company}</h3>
                  <p className="text-sm sm:text-base md:text-lg font-medium text-primary break-words">{exp.role}</p>
                  <p className="text-foreground leading-relaxed max-w-2xl text-xs sm:text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
