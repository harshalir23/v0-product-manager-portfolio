export const caseStudiesData = [
  {
    slug: "cpaas-live-streaming",
    title: "Optimized Live Streaming for cPaaS",
    image: "/case-study-cpaas-livestreaming.jpg",
    overview:
      "Accelerated revenue growth by delivering a live streaming solution on the cPaaS platform within 3 weeks for a major edtech client.",
    tags: ["cPaaS", "LiveStreaming", "EdTech"],
    sectionImages: [
      "/case-study-cpaas-livestreaming.jpg",
    ],
    sections: [
      {
        title: "Background",
        content:
          "The client was a large EdTech platform where live classes and recorded sessions directly drove revenue. Instructor adoption, student retention, and margins all depended on consistent live quality, reliable recordings, and cost efficiency at scale. Their platform was powered by our CPaaS solution for live video delivery, session recording, and analytics, making media infrastructure not just a technical concern, but a core business lever.",
      },
      {
        title: "Problem Space",
        content:
          "As usage scaled, the existing media architecture began to show cracks. Live streams were encoded for delivery, then decoded and re-encoded again for recording and playback. This double-encoding pipeline created a compounding set of issues.",
        bullets: [
          "Infrastructure costs rose linearly with class volume due to heavy CPU and GPU usage",
          "Operational complexity increased with separate pipelines for live and recorded content, leading to higher failure rates during peak teaching hours",
          "Recording delays and failures disrupted post-class consumption—one of the platform's key paid features",
        ],
      },
      {
        title: "Role & Approach",
        content:
          "I led the effort to re-architect the streaming pipeline with a focus on cost efficiency, reliability, and simplicity. Working with media and platform teams, we challenged the assumption that live delivery and recording required separate pipelines and explored a unified model.",
        subsections: [
          {
            title: "Strategic Redesign",
            content:
              "We transitioned to an HLS-based delivery and recording architecture within our CPaaS offering. Live streams were packaged directly into HLS segments, which were simultaneously served to learners in real time and persisted as recordings. This eliminated decode-re-encode cycles entirely, unifying live and recorded workflows into a single pipeline.",
          },
          {
            title: "Enhanced Visibility & Control",
            content:
              "To support enterprise operations, we enhanced the CPaaS dashboard with real-time session health, stream status, recording availability, completion indicators, and cost insights—giving the client full visibility into a revenue-critical system.",
          },
        ],
      },
      {
        title: "Outcomes",
        outcome:
          "Significant reduction in infrastructure costs by removing redundant encoding. Improved recording reliability and higher post-class content consumption. Strengthened CPaaS value for high-revenue customers.",
      },
    ],
  },
  {
    slug: "jiomeet-meeting-recap",
    title: "JioMeet: AI-Powered Meeting Recap",
    image: "/case-study-jiomeet-recap.jpg",
    overview:
      "Reimagined post-meeting insights by transforming scattered recordings, transcripts, and chat into a unified, AI-powered Meeting Recap—driving 40% increase in post-meeting re-engagement.",
    tags: ["AI", "collaboration", "EnterpriseSaaS"],
    sectionImages: [
      "/ai-workflow-diagram-with-ai--data-recording--actio.jpg",
      "/problem-space-diagram-showing-meetings-to-data-to-.jpg",
      "/meeting-recap-interface-showing-key-takeaways-and-.jpg",
      "/ui-progression-img1-meeting-scheduled.jpg",
      "/ui-progression-img2-recording-events.jpg",
      "/ui-progression-img3-meeting-recap-interface.jpg",
      "/ui-progression-before-1-chat-timeline.jpg",
      "/ui-progression-before-2-meeting-scheduled.jpg",
      "/ui-progression-after-meeting-recap-interface.jpg",
    ],
    sections: [
      {
        title: "Context",
        content:
          "JioMeet Enterprise is a video conferencing platform redesigned to enable chat-first collaboration for businesses and teams across Reliance. The product revamp focused on improving usability, meeting reliability, and integration within the JioWorkspace suite.\n\nAs a Product Manager, I was responsible for enhancing the in-meeting experience, working with the Media and AI teams to improve call stability, video quality, and overall meeting performance.",
      },
      {
        title: "Problem Space",
        content:
          'Enterprise users on JioMeet were spending hours hunting for what actually happened in meetings, with key discussions buried under long recordings, raw transcriptions, and repetitive chat clutter. A simple task like "What did we decide?" had become a scavenger hunt.\n\nThe platform had data in the form of recordings, transcripts, and attendance records, but none of it translated into usable insight. The roadmap included an "AI-based meeting summary," but poor transcription accuracy made it impossible to build on.',
      },
      {
        title: "Problem Identification",
        bullets: [
          "Multiple recordings filled the chat for every meeting, overwhelming users",
          "Low transcription precision (due to noise and wrong speaker mapping) blocked summary generation",
          "Teams couldn't search or recall key moments effectively, reducing post-meeting engagement and adoption",
        ],
      },
      {
        title: "My Role & Approach",
        content:
          "As the Product Manager for the in-meeting experience, I was responsible for transforming how users derived value from every call, which also made me accountable for post-call outcomes. The first roadblock we faced was the lack of precision in transcription in dynamic environments, which affected the quality of the AI-based meeting summary we had planned to deliver.\n\nTo tackle this, I worked closely with the Media and AI teams to diagnose the problem from the ground up:",
        bullets: [
          "Improvised speaker window detection—Implemented Noise Cancellation followed by decibel-based filters to detect with precision",
          "Validated the system across diverse setups from quiet home offices to bustling conference rooms until transcription accuracy reached suitable levels",
        ],
        subsections: [
          {
            title: "Redesigning the Post-Meeting Experience",
            content:
              'Once the foundation was stable, I led the redesign of the entire post-meeting experience. We reimagined it as a unified "Meeting Recap"—a single, structured view combining the recording, transcript, and AI-generated summary. The design was grounded in user research, organizing key takeaways, action items, and participant details into clearly defined sections. We also introduced role-based access, ensuring hosts and co-hosts had the right controls to manage sensitive meeting content.',
          },
          {
            title: "Impact",
            content:
              "This shift turned the recap from a passive archive into an active decision-tracking tool, helping teams recall, follow up, and act faster after meetings.",
          },
        ],
      },
      {
        title: "Outcomes",
        outcome:
          'Within the first rollout, post-meeting re-engagement rose by 40%, and enterprise users described the recap as their "single source of truth" for meetings.',
      },
    ],
  },
  {
    slug: "jiomeet-video-summary",
    title: "JioMeet – Video Summary",
    image: "/case-study-jiomeet-video.jpg",
    overview:
      "Developed an AI-driven Video Summary feature that converts lengthy meetings into highlight-based recaps, reducing average catch-up time by over 60%.",
    tags: ["VideoAI", "AdTech"],
    sectionImages: [
      "/ai-workflow-diagram-with-ai--data-recording--actio.jpg",
      "/problem-space-diagram-showing-meetings-to-data-to-.jpg",
      "/meeting-recap-interface-showing-key-takeaways-and-.jpg",
      "/ui-progression-img1-meeting-scheduled.jpg",
      "/ui-progression-img2-recording-events.jpg",
      "/ui-progression-img3-meeting-recap-interface.jpg",
    ],
    sections: [
      {
        title: "Context",
        content:
          "JioMeet Enterprise is a video conferencing platform redesigned to enable chat-first collaboration for businesses and teams across Reliance. Building on the success of the AI Meeting Recap, we identified an opportunity to make post-meeting insights more dynamic by converting them into concise, highlight-based video summaries.",
      },
      {
        title: "Problem Space",
        content:
          "As video content became the dominant form of communication, user expectations around how they consumed information shifted significantly. Within enterprise collaboration tools, users increasingly preferred visual over textual formats, seeking faster, more engaging ways to revisit meetings without reading through lengthy transcripts or summaries.\n\nThe challenge: Long recordings were time-consuming to review and rarely revisited. We needed to bridge this gap with a compact, visually intuitive format that combined the depth of a recording with the efficiency of a summary.",
      },
      {
        title: "Problem Identification",
        bullets: [
          "Long recordings were time-consuming to review and rarely revisited",
          "Users needed a compact, visually intuitive format to quickly absorb key discussions",
          "Current transcripts and written summaries didn't serve the need for visual context retention",
        ],
      },
      {
        title: "My Role & Approach",
        content:
          "I led the definition and development of the Video Summary feature—an automated highlight reel that distilled meetings into short, relevant video segments.",
        subsections: [
          {
            title: "Technical Approach",
            content:
              "Collaborating with the AI, Media, and Design teams, we built a pipeline that could identify key discussion moments using patterns in speaker activity, engagement levels, tone shifts, and AI-labeled conversational markers such as decisions or action points. These segments were then auto-compiled into a seamless, topic-wise playback experience that made meetings both searchable and easy to follow.",
          },
          {
            title: "Design Focus",
            content:
              "From a design perspective, the interface emphasized clarity and flow—allowing users to navigate across key topics or participants effortlessly. The focus was on speed of understanding and context retention, helping users get the essence of a meeting within minutes.",
          },
        ],
      },
      {
        title: "Impact",
        outcome:
          "The Video Summary MVP significantly improved post-meeting engagement and reduced average catch-up time by over 60%. Early adoption feedback highlighted its value as an efficient recall tool, enabling teams to revisit decisions, context, and tone without the overhead of watching entire recordings.",
      },
    ],
  },
  {
    slug: "jiomeet-meeting-moderation",
    title: "JioMeet: Meeting Moderation Suite",
    image: "/case-study-jiomeet-moderation.jpg",
    overview:
      "Built an intelligent Meeting Moderation Suite that transforms enterprise meeting controls into policy-compliant, context-aware workflows—turning host complexity into seamless management.",
    tags: ["Enterprise", "Compliance"],
    sectionImages: [
      "/ai-workflow-diagram-with-ai--data-recording--actio.jpg",
      "/problem-space-diagram-showing-meetings-to-data-to-.jpg",
      "/meeting-recap-interface-showing-key-takeaways-and-.jpg",
      "/ui-progression-img1-meeting-scheduled.jpg",
      "/ui-progression-img2-recording-events.jpg",
      "/ui-progression-img3-meeting-recap-interface.jpg",
    ],
    sections: [
      {
        title: "Context",
        content:
          "JioMeet Enterprise is a video conferencing platform redesigned to enable chat-first collaboration for businesses and teams across Reliance. Enterprise meetings are not one-size-fits-all—a daily scrum, a quarterly townhall, and a client negotiation each demand different levels of control and coordination.",
      },
      {
        title: "Problem Space",
        content:
          "Yet hosts were wrestling with generic tools—manually admitting users, setting permissions, and ensuring compliance while trying to stay focused on the agenda. Within large organizations, meeting policies vary not only by team but by context. Hosts were forced to manually configure controls every time, navigating the same clunky menu for vastly different scenarios.",
      },
      {
        title: "Problem Identification",
        bullets: [
          "IT Support Calls → Juggling multiple live sessions, needing co-hosts and quick participant switching",
          "Client Meetings → External participants, NDA restrictions, and screen-sharing limits",
          "Leadership & Townhalls → Large audiences requiring spotlight control, muted Q&As, and recording permissions",
          "Result: Host fatigue, compliance slip-ups, and inconsistent meeting flow—turning moderation into a full-time job",
        ],
      },
      {
        title: "My Role & Approach",
        content:
          "As Product Manager, I led the design and rollout of the Meeting Moderation Suite, an intelligent system that adapts controls based on meeting type and enterprise policy.",
        bullets: [
          "Conducted deep-dive workshops with enterprise IT, admin teams, and client-facing functions to map recurring moderation pain points",
          "Partnered with UX to design context-aware host flows—integrating features like Call Dashboard, Waiting Room, Spotlight, Co-host, and PiP Mode in an intuitive control hierarchy",
          "Introduced predefined meeting templates for different use cases (scrums, training, client calls)—automating governance while keeping setup effortless",
          "Worked with engineering to ensure control consistency across devices, allowing seamless transition from desktop to mobile mid-meeting",
        ],
      },
      {
        title: "Outcomes",
        outcome:
          "What started as a host control revamp became a full-scale moderation framework. Compliance and access management were baked directly into the meeting flow—no manual policing needed. Enterprise customers reported measurable improvements in meeting governance and reduced IT support overhead.",
      },
    ],
  },
]
