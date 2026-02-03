export interface CaseStudySection {
  title: string
  content?: string
  bullets?: string[]
  subsections?: Array<{
    title: string
    content: string
  }>
}

export interface CaseStudy {
  id: string
  title: string
  image: string
  overview: string
  tags: string[]
  sections: CaseStudySection[]
}

export interface Product {
  id: string
  title: string
  subtitle: string
  overview: string
  roles: string[]
  caseStudies: CaseStudy[]
}

export const productsData: Product[] = [
  {
    id: "jiomeet",
    title: "JioMeet",
    subtitle: "Enterprise Chat-First, AI-First Collaboration Platform",
    overview:
      "Revamped JioMeet from a video-conferencing tool into a chat-first collaboration platform with integrated messaging, file collaboration, and smart calendar-driven meetings, designed to make everyday enterprise communication more contextual and AI-powered at scale.",
    roles: [
      "Led end-to-end product discovery and problem framing",
      "Owned roadmap prioritisation across business and tech",
      "Drove cross-functional alignment with design and engineering",
      "Shipped AI-driven collaboration features end-to-end",
    ],
    caseStudies: [
      {
        id: "jiomeet-meeting-recap",
        title: "AI-Powered Meeting Recap",
        image: "/case-study-jiomeet-recap.jpg",
        overview:
          "Fixed transcription accuracy and launched a unified AI meeting recap combining recordings, summaries, and actions, driving a 40% increase in post-meeting engagement and making recaps the primary decision-tracking tool for enterprise teams.",
        tags: ["AI", "Collaboration", "EnterpriseSaaS"],
        sections: [
          {
            title: "Background",
            content:
              "Enterprise teams using JioMeet struggled to recall outcomes from meetings. Key decisions were buried across long recordings, inaccurate transcripts, and cluttered chat threads. Although JioMeet had rich data (audio, transcripts, attendance), users lacked a clear, actionable summary. An AI-based meeting recap was on the roadmap, but poor transcription quality made it unusable.",
          },
          {
            title: "Problem",
            bullets: [
              "Multiple recordings and raw transcripts overwhelmed users",
              "Low transcription accuracy due to background noise and speaker misidentification",
              "Teams couldn't easily search, recall, or act on meeting outcomes",
            ],
          },
          {
            title: "Role & Approach",
            content:
              "As the Product Manager for the in-meeting experience, I owned both live-call quality and post-meeting outcomes. The first priority was fixing transcription accuracy. I partnered closely with Media and AI teams to redesign speaker detection using noise cancellation and decibel-based filters.\n\nOnce accuracy reached production-ready benchmarks, I led the redesign of the post-meeting experience into a unified Meeting Recap. This consolidated recordings, transcripts, AI-generated summaries, action items, and participant details into a single structured view.",
          },
          {
            title: "Outcome",
            bullets: [
              "40% increase in post-meeting re-engagement after rollout",
              "Enterprise users adopted the recap as their single source of truth",
              "Shifted meetings from passive archives to actionable decision-tracking tools",
            ],
          },
        ],
      },
      {
        id: "jiomeet-video-summary",
        title: "AI-Powered Video Summary",
        image: "/case-study-jiomeet-video.jpg",
        overview:
          "Built AI-driven video summaries that condensed long meetings into short, topic-wise highlight reels, reducing average catch-up time by over 60% and significantly increasing post-meeting re-engagement without replaying full recordings.",
        tags: ["VideoAI", "EnterpriseSaaS"],
        sections: [
          {
            title: "Background",
            content:
              "As JioMeet scaled across enterprise teams, meetings became harder to revisit. Long recordings and transcripts saw low engagement, while AI text summaries worked well for quick skims. However, users needed a faster, visual layer for context and tone.",
          },
          {
            title: "Problem",
            content:
              "While AI-generated text summaries improved recall, enterprise users increasingly preferred visual formats. Long recordings were rarely revisited, and reading transcripts felt time-consuming. Users needed a faster, more intuitive way to re-consume meetings while preserving context and tone.",
          },
          {
            title: "Role & Approach",
            content:
              "Building on the success of AI Meeting Recap, I led the definition and delivery of Video Summary. In collaboration with AI, Media, and Design teams, we created a pipeline to identify key moments using speaker activity, engagement signals, and AI-tagged markers such as decisions and action items. These moments were auto-compiled into a topic-wise, seamless playback experience.",
          },
          {
            title: "Outcome",
            bullets: [
              "60%+ reduction in average catch-up time",
              "Significant increase in post-meeting engagement",
              "Positioned video summaries as a fast, visual recall tool for enterprise teams",
            ],
          },
        ],
      },
      {
        id: "jiomeet-meeting-moderation",
        title: "Meeting Moderation Suite",
        image: "/case-study-jiomeet-moderation.jpg",
        overview:
          "Introduced set of host and moderation features designed to reduce manual effort and improve consistency in enterprise meetings, improving policy compliance, and scaling meeting governance across diverse enterprise use cases.",
        tags: ["Enterprise", "Compliance"],
        sections: [
          {
            title: "Background",
            content:
              "JioMeet Enterprise is designed for chat-first collaboration across teams. As the Product Manager for the in-meeting experience, I owned host workflows and worked closely with Media, AI, UX, and Engineering teams to improve meeting governance without adding operational overhead.",
          },
          {
            title: "Problem",
            content:
              "Enterprise meetings vary widely, but hosts were given a single, generic set of controls. This forced manual configuration of permissions, participant management, and compliance during every meeting, leading to host fatigue, inconsistent moderation, and compliance risks—especially in large or sensitive meetings.",
          },
          {
            title: "Role & Approach",
            content:
              "I led the design and rollout of the Meeting Moderation Suite, a context-aware framework that adapts controls based on meeting type and enterprise policies. Through deep-dive workshops with IT admins and enterprise users, we identified recurring moderation patterns. We designed intuitive host flows that surfaced the right controls at the right time.\n\nWe also introduced predefined meeting templates for use cases like scrums, trainings, and client calls, automating governance while keeping setup lightweight.",
          },
          {
            title: "Outcome",
            bullets: [
              "Reduced manual host effort and setup time",
              "Improved compliance with access and recording policies",
              "Transformed moderation from ad-hoc control into a scalable enterprise framework",
            ],
          },
        ],
      },
      {
        id: "jiomeet-calendar-enhancements",
        title: "Calendar Enhancements with State-First Experience",
        image: "/case-study-jiomeet-calendar.jpg",
        overview:
          "Redesigned the calendar around real-time meeting states, improving join flows, reducing conflicts, and enabling seamless cross-device transitions through visible live indicators and in-calendar actions during ongoing meetings.",
        tags: ["UX", "StateManagement", "Enterprise"],
        sections: [
          {
            title: "Background",
            content:
              "JioMeet's calendar is the primary entry point for managing meetings across devices. As enterprise users' schedules became denser, the calendar struggled to reflect what truly mattered in the moment—which meeting was live, where it was active, and what actions were possible.",
          },
          {
            title: "Problem",
            content:
              "The challenge wasn't missing features, but missing states. Although the system had accurate meeting data, poor space optimization prevented real-time states from surfacing clearly. The calendar showed time, but not context, turning active meetings into indistinguishable blocks.",
          },
          {
            title: "Role & Approach",
            content:
              "I re-visited the problem from a visual redesign to a state-first experience. Analysis revealed backend signals were available, but layout constraints blocked visibility. Partnering with UX, we redesigned the calendar around meeting states as first-class entities, ensuring state transitions were immediate and unmistakable.\n\nWe introduced a State-First Meeting Panel that separated ongoing, upcoming, and past meetings, prioritizing live sessions. Meeting cards were compressed and overlapping meetings stacked with expand-on-demand behavior.",
          },
          {
            title: "Outcome",
            bullets: [
              "Clear real-time visibility into meeting states",
              "Faster, more confident joins with fewer conflicts",
              "Smooth cross-device transitions during live meetings",
            ],
          },
        ],
      },
      {
        id: "jiomeet-adaptive-network",
        title: "Adaptive Network Quality for the Indian Ecosystem",
        image: "/case-study-jiomeet-network.jpg",
        overview:
          "Built an adaptive network management system for unstable networks, eliminating false low-network alerts, enabling graceful degradation to audio only mode, and improving call stability and trust for users across highly variable Indian connectivity conditions.",
        tags: ["NetworkQuality", "India", "Resilience"],
        sections: [
          {
            title: "Background",
            content:
              "JioMeet operates at massive scale across India, where network conditions fluctuate rapidly due to mobility, congestion, and infrastructure variance. For users, meetings needed to remain reliable regardless of whether they were joining from corporate offices, home Wi-Fi, or mobile networks.",
          },
          {
            title: "Problem",
            bullets: [
              "False low-network warnings appeared even on stable connections",
              "System failed to respond gracefully when networks genuinely degraded",
              "Results in frozen video, choppy audio, or dropped calls instead of controlled fallback",
            ],
          },
          {
            title: "Role & Approach",
            content:
              "We began with deep signal discovery, analyzing packet loss, jitter, bitrate, and latency across both audio and video streams. Working closely with Media and App teams, we designed an adaptive network management system with an audio-first philosophy.\n\nNetwork quality was classified as Good, Bad, or Very Bad, and stabilized using time-based windows to prevent flickering. As conditions worsened, the system degraded progressively, first lowering video quality to protect audio, then switching to audio-only mode while preserving screen sharing.",
          },
          {
            title: "Outcome",
            bullets: [
              "Eliminated false low-network alerts on stable connections",
              "Ensured uninterrupted participation through controlled audio-only fallback",
              "Improved call stability in poor network zones",
              "Increased user trust through predictable behavior and transparent communication",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "jiomeet-cpaas",
    title: "JioMeet cPaaS",
    subtitle: "API-first real-time communication for enterprises",
    overview:
      "Owned growth and end-to-end lifecycle of JioMeet's API-based cPaaS product, offering SDK and iFrame integrations for enterprise customers, enabling real-time communication, live streaming, and performance observability at scale.",
    roles: [
      "Led onboarding and support for enterprise customers",
      "Drove integration of new cPaaS features",
      "Redesigned developer platform for onboarding and analytics",
    ],
    caseStudies: [
      {
        id: "cpaas-live-streaming",
        title: "Optimized Live Streaming for cPaaS",
        image: "/case-study-cpaas-livestreaming.jpg",
        overview:
          "Redesigned the cPaaS streaming architecture into a single HLS pipeline, cutting redundant encoding, lowering infrastructure costs, improving recording reliability, and increasing post-class consumption for revenue-critical live sessions.",
        tags: ["cPaaS", "LiveStreaming", "EdTech"],
        sections: [
          {
            title: "Background",
            content:
              "The client was a large EdTech platform where live classes and recorded sessions directly drove revenue. Instructor adoption, student retention, and margins all depended on consistent live quality, reliable recordings, and cost efficiency at scale.\n\nTheir platform was powered by our CPaaS solution for live video delivery, session recording, and analytics, making media infrastructure a core business lever.",
          },
          {
            title: "Problem",
            bullets: [
              "Live streams were encoded for delivery, then decoded and re-encoded for recording and playback (double-encoding pipeline)",
              "Infrastructure costs rose linearly with class volume due to heavy CPU and GPU usage",
              "Recording delays and failures disrupted post-class consumption—a key paid feature",
            ],
          },
          {
            title: "Role & Approach",
            content:
              "I led the effort to re-architect the streaming pipeline with a focus on cost efficiency, reliability, and simplicity. Working with media and platform teams, we challenged the assumption that live delivery and recording required separate pipelines.\n\nWe transitioned to an HLS-based delivery and recording architecture. Live streams were packaged directly into HLS segments, which were simultaneously served to learners in real time and persisted as recordings. This eliminated decode-re-encode cycles entirely, unifying live and recorded workflows into a single pipeline.\n\nTo support enterprise operations, we enhanced the CPaaS dashboard with real-time session health, stream status, recording availability, and cost insights.",
          },
          {
            title: "Outcome",
            bullets: [
              "Significant reduction in infrastructure costs by removing redundant encoding",
              "Improved recording reliability and higher post-class content consumption",
              "Strengthened CPaaS value for high-revenue customers",
            ],
          },
        ],
      },
      {
        id: "cpaas-admin-portal",
        title: "Revamped Admin Portal - Advanced Analytics",
        image: "/case-study-cpaas-admin.jpg",
        overview:
          "Revamped admin portal with advanced analytics, stream health monitoring, and cost tracking, enabling self-serve customer diagnostics and reducing support burden for enterprise integrations.",
        tags: ["cPaaS", "Analytics", "DeveloperPlatform"],
        sections: [
          {
            title: "Background",
            content:
              "As cPaaS usage grew, customers needed better visibility into their integrations and usage patterns. The existing admin portal lacked comprehensive analytics, stream health monitoring, and cost tracking, forcing customers to rely on support tickets for insights.",
          },
          {
            title: "Problem",
            content:
              "Enterprise customers couldn't monitor stream health, diagnose failures, or track usage trends without support intervention. The lack of self-serve analytics delayed debugging, increased support burden, and eroded customer trust in platform reliability.",
          },
          {
            title: "Role & Approach",
            content:
              "I led the redesign of the admin portal to provide comprehensive analytics and monitoring capabilities. Working with Data and Design teams, we built dashboards for stream health, session quality metrics, recording status, and cost analytics.\n\nWe introduced key generation, advanced analytics, and real-time monitoring features that enabled developers to quickly identify issues and optimize their implementations without support involvement.",
          },
          {
            title: "Outcome",
            bullets: [
              "Enabled self-serve diagnostics and monitoring for enterprise customers",
              "Reduced support burden through transparent analytics",
              "Improved customer confidence in platform stability and performance",
            ],
          },
        ],
      },
    ],
  },
]
