import { BlogPost, AITool, VideoEntry, GuideEntry } from '@/types'

export const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'How Someone Built A Million Dollar Business Using Only Google\'s New Agents!',
    slug: 'google-agents-million-dollar-business',
    excerpt: 'Googles neue Agent-Plattform ermöglicht völlig neue Geschäftsmodelle. Ein Unternehmer zeigt, wie er mit Googles KI-Agenten eine Million Dollar Umsatz generiert – ohne eigenes Produkt.',
    content: '<h2>Google Agents als Geschäftsmodell</h2><p>Die neue Agent-Plattform von Google erlaubt es, komplexe Workflows zu automatisieren und als Dienstleistung anzubieten. Ein Unternehmer hat damit innerhalb weniger Monate eine Million Dollar Umsatz erzielt.</p><h3>Wie funktioniert das?</h3><p>Anstatt selbst Software zu entwickeln, nutzt er Googles KI-Agenten, um für Kunden repetitive Aufgaben zu automatisieren: E-Mail-Management, Terminplanung, Datenanalyse und Content-Erstellung.</p><ul><li>Keine Entwickler nötig</li><li>Schnelle Skalierung</li><li>Wiederkehrende Einnahmen</li></ul><p>Im Video zeige ich dir, wie auch du mit Googles neuen Agent-Tools starten kannst – und warum der Zeitpunkt perfekt ist.</p>',
    coverImage: 'https://i.ytimg.com/vi/0d3LT3JoylM/hqdefault.jpg',
    category: 'news',
    tags: ['Google', 'Business', 'Agenten', 'Geld verdienen'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-13T14:00:00Z',
    updatedAt: '2026-05-13T14:00:00Z',
    isFeatured: true,
    isNew: true,
    readTime: 9,
    views: 3400,
    seoTitle: 'Millionen Business mit Google KI-Agenten | AI-n_sights',
    seoDescription: 'Googles KI-Agenten ermöglichen neue Geschäftsmodelle. Lerne wie ein Unternehmer damit eine Million Dollar Umsatz erzielt.'
  },
  {
    id: '2',
    title: 'Open Source beerdigt Claude Code? Die Wahrheit hinter dem Hype',
    slug: 'open-source-beerdigt-claude-code',
    excerpt: 'Ein Open-Source-Tool soll Claude Code übertreffen. Ich habs getestet und zeige, ob die kostenlose Alternative wirklich mithalten kann.',
    content: '<h2>Kann Open Source mit Claude Code mithalten?</h2><p>Ein neues Open-Source-Coding-Tool sorgt für Aufsehen. Es heißt Claude Code den Kampf an – und ist komplett kostenlos. Ich habe beide getestet und verglichen.</p><h3>Der Vergleich</h3><p>Claude Code von Anthropic ist aktuell der Goldstandard für KI-gestütztes Coding. Aber die Open-Source-Community schläft nicht. Tools wie OpenCode und Continue.dev holen massiv auf.</p><ul><li>Kostenlos vs. 20$/Monat</li><li>Lokal vs. Cloud</li><li>Open Source vs. Proprietär</li></ul><p>Mein Fazit vorab: Für viele Entwickler reicht die Open-Source-Alternative völlig aus. Im Video zeige ich die genauen Unterschiede.</p>',
    coverImage: 'https://i.ytimg.com/vi/ltlrmagjq8M/hqdefault.jpg',
    category: 'news',
    tags: ['Open Source', 'Claude Code', 'Coding', 'Vergleich'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-12T10:00:00Z',
    updatedAt: '2026-05-12T10:00:00Z',
    isFeatured: true,
    isNew: true,
    readTime: 11,
    views: 5600,
    seoTitle: 'Open Source vs Claude Code: Kostenlose Alternative 2026',
    seoDescription: 'Kann Open Source mit Claude Code mithalten? Ich habe beide Coding-Tools getestet und verglichen.'
  },
  {
    id: '3',
    title: 'Space Agent: Der selbst-evolvierende KI-Agent, der Chatbots überflüssig macht',
    slug: 'space-agent-selbst-evolvierende-ki',
    excerpt: 'Space Agent ist ein KI-Agent, der mit dir wächst. Kein Chatbot, sondern ein lernendes System, das sich deinem Arbeitsstil anpasst – und komplett lokal läuft.',
    content: '<h2>Das Ende der Chatbot-Ära?</h2><p>Space Agent ist anders als alles, was du bisher von KI gesehen hast. Statt statischer Antworten auf einzelne Prompts lernt dieser Agent aus deinem Verhalten und wird mit der Zeit besser.</p><h3>Was macht Space Agent besonders?</h3><ul><li>Selbst-evolvierend: Je mehr du ihn nutzt, desto besser wird er</li><li>100% lokal: Deine Daten bleiben bei dir</li><li>Multi-Tool: Kann programmieren, recherchieren, schreiben</li></ul><p>Im Video zeige ich den kompletten Setup und wie Space Agent in der Praxis aussieht.</p>',
    coverImage: 'https://i.ytimg.com/vi/zS7SPisrItM/hqdefault.jpg',
    category: 'news',
    tags: ['Space Agent', 'KI-Agent', 'Open Source', 'Lokal'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-11T16:00:00Z',
    updatedAt: '2026-05-11T16:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 8,
    views: 2100,
    seoTitle: 'Space Agent: Selbst-evolvierende KI lokal | AI-n_sights',
    seoDescription: 'Space Agent ist ein KI-Agent der mit dir wächst. Lernt aus deinem Verhalten, läuft komplett lokal.'
  },
  {
    id: '4',
    title: 'Ollama vs. LM Studio: Welche lokale KI-Plattform ist 2026 die beste?',
    slug: 'ollama-vs-lm-studio-vergleich',
    excerpt: 'Beide Tools versprechen lokale KI ohne Cloud – aber welches ist besser? Ich habe Ollama und LM Studio ausführlich getestet. Hier ist mein Fazit.',
    content: '<h2>Der große Lokal-KI-Vergleich</h2><p>Ollama und LM Studio sind die beiden führenden Plattformen für lokale LLMs. Beide haben Stärken und Schwächen – ich zeige dir, welches Tool für wen geeignet ist.</p><h3>Ollama</h3><p>Bietet 200+ Modelle, REST API und läuft im Terminal. Perfekt für Entwickler, die maximale Kontrolle wollen.</p><h3>LM Studio</h3><p>Bietet eine grafische Oberfläche, Model-Browser und einfache Bedienung. Perfekt für Einsteiger und alle, die keine Kommandozeile mögen.</p><p>Meine Empfehlung: Nutze beide! Ollama fürs Backend, LM Studio zum Testen neuer Modelle. Im Video zeige ich dir, wie du beide kombinierst.</p>',
    coverImage: 'https://i.ytimg.com/vi/ioC6cNjYS90/hqdefault.jpg',
    category: 'guide',
    tags: ['Ollama', 'LM Studio', 'Vergleich', 'Lokale KI'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-10T12:00:00Z',
    updatedAt: '2026-05-10T12:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 12,
    views: 4300,
    seoTitle: 'Ollama vs LM Studio: Lokale KI Plattformen im Vergleich 2026',
    seoDescription: 'Ollama oder LM Studio? Ich habe beide lokalen KI-Plattformen getestet und zeige dir die Unterschiede.'
  },
  {
    id: '5',
    title: 'Lobster Father: Der KI-Assistent, der mit nur 2 Taps alles erledigt',
    slug: 'lobster-father-2-tap-ki',
    excerpt: 'Kein langes Prompten, keine komplizierte Konfiguration. Lobster Father verspricht KI in nur zwei Klicks. Ich habs getestet.',
    content: '<h2>KI so einfach wie noch nie</h2><p>Lobster Father reduziert die Interaktion mit KI auf das absolute Minimum: Zwei Taps, ein Ergebnis. Klingt zu schön um wahr zu sein? Ich habe den Assistenten getestet.</p><h3>Wie funktioniert es?</h3><p>Statt langer Prompts und komplizierter Konfiguration drückst du einfach zweimal – einmal für die Aktion, einmal für die Bestätigung. Der Rest erledigt die KI automatisch.</p><ul><li>Blitzschnell</li><li>Minimalistisch</li><li>Perfekt für unterwegs</li></ul><p>Im Video zeige ich dir, ob Lobster Father hält was er verspricht.</p>',
    coverImage: 'https://i.ytimg.com/vi/3WhurmOJZAU/hqdefault.jpg',
    category: 'tool',
    tags: ['Lobster Father', 'KI-Assistent', 'Tool', 'Schnell'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-09T09:00:00Z',
    updatedAt: '2026-05-09T09:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 6,
    views: 1800,
    seoTitle: 'Lobster Father Test: KI mit nur 2 Taps | AI-n_sights',
    seoDescription: 'Lobster Father verspricht KI-Interaktion in nur zwei Klicks. Ich habe den minimalistischen Assistenten getestet.'
  },
  {
    id: '6',
    title: 'Hermes Agent: Die KI, die mit dir wächst – Vollständiger Setup-Guide',
    slug: 'hermes-agent-setup-guide',
    excerpt: 'Hermes Agent lernt aus deinen Interaktionen und wird mit der Zeit besser. Hier erfährst du, wie du ihn installierst, konfigurierst und optimal nutzt.',
    content: '<h2>Dein persönlicher KI-Agent</h2><p>Hermes Agent ist kein gewöhnlicher Chatbot. Er passt sich deinem Schreibstil an, merkt sich deine Vorlieben und wird mit jeder Nutzung besser. Klingt nach Science-Fiction? Läuft heute schon auf deinem Rechner.</p><h3>Installation</h3><p>Installiere Hermes Agent über den GitHub-Repo. Nach dem Start beginnt der Agent, deine Interaktionen zu analysieren und Muster zu erkennen.</p><h3>Konfiguration</h3><p>Lege fest, welche Aufgaben Hermes für dich automatisieren soll: E-Mails, Social Media, Content-Erstellung oder alles zusammen. Im Video zeige ich dir jeden Schritt.</p>',
    coverImage: 'https://i.ytimg.com/vi/pQbJnhqn5Jk/hqdefault.jpg',
    category: 'guide',
    tags: ['Hermes Agent', 'Setup', 'Guide', 'KI-Agent'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-08T14:00:00Z',
    updatedAt: '2026-05-08T14:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 14,
    views: 2900,
    seoTitle: 'Hermes Agent Setup: Installation & Konfiguration | AI-n_sights',
    seoDescription: 'Vollständiger Setup-Guide für Hermes Agent. Lerne wie du den selbst-evolvierenden KI-Agenten installierst und konfigurierst.'
  },
  {
    id: '7',
    title: 'MCPs verstehen: Das neue Protokoll, das KI-Agenten verbindet',
    slug: 'mcps-erklaert-protokoll-ki-agenten',
    excerpt: 'MCPs (Model Context Protocols) sind der Schlüssel zu einer vernetzten KI-Zukunft. Ich erkläre, wie sie funktionieren und warum sie wichtig sind.',
    content: '<h2>Was sind MCPs?</h2><p>MCP steht für Model Context Protocol – ein neues Protokoll, das es KI-Agenten erlaubt, miteinander zu kommunizieren und zusammenzuarbeiten. Ähnlich wie HTTP für das Web, aber für KI.</p><h3>Warum ist das wichtig?</h3><p>Stell dir vor, dein lokaler KI-Agent kann mit deinem n8n-Workflow sprechen, der wiederum mit deiner Datenbank redet. MCPs machen das möglich – standardisiert und sicher.</p><ul><li>Einheitliche Kommunikation</li><li>Sicherheit durch Standardisierung</li><li>Einfache Integration</li></ul><p>Im Video erkläre ich das Protokoll im Detail und zeige praktische Beispiele.</p>',
    coverImage: 'https://i.ytimg.com/vi/PmfoTi3xvd0/hqdefault.jpg',
    category: 'news',
    tags: ['MCP', 'Protokoll', 'KI-Agenten', 'Technologie'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-07T11:00:00Z',
    updatedAt: '2026-05-07T11:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 10,
    views: 1600,
    seoTitle: 'MCPs erklärt: Model Context Protocol für KI-Agenten | AI-n_sights',
    seoDescription: 'MCPs sind das neue Protokoll für KI-Kommunikation. Lerne wie Model Context Protocols funktionieren.'
  },
  {
    id: '8',
    title: 'Google Antigravity: Baue komplette Apps ohne eine Zeile Code',
    slug: 'google-antigravity-apps-ohne-code',
    excerpt: 'Googles neues Tool Antigravity verspricht App-Entwicklung ohne Programmierkenntnisse. Ich habs ausprobiert und zeige dir, ob es hält was es verspricht.',
    content: '<h2>App-Entwicklung für Nicht-Programmierer</h2><p>Google Antigravity ist ein No-Code-Tool, das KI nutzt, um aus natürlicher Sprache vollständige Anwendungen zu generieren. Sag einfach was die App können soll – und Google baut sie.</p><h3>Meine Erfahrung</h3><p>Ich habe Antigravity getestet und war überrascht: Komplexe Business-Anwendungen in Minuten statt Wochen. Besonders beeindruckend: Die Integration mit anderen Google-Diensten.</p><ul><li>Kein Code nötig</li><li>Schnelle Ergebnisse</li><li>KI-optimierte Logik</li></ul><p>Im Video zeige ich dir, wie du deine erste App mit Antigravity baust.</p>',
    coverImage: 'https://i.ytimg.com/vi/4m5MGFbOqC4/hqdefault.jpg',
    category: 'tool',
    tags: ['Google', 'Antigravity', 'No-Code', 'Apps'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-06T15:00:00Z',
    updatedAt: '2026-05-06T15:00:00Z',
    isFeatured: false,
    isNew: true,
    readTime: 9,
    views: 3800,
    seoTitle: 'Google Antigravity: Apps ohne Code bauen | AI-n_sights',
    seoDescription: 'Google Antigravity nutzt KI um Apps aus natürlicher Sprache zu generieren. Meine Erfahrung mit dem No-Code-Tool.'
  },
  {
    id: '9',
    title: 'Mastering Local AI 2026: Der ultimative Guide für private LLMs',
    slug: 'mastering-local-ai-2026-guide',
    excerpt: 'Fine-Tuning, Optimierung und maximale Effizienz: Alles was du 2026 über lokale KI wissen musst. Vom Einsteiger-Setup bis zum Profi-Workflow.',
    content: '<h2>Lokale KI meistern in 2026</h2><p>Die lokale KI-Landschaft hat sich in den letzten Monaten rasant entwickelt. Neue Modelle, bessere Tools und vor allem: günstigere Hardware. Ich gebe dir einen kompletten Überblick.</p><h3>Für Einsteiger</h3><p>Starte mit Ollama oder LM Studio, probiere Open-Source-Modelle wie Hermes, Llama 4 oder Deepseek. Keine Cloud, keine Kosten.</p><h3>Für Fortgeschrittene</h3><p>Fine-Tune eigene Modelle, optimiere die Performance mit Quantisierung und baue Multi-Agent-Workflows mit n8n und AnythingLLM.</p><p>Im Video zeige ich dir den kompletten Weg vom Einsteiger zum Profi.</p>',
    coverImage: 'https://i.ytimg.com/vi/sxm6RcxaWUI/hqdefault.jpg',
    category: 'guide',
    tags: ['Local AI', 'Guide', 'LLM', 'Fine-Tuning', 'Optimierung'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-05T10:00:00Z',
    updatedAt: '2026-05-05T10:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 15,
    views: 4500,
    seoTitle: 'Local AI 2026 Guide: Private LLMs & Fine-Tuning | AI-n_sights',
    seoDescription: 'Der ultimative Guide für lokale KI 2026. Vom Einsteiger-Setup bis zum Profi-Workflow mit Fine-Tuning.'
  },
  {
    id: '10',
    title: 'KI-Hardware-Guide 2026: Welcher PC für welche Modellgröße?',
    slug: 'ki-hardware-guide-2026-welcher-pc',
    excerpt: 'Welche Hardware brauchst du wirklich für lokale KI? Ich zeige dir die optimale Konfiguration für jedes Budget – vom 600$-Setup bis zur Profi-Workstation.',
    content: '<h2>Die richtige Hardware für lokale KI</h2><p>Viele denken, sie bräuchten eine 10.000$-GPU für lokale KI. Die Wahrheit: Schon mit einem 600$-Rechner kommst du weit. Ich erkläre dir welche Hardware für welche Modelle sinnvoll ist.</p><h3>Einsteiger (bis 800$)</h3><p>Mac Mini M4 oder PC mit 32GB RAM: Perfekt für 7B-13B Modelle mit Quantisierung.</p><h3>Fortgeschritten (bis 2000$)</h3><p>PC mit 64GB RAM + gebrauchte GPU: Läuft 70B Modelle und Bildgenerierung.</p><h3>Profi (ab 3000$)</h3><p>Workstation mit 128GB RAM + Multi-GPU: Für Fine-Tuning und große Modelle.</p><p>Im Video zeige ich dir genaue Builds und Benchmarks.</p>',
    coverImage: 'https://i.ytimg.com/vi/5v5Mlh8x2Mg/hqdefault.jpg',
    category: 'guide',
    tags: ['Hardware', 'Guide', 'PC', 'GPU', 'RAM', 'Kaufen'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-04T08:00:00Z',
    updatedAt: '2026-05-04T08:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 13,
    views: 7200,
    seoTitle: 'KI Hardware Guide 2026: Welcher PC für LLMs? | AI-n_sights',
    seoDescription: 'Die optimale PC-Konfiguration für lokale KI 2026. Vom 600$-Einsteiger-Setup bis zur Profi-Workstation.'
  },
  {
    id: '11',
    title: 'Antigravity + OpenCode: Die unschlagbare Kombination für Entwickler',
    slug: 'antigravity-opencode-gamechanger',
    excerpt: 'Zwei Open-Source-Tools, die zusammen mehr können als die Summe ihrer Teile. Ich zeige dir, warum Antigravity und OpenCode perfekt harmonieren.',
    content: '<h2>GameChanger für Entwickler</h2><p>Antigravity generiert Apps aus natürlicher Sprache, OpenCode optimiert den Code mit KI. Zusammen ergeben sie einen Workflow, der Entwicklungszeit drastisch reduziert.</p><h3>Der Workflow</h3><p>1. Idee in Antigravity eingeben<br/>2. App-Struktur generieren lassen<br/>3. Mit OpenCode verfeinern und erweitern<br/>4. Fertig in Rekordzeit</p><p>Im Video zeige ich dir, wie ich mit dieser Kombination eine komplette App in 30 Minuten gebaut habe.</p>',
    coverImage: 'https://i.ytimg.com/vi/R8IEFe32CUg/hqdefault.jpg',
    category: 'tool',
    tags: ['Antigravity', 'OpenCode', 'Coding', 'Workflow'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-03T13:00:00Z',
    updatedAt: '2026-05-03T13:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 7,
    views: 2800,
    seoTitle: 'Antigravity + OpenCode: KI-App-Entwicklung | AI-n_sights',
    seoDescription: 'Antigravity und OpenCode zusammen nutzen: App-Entwicklung in Rekordzeit mit KI.'
  },
  {
    id: '12',
    title: 'Von Sand zum Superhirn: Wie Silizium-Chips die KI-Revolution ermöglichen',
    slug: 'von-sand-zum-superhirn-chips',
    excerpt: 'Hinter jeder KI steckt ein Chip. Ich nehme dich mit auf die Reise vom Sand zum Supercomputer und erkläre, warum Hardware wichtiger ist als Software.',
    content: '<h2>Die Reise vom Sand zum Chip</h2><p>KI wäre nichts ohne die Hardware, auf der sie läuft. In diesem Video erkläre ich den faszinierenden Weg vom Rohstoff Silizium bis zum fertigen KI-Chip, der Milliarden von Berechnungen pro Sekunde durchführt.</p><h3>Die wichtigsten Schritte</h3><ul><li>Sand zu Silizium: Der Reinigungsprozess</li><li>Wafer-Herstellung: Die Basis für alle Chips</li><li>Belichtung und Ätzen: Nano-Strukturen auf dem Chip</li><li>Test und Verpackung: Vom Rohling zum fertigen Prozessor</li></ul><p>Ein faszinierender Blick hinter die Kulissen der KI-Industrie.</p>',
    coverImage: 'https://i.ytimg.com/vi/PypW4wLqxrA/hqdefault.jpg',
    category: 'news',
    tags: ['Hardware', 'Chips', 'Silizium', 'Hintergrund'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-02T10:00:00Z',
    updatedAt: '2026-05-02T10:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 16,
    views: 1900,
    seoTitle: 'Wie Silizium-Chips KI ermöglichen | AI-n_sights',
    seoDescription: 'Die Reise vom Sand zum KI-Chip: Wie Silizium-Prozessoren die KI-Revolution antreiben.'
  },
  {
    id: '13',
    title: 'Google AI Modelle 2026 erklärt: Gemini, Gemma & Co. im Überblick',
    slug: 'google-ai-modelle-2026-erklaert',
    excerpt: 'Google hat ein halbes Dutzend KI-Modelle am Start. Welches ist für was gemacht? Ich gebe dir einen vollständigen Überblick über Gemini, Gemma, Veo und mehr.',
    content: '<h2>Googles KI-Universum</h2><p>Google verfolgt eine Multi-Modell-Strategie. Statt einem Modell für alles gibt es spezialisierte Modelle: Gemini für allgemeine Aufgaben, Gemma für lokale Nutzung, Veo für Videos und mehr.</p><h3>Die Modell-Familie</h3><ul><li>Gemini Ultra: Das Flaggschiff für komplexe Aufgaben</li><li>Gemma: Open-Source für lokale Nutzung</li><li>Veo: KI-Videogenerierung</li><li>Imagen: Bildgenerierung</li></ul><p>Im Video erkläre ich, welches Modell für welchen Anwendungsfall am besten geeignet ist.</p>',
    coverImage: 'https://i.ytimg.com/vi/uN0wx8iYi_0/hqdefault.jpg',
    category: 'news',
    tags: ['Google', 'AI Modelle', 'Gemini', 'Gemma', 'Übersicht'],
    author: 'AI-n_sights',
    publishedAt: '2026-05-01T09:00:00Z',
    updatedAt: '2026-05-01T09:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 10,
    views: 2400,
    seoTitle: 'Google KI Modelle 2026: Gemini, Gemma & Co. | AI-n_sights',
    seoDescription: 'Alle Google KI Modelle 2026 im Überblick: Gemini, Gemma, Veo und Imagen – welches ist für was?'
  },
  {
    id: '14',
    title: 'Die lokale KI-Revolution: So nutzt du Ollama auf deinem Rechner',
    slug: 'ollama-lokale-ki-revolution',
    excerpt: 'Ollama macht lokale KI für jeden zugänglich. Ich zeige dir, wie du in 5 Minuten dein erstes lokales LLM zum Laufen bringst – ohne Cloud, ohne Kosten.',
    content: '<h2>KI auf deinem Rechner – in 5 Minuten</h2><p>Ollama ist der einfachste Weg, Open-Source-LLMs lokal auszuführen. Ein Befehl im Terminal, schon läuft ein KI-Modell auf deiner Hardware – ohne Internet, ohne Cloud-Abo.</p><h3>Erste Schritte</h3><p>Lade Ollama von ollama.ai herunter, öffne das Terminal und tippe: ollama run llama3.2. Fertig. Du hast jetzt eine voll funktionsfähige KI auf deinem Rechner.</p><ul><li>200+ Modelle verfügbar</li><li>REST API inklusive</li><li>Kompatibel mit allen Tools</li></ul><p>Im Video zeige ich dir die wichtigsten Modelle und wie du sie optimal nutzt.</p>',
    coverImage: 'https://i.ytimg.com/vi/pE920iW5Pyk/hqdefault.jpg',
    category: 'guide',
    tags: ['Ollama', 'Lokale KI', 'Einsteiger', 'Setup'],
    author: 'AI-n_sights',
    publishedAt: '2026-04-30T14:00:00Z',
    updatedAt: '2026-04-30T14:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 8,
    views: 5100,
    seoTitle: 'Ollama lokal nutzen: KI auf deinem Rechner | AI-n_sights',
    seoDescription: 'Lokale KI mit Ollama: Installation, Einrichtung und die besten Modelle - in 5 Minuten starten.'
  },
  {
    id: '15',
    title: 'AnythingLLM - Deine lokale KI-Zentrale: Kompletter Workflow-Guide',
    slug: 'anythingllm-workflow-guide',
    excerpt: 'AnythingLLM ist mehr als nur ein Chat-Tool. Baue damit vollautomatische KI-Workflows mit RAG, Multi-Agenten und eigener Wissensdatenbank.',
    content: '<h2>AnythingLLM als KI-Zentrale</h2><p>AnythingLLM bündelt verschiedene LLMs, erlaubt RAG mit eigenen Dokumenten und verbindet alles in automatischen Workflows. Ich zeige dir, wie du das volle Potenzial nutzt.</p><h3>Die wichtigsten Features</h3><ul><li>Multi-Workspace: Separate KI-Umgebungen für verschiedene Projekte</li><li>RAG: Eigene Dokumente als Wissensbasis</li><li>Workflows: Automatische Ketten von KI-Aufgaben</li><li>API: Integration in eigene Anwendungen</li></ul><p>Im Video baue ich einen kompletten Workflow von der Idee bis zur automatischen Ausführung auf.</p>',
    coverImage: 'https://i.ytimg.com/vi/-8wxocl96OM/hqdefault.jpg',
    category: 'guide',
    tags: ['AnythingLLM', 'Workflow', 'RAG', 'Lokale KI'],
    author: 'AI-n_sights',
    publishedAt: '2026-04-28T10:00:00Z',
    updatedAt: '2026-04-28T10:00:00Z',
    isFeatured: false,
    isNew: false,
    readTime: 11,
    views: 3100,
    seoTitle: 'AnythingLLM Workflow-Guide: Lokale KI-Zentrale | AI-n_sights',
    seoDescription: 'AnythingLLM als KI-Zentrale: RAG, Multi-Agenten und automatisierte Workflows auf deinem Rechner.'
  }
]

export const sampleTools: AITool[] = [
  {
    id: '1',
    name: 'AnythingLLM',
    slug: 'anythingllm',
    tagline: 'Lokale KI-Zentrale mit RAG und Workflows',
    description: 'AnythingLLM ist ein Open-Source-Tool, das verschiedene LLMs lokal bündelt und dir eine zentrale KI-Zentrale auf deinem eigenen Rechner schafft. Nutze eigene Dokumente als Wissensbasis (RAG), baue Workflows und betreibe KI komplett ohne Cloud. Besonders nützlich: AnythingLLM trennt verschiedene Workspaces voneinander – du kannst also für jedes Projekt eine eigene KI-Umgebung mit eigenen Dokumenten und eigenem Modell erstellen. Perfekt für alle, die ihre Daten behalten wollen und trotzdem nicht auf moderne KI-Features verzichten möchten. Die Integration mit Ollama und LM Studio macht es zum Schweizer Taschenmesser der lokalen KI-Welt.',
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
    description: 'Ollama macht es einfach, Open-Source-Modelle wie Hermes, Deepseek, Llama und Mistral lokal auszuführen – und das mit nur einem einzigen Befehl. Kein Setup, kein Cloud-Abo. Über 200 Modelle sind direkt aus der Kommandozeile verfügbar, inklusive eigener Modded-Versionen, die du mit Modelfiles anpassen kannst. Besonders praktisch: Ollama stellt automatisch eine REST API bereit, sodass du jedes Modell in eigene Anwendungen integrieren kannst – von Coding-Assistenten bis zu Chat-Bots. Die Community ist riesig, neue Modelle erscheinen oft innerhalb von Stunden nach Release als Ollama-Version. Der Standard für lokale LLMs im Jahr 2026.',
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
    description: 'Open WebUI ist ein professionelles Frontend für lokale LLMs. Sieht aus wie ChatGPT, läuft komplett offline und unterstützt RAG sowie Multi-User-Betrieb. Das macht es zur perfekten Lösung für Teams, die eine gemeinsame KI-Plattform betreiben wollen – ohne dass Daten das Unternehmen verlassen. Inklusive Bildgenerierung über DALL-E Integration, einem Plugin-System für Erweiterungen und einer übersichtlichen Chats-Verwaltung. Besonders stark: Du kannst verschiedene Modelle parallel laufen lassen und im Chat hin- und herschalten, um Ergebnisse direkt zu vergleichen. Läuft als Docker-Container und lässt sich mit Ollama, LM Studio und AnythingLLM kombinieren.',
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
    description: 'LM Studio ist die benutzerfreundlichste Möglichkeit, lokale LLMs auszuführen – perfekt für alle, die Ollama zu technisch finden oder eine grafische Oberfläche bevorzugen. Mit integriertem Model-Browser, übersichtlichem Chat-Interface und einem lokalen Inference-Server. Du suchst, lädst herunter und startest Modelle direkt aus der App – kein Terminal, keine Kommandos. Besonders nützlich: Der integrierte Chat-Template-Test, mit dem du siehst, wie verschiedene System-Prompts auf das Modell wirken. LM Studio unterstützt auch GPU-Offloading und Quantisierungen (GGUF). Ideal für Einsteiger und Profis gleichermaßen.',
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
    description: 'Claude Code ist der offizielle Coding-Assistent von Anthropic, der direkt in deinem Terminal läuft. Anders als Copilot oder Cursor arbeitet Claude Code als CLI-Tool – du bleibst in deiner gewohnten Umgebung und hast trotzdem einen mächtigen KI-Assistenten an deiner Seite. Unterstützt komplexe Refactorings über mehrere Dateien hinweg, automatische Git-Commits, Code-Generierung und Debugging. Besonders beeindruckend: Claude kann dein gesamtes Projekt verstehen und zusammenhängende Änderungen über Dutzende Dateien hinweg vornehmen. Nutzt Anthropics neueste Modelle und ist der aktuelle Goldstandard für KI-gestützte Softwareentwicklung – auch wenn die Open-Source-Konkurrenz langsam aufholt.',
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
    description: 'OpenCode ist ein Open-Source-Coding-Agent fürs Terminal, der als freie Alternative zu Claude Code entwickelt wurde. Inspiriert von den besten kommerziellen KI-Coding-Tools, aber komplett transparent und kostenlos. OpenCode läuft in deinem Terminal, integriert sich mit Git und unterstützt verschiedene KI-Provider – du kannst wählen, ob du Cloud-Modelle oder deine lokalen LLMs nutzen willst. Das Skill-System erlaubt es, spezialisierte Fähigkeiten für unterschiedliche Programmiersprachen und Frameworks zu definieren. Besonders spannend für Entwickler, die eine Open-Source-Alternative zu den großen Anbietern suchen und die Kontrolle über ihre Tools behalten wollen.',
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
    description: 'Continue.dev ist die führende Open-Source-KI-Erweiterung für VS Code und JetBrains. Statt für Copilot zu zahlen, richtest du Continue mit deinen lokalen LLMs über Ollama oder LM Studio ein und bekommst Tab-Autocomplete, Inline-Chat und Code-Erklärungen – alles lokal und kostenlos. Das Plugin unterstützt mehrere Modelle gleichzeitig: ein schnelles für Autocomplete, ein leistungsstärkeres für Chat und Refactoring. Besonders praktisch: Du kannst eigene Regeln und Prompts definieren, die Continue in jedem Projekt befolgt. Die Integration mit Ollama macht es zur ersten Wahl für alle, die KI-gestützte Code-Entwicklung wollen, ohne Daten an Dritte zu senden.',
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
    name: 'Deepseek Coder',
    slug: 'deepseek-coder',
    tagline: 'Open-Source Code-LLM auf Konkurrenzniveau',
    description: 'Deepseek Coder ist ein spezialisiertes Open-Source-Modell für Code, das fast GPT-4-Niveau erreicht – und das komplett lokal. Einrichtung: Lade das Modell über Ollama (ollama run deepseek-coder) oder LM Studio herunter und verbinde es mit Continue.dev in VS Code. Schon hast du einen vollwertigen Coding-Assistenten, der keine Daten nach China oder in die USA sendet. Der 16K Token Context reicht für die meisten Codebasen. Für die optimale Einrichtung und Feintuning deines Setups – inklusive Modellauswahl je nach Hardware – schau in unseren KI-Kurs, dort zeigen wir dir Schritt für Schritt, wie du Deepseek Coder produktiv einsetzt.',
    logo: null,
    category: 'Code',
    website: 'https://deepseek.com',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Spitzen-Code-Qualität', 'Lokal ausführbar', 'Multi-Sprache', '16K Context', 'API verfügbar'],
    tags: ['Coding', 'Open Source', 'LLM', 'Lokal'],
    rating: 4.7,
    reviewCount: 8900,
    isNew: false,
    isTrending: false,
    publishedAt: '2025-12-20T00:00:00Z'
  },
  {
    id: '9',
    name: 'Aider',
    slug: 'aider',
    tagline: 'KI-Pair-Programming im Terminal',
    description: 'Aider ist ein KI-Pair-Programming-Tool, das direkt im Terminal arbeitet und sich mit beliebigen LLMs verbindet – auch mit lokalen über Ollama. Der Clou: Aider integriert sich nahtlos mit Git. Es erstellt automatisch Commits, versteht deine Projektstruktur (via Tree-Map) und kann selbstständig größere Refactorings durchführen. Einrichtung: pip install aider-chat, dann mit ollama run verbinden. Besonders nützlich ist der Architect-Mode: Aider plant zuerst die Architektur, fragt dich um Feedback und setzt dann um. Für den kompletten Workflow von der ersten Idee bis zum Deployment zeigen wir dir im KI-Kurs, wie du Aider mit anderen Tools kombinierst.',
    logo: null,
    category: 'Code',
    website: 'https://aider.chat',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Git-Integration', 'Multi-LLM Support', 'Auto-Commit', 'Map-Refactor', 'Architect-Mode'],
    tags: ['Coding', 'Pair Programming', 'CLI', 'Git'],
    rating: 4.6,
    reviewCount: 2100,
    isNew: false,
    isTrending: true,
    publishedAt: '2026-01-10T00:00:00Z'
  },
  {
    id: '10',
    name: 'Hermes Agent',
    slug: 'hermes-agent',
    tagline: 'Open-Source Agent der mit dir wächst',
    description: 'Hermes Agent ist ein selbst-evolvierender KI-Agent – je mehr du ihn nutzt, desto besser wird er. Anders als statische Chatbots passt Hermes sich deinem Schreibstil, deinen Vorlieben und deinen wiederkehrenden Aufgaben an. Einrichtung: Installiere Hermes über den GitHub-Repo, starte den Agenten und beginne mit einfachen Aufgaben. Mit der Zeit erkennt er Muster in deiner Arbeit und schlägt Automatisierungen vor. Perfekt für Content-Ersteller, die wiederkehrende Workflows haben. Wie du Hermes Agent trainierst und an deine spezifischen Bedürfnisse anpasst, zeigen wir detailliert im KI-Kurs – von der Grundkonfiguration bis zu komplexen Multi-Step-Automatisierungen.',
    logo: null,
    category: 'Automatisierung',
    website: 'https://hermes-agent.com',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Selbst-evolvierend', 'Persönliche Anpassung', 'Multi-Tool', 'Langzeitgedächtnis', 'Open Source'],
    tags: ['Agent', 'Open Source', 'Automatisierung', 'KI'],
    rating: 4.4,
    reviewCount: 430,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-05-08T00:00:00Z'
  },
  {
    id: '11',
    name: 'Stable Diffusion',
    slug: 'stable-diffusion',
    tagline: 'Lokale Bildgenerierung in Profi-Qualität',
    description: 'Stable Diffusion (Automatic1111 WebUI) ist der Standard für lokale KI-Bildgenerierung. Anders als Midjourney läuft alles auf deiner GPU – kein Abo, keine Limits, keine Zensur. Einrichtung: Lade das WebUI-Repo von GitHub, führe die Installationsroutine aus (Python + Git nötig), starte mit webui.bat und schon erreichst du die Oberfläche im Browser. Unzählige Community-Modelle auf CivitAI warten darauf, getestet zu werden. Mit ControlNet bestimmst du exakt die Pose, Komposition oder Tiefe deiner Bilder. Die Kunst liegt in der richtigen Modellauswahl und Prompt-Technik – genau das vermitteln wir in unserem KI-Kurs, inklusive fertiger Workflows für verschiedene Anwendungsfälle.',
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
    id: '12',
    name: 'ComfyUI',
    slug: 'comfyui',
    tagline: 'Node-basierte KI-Bild-Workflows',
    description: 'ComfyUI ist das fortschrittlichste Interface für KI-Bildgenerierung. Statt einfacher Klicks baust du visuelle Node-Workflows – jeder Node ist ein Schritt im Bildentstehungsprozess. Das klingt erstmal kompliziert, gibt dir aber unendliche Freiheit: Du kannst mehrere Modelle kombinieren, Bild-zu-Bild-Pipelines bauen, Video-Animationen erstellen und alles mit einem Klick wiederholen. Einrichtung: Ähnlich wie Automatic1111, aber mit Fokus auf modulare Workflows. Lade fertige Workflows aus der Community, passe sie an und erstelle deine eigenen. Für Einsteiger empfehlen wir unseren KI-Kurs – dort bauen wir gemeinsam die wichtigsten Workflows auf, die du direkt für deine Projekte nutzen kannst.',
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
  },
  {
    id: '13',
    name: 'Flux',
    slug: 'flux',
    tagline: 'Nächstes-Level KI-Bildgenerierung',
    description: 'Flux von Black Forest Labs ist der neue Star am KI-Bildhimmel – übertrifft Midjourney in vielen Bereichen und ist teilweise Open Source. Besonders stark: Flux kann Texte in Bildern korrekt darstellen (ein bekanntes Problem bei Stable Diffusion) und liefert bei Architektur, Produktfotos und realistischen Porträts verblüffende Ergebnisse. Einrichtung: Flux läuft über ComfyUI oder direkt als Python-Skript. Die meisten Nutzer starten mit Flux Schnell (schnellste Variante) und arbeiten sich zu Flux Pro hoch. Benötigt eine GPU mit mindestens 12GB VRAM. Die optimale Konfiguration für deine Hardware und die besten Prompts für verschiedene Stile zeigen wir im KI-Kurs.',
    logo: null,
    category: 'Bild',
    website: 'https://blackforestlabs.ai',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Beste Bildqualität', 'Text-Rendering', 'Schnelle Inferenz', 'Verschiedene Varianten', 'LoRA-Support'],
    tags: ['Bild', 'Open Source', 'State-of-the-Art', 'KI'],
    rating: 4.9,
    reviewCount: 7800,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-04-01T00:00:00Z'
  },
  {
    id: '14',
    name: 'Perplexica',
    slug: 'perplexica',
    tagline: 'Open-Source Perplexity-Alternative',
    description: 'Perplexica ist eine Open-Source-Suchmaschine mit KI-Integration – quasi deine eigene Perplexity AI, aber selbst gehostet. Statt deine Suchanfragen an Google zu senden, durchsucht Perplexica das Web, fasst Ergebnisse mit lokalen LLMs zusammen und liefert dir eine klare Antwort mit Quellenangaben. Einrichtung: Läuft als Docker-Container, den du mit Ollama verbindest. Perfekt für Recherche, Content-Erstellung und Wettbewerbsanalyse – alles ohne dass deine Suchanfragen bei Drittanbietern landen. Wie du Perplexica als Recherche-Tool in deine täglichen Workflows einbaust, zeigen wir im KI-Kurs.',
    logo: null,
    category: 'Suche',
    website: 'https://perplexica.dev',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['KI-Suche', 'Open Source', 'Self-Hosted', 'Web-Crawling', 'Zusammenfassungen'],
    tags: ['Suche', 'Open Source', 'Lokal', 'Recherche'],
    rating: 4.5,
    reviewCount: 980,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-03-20T00:00:00Z'
  },
  {
    id: '15',
    name: 'n8n',
    slug: 'n8n',
    tagline: 'Self-Hosted Workflow-Automatisierung',
    description: 'n8n ist die führende Open-Source-Workflow-Automatisierungsplattform – quasi Make oder Zapier, aber selbst gehostet und komplett kostenlos. Verbinde über 400 Dienste (YouTube, X/Twitter, E-Mail, KI-APIs, Datenbanken) und baue visuelle Workflows ohne Code. Besonders nützlich für Content-Creator: n8n kann automatisch neue YouTube-Videos erkennen, Transkriptionen per Whisper erstellen, Blog-Artikel generieren und auf Social Media teilen – ein vollautomatischer Content-Workflow. Einrichtung: Läuft per Docker auf deinem Server. In unserem KI-Kurs zeigen wir dir, wie du einen kompletten Content-Automation-Workflow mit n8n aufbaust – von der Video-Idee bis zur automatischen Veröffentlichung auf allen Plattformen.',
    logo: null,
    category: 'Automatisierung',
    website: 'https://n8n.io',
    pricing: 'free',
    price: 'Kostenlos / Self-Hosted',
    features: ['Visuelle Workflows', '400+ Integrationen', 'Self-Hosted', 'AI-Integration', 'Code-Nodes'],
    tags: ['Automatisierung', 'Open Source', 'Workflow', 'Self-Hosted'],
    rating: 4.7,
    reviewCount: 4300,
    isNew: false,
    isTrending: true,
    publishedAt: '2025-09-01T00:00:00Z'
  },
  {
    id: '16',
    name: 'OpenAI Whisper',
    slug: 'whisper',
    tagline: 'Lokale Spracherkennung in Profi-Qualität',
    description: 'OpenAI Whisper ist das beste Open-Source-Spracherkennungsmodell der Welt. Erkennt über 100 Sprachen, liefert extrem genaue Transkriptionen und läuft komplett lokal – ideal für Content-Creator, die Videos, Podcasts oder Meetings transkribieren wollen. Einrichtung: pip install openai-whisper, dann whisper audio.mp3 --model large. Es gibt auch leichtere Modelle (tiny, base, small), wenn du nicht genug VRAM hast. Für eine benutzerfreundliche Oberfläche kombiniert mit n8n und AnythingLLM: Whisper transkribiert, AnythingLLM fasst zusammen, n8n verteilt die Ergebnisse. Den kompletten Workflow von der Audio-Datei bis zur fertigen Zusammenfassung bauen wir im KI-Kurs auf.',
    logo: null,
    category: 'Audio',
    website: 'https://github.com/openai/whisper',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['100+ Sprachen', 'Lokal ausführbar', 'Hohe Genauigkeit', 'Timestamp-Support', 'Mehrere Modelle'],
    tags: ['Audio', 'Open Source', 'Spracherkennung', 'Transkription'],
    rating: 4.8,
    reviewCount: 9800,
    isNew: false,
    isTrending: false,
    publishedAt: '2024-09-21T00:00:00Z'
  },
  {
    id: '17',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'KI-Stimmen in Studio-Qualität',
    description: 'ElevenLabs ist der Standard für KI-Sprachsynthese – die Stimmen klingen so realistisch, dass man sie kaum von echten Menschen unterscheiden kann. Erzeuge Voiceovers für YouTube-Videos, vertone Blog-Artikel als Audio, klone deine eigene Stimme oder erstelle ganze Hörbücher mit KI. Besonders nützlich: Der Speech-to-Speech Modus – du sprichst etwas ein und ElevenLabs wandelt es in eine andere Stimme um, mit deiner Betonung und Emotion. Die API lässt sich in n8n-Workflows integrieren, sodass du automatisch Audioversionen deiner Blog-Artikel erstellen kannst. Einrichtung: Registrierung auf elevenlabs.io, kostenloser Tarif mit 10.000 Zeichen/Monat. Die optimale Nutzung für Content-Creator behandeln wir im KI-Kurs.',
    logo: null,
    category: 'Audio',
    website: 'https://elevenlabs.io',
    pricing: 'freemium',
    price: 'Kostenlos / ab $5 Monat',
    features: ['Realistische Stimmen', 'Voice-Cloning', 'Multi-Sprache', 'Sound Effects', 'API-Zugriff'],
    tags: ['Audio', 'Stimme', 'KI', 'Content'],
    rating: 4.6,
    reviewCount: 6700,
    isNew: false,
    isTrending: false,
    publishedAt: '2025-07-15T00:00:00Z'
  },
  {
    id: '18',
    name: 'Lobster Father',
    slug: 'lobster-father',
    tagline: 'Der erste 2-Tap KI-Assistent',
    description: 'Lobster Father ist ein neuartiger KI-Assistent, der mit nur zwei Taps (Klicks) alles erledigt. Die Idee: kein langes Prompten, keine komplizierte Konfiguration – einfach zweimal tippen und die KI macht den Rest. Extrem schnell, minimalistisch und effizient. Perfekt für schnelle Recherchen, Übersetzungen, Zusammenfassungen und kleine Schreibaufgaben im Alltag. Einrichtung: App herunterladen, zwei Tasten konfigurieren, loslegen. Ideal für alle, die KI nutzen wollen, ohne sich mit Technik herumzuschlagen. Lobster Father ist ein gutes Beispiel dafür, wie wir in Zukunft mit KI interagieren werden – und ein Thema, das wir im KI-Kurs im Kontext von Benutzerfreundlichkeit und Produktivität behandeln.',
    logo: null,
    category: 'Automatisierung',
    website: 'https://lobsterfather.com',
    pricing: 'free',
    price: 'Kostenlos',
    features: ['2-Tap Bedienung', 'Blitzschnell', 'Minimalistisch', 'Multi-Plattform', 'Aufgaben-Automation'],
    tags: ['Assistent', 'Schnell', 'Minimalistisch', 'Produktivität'],
    rating: 4.3,
    reviewCount: 320,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-05-12T00:00:00Z'
  },
  {
    id: '19',
    name: 'Space Agent',
    slug: 'space-agent',
    tagline: 'Selbst-evolvierender KI-Agent (lokal)',
    description: 'Space Agent ist ein KI-Agent, der sich selbstständig weiterentwickelt. Anders als normale Chatbots beobachtet Space Agent deine Arbeit, lernt aus deinen Entscheidungen und wird mit jeder Nutzung besser. 100% lokal und privat – deine Daten verlassen nie deinen Rechner. Einrichtung: Über den GitHub-Repo installieren, persönliche Präferenzen angeben und loslegen. Space Agent kann in verschiedenen Modi arbeiten: als Coding-Assistent, als Recherche-Tool oder als persönlicher Produktivitäts-Coach. Für eine detaillierte Anleitung zur Einrichtung und Konfiguration – inklusive der optimalen Parameter für verschiedene Einsatzbereiche – empfehlen wir unseren KI-Kurs, in dem wir den kompletten Setup-Prozess Schritt für Schritt durchgehen.',
    logo: null,
    category: 'Automatisierung',
    website: 'https://spaceagent.ai',
    pricing: 'free',
    price: 'Kostenlos / Open Source',
    features: ['Selbst-lernend', 'Vollständig lokal', '100% Privat', 'Code-Integration', 'API-Schnittstelle'],
    tags: ['Agent', 'Open Source', 'Lokal', 'Selbst-evolvierend'],
    rating: 4.5,
    reviewCount: 560,
    isNew: true,
    isTrending: true,
    publishedAt: '2026-05-05T00:00:00Z'
  },
  {
    id: '20',
    name: 'Obsidian',
    slug: 'obsidian',
    tagline: 'Wissensdatenbank mit KI-Integration',
    description: 'Obsidian ist die mächtigste Notiz-App für lokale Wissensarbeit – und mit den richtigen KI-Plugins wird dein kompletter Notiz-Vault zum persönlichen KI-Brain. Mit Plugins wie Copilot, Smart Connections und Text Generator kannst du direkt in Obsidian mit deinen lokalen LLMs chatten, Zusammenfassungen erstellen und Verbindungen zwischen Notizen finden, die dir nie aufgefallen wären. Einrichtung: Obsidian kostenlos herunterladen, Vault anlegen (ein Ordner mit Markdown-Dateien), dann Plugins installieren. Der Copilot-Plugin verbindet sich mit Ollama und macht deine Notizen durchsuch- und befragbar. Wie du Obsidian als Wissensbasis für deine KI-Agenten aufbaust und welches Plugin-Setup für welche Arbeit am besten ist – das zeigen wir detailliert im KI-Kurs.',
    logo: null,
    category: 'Tool',
    website: 'https://obsidian.md',
    pricing: 'free',
    price: 'Kostenlos / Sync ab $4',
    features: ['Lokale Wissensdatenbank', 'Plugin-System', 'Graph-Ansicht', 'KI-Plugin Support', 'Vault-basiert'],
    tags: ['Wissen', 'Notizen', 'Plugins', 'Local-first'],
    rating: 4.8,
    reviewCount: 12000,
    isNew: false,
    isTrending: false,
    publishedAt: '2025-03-01T00:00:00Z'
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
    title: 'The AI That Actually Grows? | Hermes Agent: Full Setup & Introduction',
    youtubeId: 'fuwDz3m0KFE',
    duration: '16:00',
    category: 'Tool',
    tags: ['Hermes Agent', 'Setup', 'Agent'],
    isNew: true,
    publishedAt: '2026-05-05T00:00:00Z'
  },
  {
    id: '11',
    title: 'Mastering Local AI in 2026: Private LLMs, Fine-Tuning, and Maximum Efficiency',
    youtubeId: 'sxm6RcxaWUI',
    duration: '18:00',
    category: 'Guide',
    tags: ['Local AI', 'Fine-Tuning', 'Optimierung'],
    isNew: false,
    publishedAt: '2026-05-04T00:00:00Z'
  },
  {
    id: '12',
    title: 'Local AI in 2026: The Ultimate Hardware Guide for Every LLM Size',
    youtubeId: '5v5Mlh8x2Mg',
    duration: '14:00',
    category: 'Guide',
    tags: ['Hardware', 'Guide', 'LLM'],
    isNew: false,
    publishedAt: '2026-05-03T00:00:00Z'
  },
  {
    id: '13',
    title: 'Lokale KI 2026: Welcher PC für welche Modellgröße? (Hardware-Guide)',
    youtubeId: '0PVXRM1W9ag',
    duration: '14:00',
    category: 'Guide',
    tags: ['Hardware', 'Deutsch', 'LLM'],
    isNew: false,
    publishedAt: '2026-05-02T00:00:00Z'
  },
  {
    id: '14',
    title: 'HERMES AGENT Setup: Die KI, die mit dir wächst! (Installation & Tutorial)',
    youtubeId: 'pQbJnhqn5Jk',
    duration: '17:00',
    category: 'Tool',
    tags: ['Hermes Agent', 'Deutsch', 'Tutorial'],
    isNew: false,
    publishedAt: '2026-05-01T00:00:00Z'
  },
  {
    id: '15',
    title: 'Baue Ganze Apps in Minuten, ohne Code (GOOGLE ANTIGRAVITY)',
    youtubeId: '4m5MGFbOqC4',
    duration: '12:00',
    category: 'Tool',
    tags: ['Antigravity', 'No-Code', 'Google'],
    isNew: false,
    publishedAt: '2026-04-30T00:00:00Z'
  },
  {
    id: '16',
    title: 'ANTIGRAVITY + OPENCODE = GameChanger',
    youtubeId: 'R8IEFe32CUg',
    duration: '11:00',
    category: 'Tool',
    tags: ['Antigravity', 'OpenCode', 'Coding'],
    isNew: false,
    publishedAt: '2026-04-29T00:00:00Z'
  },
  {
    id: '17',
    title: 'Von Sand zum Superhirn - So entstehen Silizium Chips',
    youtubeId: 'PypW4wLqxrA',
    duration: '20:00',
    category: 'News',
    tags: ['Hardware', 'Chips', 'Hintergrund'],
    isNew: false,
    publishedAt: '2026-04-28T00:00:00Z'
  },
  {
    id: '18',
    title: 'MCP\'s erklärt: So funktionieren sie wirklich – Eigenschaften & Datensicherheit',
    youtubeId: 'PmfoTi3xvd0',
    duration: '13:00',
    category: 'Guide',
    tags: ['MCP', 'Protokoll', 'Sicherheit'],
    isNew: false,
    publishedAt: '2026-04-27T00:00:00Z'
  },
  {
    id: '19',
    title: 'Explaining Different Google AI Models and their usecases',
    youtubeId: 'uN0wx8iYi_0',
    duration: '11:00',
    category: 'Guide',
    tags: ['Google', 'AI Models', 'Übersicht'],
    isNew: false,
    publishedAt: '2026-04-26T00:00:00Z'
  },
  {
    id: '20',
    title: 'Ollama - Lokal LLMs Nutzen, damit ihre Daten auch Ihre bleiben!',
    youtubeId: 'pE920iW5Pyk',
    duration: '14:00',
    category: 'Tool',
    tags: ['Ollama', 'Deutsch', 'Lokal'],
    isNew: false,
    publishedAt: '2026-04-25T00:00:00Z'
  },
  {
    id: '21',
    title: 'AnythingLLM - Your Local AI (AND HOW TO SET IT UP)',
    youtubeId: 'j5fmO--UtXk',
    duration: '12:15',
    category: 'Tool',
    tags: ['AnythingLLM', 'Setup', 'English'],
    isNew: false,
    publishedAt: '2026-04-20T00:00:00Z'
  },
  {
    id: '22',
    title: 'Someone Forced a $600 COMPUTER to Run a NASA Level AI!',
    youtubeId: 'm6uIvA5sd5A',
    duration: '10:45',
    category: 'News',
    tags: ['Hardware', 'NASA', 'Open Source'],
    isNew: false,
    publishedAt: '2026-04-15T00:00:00Z'
  },
  {
    id: '23',
    title: 'OFFLINE VIBE CODING!!! Google\'s New Local Coding Agent',
    youtubeId: 'nOz47bGdxQU',
    duration: '11:30',
    category: 'Tool',
    tags: ['Google', 'Vibe Coding', 'Lokal'],
    isNew: false,
    publishedAt: '2026-04-10T00:00:00Z'
  },
  {
    id: '24',
    title: 'TOP 10 LOCAL AI TOOLS That KILL Midjourney!',
    youtubeId: 'ykemKLFzZUw',
    duration: '15:00',
    category: 'Guide',
    tags: ['Top 10', 'Tools', 'Vergleich'],
    isNew: false,
    publishedAt: '2026-04-05T00:00:00Z'
  }
]

export const sampleGuides: GuideEntry[] = [
  {
    id: '1',
    title: 'Lokale KI einrichten: Der komplette Anfänger-Guide',
    slug: 'lokale-ki-einrichten-anfaenger',
    excerpt: 'Installiere und konfiguriere deine erste lokale KI in 30 Minuten. Kein Cloud-Abo, keine Vorkenntnisse nötig.',
    content: `<h2>Lokale KI – was ist das überhaupt?</h2>
<p>Lokale KI bedeutet, dass alle Berechnungen auf deinem eigenen Rechner stattfinden – nicht in der Cloud. Deine Daten verlassen nie deinen PC. Du brauchst kein Internet, kein Abo und teilst nichts mit Drittanbietern.</p>
<h3>Was du brauchst</h3>
<ul>
<li>Einen PC mit mindestens 8GB RAM (16GB empfohlen)</li>
<li>Windows, macOS oder Linux</li>
<li>Ca. 10GB freien Speicherplatz</li>
</ul>
<h3>Schritt 1: Ollama installieren</h3>
<p>Lade Ollama von ollama.ai herunter und installiere es. Nach der Installation öffnest du ein Terminal und tippst: <code>ollama run llama3.2</code>. Schon läuft dein erstes lokales LLM.</p>
<h3>Schritt 2: Ein Modell auswählen</h3>
<p>Ollama bietet über 200 Modelle. Für den Start empfehle ich:</p>
<ul>
<li><strong>Llama 3.2 (3B):</strong> Sehr schnell, läuft auf jedem PC, perfekt für einfache Aufgaben</li>
<li><strong>Hermes 3 (8B):</strong> Gute Balance zwischen Geschwindigkeit und Qualität</li>
<li><strong>Deepseek Coder (6.7B):</strong> Spezialisiert auf Code, falls du programmierst</li>
</ul>
<h3>Schritt 3: Mit Open WebUI chatten</h3>
<p>Wenn du keine Kommandozeile magst, installiere Open WebUI (docker run -p 3000:8080 ghcr.io/open-webui/open-webui). Das sieht aus wie ChatGPT, läuft aber komplett lokal und verbindet sich automatisch mit Ollama.</p>
<h3>Fazit</h3>
<p>In unter 30 Minuten hast du eine voll funktionsfähige lokale KI am Laufen. Keine Cloud, keine Kosten, volle Kontrolle. Im Kurs zeige ich dir, wie du daraus produktive Workflows baust.</p>`,
    category: 'Einsteiger',
    tags: ['Lokale KI', 'Anfänger', 'Ollama', 'Setup'],
    level: 'Anfänger',
    readTime: 15,
    publishedAt: '2026-05-15T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: 'pE920iW5Pyk'
  },
  {
    id: '2',
    title: 'KI-Agenten mit n8n bauen: Vom YouTube-Video zum Blog-Post',
    slug: 'ki-agenten-n8n-workflow',
    excerpt: 'Automatisiere deinen Content-Workflow: n8n erkennt neue YouTube-Videos, transkribiert sie mit Whisper und erstellt fertige Blog-Artikel.',
    content: `<h2>Warum n8n für Content-Automation?</h2>
<p>n8n ist eine Open-Source-Workflow-Automatisierungsplattform. Stell es dir vor wie Zapier, aber selbst gehostet und komplett kostenlos. Du verbindest Dienste per Drag & Drop und baust komplexe Automatisierungen ohne Code.</p>
<h3>Der Workflow: YouTube zu Blog</h3>
<ol>
<li><strong>Trigger:</strong> n8n prüft regelmäßig deinen YouTube-Kanal auf neue Videos</li>
<li><strong>Transkription:</strong> Sobald ein neues Video da ist, wird die Audio-Datei an Whisper gesendet</li>
<li><strong>KI-Verarbeitung:</strong> Ein lokales LLM (über Ollama) fasst das Transkript zusammen und erstellt einen Blog-Artikel</li>
<li><strong>Veröffentlichung:</strong> Der fertige Artikel wird auf deiner Webseite veröffentlicht</li>
</ol>
<h3>n8n installieren</h3>
<p>n8n läuft als Docker-Container. Ein Befehl genügt: <code>docker run -it --rm --name n8n -p 5678:5678 n8nio/n8n</code>. Danach erreichst du die Oberfläche unter http://localhost:5678.</p>
<h3>Wichtige Nodes für deinen Workflow</h3>
<ul>
<li><strong>RSS Feed Read:</strong> Liest deinen YouTube-RSS-Feed</li>
<li><strong>HTTP Request:</strong> Ruft die Transkription ab</li>
<li><strong>Ollama Node:</strong> Sendet Text an dein lokales LLM</li>
<li><strong>Markdown to HTML:</strong> Konvertiert das Ergebnis</li>
</ul>
<h3>Fazit</h3>
<p>Mit n8n automatisierst du repetitive Aufgaben und gewinnst Stunden pro Woche. Der initiale Setup dauert einen Nachmittag – danach läuft alles von allein.</p>`,
    category: 'Automatisierung',
    tags: ['n8n', 'Workflow', 'Automatisierung', 'YouTube'],
    level: 'Fortgeschritten',
    readTime: 20,
    publishedAt: '2026-05-14T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: null
  },
  {
    id: '3',
    title: 'Prompt Engineering Masterclass: Bessere Ergebnisse in 10 Minuten',
    slug: 'prompt-engineering-masterclass',
    excerpt: 'Lerne die wichtigsten Prompt-Techniken, die deine KI-Ergebnisse sofort verbessern. Mit praktischen Beispielen für lokale LLMs.',
    content: `<h2>Warum Prompt Engineering?</h2>
<p>Die Qualität deiner KI-Ergebnisse hängt zu 80% vom Prompt ab. Mit den richtigen Techniken holst du das Maximum aus jedem Modell – egal ob lokal oder in der Cloud.</p>
<h3>Die 5 wichtigsten Techniken</h3>
<h4>1. Rolle vergeben</h4>
<p>Starte jeden Prompt mit einer Rolle: "Du bist ein erfahrener Content-Manager..." oder "Du bist ein Python-Entwickler mit 10 Jahren Erfahrung...". Das verbessert die Ergebnisse dramatisch.</p>
<h4>2. Kontext geben</h4>
<p>Statt "Schreibe einen Artikel" sage "Schreibe einen 500-Wort-Artikel für Anfänger, die noch nie von KI gehört haben. Erkläre Fachbegriffe. Ziel: Sie sollen hinterher Ollama installieren können."</p>
<h4>3. Format vorgeben</h4>
<p>Definiere das Ausgabeformat genau: "Gib mir 5 Bullet Points. Jeder Punkt: 1 Satz Erklärung + 1 konkretes Beispiel."</p>
<h4>4. Negative Anweisungen</h4>
<p>Manchmal hilft es zu sagen, was das Modell NICHT tun soll: "Keine Fachbegriffe ohne Erklärung. Keine generischen Floskeln."</p>
<h4>5. Chain-of-Thought</h4>
<p>Für komplexe Aufgaben: "Denke Schritt für Schritt. Erkläre deine Überlegungen, bevor du die Antwort gibst."</p>
<h3>Fazit</h3>
<p>Gute Prompts sind der Schlüssel zu guten KI-Ergebnissen. Wende diese 5 Techniken an und du wirst sofort bessere Resultate sehen – bei jedem Modell.</p>`,
    category: 'Grundlagen',
    tags: ['Prompt Engineering', 'Tipps', 'Bessere Ergebnisse'],
    level: 'Anfänger',
    readTime: 8,
    publishedAt: '2026-05-13T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: null
  },
  {
    id: '4',
    title: 'RAG (Retrieval Augmented Generation): Eigene Dokumente als Wissensbasis',
    slug: 'rag-eigene-dokumente-wissensbasis',
    excerpt: 'Verwandle deine PDFs, Word-Dokumente und Webseiten in eine durchsuchbare KI-Wissensdatenbank – lokal und privat.',
    content: `<h2>Was ist RAG?</h2>
<p>RAG steht für Retrieval Augmented Generation. Klingt kompliziert, ist aber simpel: Deine KI bekommt Zugriff auf eine eigene Wissensdatenbank (deine Dokumente, PDFs, Notizen) und kann daraus zitieren. Statt zu raten, sucht sie in deinen Daten nach der richtigen Antwort.</p>
<h3>RAG mit AnythingLLM einrichten</h3>
<ol>
<li>AnythingLLM installieren (gibts auf anythingllm.com)</li>
<li>Einen neuen Workspace erstellen (z.B. "Meine Projekte")</li>
<li>Dokumente hochladen: PDF, Word, Markdown, Webseiten – alles möglich</li>
<li>Ollama als LLM-Provider auswählen</li>
<li>Loslegen: Stelle Fragen zu deinen Dokumenten</li>
</ol>
<h3>Wofür RAG nützlich ist</h3>
<ul>
<li><strong>Projekt-Dokumentation:</strong> Frage deine KI "Was war das Architektur-Entscheidung vom letzten Meeting?"</li>
<li><strong>Fachbücher:</strong> Deine gesamte Bibliothek wird durchsuchbar</li>
<li><strong>Transkripte:</strong> Alte YouTube-Videos, Meetings – alles befragbar</li>
</ul>
<h3>Fazit</h3>
<p>RAG verwandelt deine KI von einem Generalkönner in einen Spezialisten, der deine persönlichen Daten kennt. Lokal, privat, ohne Cloud.</p>`,
    category: 'Fortgeschritten',
    tags: ['RAG', 'AnythingLLM', 'Dokumente', 'Wissensdatenbank'],
    level: 'Mittel',
    readTime: 12,
    publishedAt: '2026-05-12T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: '-8wxocl96OM'
  },
  {
    id: '5',
    title: 'KI-Bildgenerierung lokal: Stable Diffusion vs. Flux im Vergleich',
    slug: 'ki-bildgenerierung-stable-diffusion-flux',
    excerpt: 'Welches Tool liefert die besten Bilder auf deiner Hardware? Ich habe Automatic1111, ComfyUI und Flux getestet – mit überraschenden Ergebnissen.',
    content: `<h2>Lokale Bildgenerierung 2026</h2>
<p>Midjourney kostet 60€/Monat, DALL-E pro Bild – dabei gehts auch kostenlos. Mit Stable Diffusion und Flux generierst du professionelle KI-Bilder auf deiner eigenen GPU. Unbegrenzt, kostenlos, privat.</p>
<h3>Die Tools im Vergleich</h3>
<h4>Stable Diffusion (Automatic1111)</h4>
<p>Der Klassiker. Riesige Community, unzählige Modelle auf CivitAI, extrem anpassbar. Einrichtung: Repo klonen, webui.bat starten, warten. Erfordert Python und Git.</p>
<h4>ComfyUI</h4>
<p>Der Profi. Statt einfacher Klicks baust du visuelle Workflows aus Nodes. Ermöglicht komplexe Pipelines: Mehrere Modelle kombinieren, Bild-zu-Bild, Video-Animation. Steilere Lernkurve, aber unendliche Möglichkeiten.</p>
<h4>Flux</h4>
<p>Der Neue von Black Forest Labs. Übertrifft Midjourney in vielen Bereichen, besonders bei Text in Bildern und realistischen Porträts. Läuft über ComfyUI, benötigt 12GB+ VRAM.</p>
<h3>Empfehlung</h3>
<p>Starte mit Automatic1111 und wechsle zu ComfyUI, wenn du mehr Kontrolle brauchst. Flux ist aktuell der Bild-Qualitäts-Champion, aber hardware-hungrig.</p>`,
    category: 'Bild',
    tags: ['Bildgenerierung', 'Stable Diffusion', 'Flux', 'Vergleich'],
    level: 'Mittel',
    readTime: 14,
    publishedAt: '2026-05-11T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: 'ioC6cNjYS90'
  },
  {
    id: '6',
    title: 'SEO mit KI: 10x mehr Traffic ohne extra Arbeit',
    slug: 'seo-mit-ki-10x-traffic',
    excerpt: 'Nutze KI-Tools, um deine SEO-Strategie zu automatisieren. Keyword-Recherche, Content-Optimierung und Rank-Tracking – alles mit lokalen LLMs.',
    content: `<h2>KI + SEO = unschlagbar</h2>
<p>SEO ist der beste Weg zu kostenlosem Traffic. Und KI macht SEO einfacher denn je. Mit den richtigen Tools automatisierst du die mühsamsten SEO-Aufgaben und fokussierst dich auf das, was wirklich zählt: gute Inhalte.</p>
<h3>Keyword-Recherche mit KI</h3>
<p>Nutze Perplexica (Open-Source-Perplexity-Alternative) oder ein lokales LLM, um relevante Keywords zu finden. Prompt: "Nenne mir 20 Long-Tail-Keywords zum Thema lokale KI. Sortiere nach Suchvolumen und Kaufabsicht."</p>
<h3>Content-Optimierung</h3>
<p>Schreibe deinen Artikel, lass ihn von einem lokalen LLM auf SEO optimieren: "Optimiere diesen Artikel für das Keyword 'lokale KI einrichten'. Vorschläge für H2-Überschriften, Meta-Description und interne Verlinkungen."</p>
<h3>Bessere GEO-Rankings</h3>
<p>KI-Engines (ChatGPT, Claude, Perplexity) zitieren klare, faktenbasierte Inhalte mit FAQ-Schema. Baue FAQ-Sektionen ein, verwende question-based H1-Überschriften und strukturiere deinen Content mit klaren Zwischenüberschriften.</p>
<h3>Automatisierung mit n8n</h3>
<p>Baue einen n8n-Workflow, der automatisch SEO-Optimierungen vorschlägt: Neuer Blog-Artikel → an KI senden → SEO-Feedback generieren → per E-Mail erhalten.</p>
<h3>Fazit</h3>
<p>KI macht SEO nicht überflüssig – sie macht es effizienter. Nutze die Tools, um Routineaufgaben zu automatisieren und dich auf hochwertige Inhalte zu konzentrieren.</p>`,
    category: 'Marketing',
    tags: ['SEO', 'Content', 'Optimierung', 'Traffic'],
    level: 'Fortgeschritten',
    readTime: 16,
    publishedAt: '2026-05-10T00:00:00Z',
    isNew: true,
    coverImage: null,
    videoId: null
  }
]
