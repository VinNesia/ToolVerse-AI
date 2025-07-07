const tools = [
  // 🌟 Produktivitas (8)
  {
    id: 1,
    name: "ChatGPT",
    logo: "https://logo.clearbit.com/openai.com",
    description: "Chatbot AI untuk percakapan dan penyelesaian tugas",
    url: "https://chat.openai.com",
    category: ["produktivitas", "menulis"],
    rating: 4.8,
    reviews: 12500,
    isPopular: true
  },
  {
    id: 2,
    name: "Notion AI",
    logo: "https://logo.clearbit.com/notion.so",
    description: "Manajemen proyek dan catatan dengan AI",
    url: "https://www.notion.so/product/ai",
    category: ["produktivitas"],
    rating: 4.3,
    reviews: 6800,
    isPopular: true
  },
  {
    id: 3,
    name: "Trello",
    logo: "https://logo.clearbit.com/trello.com",
    description: "Manajemen tugas berbasis papan",
    url: "https://trello.com",
    category: ["produktivitas"],
    rating: 4.2,
    reviews: 5400,
    isPopular: false
  },
  {
    id: 4,
    name: "Slack",
    logo: "https://logo.clearbit.com/slack.com",
    description: "Kolaborasi tim dengan chat dan integrasi",
    url: "https://slack.com",
    category: ["produktivitas"],
    rating: 4.1,
    reviews: 6200,
    isPopular: false
  },
  {
    id: 5,
    name: "Asana",
    logo: "https://logo.clearbit.com/asana.com",
    description: "Manajemen proyek dan tugas tim",
    url: "https://asana.com",
    category: ["produktivitas"],
    rating: 4.0,
    reviews: 5800,
    isPopular: false
  },
  {
    id: 6,
    name: "Todoist",
    logo: "https://logo.clearbit.com/todoist.com",
    description: "Manajemen daftar tugas pribadi",
    url: "https://todoist.com",
    category: ["produktivitas"],
    rating: 4.4,
    reviews: 7200,
    isPopular: false
  },
  {
    id: 7,
    name: "Evernote",
    logo: "https://logo.clearbit.com/evernote.com",
    description: "Catatan digital dengan sinkronisasi cloud",
    url: "https://evernote.com",
    category: ["produktivitas"],
    rating: 3.9,
    reviews: 4900,
    isPopular: false
  },
  {
    id: 8,
    name: "Google Keep",
    logo: "https://logo.clearbit.com/google.com",
    description: "Catatan sederhana dan cepat",
    url: "https://keep.google.com",
    category: ["produktivitas"],
    rating: 4.0,
    reviews: 5600,
    isPopular: false
  },

  // 🎨 Desain (7)
  {
    id: 9,
    name: "Canva",
    logo: "https://logo.clearbit.com/canva.com",
    description: "Alat desain grafis online",
    url: "https://canva.com",
    category: ["desain"],
    rating: 4.7,
    reviews: 9800,
    isPopular: true
  },
  {
    id: 10,
    name: "Figma",
    logo: "https://logo.clearbit.com/figma.com",
    description: "Desain UI/UX berbasis cloud",
    url: "https://figma.com",
    category: ["desain"],
    rating: 4.6,
    reviews: 9200,
    isPopular: true
  },
  {
    id: 11,
    name: "Adobe XD",
    logo: "https://logo.clearbit.com/adobe.com",
    description: "Prototyping dan desain UI/UX",
    url: "https://adobe.com/products/xd.html",
    category: ["desain"],
    rating: 4.5,
    reviews: 8400,
    isPopular: false
  },
  {
    id: 12,
    name: "Sketch",
    logo: "https://logo.clearbit.com/sketch.com",
    description: "Alat desain untuk Mac",
    url: "https://sketch.com",
    category: ["desain"],
    rating: 4.4,
    reviews: 7800,
    isPopular: false
  },
  {
    id: 13,
    name: "InVision",
    logo: "https://logo.clearbit.com/invisionapp.com",
    description: "Prototyping dan kolaborasi desain",
    url: "https://invisionapp.com",
    category: ["desain"],
    rating: 4.3,
    reviews: 7200,
    isPopular: false
  },
  {
    id: 14,
    name: "Affinity Designer",
    logo: "https://logo.clearbit.com/affinity.serif.com",
    description: "Desain vektor profesional",
    url: "https://affinity.serif.com",
    category: ["desain"],
    rating: 4.2,
    reviews: 6800,
    isPopular: false
  },
  {
    id: 15,
    name: "Gravit Designer",
    logo: "https://logo.clearbit.com/gravit.io",
    description: "Desain vektor gratis dan open-source",
    url: "https://gravit.io",
    category: ["desain"],
    rating: 4.1,
    reviews: 6200,
    isPopular: false
  },

  // ✍️ Menulis (5)
  {
    id: 16,
    name: "Grammarly",
    logo: "https://logo.clearbit.com/grammarly.com",
    description: "Asisten menulis berbasis AI",
    url: "https://grammarly.com",
    category: ["menulis"],
    rating: 4.7,
    reviews: 9800,
    isPopular: true
  },
  {
    id: 17,
    name: "Hemingway Editor",
    logo: "https://logo.clearbit.com/hemingwayapp.com",
    description: "Alat untuk meningkatkan keterbacaan tulisan",
    url: "https://hemingwayapp.com",
    category: ["menulis"],
    rating: 4.5,
    reviews: 8400,
    isPopular: false
  },
  {
    id: 18,
    name: "ProWritingAid",
    logo: "https://logo.clearbit.com/prowritingaid.com",
    description: "Editor tata bahasa dan gaya penulisan",
    url: "https://prowritingaid.com",
    category: ["menulis"],
    rating: 4.4,
    reviews: 7800,
    isPopular: false
  },
  {
    id: 19,
    name: "Scrivener",
    logo: "https://logo.clearbit.com/literatureandlatte.com",
    description: "Alat penulisan untuk penulis profesional",
    url: "https://literatureandlatte.com",
    category: ["menulis"],
    rating: 4.3,
    reviews: 7200,
    isPopular: false
  },
  {
    id: 20,
    name: "Ulysses",
    logo: "https://logo.clearbit.com/ulysses.app",
    description: "Aplikasi penulisan untuk Mac dan iOS",
    url: "https://ulysses.app",
    category: ["menulis"],
    rating: 4.2,
    reviews: 6800,
    isPopular: false
  },

  // 💻 Coding (5)
  {
    id: 21,
    name: "GitHub",
    logo: "https://logo.clearbit.com/github.com",
    description: "Platform hosting kode dan kolaborasi",
    url: "https://github.com",
    category: ["coding"],
    rating: 4.8,
    reviews: 12500,
    isPopular: true
  },
  {
    id: 22,
    name: "VS Code",
    logo: "https://logo.clearbit.com/code.visualstudio.com",
    description: "Editor kode ringan dan powerful",
    url: "https://code.visualstudio.com",
    category: ["coding"],
    rating: 4.7,
    reviews: 9800,
    isPopular: true
  },
  {
    id: 23,
    name: "Replit",
    logo: "https://logo.clearbit.com/replit.com",
    description: "IDE online untuk coding dan kolaborasi",
    url: "https://replit.com",
    category: ["coding"],
    rating: 4.5,
    reviews: 8400,
    isPopular: false
  },
  {
    id: 24,
    name: "GitLab",
    logo: "https://logo.clearbit.com/gitlab.com",
    description: "Platform DevOps dan hosting kode",
    url: "https://gitlab.com",
    category: ["coding"],
    rating: 4.4,
    reviews: 7800,
    isPopular: false
  },
  {
    id: 25,
    name: "CodePen",
    logo: "https://logo.clearbit.com/codepen.io",
    description: "Editor kode online untuk front-end",
    url: "https://codepen.io",
    category: ["coding"],
    rating: 4.3,
    reviews: 7200,
    isPopular: false
  },

  // 🎥 Video (5)
  {
    id: 26,
    name: "Adobe Premiere Pro",
    logo: "https://logo.clearbit.com/adobe.com",
    description: "Editor video profesional",
    url: "https://adobe.com/products/premiere.html",
    category: ["video"],
    rating: 4.7,
    reviews: 9800,
    isPopular: true
  },
  {
    id: 27,
    name: "Final Cut Pro",
    logo: "https://logo.clearbit.com/apple.com",
    description: "Editor video untuk Mac",
    url: "https://apple.com/final-cut-pro",
    category: ["video"],
    rating: 4.6,
    reviews: 9200,
    isPopular: true
  },
  {
    id: 28,
    name: "DaVinci Resolve",
    logo: "https://logo.clearbit.com/blackmagicdesign.com",
    description: "Editor video dan color grading",
    url: "https://blackmagicdesign.com/products/davinciresolve",
    category: ["video"],
    rating: 4.5,
    reviews: 8400,
    isPopular: false
  },
  {
    id: 29,
    name: "iMovie",
    logo: "https://logo.clearbit.com/apple.com",
    description: "Editor video sederhana untuk Apple",
    url: "https://apple.com/imovie",
    category: ["video"],
    rating: 4.2,
    reviews: 6800,
    isPopular: false
  },
  {
    id: 30,
    name: "Filmora",
    logo: "https://logo.clearbit.com/wondershare.com",
    description: "Editor video mudah untuk pemula",
    url: "https://wondershare.com/filmora",
    category: ["video"],
    rating: 4.1,
    reviews: 6200,
    isPopular: false
  }
];

// Fungsi untuk filter
function getPopularTools() {
  return tools.filter(tool => tool.isPopular);
}

function searchTools(keyword) {
  return tools.filter(tool => 
    tool.name.toLowerCase().includes(keyword) || 
    tool.description.toLowerCase().includes(keyword)
  );
}
