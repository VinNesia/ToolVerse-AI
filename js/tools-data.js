const tools = [
    // 🌟 Productivity Tools (8)
    {
        id: 1,
        name: "ChatGPT",
        logo: "https://logo.clearbit.com/openai.com",
        description: "Asisten AI untuk percakapan dan penyelesaian tugas",
        url: "https://chat.openai.com",
        category: ["produktivitas", "menulis"],
        tags: ["ai", "chatbot"],
        isPopular: true,
        dateAdded: "2023-01-15"
    },
    {
        id: 2,
        name: "Notion AI",
        logo: "https://logo.clearbit.com/notion.so",
        description: "Manajemen proyek dan catatan dengan bantuan AI",
        url: "https://www.notion.so/product/ai",
        category: ["produktivitas"],
        tags: ["organisasi", "catatan"],
        isPopular: true,
        dateAdded: "2023-03-10"
    },
    {
        id: 3,
        name: "Tome",
        logo: "https://logo.clearbit.com/tome.app",
        description: "Membuat presentasi profesional dengan AI",
        url: "https://tome.app",
        category: ["produktivitas"],
        tags: ["presentasi"],
        isPopular: false,
        dateAdded: "2023-04-05"
    },
    {
        id: 4,
        name: "Motion",
        logo: "https://logo.clearbit.com/motion.app",
        description: "Jadwal otomatis dan manajemen waktu dengan AI",
        url: "https://www.motion.app",
        category: ["produktivitas"],
        tags: ["jadwal"],
        isPopular: false,
        dateAdded: "2023-05-12"
    },
    {
        id: 5,
        name: "Rewind AI",
        logo: "https://logo.clearbit.com/rewind.ai",
        description: "Mencatat dan mengingat semua yang Anda lakukan di komputer",
        url: "https://www.rewind.ai",
        category: ["produktivitas"],
        tags: ["pencatatan"],
        isPopular: false,
        dateAdded: "2023-06-18"
    },
    {
        id: 6,
        name: "Fireflies",
        logo: "https://logo.clearbit.com/fireflies.ai",
        description: "Asisten rapat otomatis dengan transkripsi AI",
        url: "https://fireflies.ai",
        category: ["produktivitas"],
        tags: ["transkripsi"],
        isPopular: true,
        dateAdded: "2023-07-22"
    },
    {
        id: 7,
        name: "Otter AI",
        logo: "https://logo.clearbit.com/otter.ai",
        description: "Transkripsi rapat dan catatan suara dengan AI",
        url: "https://otter.ai",
        category: ["produktivitas"],
        tags: ["transkripsi"],
        isPopular: false,
        dateAdded: "2023-08-30"
    },
    {
        id: 8,
        name: "Mem",
        logo: "https://logo.clearbit.com/mem.ai",
        description: "Catatan berbasis AI yang terorganisir otomatis",
        url: "https://mem.ai",
        category: ["produktivitas"],
        tags: ["catatan"],
        isPopular: false,
        dateAdded: "2023-09-15"
    },

    // 🎨 Design Tools (7)
    {
        id: 9,
        name: "MidJourney",
        logo: "https://logo.clearbit.com/midjourney.com",
        description: "Generasi gambar dari teks dengan AI",
        url: "https://www.midjourney.com",
        category: ["desain"],
        tags: ["gambar"],
        isPopular: true,
        dateAdded: "2023-02-20"
    },
    {
        id: 10,
        name: "DALL-E 3",
        logo: "https://logo.clearbit.com/openai.com",
        description: "Generasi gambar AI tingkat lanjut dari OpenAI",
        url: "https://openai.com/dall-e",
        category: ["desain"],
        tags: ["gambar"],
        isPopular: true,
        dateAdded: "2023-10-05"
    },
    {
        id: 11,
        name: "Canva AI",
        logo: "https://logo.clearbit.com/canva.com",
        description: "Alat desain grafis dengan fitur AI",
        url: "https://www.canva.com/ai-tools/",
        category: ["desain"],
        tags: ["grafis"],
        isPopular: false,
        dateAdded: "2023-04-15"
    },
    {
        id: 12,
        name: "Adobe Firefly",
        logo: "https://logo.clearbit.com/adobe.com",
        description: "Generasi gambar dan efek AI dari Adobe",
        url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
        category: ["desain"],
        tags: ["gambar"],
        isPopular: true,
        dateAdded: "2023-05-20"
    },
    {
        id: 13,
        name: "Remove.bg",
        logo: "https://logo.clearbit.com/remove.bg",
        description: "Hapus background gambar secara otomatis",
        url: "https://www.remove.bg",
        category: ["desain"],
        tags: ["foto"],
        isPopular: false,
        dateAdded: "2023-06-25"
    },
    {
        id: 14,
        name: "Uizard",
        logo: "https://logo.clearbit.com/uizard.io",
        description: "Desain UI/UX dengan bantuan AI",
        url: "https://uizard.io",
        category: ["desain"],
        tags: ["ui/ux"],
        isPopular: false,
        dateAdded: "2023-07-30"
    },
    {
        id: 15,
        name: "Khroma",
        logo: "https://logo.clearbit.com/khroma.co",
        description: "Generator palet warna dengan AI",
        url: "http://khroma.co",
        category: ["desain"],
        tags: ["warna"],
        isPopular: false,
        dateAdded: "2023-08-10"
    },

    // ✍️ Writing Tools (5)
    {
        id: 16,
        name: "GrammarlyGO",
        logo: "https://logo.clearbit.com/grammarly.com",
        description: "Asisten menulis berbasis AI",
        url: "https://www.grammarly.com/grammarlygo",
        category: ["menulis"],
        tags: ["tata bahasa"],
        isPopular: true,
        dateAdded: "2023-03-05"
    },
    {
        id: 17,
        name: "Jasper",
        logo: "https://logo.clearbit.com/jasper.ai",
        description: "AI content writer untuk berbagai kebutuhan",
        url: "https://www.jasper.ai",
        category: ["menulis"],
        tags: ["konten"],
        isPopular: true,
        dateAdded: "2023-04-10"
    },
    {
        id: 18,
        name: "Copy.ai",
        logo: "https://logo.clearbit.com/copy.ai",
        description: "Pembuat konten dan copywriting dengan AI",
        url: "https://www.copy.ai",
        category: ["menulis"],
        tags: ["copywriting"],
        isPopular: false,
        dateAdded: "2023-05-15"
    },
    {
        id: 19,
        name: "Writesonic",
        logo: "https://logo.clearbit.com/writesonic.com",
        description: "Alat penulisan artikel dan konten dengan AI",
        url: "https://writesonic.com",
        category: ["menulis"],
        tags: ["artikel"],
        isPopular: false,
        dateAdded: "2023-06-20"
    },
    {
        id: 20,
        name: "Rytr",
        logo: "https://logo.clearbit.com/rytr.me",
        description: "Penulis AI untuk berbagai jenis konten",
        url: "https://rytr.me",
        category: ["menulis"],
        tags: ["konten"],
        isPopular: false,
        dateAdded: "2023-07-25"
    },

    // 💻 Coding Tools (5)
    {
        id: 21,
        name: "GitHub Copilot",
        logo: "https://logo.clearbit.com/github.com",
        description: "Asisten coding berbasis AI",
        url: "https://github.com/features/copilot",
        category: ["coding"],
        tags: ["programming"],
        isPopular: true,
        dateAdded: "2023-02-15"
    },
    {
        id: 22,
        name: "Tabnine",
        logo: "https://logo.clearbit.com/tabnine.com",
        description: "Autocomplete AI untuk programmer",
        url: "https://www.tabnine.com",
        category: ["coding"],
        tags: ["programming"],
        isPopular: false,
        dateAdded: "2023-03-20"
    },
    {
        id: 23,
        name: "Replit Ghostwriter",
        logo: "https://logo.clearbit.com/replit.com",
        description: "AI coding assistant di Replit",
        url: "https://replit.com/site/ghostwriter",
        category: ["coding"],
        tags: ["programming"],
        isPopular: false,
        dateAdded: "2023-04-25"
    },
    {
        id: 24,
        name: "Amazon CodeWhisperer",
        logo: "https://logo.clearbit.com/amazon.com",
        description: "Code generator dari Amazon",
        url: "https://aws.amazon.com/codewhisperer/",
        category: ["coding"],
        tags: ["programming"],
        isPopular: false,
        dateAdded: "2023-05-30"
    },
    {
        id: 25,
        name: "Cursor",
        logo: "https://logo.clearbit.com/cursor.sh",
        description: "IDE dengan AI pair programmer",
        url: "https://www.cursor.sh",
        category: ["coding"],
        tags: ["programming"],
        isPopular: true,
        dateAdded: "2023-06-10"
    },

    // 🎥 Video Tools (5)
    {
        id: 26,
        name: "Runway ML",
        logo: "https://logo.clearbit.com/runwayml.com",
        description: "Video editing dengan berbagai model AI",
        url: "https://runwayml.com",
        category: ["video"],
        tags: ["editing"],
        isPopular: true,
        dateAdded: "2023-03-01"
    },
    {
        id: 27,
        name: "Synthesia",
        logo: "https://logo.clearbit.com/synthesia.io",
        description: "Pembuat video dengan avatar AI",
        url: "https://www.synthesia.io",
        category: ["video"],
        tags: ["presentasi"],
        isPopular: false,
        dateAdded: "2023-04-05"
    },
    {
        id: 28,
        name: "Descript",
        logo: "https://logo.clearbit.com/descript.com",
        description: "Video editing dengan transkripsi AI",
        url: "https://www.descript.com",
        category: ["video"],
        tags: ["editing"],
        isPopular: false,
        dateAdded: "2023-05-10"
    },
    {
        id: 29,
        name: "HeyGen",
        logo: "https://logo.clearbit.com/heygen.com",
        description: "Pembuat video dengan presenter virtual",
        url: "https://www.heygen.com",
        category: ["video"],
        tags: ["presentasi"],
        isPopular: false,
        dateAdded: "2023-06-15"
    },
    {
        id: 30,
        name: "Pictory",
        logo: "https://logo.clearbit.com/pictory.ai",
        description: "Konversi teks ke video dengan AI",
        url: "https://pictory.ai",
        category: ["video"],
        tags: ["konten"],
        isPopular: false,
        dateAdded: "2023-07-20"
    }
];
