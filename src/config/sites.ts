type SiteTypes = {
  dateTimeFormat: string;
  momentFormat: string;
  momentFormatWoTimestamp: string;
  dayFormat: string;
  url: string;
  contact: {
    email: string;
  };
  meta: {
    title: string;
    headline: string;
    description: string;
    ogImage: string;
    pages: {
      home: string;
      resume: string;
      work: string;
      blog: string;
      photography: string;
      contact: string;
      search: string;
      privacy: string;
    };
  }
};

const config: SiteTypes = {
  dateTimeFormat: "y-MM-dd HH:mm:ss",
  momentFormat: "YYYY-MM-DD hh:mm:ss",
  momentFormatWoTimestamp: "YYYY-MM-DD",
  dayFormat: "ddd",
  url: 'https://thomaskbird.com',
  contact: {
    // Canonical public contact address. Keep in sync with the Contentful `misc` entry `email`.
    email: 'thomas.bird1984@gmail.com',
  },
  meta: {
    title: 'Thomas K Bird',
    headline: 'Applied AI Architect & Engineering Leader',
    description: "Thomas Bird is an Applied AI architect and engineering leader who builds production AI systems (agent platforms, RAG, evaluation, observability), leads engineering teams, and turns complex business problems into measurable outcomes. Former CTO, NBC Sports and OpenAI contributor.",
    ogImage: '/og-image.png',
    pages: {
      home: "Applied AI architect and engineering leader. I build production AI systems, lead engineering teams, and turn complex business problems into measurable outcomes.",
      resume: "Career history of Thomas Bird: Solutions Architect at Betco, former CTO at Livegistics, technical lead at NBC Sports, contract engineer at OpenAI, and 15+ years of full-stack delivery and engineering leadership.",
      work: "Case studies and project write-ups covering production AI architecture, agent platforms, RAG, platform engineering, and engineering leadership.",
      blog: "Writing on production AI and context engineering, architecture and engineering judgment, technical leadership, and honest lessons from the job market.",
      photography: "Photography by Thomas Bird. A separate creative interest alongside engineering work.",
      contact: "Get in touch about Staff/Principal Applied AI engineering, engineering leadership roles, architecture consulting, and advisory work.",
      search: "Search articles, case studies, and notes on thomaskbird.com.",
      privacy: "How thomaskbird.com uses Google Analytics, what is measured, and how to opt out.",
    },
  },
};

export default config;
