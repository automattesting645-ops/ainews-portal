import { BlogPost, AITool, VideoEntry, GuideEntry, LocalAIModel, AINewsUpdate } from '@/types'

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'How Someone Built A Million Dollar Business Using Only Google\'s New Agents!',
    slug: 'google-agents-million-dollar-business',
    excerpt: 'Google\'s new agent platform enables entirely new business models. One entrepreneur shows how he generates a million dollars in revenue using Google\'s AI agents — without his own product.',
    content: '<h2>Google Agents as a Business Model</h2><p>Google\'s new agent platform, built on Vertex AI Agent Builder and Gemini 2.5 Pro, allows anyone to automate complex workflows and offer them as a service. The platform supports multi-step reasoning with a 1M token context window.</p><h3>How Does It Work?</h3><p>Instead of developing software himself, he uses Google\'s AI agents to automate repetitive tasks for clients: email management, calendar scheduling, data analysis, and content creation. The agents leverage Gemini 2.5 Pro\'s 1M token context to process entire email threads and document repositories in a single pass.</p><ul><li>No developers required — the natural language interface means business analysts can build agents</li><li>Rapid scaling — agents deployed via Vertex AI scale from 1 to 10,000 concurrent sessions automatically</li><li>Recurring revenue — subscription model with average $2,000/month per client contract</li></ul><p>In the video I show you how to get started with Google\'s new agent tools — and why the timing is perfect.</p>',
    coverImage: 'https://i.ytimg.com/vi/0d3LT3JoylM/maxresdefault.jpg',
    category: 'news',
    tags: ['Google', 'Business', 'Agents', 'Make Money'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-13T14:00:00Z',
    updatedAt: '2026-05-13T14:00:00Z',
    isFeatured: true,
    isNew: true,
    readTime: 6,
    views: 3400,
    seoTitle: 'Million Dollar Business with Google AI Agents',
    seoDescription: 'Google\'s AI agents enable new business models. Learn how one entrepreneur generates a million dollars in revenue using Vertex AI agents.'
  },
  {
    id: '2',
    title: 'Open Source Buries Claude Code? The Truth Behind the Hype',
    slug: 'open-source-buries-claude-code',
    excerpt: 'An open-source tool claims to outperform Claude Code. I tested it and show whether the free alternative can really keep up with Anthropic\'s paid offering.',
    content: '<h2>Can Open Source Keep Up with Claude Code?</h2><p>A new open-source coding tool is making waves. It challenges Claude Code head-on — and is completely free. I put both through their paces, testing them on real-world codebases.</p><h3>The Comparison</h3><p>Claude Code from Anthropic is currently the gold standard for AI-assisted coding, powered by Claude Opus 4.5. But the open-source community isn\'t sleeping. Tools like OpenCode (based on DeepSeek Coder) and Continue.dev are catching up fast.</p><ul><li>Free vs. $20/month — the open-source tools cost nothing but require your own hardware or API keys</li><li>Local vs. Cloud — OpenCode can run entirely offline via Ollama</li><li>Open Source vs. Proprietary — full transparency vs. black-box pricing</li></ul><p>My verdict: If you\'re a professional developer billing $150+/hour, Claude Code pays for itself in time saved. For hobbyists, students, or teams on a budget, the open-source route is compelling.</p>',
    coverImage: 'https://i.ytimg.com/vi/ltlrmagjq8M/maxresdefault.jpg',
    category: 'news',
    tags: ['Open Source', 'Claude Code', 'Coding', 'Comparison'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-12T10:00:00Z',
    updatedAt: '2026-05-12T10:00:00Z',
    isFeatured: true,
    isNew: true,
    readTime: 7,
    views: 5600,
    seoTitle: 'Open Source vs Claude Code: Free Alternative 2026',
    seoDescription: 'Can open source keep up with Claude Code? I tested both coding tools side by side.'
  },
  {
    id: '3',
    title: 'Ollama vs. LM Studio: Which Local AI Platform Is Best in 2026?',
    slug: 'ollama-vs-lm-studio-comparison',
    excerpt: 'Both tools promise local AI without the cloud — but which is better? I thoroughly tested Ollama and LM Studio. Here is my verdict.',
    content: '<h2>The Great Local AI Showdown</h2><p>Ollama and LM Studio are the two leading platforms for running local LLMs. Both have strengths and weaknesses — I\'ll show you which tool is right for whom.</p><h3>Ollama</h3><p>Offers 200+ models via a simple CLI, includes a built-in REST API on port 11434, and supports custom Modelfiles for creating tuned variants. Under the hood, it uses llama.cpp as its inference engine with GPU acceleration via CUDA, Metal, and Vulkan. On an M4 Mac Mini, a 4-bit quantized 13B model runs at 35 tokens/sec.</p><h3>LM Studio</h3><p>Provides a polished graphical interface, built-in model browser with one-click download from Hugging Face, and a local OpenAI-compatible inference server on port 1234. It excels at discovery — you can browse, search, and test models without ever touching a terminal.</p><p>My recommendation: Use both! Ollama for backend automation and API access, LM Studio for model discovery and testing new releases.</p>',
    coverImage: 'https://i.ytimg.com/vi/ioC6cNjYS90/maxresdefault.jpg',
    category: 'guide',
    tags: ['Ollama', 'LM Studio', 'Comparison', 'Local AI'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-10T12:00:00Z',
    updatedAt: '2026-05-10T12:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 8,
    views: 4300,
    seoTitle: 'Ollama vs LM Studio: Local AI Platforms Compared 2026',
    seoDescription: 'Ollama or LM Studio? I tested both local AI platforms and show you the differences.'
  },
  {
    id: '4',
    title: 'Mastering Local AI 2026: The Ultimate Guide for Private LLMs',
    slug: 'mastering-local-ai-2026-guide',
    excerpt: 'Fine-tuning, optimization, and maximum efficiency: Everything you need to know about local AI in 2026. From beginner setup to professional workflow.',
    content: '<h2>Mastering Local AI in 2026</h2><p>The local AI landscape has evolved rapidly. New models, better tools, and most importantly: cheaper hardware. I give you a complete overview for every skill level.</p><h3>For Beginners</h3><p>Start with Ollama or LM Studio. Try open-source models like Llama 3.2 (3B, needs 4GB RAM), Hermes 3 (8B, needs 8GB RAM), or Mistral Small (7B, needs 6GB RAM). No cloud, no costs beyond your hardware. A Mac Mini M4 runs Llama 3.2 3B at 45 tokens/sec.</p><h3>For Intermediate Users</h3><p>Quantize models yourself using llama.cpp or AutoGPTQ to reduce memory requirements by 60-80% with minimal quality loss. Set up Open WebUI with Docker for a ChatGPT-like experience, and configure RAG pipelines with AnythingLLM.</p><h3>For Advanced Users</h3><p>Fine-tune models using LoRA on your own data. Build multi-agent workflows with n8n and AnythingLLM. Implement advanced RAG with hybrid search using ChromaDB or Qdrant.</p>',
    coverImage: 'https://i.ytimg.com/vi/sxm6RcxaWUI/maxresdefault.jpg',
    category: 'guide',
    tags: ['Local AI', 'Guide', 'LLM', 'Fine-Tuning', 'Optimization'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-05T10:00:00Z',
    updatedAt: '2026-05-05T10:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 10,
    views: 4500,
    seoTitle: 'Local AI 2026 Guide: Private LLMs & Fine-Tuning',
    seoDescription: 'The ultimate guide to local AI in 2026. From beginner setup to professional workflows with fine-tuning, quantization, and RAG.'
  },
  {
    id: '5',
    title: 'AI Hardware Guide 2026: Which PC for Which Model Size?',
    slug: 'ai-hardware-guide-2026-which-pc',
    excerpt: 'What hardware do you really need for local AI? I show you the optimal configuration for every budget — from a $600 setup to a professional workstation.',
    content: '<h2>The Right Hardware for Local AI</h2><p>Many think they need a $10,000 GPU for local AI. The truth: even with a $600 computer, you can get very far. I explain which hardware makes sense for which models.</p><h3>Entry-Level (up to $800)</h3><p>Mac Mini M4 (16GB unified memory) or a PC with 32GB DDR4 RAM and no dedicated GPU: Perfect for 3B-8B models with 4-bit quantization. Total build: $600-800.</p><h3>Intermediate (up to $2,000)</h3><p>PC with 64GB DDR5 RAM + used RTX 3090 24GB ($700-900 used): Runs 13B-34B models comfortably at 4-bit quantization. Total build: $1,800-2,200.</p><h3>Professional (from $3,000)</h3><p>Workstation with 128GB RAM + dual RTX 4090: Runs 70B models at Q8 at 20+ tok/s. Total build: $3,000-10,000+.</p>',
    coverImage: 'https://i.ytimg.com/vi/5v5Mlh8x2Mg/maxresdefault.jpg',
    category: 'guide',
    tags: ['Hardware', 'Guide', 'PC', 'GPU', 'RAM'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-04T08:00:00Z',
    updatedAt: '2026-05-04T08:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 9,
    views: 7200,
    seoTitle: 'AI Hardware Guide 2026: Which PC for LLMs?',
    seoDescription: 'The optimal PC configuration for local AI in 2026. From $600 entry-level setup to professional workstation.'
  },
  {
    id: '6',
    title: 'Google AI Models 2026 Explained: Gemini, Gemma & Co.',
    slug: 'google-ai-models-2026-explained',
    excerpt: 'Google has half a dozen AI models available. Which one is for what? I give you a complete overview of Gemini, Gemma, Veo, and more.',
    content: '<h2>Google\'s AI Universe</h2><p>Google pursues a multi-model strategy. Instead of one model for everything, there are specialized models optimized for different tasks.</p><h3>The Model Family</h3><ul><li><strong>Gemini 2.5 Pro:</strong> The flagship model with a 1M token context window. Available via Vertex AI and Google AI Studio.</li><li><strong>Gemini 2.5 Flash:</strong> The cost-optimized variant with 1M context, ideal for high-volume production applications.</li><li><strong>Gemma 3 (2B/7B/27B):</strong> Open-source models released under the Gemma license. Runs on consumer hardware.</li><li><strong>Veo 3:</strong> Video generation model capable of producing 1080p videos up to 60 seconds from text prompts.</li><li><strong>Imagen 5:</strong> Image generation model with support for up to 4096x4096 output resolution.</li></ul>',
    coverImage: 'https://i.ytimg.com/vi/uN0wx8iYi_0/maxresdefault.jpg',
    category: 'news',
    tags: ['Google', 'AI Models', 'Gemini', 'Gemma'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-01T09:00:00Z',
    updatedAt: '2026-05-01T09:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 7,
    views: 2400,
    seoTitle: 'Google AI Models 2026: Gemini, Gemma & More',
    seoDescription: 'All Google AI models of 2026 explained: Gemini, Gemma, Veo, and Imagen — which one is for what use case?'
  },
  {
    id: '7',
    title: 'The Local AI Revolution: How to Use Ollama on Your Computer',
    slug: 'ollama-local-ai-revolution',
    excerpt: 'Ollama makes local AI accessible to everyone. I show you how to get your first local LLM running in 5 minutes — no cloud, no subscription.',
    content: '<h2>AI on Your Computer — In 5 Minutes</h2><p>Ollama is the easiest way to run open-source LLMs locally. One command in the terminal, and an AI model is running on your hardware — no internet connection, no cloud subscription.</p><h3>Getting Started</h3><p>Download Ollama from ollama.ai, open your terminal, and type: <code>ollama run llama3.2</code>. That\'s it — you now have a fully functional AI on your own machine.</p><ul><li>200+ models available: From tiny 0.5B models to 120B+ models requiring multi-GPU setups.</li><li>REST API included: Ollama exposes a fully OpenAI-compatible API at http://localhost:11434/v1.</li><li>Compatible with all tools: Open WebUI, Continue.dev, n8n, AnythingLLM all have built-in Ollama support.</li><li>Custom Modelfiles: Create tuned variants by modifying system prompts, temperature, and context length.</li></ul>',
    coverImage: 'https://i.ytimg.com/vi/pE920iW5Pyk/maxresdefault.jpg',
    category: 'guide',
    tags: ['Ollama', 'Local AI', 'Beginner', 'Setup'],
    author: 'AI-n_sights',
    publishedAt: '2026-04-30T14:00:00Z',
    updatedAt: '2026-04-30T14:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 6,
    views: 5100,
    seoTitle: 'Using Ollama Locally: AI on Your Computer',
    seoDescription: 'Local AI with Ollama: installation, setup, and the best models — get started in 5 minutes with no cloud required.'
  },
  {
    id: '8',
    title: 'AnythingLLM — Your Local AI Hub: Complete Workflow Guide',
    slug: 'anythingllm-workflow-guide',
    excerpt: 'AnythingLLM is more than just a chat tool. Build fully automated AI workflows with RAG, multi-agent systems, and your own knowledge base.',
    content: '<h2>AnythingLLM as Your AI Hub</h2><p>AnythingLLM bundles multiple LLMs, provides RAG with your own documents, and connects everything in automated workflows — all running locally.</p><h3>Key Features</h3><ul><li><strong>Multi-Workspace:</strong> Create separate AI environments for different projects, each with its own documents and model.</li><li><strong>RAG Pipeline:</strong> Upload PDFs, Word documents, and Markdown files. AnythingLLM chunks documents, embeds them, and lets you query them via semantic search.</li><li><strong>Workflow Automation:</strong> Chain multiple AI tasks together: transcribe audio → summarize → generate a blog post → translate.</li><li><strong>REST API:</strong> Full OpenAI-compatible chat completions API for integration with n8n and custom apps.</li></ul>',
    coverImage: 'https://i.ytimg.com/vi/-8wxocl96OM/maxresdefault.jpg',
    category: 'guide',
    tags: ['AnythingLLM', 'Workflow', 'RAG', 'Local AI'],
    author: 'AI-n_sights',
    publishedAt: '2026-04-28T10:00:00Z',
    updatedAt: '2026-04-28T10:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 7,
    views: 3100,
    seoTitle: 'AnythingLLM Workflow Guide: Local AI Hub',
    seoDescription: 'AnythingLLM as your AI hub: RAG, multi-agent systems, and automated workflows all on your local machine.'
  }
]

export const sampleTools: AITool[] = [
  {
    id: '1',
    name: 'AnythingLLM',
    slug: 'anythingllm',
    tagline: 'Lokale KI-Zentrale mit RAG und Workflows',
    description: 'AnythingLLM ist ein Open-Source-Tool, das verschiedene LLMs lokal bündelt und dir eine zentrale KI-Zentrale auf deinem eigenen Rechner schafft. Nutze eigene Dokumente als Wissensbasis (RAG), baue Workflows und betreibe KI komplett ohne Cloud. AnythingLLM trennt verschiedene Workspaces voneinander – für jedes Projekt eine eigene KI-Umgebung. Perfekt für alle, die ihre Daten behalten wollen und trotzdem nicht auf moderne KI-Features verzichten möchten.',
    logo: null,
    category: 'LLM',
    website: 'https://anythingllm.com',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Vollständig lokal', 'RAG-Funktion', 'Multi-Modell Support', 'Workflow-Automation', 'API-Schnittstelle'],
    tags: ['Lokale KI', 'RAG', 'Open Source', 'Workflows'],
    rating: 4.8,
    reviewCount: 2340,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-05-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Ollama',
    slug: 'ollama',
    tagline: 'Lokale LLMs mit einem Klick ausführen',
    description: 'Ollama macht es einfach, Open-Source-Modelle wie Hermes, Deepseek, Llama und Mistral lokal auszuführen – mit nur einem Befehl. Kein Setup, kein Cloud-Abo. Über 200 Modelle sind direkt aus der Kommandozeile verfügbar. Ollama stellt automatisch eine REST API bereit, sodass du jedes Modell in eigene Anwendungen integrieren kannst.',
    logo: null,
    category: 'LLM',
    website: 'https://ollama.ai',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Ein-Klick-Setup', '200+ Modelle', 'REST API', 'Multi-Plattform', 'Modelfile Support'],
    tags: ['LLM', 'Open Source', 'Lokal', 'Einfach'],
    rating: 4.9,
    reviewCount: 4560,
    isNew: false,
    isTrending: true,
    publishedAt: '2026-04-15T00:00:00Z'
  },
  {
    id: '3',
    name: 'Open WebUI',
    slug: 'open-webui',
    tagline: 'ChatGPT-ähnliches Interface für lokale LLMs',
    description: 'Open WebUI ist ein professionelles Frontend für lokale LLMs. Sieht aus wie ChatGPT, läuft komplett offline und unterstützt RAG sowie Multi-User-Betrieb. Perfekt für Teams, die eine gemeinsame KI-Plattform betreiben wollen. Läuft als Docker-Container und lässt sich mit Ollama, LM Studio und AnythingLLM kombinieren.',
    logo: null,
    category: 'LLM',
    website: 'https://openwebui.com',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['ChatGPT-Interface', 'RAG-Funktion', 'Multi-User', 'Bildgenerierung', 'Plugin-System'],
    tags: ['Interface', 'Open Source', 'Lokal', 'Chat'],
    rating: 4.7,
    reviewCount: 890,
    isNew: true,
    isTrending: false,
    publishedAt: '2026-04-20T00:00:00Z'
  },
  {
    id: '4',
    name: 'LM Studio',
    slug: 'lm-studio',
    tagline: 'Grafische Oberfläche für lokale KI-Modelle',
    description: 'LM Studio ist die benutzerfreundlichste Möglichkeit, lokale LLMs auszuführen – perfekt für alle, die eine grafische Oberfläche bevorzugen. Mit integriertem Model-Browser, übersichtlichem Chat-Interface und einem lokalen Inference-Server. Du suchst, lädst herunter und startest Modelle direkt aus der App – kein Terminal nötig. Ideal für Einsteiger und Profis gleichermaßen.',
    logo: null,
    category: 'LLM',
    website: 'https://lmstudio.ai',
    pricing: 'free',
    price: 'Kostenlos',
    features: ['Grafische UI', 'Model-Browser', 'Local Inference Server', 'Multi-Modell', 'Chat-Template'],
    tags: ['LLM', 'Open Source', 'Lokal', 'Einsteiger'],
    rating: 4.6,
    reviewCount: 1870,
    isNew: false,
    isTrending: true,
    publishedAt: '2026-03-10T00:00:00Z'
  },
  {
    id: '5',
    name: 'Claude Code',
    slug: 'claude-code',
    tagline: 'KI-Coding-Assistent von Anthropic',
    description: 'Claude Code ist der offizielle Coding-Assistent von Anthropic, der direkt in deinem Terminal läuft. Unterstützt komplexe Refactorings über mehrere Dateien hinweg, automatische Git-Commits, Code-Generierung und Debugging. Claude kann dein gesamtes Projekt verstehen und zusammenhängende Änderungen über Dutzende Dateien hinweg vornehmen. Der aktuelle Goldstandard für KI-gestützte Softwareentwicklung.',
    logo: null,
    category: 'Code',
    website: 'https://docs.anthropic.com/en/docs/claude-code/overview',
    pricing: 'freemium',
    price: 'Kostenlos / $20 Monat',
    features: ['Terminal-Integration', 'Multi-File Editing', 'Git-Integration', 'Refactoring', 'Debugging'],
    tags: ['Coding', 'Anthropic', 'CLI', 'KI-Assistent'],
    rating: 4.7,
    reviewCount: 3200,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-04-01T00:00:00Z'
  },
  {
    id: '6',
    name: 'OpenCode',
    slug: 'opencode',
    tagline: 'Open-Source Coding-Agent fürs Terminal',
    description: 'OpenCode ist ein Open-Source-Coding-Agent fürs Terminal, entwickelt als freie Alternative zu Claude Code. Komplett transparent und kostenlos. Integriert sich mit Git und unterstützt verschiedene KI-Provider. Das Skill-System erlaubt spezialisierte Fähigkeiten für unterschiedliche Programmiersprachen und Frameworks.',
    logo: null,
    category: 'Code',
    website: 'https://opencode.ai',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Open Source', 'Terminal-UI', 'Git-Integration', 'Multi-Provider', 'Skill-System'],
    tags: ['Coding', 'Open Source', 'CLI', 'Kostenlos'],
    rating: 4.5,
    reviewCount: 1450,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-05-10T00:00:00Z'
  },
  {
    id: '7',
    name: 'Continue.dev',
    slug: 'continue-dev',
    tagline: 'Open-Source Autocomplete für VS Code & JetBrains',
    description: 'Continue.dev ist die führende Open-Source-KI-Erweiterung für VS Code und JetBrains. Statt für Copilot zu zahlen, richtest du Continue mit deinen lokalen LLMs über Ollama oder LM Studio ein und bekommst Tab-Autocomplete, Inline-Chat und Code-Erklärungen – alles lokal und kostenlos.',
    logo: null,
    category: 'Code',
    website: 'https://continue.dev',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['VS Code Integration', 'JetBrains Support', 'Lokale LLMs', 'Tab Autocomplete', 'Code Chat'],
    tags: ['Coding', 'Open Source', 'IDE', 'Autocomplete'],
    rating: 4.8,
    reviewCount: 2800,
    isNew: false,
    isTrending: true,
    publishedAt: '2025-11-15T00:00:00Z'
  },
  {
    id: '8',
    name: 'n8n',
    slug: 'n8n',
    tagline: 'Self-Hosted Workflow-Automatisierung',
    description: 'n8n ist die führende Open-Source-Workflow-Automatisierungsplattform – vergleichbar mit Make oder Zapier, aber selbst gehostet und kostenlos. Verbinde über 400 Dienste (YouTube, Social Media, E-Mail, KI-APIs, Datenbanken) und baue visuelle Workflows ohne Code. Perfekt für Content-Creator zur Automatisierung von YouTube-zu-Blog-Pipelines.',
    logo: null,
    category: 'Automatisierung',
    website: 'https://n8n.io',
    pricing: 'free',
    price: 'Kostenlos / Self-Hosted',
    features: ['Visuelle Workflows', '400+ Integrationen', 'Self-Hosted', 'KI-Integration', 'Code-Nodes'],
    tags: ['Automatisierung', 'Open Source', 'Workflow', 'Self-Hosted'],
    rating: 4.7,
    reviewCount: 4300,
    isNew: false,
    isTrending: true,
    publishedAt: '2025-09-01T00:00:00Z'
  },
  {
    id: '9',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    tagline: 'Lokale Bildgenerierung in Profi-Qualität',
    description: 'Stable Diffusion (Automatic1111 WebUI) ist der Standard für lokale KI-Bildgenerierung. Anders als Midjourney läuft alles auf deiner GPU – kein Abo, keine Limits. Unzählige Community-Modelle auf CivitAI warten darauf, getestet zu werden. Mit ControlNet bestimmst du exakt die Komposition deiner Bilder.',
    logo: null,
    category: 'Bild',
    website: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Professionelle Bilder', 'Unzählige Modelle', 'Inpainting', 'ControlNet', 'Batch-Processing'],
    tags: ['Bild', 'Open Source', 'Lokal', 'GPU'],
    rating: 4.8,
    reviewCount: 12500,
    isNew: false,
    isTrending: false,
    publishedAt: '2025-06-01T00:00:00Z'
  },
  {
    id: '10',
    name: 'ComfyUI',
    slug: 'comfyui',
    tagline: 'Node-basierte KI-Bild-Workflows',
    description: 'ComfyUI ist das fortschrittlichste Interface für KI-Bildgenerierung. Statt einfacher Klicks baust du visuelle Node-Workflows – jeder Node ist ein Schritt im Bildentstehungsprozess. Du kannst mehrere Modelle kombinieren, Bild-zu-Bild-Pipelines bauen und Video-Animationen erstellen.',
    logo: null,
    category: 'Bild',
    website: 'https://comfyui.org',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Node-Workflows', 'Visuelles Interface', 'Complex Pipelines', 'Video-Animation', 'Batch-Processing'],
    tags: ['Bild', 'Open Source', 'Workflow', 'Profi'],
    rating: 4.7,
    reviewCount: 5600,
    isNew: false,
    isTrending: true,
    publishedAt: '2025-08-15T00:00:00Z'
  }
]

export const sampleVideos: VideoEntry[] = [
  {
    id: '1',
    title: 'Express-Update: AnythingLLM - Wie du lokale KI-Workflows ohne Cloud-Abos baust',
    youtubeId: '-8wxocl96OM',
    duration: '8:00',
    category: 'Tool',
    tags: ['AnythingLLM', 'Lokale KI', 'Workflows'],
    isNew: true,
    publishedAt: '2026-05-14T00:00:00Z'
  },
  {
    id: '2',
    title: 'How Someone Built A Million Dollar Business Using Only Google\'s New Agents!',
    youtubeId: '0d3LT3JoylM',
    duration: '12:00',
    category: 'News',
    tags: ['Google', 'Agents', 'Business'],
    isNew: true,
    publishedAt: '2026-05-13T00:00:00Z'
  },
  {
    id: '3',
    title: 'THEY FINALLY KILLED CLAUDE CODE WITH THIS OPEN SOURCE SECRET!',
    youtubeId: 'ltlrmagjq8M',
    duration: '10:00',
    category: 'News',
    tags: ['Claude Code', 'Open Source', 'Coding'],
    isNew: true,
    publishedAt: '2026-05-12T00:00:00Z'
  },
  {
    id: '4',
    title: 'This Secret AI Just Quietly Dropped And It Changes EVERYTHING!',
    youtubeId: 'jppY5pJix2w',
    duration: '11:00',
    category: 'News',
    tags: ['AI', 'Geheim', 'Neu'],
    isNew: true,
    publishedAt: '2026-05-11T00:00:00Z'
  },
  {
    id: '5',
    title: 'Ultimate AI Money Printer',
    youtubeId: 'YTvBlOzFl7M',
    duration: '9:00',
    category: 'Guide',
    tags: ['Geld verdienen', 'KI', 'Automatisierung'],
    isNew: true,
    publishedAt: '2026-05-10T00:00:00Z'
  },
  {
    id: '6',
    title: 'SOMEONE TESTED THE IMPOSSIBLE CODING CHALLENGE! Local vs Worldclass AI',
    youtubeId: 'Pig0_q-3wIw',
    duration: '14:00',
    category: 'Test',
    tags: ['Coding', 'Vergleich', 'Lokal vs Cloud'],
    isNew: true,
    publishedAt: '2026-05-09T00:00:00Z'
  },
  {
    id: '7',
    title: 'I Replaced CHATGPT with This 100% Private AI! (Ollama vs. LM Studio)',
    youtubeId: 'ioC6cNjYS90',
    duration: '15:00',
    category: 'Guide',
    tags: ['Ollama', 'LM Studio', 'Lokal', 'Vergleich'],
    isNew: true,
    publishedAt: '2026-05-08T00:00:00Z'
  },
  {
    id: '8',
    title: 'This Self-Evolving AI Just Ended the Chatbot Era! (100% Private) - Space Agent',
    youtubeId: 'zS7SPisrItM',
    duration: '13:00',
    category: 'Tool',
    tags: ['Space Agent', 'Agent', 'Selbst-evolvierend'],
    isNew: true,
    publishedAt: '2026-05-07T00:00:00Z'
  },
  {
    id: '9',
    title: 'The World\'s FIRST 2-TAP AI Assistant - LOBSTER FATHER',
    youtubeId: '3WhurmOJZAU',
    duration: '10:00',
    category: 'Tool',
    tags: ['Lobster Father', 'Assistent', 'Schnell'],
    isNew: true,
    publishedAt: '2026-05-06T00:00:00Z'
  },
  {
    id: '10',
    title: 'Mastering Local AI in 2026: Private LLMs, Fine-Tuning, and Maximum Efficiency',
    youtubeId: 'sxm6RcxaWUI',
    duration: '18:00',
    category: 'Guide',
    tags: ['Local AI', 'Fine-Tuning', 'Optimierung'],
    isNew: false,
    publishedAt: '2026-05-04T00:00:00Z'
  },
  {
    id: '11',
    title: 'Local AI in 2026: The Ultimate Hardware Guide for Every LLM Size',
    youtubeId: '5v5Mlh8x2Mg',
    duration: '14:00',
    category: 'Guide',
    tags: ['Hardware', 'Guide', 'LLM'],
    isNew: false,
    publishedAt: '2026-05-03T00:00:00Z'
  },
  {
    id: '12',
    title: 'Ollama - Lokal LLMs Nutzen, damit ihre Daten auch Ihre bleiben!',
    youtubeId: 'pE920iW5Pyk',
    duration: '14:00',
    category: 'Tool',
    tags: ['Ollama', 'Deutsch', 'Lokal'],
    isNew: false,
    publishedAt: '2026-04-25T00:00:00Z'
  }
]

export const localAIModels: LocalAIModel[] = [
  { name: 'Llama 3.2', provider: 'Meta', size: '3B/8B/70B', strength: 'Beste allgemeine Leistung, vielseitig, stark in Konversation', useCases: 'Chatbots, Textgenerierung, Code-Assistenz, Übersetzung', topPick: true, source: 'ollama' },
  { name: 'DeepSeek V3', provider: 'DeepSeek', size: '67B', strength: 'Herausragend bei Reasoning, Mathematik und Logik', useCases: 'Komplexe Problemlösung, Datenanalyse, Programmierung', topPick: true, source: 'ollama' },
  { name: 'Mistral', provider: 'Mistral AI', size: '7B/8x22B', strength: 'Schnell, effizient, gut auf schwächerer Hardware', useCases: 'Echtzeit-Chat, Textklassifikation, Zusammenfassungen', topPick: false, source: 'ollama' },
  { name: 'Hermes 3', provider: 'Nous Research', size: '8B/70B', strength: 'Tool-Use und Agent-Fähigkeiten, folgt Instruktionen präzise', useCases: 'AI Agents, Tool-Calling, Automatisierung', topPick: true, source: 'huggingface' },
  { name: 'Qwen 2.5', provider: 'Alibaba', size: '7B/72B', strength: 'Exzellente Code-Generierung, Mathematik, mehrsprachig', useCases: 'Programmierung, multilinguale Anwendungen, Bildung', topPick: false, source: 'huggingface' },
  { name: 'Gemma 2', provider: 'Google', size: '2B/9B/27B', strength: 'Sicher, optimiert für Google-Hardware, gut dokumentiert', useCases: 'Forschung, Bildung, sichere KI-Anwendungen', topPick: false, source: 'huggingface' },
  { name: 'Phi-4', provider: 'Microsoft', size: '14B', strength: 'Erstaunlich gute Leistung für kleine Größe, effizient', useCases: 'Mobile Geräte, Edge Computing, Bildung', topPick: false, source: 'huggingface' },
  { name: 'CodeLlama', provider: 'Meta', size: '7B/34B/70B', strength: 'Speziell für Code optimiert, versteht viele Sprachen', useCases: 'Code-Generierung, Debugging, Code-Review', topPick: false, source: 'ollama' },
  { name: 'Stable Diffusion 3.5', provider: 'Stability AI', size: '2B/8B', strength: 'Bildgenerierung in Profiqualität, versteht komplexe Prompts', useCases: 'Grafikdesign, Marketing, Konzeptkunst', topPick: true, source: 'huggingface' },
  { name: 'Flux.1', provider: 'Black Forest Labs', size: '3.5B/12B', strength: 'Schärfere Bilder als SD, übertrifft Midjourney oft', useCases: 'Fotorealistische Bilder, Produktdesign, Werbung', topPick: true, source: 'huggingface' },
  { name: 'Whisper', provider: 'OpenAI', size: '1.5B', strength: 'Beste lokale Spracherkennung, 100+ Sprachen', useCases: 'Transkription, Übersetzung, Voice-Commands', topPick: false, source: 'huggingface' },
  { name: 'Nomic Embed Text', provider: 'Nomic AI', size: '137M/1.5B', strength: 'Beste lokale Embeddings, RAG-optimiert', useCases: 'Semantische Suche, RAG, Dokumentenanalyse', topPick: false, source: 'ollama' },
];

export const aiNewsUpdates: AINewsUpdate[] = [
  { date: '2026-06-19', title: 'DeepSeek V3 erreicht GPT-4o Niveau – komplett Open Source', summary: 'Das chinesische Unternehmen DeepSeek hat mit V3 ein Modell veröffentlicht, das in Reasoning-Benchmarks mit GPT-4o gleichzieht – und zwar als vollständig offenes Gewichtsmodell. Trainiert für nur ~$6M.' },
  { date: '2026-06-18', title: 'Meta veröffentlicht Llama 4: 400B MoE, Open Weight', summary: 'Lamas 4. Generation setzt neue Maßstäbe: 400 Milliarden Parameter, Mixture-of-Experts-Architektur, läuft auf 4 GPUs. Erste Tests zeigen Konkurrenzfähigkeit mit Claude 4.' },
  { date: '2026-06-16', title: 'OpenCode überholt Claude Code in GitHub-Sternen', summary: 'Das Open-Source-Coding-Tool OpenCode hat Claude Code bei den GitHub-Stars überholt. Die Community schätzt besonders die völlige Transparenz und Lokalität.' },
  { date: '2026-06-14', title: 'EU verabschiedet umfassendes KI-Gesetz – Strafen bis 35 Mio €', summary: 'Der EU AI Act tritt in Kraft. Hochriskante KI-Systeme müssen künftig strenge Auflagen erfüllen. Für Open-Source-KI gibt es Ausnahmen – ein wichtiger Sieg für die Community.' },
  { date: '2026-06-12', title: 'Hermes 3 Agent: Open-Source-KI autonomisiert Unternehmensworkflows', summary: 'Nous Research hat mit Hermes 3 Agent einen Meilenstein erreicht: Die KI kann eigenständig komplexe Workflows ausführen, Tool-Calling und Planung – alles lokal.' },
  { date: '2026-06-10', title: 'Microsoft veröffentlicht Phi-4: Läuft auf Smartphones', summary: 'Mit nur 14B Parametern erreicht Phi-4 die Leistung von 70B-Modellen. Läuft effizient auf mobilen Geräten und macht lokale KI für Milliarden Menschen zugänglich.' },
  { date: '2026-06-08', title: 'KI entdeckt neues Antibiotikum – 100.000x schneller als traditionelle Methoden', summary: 'Ein lokales KI-Modell hat in nur 48 Stunden ein neues Antibiotikum identifiziert, das gegen resistente Keime wirkt. Traditionell hätte dies Jahre gedauert.' },
  { date: '2026-06-06', title: 'Stable Diffusion 3.5 erreicht Fotorealismus – komplett lokal', summary: 'Mit SD 3.5 können jetzt auch Amateure professionelle Bilder auf ihrer eigenen GPU generieren. Keine Cloud-Kosten, keine Wartezeit, keine Limits.' },
  { date: '2026-06-04', title: 'Millionen-Dollar-Google-Agents: Neue Geschäftsmodelle entstehen', summary: 'Unternehmer nutzen Google Agents, um komplette Dienstleistungen zu automatisieren – ohne eigene Entwickler. Ein Gründer berichtet von $1M Umsatz in 6 Monaten.' },
  { date: '2026-06-02', title: 'AnythingLLM 2.0: Multimodale KI-Zentrale für deinen Desktop', summary: 'Die neue Version von AnythingLLM unterstützt jetzt Bilder, Audio und Video – alles lokal, alles Open Source. Perfekt für professionelle RAG-Workflows.' },
];

export const sampleGuides: GuideEntry[] = [
  {
    id: '1',
    title: 'Setting Up Local AI: The Complete Beginner\'s Guide',
    slug: 'setting-up-local-ai-beginners',
    excerpt: 'Install and configure your first local AI in 30 minutes. No cloud subscription, no prior knowledge required.',
    content: `<h2>Local AI — What Is It Exactly?</h2>
<p>Local AI means all computations happen on your own computer — not in the cloud. Your data never leaves your PC. You don't need internet, no subscription, and you share nothing with third parties.</p>
<h3>What You Need</h3>
<ul>
<li>A PC with at least 8GB RAM (16GB recommended for 7B models)</li>
<li>Windows, macOS, or Linux (Linux offers the best GPU acceleration)</li>
<li>Approximately 10GB free storage per model (quantized 7B models are ~4-5GB)</li>
</ul>
<h3>Step 1: Install Ollama</h3>
<p>Download Ollama from ollama.ai and install it. After installation, open a terminal and type: <code>ollama run llama3.2</code>. Your first local LLM is now running. The initial download is approximately 2GB for the 3B model.</p>
<h3>Step 2: Choose a Model</h3>
<ul>
<li><strong>Llama 3.2 (3B):</strong> Very fast, runs on any PC with 4GB RAM, perfect for simple Q&A and summarization.</li>
<li><strong>Hermes 3 (8B):</strong> Good balance of speed and quality, requires 8GB RAM.</li>
<li><strong>Mistral Small 3.1 (24B):</strong> Strong all-rounder with 128K context window, requires 16GB VRAM.</li>
</ul>
<h3>Step 3: Chat with Open WebUI</h3>
<p>Install Open WebUI: <code>docker run -d -p 3000:8080 --name open-webui --restart always ghcr.io/open-webui/open-webui:main</code>. It looks like ChatGPT, runs completely locally, and connects automatically with Ollama.</p>
<h3>Conclusion</h3>
<p>In under 30 minutes you have a fully functional local AI running. No cloud, no costs, full control.</p>`,
    category: 'Einsteiger',
    tags: ['Local AI', 'Beginner', 'Ollama', 'Setup'],
    level: 'Beginner',
    readTime: 10,
    publishedAt: '2026-05-15T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: 'pE920iW5Pyk'
  },
  {
    id: '2',
    title: 'Prompt Engineering Masterclass: Better Results in 10 Minutes',
    slug: 'prompt-engineering-masterclass',
    excerpt: 'Learn the most important prompt techniques that will immediately improve your AI results. With practical examples for local LLMs.',
    content: `<h2>Why Prompt Engineering?</h2>
<p>The quality of your AI results depends 80% on the prompt. With the right techniques, you extract the maximum from any model — whether local or cloud-based.</p>
<h3>The 5 Most Important Techniques</h3>
<h4>1. Assign a Role</h4>
<p>Start every prompt with a role: "You are an experienced content manager..." Role assignment primes the model's latent space, activating domain-specific knowledge.</p>
<h4>2. Provide Context</h4>
<p>Instead of "Write an article" say "Write a 500-word article for beginners who have never heard of AI. Explain technical terms." Good context includes: target audience, output format, constraints.</p>
<h4>3. Specify the Format</h4>
<p>Define the output format precisely: "Give me 5 bullet points. Each point: 1 sentence explanation + 1 concrete example."</p>
<h4>4. Negative Instructions</h4>
<p>Sometimes it helps to say what the model should NOT do: "No technical terms without explanation. No generic clichés."</p>
<h4>5. Chain-of-Thought</h4>
<p>For complex tasks: "Think step by step. Explain your reasoning before giving the answer." This technique improves accuracy on multi-step reasoning tasks significantly.</p>
<h3>Conclusion</h3>
<p>Good prompts are the key to good AI results. Apply these 5 techniques and you will immediately see better results.</p>`,
    category: 'Grundlagen',
    tags: ['Prompt Engineering', 'Tips', 'Better Results'],
    level: 'Beginner',
    readTime: 8,
    publishedAt: '2026-05-13T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: null
  },
  {
    id: '3',
    title: 'RAG: Your Own Documents as a Knowledge Base',
    slug: 'rag-own-documents-knowledge-base',
    excerpt: 'Turn your PDFs, Word documents, and web pages into a searchable AI knowledge base — local and private.',
    content: `<h2>What Is RAG?</h2>
<p>RAG stands for Retrieval Augmented Generation. Your AI gets access to a private knowledge base (your documents, PDFs, notes) and can cite from them. Instead of guessing, it searches your data for the correct answer.</p>
<h3>Setting Up RAG with AnythingLLM</h3>
<ol>
<li>Install AnythingLLM from anythingllm.com</li>
<li>Create a new workspace for your project</li>
<li>Upload documents: PDF, Word, Markdown, or entire web pages</li>
<li>Select Ollama as your LLM provider and an embedding model</li>
<li>Start querying: Ask questions about your documents</li>
</ol>
<h3>What RAG Is Useful For</h3>
<ul>
<li><strong>Project Documentation:</strong> Ask "What was the architecture decision from last sprint?"</li>
<li><strong>Technical Manuals:</strong> Your entire reference library becomes searchable</li>
<li><strong>Meeting Transcripts:</strong> Ask "What were the action items from the planning session?"</li>
</ul>
<h3>Conclusion</h3>
<p>RAG transforms your AI from a generalist into a specialist that knows your personal data. Local, private, no cloud.</p>`,
    category: 'Fortgeschritten',
    tags: ['RAG', 'AnythingLLM', 'Documents', 'Knowledge Base'],
    level: 'Intermediate',
    readTime: 10,
    publishedAt: '2026-05-12T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: '-8wxocl96OM'
  },
  {
    id: '4',
    title: 'Local AI Image Generation: Stable Diffusion vs. Flux Compared',
    slug: 'local-ai-image-generation-stable-diffusion-flux',
    excerpt: 'Which tool delivers the best images on your hardware? I tested Automatic1111, ComfyUI, and Flux — with surprising results.',
    content: `<h2>Local Image Generation in 2026</h2>
<p>Midjourney costs $60/month, DALL-E charges per image — meanwhile you can do it for free. With Stable Diffusion and Flux you generate professional AI images on your own GPU. Unlimited, free, private.</p>
<h3>The Tools Compared</h3>
<h4>Stable Diffusion (Automatic1111 WebUI)</h4>
<p>The classic. Huge community, countless models on CivitAI. Supports image-to-image, inpainting, ControlNet, LoRA. Requires Python 3.10+ and Git.</p>
<h4>ComfyUI</h4>
<p>The professional choice. Build visual node-based workflows. Enables complex pipelines: combining multiple models, image-to-image chains, video-to-video animation.</p>
<h4>Flux (Black Forest Labs)</h4>
<p>The newcomer. Outperforms Midjourney in many benchmarks — particularly in text rendering. Runs via ComfyUI, requires 12GB+ VRAM.</p>
<h3>Recommendation</h3>
<p>Start with Automatic1111 for its simplicity. Switch to ComfyUI when you need complex pipelines. Flux is currently the image quality champion but needs more VRAM.</p>`,
    category: 'Bild',
    tags: ['Image Generation', 'Stable Diffusion', 'Flux', 'Comparison'],
    level: 'Intermediate',
    readTime: 12,
    publishedAt: '2026-05-11T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: 'ioC6cNjYS90'
  }
]
