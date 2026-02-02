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
          "The client was a large EdTech platform where live classes and recorded sessions directly drove revenue. Instructor adoption, student retention, and margins all depended on consistent live quality, reliable recordings, and cost efficiency at scale.\n\nTheir platform was powered by our CPaaS solution for live video delivery, session recording, and analytics, making media infrastructure not just a technical concern, but a core business lever.",
      },
      {
        title: "Problem",
        content:
          "As usage scaled, the existing media architecture began to show cracks. Live streams were encoded for delivery, then decoded and re-encoded again for recording and playback. This double-encoding pipeline created a compounding set of issues.\n\nInfrastructure costs rose linearly with class volume due to heavy CPU and GPU usage. Operational complexity increased with separate pipelines for live and recorded content, leading to higher failure rates during peak teaching hours. Most critically, recording delays and failures disrupted post-class consumption—one of the platform's key paid features.",
      },
      {
        title: "Role & Approach",
        content:
          "I led the effort to re-architect the streaming pipeline with a focus on cost efficiency, reliability, and simplicity. Working with media and platform teams, we challenged the assumption that live delivery and recording required separate pipelines and explored a unified model.\n\nWe transitioned to an HLS-based delivery and recording architecture within our CPaaS offering. Live streams were packaged directly into HLS segments, which were simultaneously served to learners in real time and persisted as recordings. This eliminated decode-re-encode cycles entirely, unifying live and recorded workflows into a single pipeline.\n\nTo support enterprise operations, we enhanced the CPaaS dashboard with real-time session health, stream status, recording availability, completion indicators, and cost insights, giving the client full visibility into a revenue-critical system.",
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
        title: "Background",
        content:
          "Enterprise teams using JioMeet struggled to recall outcomes from meetings. Key decisions were buried across long recordings, inaccurate transcripts, and cluttered chat threads. Although JioMeet had rich data (audio, transcripts, attendance), users lacked a clear, actionable summary. An AI-based meeting recap was on the roadmap, but poor transcription quality made it unusable.",
      },
      {
        title: "Problem",
        bullets: [
          "Multiple recordings and raw transcripts overwhelmed users",
          "Low transcription accuracy due to background noise and speaker misidentification",
          "Teams couldn't easily search, recall, or act on meeting outcomes, reducing post-meeting engagement",
        ],
      },
      {
        title: "Role & Approach",
        content:
          "As the Product Manager for the in-meeting experience, I owned both live-call quality and post-meeting outcomes. The first priority was fixing transcription accuracy. I partnered closely with Media and AI teams to redesign speaker detection using noise cancellation and decibel-based filters, improving speaker attribution across varied environments—from quiet home offices to noisy conference rooms.\n\nOnce accuracy reached production-ready benchmarks, I led the redesign of the post-meeting experience into a unified Meeting Recap. This consolidated recordings, transcripts, AI-generated summaries, action items, and participant details into a single structured view. Role-based access controls were added to help hosts manage sensitive content.",
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
    slug: "jiomeet-video-summary",
    title: "JioMeet: AI-Powered Video Summary",
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
        title: "Background",
        content:
          "JioMeet Enterprise is a video conferencing platform built for chat-first collaboration within the JioWorkspace suite. As the product evolved, focus areas included usability, meeting reliability, and deeper integration across enterprise workflows. As the Product Manager for the in-meeting experience, I worked closely with Media and AI teams to improve call stability, video quality, and post-meeting value.",
      },
      {
        title: "Problem",
        content:
          "While AI-generated text summaries improved recall, enterprise users increasingly preferred visual formats. Long recordings were rarely revisited, and reading transcripts or summaries felt time-consuming. Users needed a faster, more intuitive way to re-consume meetings, one that preserved context, tone, and key moments without replaying entire calls.",
      },
      {
        title: "Role & Approach",
        content:
          "Building on the success of AI Meeting Recap, I led the definition and delivery of Video Summary, an automated highlight reel that condensed meetings into short, relevant video segments.\n\nIn collaboration with AI, Media, and Design teams, we created a pipeline to identify key moments using speaker activity, engagement signals, tone shifts, and AI-tagged markers such as decisions and action items. These moments were auto-compiled into a topic-wise, seamless playback experience, making meetings easier to navigate and understand.\n\nThe interface was designed for speed and clarity, allowing users to jump across key topics or participants while retaining context within minutes.",
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
        title: "Background",
        content:
          "JioMeet Enterprise is a video conferencing platform designed for chat-first collaboration across teams within the JioWorkspace suite. As part of the product revamp, the focus was on improving usability, meeting reliability, and enterprise-grade controls. As the Product Manager for the in-meeting experience, I owned host workflows and worked closely with Media, AI, UX, and Engineering teams to improve meeting governance without adding operational overhead.",
      },
      {
        title: "Problem",
        content:
          "Enterprise meetings vary widely—from daily scrums and IT support calls to leadership townhalls and external client discussions. However, hosts were given a single, generic set of controls, forcing them to manually configure permissions, manage participants, and ensure compliance during every meeting. This led to host fatigue, inconsistent moderation, and frequent compliance risks—especially in large or sensitive meetings.",
      },
      {
        title: "Role & Approach",
        content:
          "I led the design and rollout of the Meeting Moderation Suite, a context-aware framework that adapts controls based on meeting type and enterprise policies.\n\nThrough deep-dive workshops with IT admins, enterprise users, and client-facing teams, we identified recurring moderation patterns. Partnering with UX, we designed intuitive host flows that surfaced the right controls—such as Call Dashboard, Waiting Room, Spotlight, Co-host, and PiP Mode—at the right time.\n\nWe also introduced predefined meeting templates for use cases like scrums, trainings, and client calls, automating governance while keeping setup lightweight. Engineering collaboration ensured consistent behavior across desktop and mobile.",
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
    slug: "jiomeet-calendar-enhancements",
    title: "JioMeet: Calendar Enhancements with State-First Experience",
    image: "/case-study-jiomeet-recap.jpg",
    overview:
      "Reimagined the calendar experience with state-first design, providing real-time visibility into meeting states and enabling seamless cross-device transitions for enterprise users.",
    tags: ["UX", "StateManagement", "Enterprise"],
    sectionImages: [
      "/case-study-jiomeet-recap.jpg",
    ],
    sections: [
      {
        title: "Background",
        content:
          "JioMeet's calendar is the primary entry point for managing meetings across devices. As enterprise users' schedules became denser, the calendar struggled to reflect what truly mattered in the moment—which meeting was live, where it was active, and what actions were possible. As the Product Manager, I focused on improving state awareness, space efficiency, and cross-device continuity owning the calendar experience.",
      },
      {
        title: "Problem",
        content:
          "The challenge wasn't missing features; but missing states. Although the system had accurate meeting data, poor space optimization prevented real-time states from surfacing clearly. The calendar showed time, but not context, turning active meetings into indistinguishable blocks.",
      },
      {
        title: "Role & Approach",
        content:
          "I re-visited the problem from a visual redesign to a state-first experience. Analysis revealed backend signals were available, but layout constraints blocked visibility. Partnering with UX, we redesigned the calendar around meeting states as first-class entities, defining a strict information hierarchy that ensured state transitions (Upcoming → Ongoing → Past) were immediate and unmistakable, even in dense schedules.\n\nWe introduced a State-First Meeting Panel that separated ongoing, upcoming, and past meetings, prioritizing live sessions. Meeting cards were compressed and overlapping meetings stacked with expand-on-demand behavior, freeing space for live indicators. Once ongoing state becomes reliable, we unlocked actions like Transfer Call and Add Device directly from the calendar and through visible banners, enabling seamless cross-device continuity across mobile, desktop, and web.",
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
    slug: "jiomeet-adaptive-network",
    title: "JioMeet: Adaptive Network Quality for the Indian Ecosystem",
    image: "/case-study-jiomeet-video.jpg",
    overview:
      "Built adaptive network management system with audio-first philosophy, ensuring uninterrupted meeting participation through intelligent degradation and recovery in poor network conditions.",
    tags: ["NetworkQuality", "India", "Resilience"],
    sectionImages: [
      "/case-study-jiomeet-video.jpg",
    ],
    sections: [
      {
        title: "Background",
        content:
          "JioMeet operates at massive scale across India, where network conditions fluctuate rapidly due to mobility, congestion, and infrastructure variance. For users, meetings needed to remain reliable regardless of whether they were joining from corporate offices, home Wi-Fi, or mobile networks. As Product Manager, I worked with Media and Engineering teams to improve how JioMeet detected, communicated, and adapted to changing network conditions in real time.",
      },
      {
        title: "Problem",
        content:
          "Users faced two experienced-breaking failures. First, false low-network warnings appeared even on stable connections, triggering unnecessary video downgrades and eroding trust in the indicator. Second, when networks genuinely degraded, the system failed to respond gracefully, resulting in frozen video, choppy audio, or dropped calls instead of a controlled fallback. In the Indian ecosystem, where network quality can shift within seconds, these issues compounded quickly.",
      },
      {
        title: "Role & Approach",
        content:
          "We began with deep signal discovery, analyzing packet loss, jitter, bitrate, and latency across both audio and video streams. Working closely with Media and App teams, we traced mismatches between media-stack health and application-level states. This analysis revealed noisy signals, premature state transitions, and the absence of a safe degradation path for extreme conditions.\n\nWe designed an adaptive network management system with an audio-first philosophy. Network quality was classified as Good, Bad, or Very Bad, derived from the weakest of audio or video health, and stabilized using time-based windows to prevent flickering.\n\nAs conditions worsened, the system degraded progressively, first lowering video quality to protect audio, then switching users to audio-only mode while preserving screen sharing and meeting context. Clear, rate-limited notifications explained each transition, while users retained control to re-enable video at any time. Automatic recovery restored video once conditions improved.",
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
]
