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
  {
    id: "language-learning",
    title: "Language Learning Module",
    subtitle: "GenAI-Powered Multilingual Learning Platform",
    overview:
      "Built a GenAI-powered data platform to generate, validate, and serve multilingual language-learning content within a consumer product. The platform enabled scalable creation and delivery of structured learning units across languages, with strong quality controls and cost-aware generation.",
    roles: [
      "Designed language-agnostic content data models and APIs",
      "Led end-to-end platform architecture for content generation and serving",
      "Built multi-stage GenAI pipelines with automated quality evaluations",
      "Introduced versioning and cost controls for scalable generation",
    ],
    caseStudies: [
      {
        id: "language-learning-content-platform",
        title: "GenAI Content Data Platform",
        image: "/case-study-language-content-platform.jpg",
        overview:
          "Designed and shipped a cost-optimized content generation platform that reduced production costs by 85% while scaling multilingual learning content. Built a master-translation architecture and defined reusable data models to generate 2,400+ structured learning units across 8 Indian languages.",
        tags: ["GenAI", "ContentPlatform", "LanguageLearning"],
        sections: [
          {
            title: "Background",
            content:
              "The language-learning app needed to scale from Hindi to 8 Indian languages rapidly. Traditional approaches, generating fresh content for each language would cost $50+ per batch and take months. We needed a faster, cheaper path without sacrificing quality.",
          },
          {
            title: "Problem",
            bullets: [
              "Generating unique content for each language was prohibitively expensive (8x cost multiplier)",
              "Lack of content reusability meant reinventing the wheel for every new language",
              "No cost-efficient way to maintain consistency across translations while preserving cultural nuance",
            ],
          },
          {
            title: "Role & Approach",
            content:
              "I architected a master-translation content pipeline that flipped the economics. Instead of generating 200 words × 8 languages independently, we generated once in Hindi (master), then used cost-efficient translation prompts to derive the other 7 languages, cutting GenAI costs from $48 to $6 per batch (87% reduction).\n\nWorking with content and engineering teams, I designed language-agnostic data models that separated concepts from language-specific realizations. This allowed one content unit (e.g., \"Apple\") to spawn 8 translations while maintaining structural consistency (sentence patterns, difficulty level, word count).",
          },
          {
            title: "Outcome",
            bullets: [
              "Reduced content generation costs by 85% through master-translation architecture",
              "Scaled from 300 Hindi units to 2,400+ units across 8 languages in weeks, not months",
              "Established reusable content lineage system tracking master-derivative relationships for quality control",
            ],
          },
        ],
      },
      {
        id: "language-learning-quality-pipeline",
        title: "Multi-Stage Generation & Quality Evaluation Pipeline",
        image: "/case-study-language-quality-pipeline.jpg",
        overview:
          "Built a smart three-step checking system that reduced costs by 75% while keeping quality high. Created automated tests and strategic human reviews to catch errors in 2,400+ language lessons before they reached users.",
        tags: ["GenAI", "QualityAssurance", "MLOps"],
        sections: [
          {
            title: "Background",
            content:
              "Teaching apps need perfect translations—one mistake and learners lose trust. But checking 2,400 lessons manually would take months. We needed a system that caught errors automatically while keeping costs low.",
          },
          {
            title: "Problem",
            bullets: [
              "AI sometimes made mistakes: wrong letters, awkward sentences, or culturally inappropriate examples",
              "Checking every piece of content with multiple AI models was too expensive (would cost 3x more)",
              "No clear way to know which content needed deep checking vs. quick verification",
            ],
          },
          {
            title: "Role & Approach",
            content:
              "Designed a two-tier quality system that worked like airport security—thorough checks for some, quick scans for others.\n\nFor master content (Hindi words + all letters): Full three-layer inspection. Claude AI generated the content, ChatGPT checked grammar and structure, and Gemini verified cultural fit. This caught 95% of problems before humans even looked.\n\nFor translated content (other 7 languages): Quick automated checks only—like verifying correct alphabet and sentence length. Since the Hindi version was already perfect, translations just needed basic validation. Added random 10% human spot-checks for safety.\n\nAlso built automatic rule-checkers that worked like spell-check: flagging sentences longer than 4 words, catching special characters in transliterations, and blocking difficult vocabulary, all without human effort.",
          },
          {
            title: "Outcome",
            bullets: [
              "Cut validation costs by 75% using smart tier system (deep checks only when needed)",
              "Automated checks caught 90% of errors, humans only reviewed tricky cases",
              "Found and fixed alphabet mistakes, pronunciation issues, and cultural problems before launch",
              "Created feedback loop: when humans rejected content, improved AI instructions, making future content 40% better",
            ],
          },
        ],
      },
    ],
  },
]
