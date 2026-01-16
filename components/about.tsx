export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">About</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Product Leadership</h3>
              <p className="text-lg text-foreground leading-relaxed">
                I lead product strategy for enterprise video collaboration at JioMeet, where I own the in-meeting
                experience roadmap. My focus is building AI-powered features that solve real problems for teams.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-secondary mb-3">What I Do</h3>
              <p className="text-lg text-foreground leading-relaxed">
                I translate complex engineering challenges into intuitive user experiences. Whether it's improving
                transcription accuracy, building meeting intelligence systems, or designing API-first products—I bridge
                the gap between what's technically possible and what users actually need.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-accent mb-3">Background</h3>
              <p className="text-lg text-foreground leading-relaxed">
                With an MBA from FMS Delhi and roots in product development from NIT Warangal, I've worn multiple hats:
                from building validation platforms at Visteon to leading internship programs at Media.Net. I thrive in
                early-stage product challenges where strategy, design, and data drive decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
