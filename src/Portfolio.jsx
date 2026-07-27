import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Terminal, ChevronRight, MessageCircle, Users, Trophy, Calendar, Send, Circle } from "lucide-react";
import PROFILE_IMG_PLACEHOLDER from "./profile.jpg";


const TYPED_LINES = [
  "whoami",
  "mohammad_mazhum — b.tech (ai & ml), aspiring software developer",
];

function useTypewriter(lines, speed = 32, pause = 700) {
  const [display, setDisplay] = useState(["", ""]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= lines.length) {
      setDone(true);
      return;
    }
    const current = lines[lineIdx];
    if (charIdx <= current.length) {
      const t = setTimeout(() => {
        setDisplay((prev) => {
          const next = [...prev];
          next[lineIdx] = current.slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, pause);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx, lines, speed, pause]);

  return { display, done };
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="font-mono text-[#5eead4] text-sm select-none">//</span>
      <h2 className="font-mono text-[#e6edf3] text-lg tracking-wide uppercase">
        {children}
      </h2>
      <div className="flex-1 h-px bg-[#21262d]" />
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-block px-3 py-1 mr-2 mb-2 text-xs font-mono rounded-md border border-[#21262d] bg-[#141a24] text-[#8b949e] hover:border-[#5eead4]/40 hover:text-[#5eead4] transition-colors duration-200">
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-lg border border-[#21262d] bg-[#0f151d] p-6 hover:border-[#2d3542] transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="w-full h-full flex bg-[#0b0f14] text-[10px] font-mono overflow-hidden rounded-md">
      {/* sidebar */}
      <div className="w-[34%] border-r border-[#21262d] bg-[#0f151d] flex flex-col">
        <div className="px-2.5 py-2 border-b border-[#21262d] text-[#5eead4] font-semibold">Chats</div>
        {[
          { n: "team-aurum", on: true },
          { n: "priya.s", on: true },
          { n: "dev-group", on: false },
        ].map((c) => (
          <div key={c.n} className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-[#171c24]">
            <Circle size={6} className={c.on ? "fill-[#5eead4] text-[#5eead4]" : "fill-[#3d4551] text-[#3d4551]"} />
            <span className="text-[#8b949e] truncate">{c.n}</span>
          </div>
        ))}
      </div>
      {/* main */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#21262d]">
          <Users size={11} className="text-[#5eead4]" />
          <span className="text-[#e6edf3]">team-aurum</span>
          <span className="ml-auto text-[#3d4551]">● 3 online</span>
        </div>
        <div className="flex-1 px-3 py-2 space-y-1.5 overflow-hidden">
          <div className="flex justify-start">
            <span className="bg-[#171c24] text-[#8b949e] rounded-md px-2 py-1 max-w-[70%]">hey, pushed the auth module</span>
          </div>
          <div className="flex justify-end">
            <span className="bg-[#5eead4]/15 text-[#5eead4] rounded-md px-2 py-1 max-w-[70%]">nice, reviewing now 👀</span>
          </div>
          <div className="flex justify-start">
            <span className="bg-[#171c24] text-[#8b949e] rounded-md px-2 py-1 max-w-[70%]">typing indicators work great</span>
          </div>
          <div className="flex items-center gap-1 text-[#3d4551] pl-1">
            <span className="w-1 h-1 rounded-full bg-[#3d4551] animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-[#3d4551] animate-pulse" style={{ animationDelay: "0.15s" }} />
            <span className="w-1 h-1 rounded-full bg-[#3d4551] animate-pulse" style={{ animationDelay: "0.3s" }} />
            <span className="ml-1">priya is typing</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 border-t border-[#21262d]">
          <span className="flex-1 text-[#3d4551] bg-[#171c24] rounded px-2 py-1">Message #team-aurum</span>
          <Send size={12} className="text-[#5eead4]" />
        </div>
      </div>
    </div>
  );
}

function FestPreview() {
  return (
    <div className="w-full h-full flex flex-col bg-[#0b0f14] text-[10px] font-mono overflow-hidden rounded-md">
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#21262d]">
        <span className="text-[#f0b429] font-bold tracking-wide">SU-AURUM 2K26</span>
        <div className="flex gap-2 text-[#8b949e]">
          <span>Events</span><span>Leaderboard</span><span className="text-[#5eead4]">Winners</span>
        </div>
      </div>
      <div className="flex-1 p-2.5 grid grid-cols-3 gap-1.5">
        <div className="col-span-3 rounded bg-gradient-to-r from-[#5eead4]/10 to-[#f0b429]/10 border border-[#21262d] px-2 py-2 flex items-center gap-1.5">
          <Trophy size={12} className="text-[#f0b429]" />
          <span className="text-[#e6edf3]">Hackathon Finale — Live now</span>
        </div>
        {["Coding Sprint", "Design Jam", "Robo Race"].map((e) => (
          <div key={e} className="rounded bg-[#171c24] border border-[#21262d] px-1.5 py-2 flex flex-col gap-1">
            <Calendar size={10} className="text-[#5eead4]" />
            <span className="text-[#8b949e] leading-tight">{e}</span>
          </div>
        ))}
        <div className="col-span-3 rounded bg-[#171c24] border border-[#21262d] px-2 py-1.5 mt-0.5">
          <div className="flex justify-between text-[#8b949e]">
            <span>#1 Team Vertex</span><span className="text-[#f0b429]">980 pts</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPreview({ id }) {
  if (id === "chat") return <ChatPreview />;
  if (id === "fest") return <FestPreview />;
  return null;
}

export default function Portfolio() {
  const { display, done } = useTypewriter(TYPED_LINES);
  const [imgLoaded, setImgLoaded] = useState(false);
  const cursorRef = useRef(null);

  const skills = {
    Languages: ["Java", "Python", "C", "JavaScript"],
    Web: ["HTML", "CSS", "React", "Node.js", "Express"],
    Data: ["MongoDB", "MySQL"],
    Tools: ["Git", "GitHub", "VS Code", "Socket.io"],
    Concepts: ["Data Structures & Algorithms", "OOPs", "DBMS"],
  };

  const projects = [
    {
      id: "chat",
      title: "Real-Time Chat Application",
      stack: "MongoDB · Express · React · Node.js · Socket.io",
      date: "Jul 2026",
      points: [
        "Built a real-time messaging platform with JWT authentication, 1-on-1 and group conversations, and live presence tracking",
        "Automated message delivery and typing indicators via Socket.io room-based broadcasting",
      ],
      link: "github.com/mohammadmazhum",
    },
    {
      id: "fest",
      title: "SU-AURUM 2K26 — Association Fest Website",
      stack: "HTML · CSS · JavaScript",
      date: "Jan 2026",
      points: [
        "Developed a multi-page site for a college association fest with event listings, leaderboard, and winners display",
        "Managed content updates and structured the UI for smooth navigation",
      ],
      link: "github.com/mohammadmazhum",
    },
  ];

  const timeline = [
    {
      role: "Java Full Stack Developer Intern",
      org: "EduSkills (AICTE)",
      date: "Jul 2025 – Sep 2025",
      points: [
        "Learned and applied full-stack development concepts using Java, HTML, CSS, and JavaScript",
        "Gained understanding of application workflows and backend integration",
      ],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      org: "Srinivas Institute of Technology, Valachill",
      date: "2023 – Present",
      detail: "CGPA: 9.00 / 10",
    },
    {
      degree: "PUC — Karnataka School Examination and Assessment Board",
      org: "Carmel Convent PU College, Bantwal",
      date: "2023",
      detail: "85.66%",
    },
    {
      degree: "SSLC — Karnataka Secondary Education Examination Board",
      org: "B.E.S.T English Medium School, Bantwal",
      date: "2021",
      detail: "83.52%",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] font-['Inter',sans-serif] selection:bg-[#5eead4]/20 selection:text-[#5eead4]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        @keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-start infinite; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.6s ease-out forwards; }
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #0d1117; }
        ::-webkit-scrollbar-thumb { background: #21262d; border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: #2d3542; }
      `}</style>

      {/* subtle grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#e6edf3 1px, transparent 1px), linear-gradient(90deg, #e6edf3 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* NAV */}
      <nav className="sticky top-0 z-20 backdrop-blur-md bg-[#0d1117]/80 border-b border-[#21262d]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-mono text-sm text-[#5eead4] flex items-center gap-2">
            <Terminal size={16} strokeWidth={2} />
            mazhum.dev
          </span>
          <div className="hidden sm:flex gap-6 font-mono text-xs text-[#8b949e]">
            <a href="#about" className="hover:text-[#5eead4] transition-colors">about</a>
            <a href="#projects" className="hover:text-[#5eead4] transition-colors">projects</a>
            <a href="#experience" className="hover:text-[#5eead4] transition-colors">experience</a>
            <a href="#contact" className="hover:text-[#5eead4] transition-colors">contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header id="about" className="max-w-4xl mx-auto px-6 pt-16 pb-20 relative">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <div className="rounded-lg border border-[#21262d] bg-[#0f151d] overflow-hidden mb-6 max-w-xl">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#21262d] bg-[#141a24]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="ml-3 font-mono text-[11px] text-[#8b949e]">guest@mazhum-dev: ~</span>
              </div>
              <div className="px-5 py-5 font-mono text-sm leading-relaxed min-h-[92px]">
                <div className="text-[#8b949e]">
                  <span className="text-[#5eead4]">$</span> {display[0]}
                  {!done && display[1] === "" && <span className="cursor-blink">▌</span>}
                </div>
                <div className="text-[#e6edf3] mt-1">
                  {display[1]}
                  {done && <span className="cursor-blink">▌</span>}
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#f4f6f8] mb-3">
              Mohammad Mazhum
            </h1>
            <p className="text-[#8b949e] text-base sm:text-lg max-w-xl leading-relaxed mb-6">
              Results-driven B.Tech student in AI &amp; Machine Learning, building
              full-stack applications with Java and the MERN stack. Seeking an
              entry-level Software Developer role.
            </p>

            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <a href="mailto:mazhummohammad@gmail.com" className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#21262d] text-[#8b949e] hover:border-[#5eead4]/50 hover:text-[#5eead4] transition-colors">
                <Mail size={14} /> mazhummohammad@gmail.com
              </a>
              <a href="tel:9686261856" className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#21262d] text-[#8b949e] hover:border-[#5eead4]/50 hover:text-[#5eead4] transition-colors">
                <Phone size={14} /> 9686261856
              </a>
              <span className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-[#21262d] text-[#8b949e]">
                <MapPin size={14} /> Bantwal, Karnataka
              </span>
            </div>
          </div>

          <div className="flex md:flex-col items-center gap-4 justify-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden border-2 border-[#21262d] shadow-[0_0_0_4px_#0d1117,0_0_24px_rgba(94,234,212,0.08)]">
              {!imgLoaded && (
                <div className="absolute inset-0 bg-[#141a24] animate-pulse" />
              )}
              <img
                src={PROFILE_IMG_PLACEHOLDER}
                alt="Mohammad Mazhum"
                onLoad={() => setImgLoaded(true)}
                className={`w-full h-full object-cover transition-opacity duration-500 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
              />
            </div>
            <div className="flex md:flex-row gap-3">
              <a href="https://github.com/mohammadmazhum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-md border border-[#21262d] text-[#8b949e] hover:text-[#5eead4] hover:border-[#5eead4]/50 transition-colors">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/mohammadmazhum" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-md border border-[#21262d] text-[#8b949e] hover:text-[#5eead4] hover:border-[#5eead4]/50 transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24">
        {/* SKILLS */}
        <section className="mb-20">
          <SectionLabel>stack</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5">
            {Object.entries(skills).map(([cat, items]) => (
              <Card key={cat}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#5eead4] mb-3">
                  {cat}
                </p>
                <div>
                  {items.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-20">
          <SectionLabel>projects</SectionLabel>
          <div className="space-y-5">
            {projects.map((p) => (
              <div
                key={p.id}
                className="group relative rounded-lg border border-[#21262d] bg-[#0f151d] p-6 hover:border-[#5eead4]/40 transition-colors duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-[1fr_0fr] group-hover:md:grid-cols-[1fr_240px] transition-[grid-template-columns] duration-500 ease-out gap-0 group-hover:gap-6">
                  {/* details */}
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#f4f6f8] flex items-center gap-2">
                        {p.title}
                        <ExternalLink size={14} className="text-[#8b949e] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <span className="font-mono text-xs text-[#8b949e] flex-shrink-0">{p.date}</span>
                    </div>
                    <p className="font-mono text-xs text-[#5eead4] mb-4">{p.stack}</p>
                    <ul className="space-y-2">
                      {p.points.map((pt, i) => (
                        <li key={i} className="flex gap-2 text-sm text-[#8b949e] leading-relaxed">
                          <ChevronRight size={14} className="text-[#3d4551] mt-0.5 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* mobile / small-screen preview: always visible below content */}
                    <div className="md:hidden mt-5 aspect-[16/10] rounded-md border border-[#21262d] overflow-hidden">
                      <ProjectPreview id={p.id} />
                    </div>
                  </div>

                  {/* desktop hover preview */}
                  <div className="hidden md:block w-0 group-hover:w-[240px] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                    <div className="w-[240px] aspect-[16/11] rounded-md border border-[#21262d] shadow-[0_8px_30px_rgba(0,0,0,0.4)] translate-x-3 group-hover:translate-x-0 transition-transform duration-500 ease-out overflow-hidden">
                      <ProjectPreview id={p.id} />
                    </div>
                    <p className="font-mono text-[10px] text-[#3d4551] mt-2 text-center">preview · not a live deploy</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE + EDUCATION */}
        <section id="experience" className="mb-20 grid md:grid-cols-2 gap-10">
          <div>
            <SectionLabel>experience</SectionLabel>
            <div className="space-y-5">
              {timeline.map((t) => (
                <Card key={t.role}>
                  <h3 className="font-bold text-[#f4f6f8] text-sm mb-1">{t.role}</h3>
                  <p className="font-mono text-xs text-[#5eead4] mb-1">{t.org}</p>
                  <p className="font-mono text-[11px] text-[#8b949e] mb-3">{t.date}</p>
                  <ul className="space-y-2">
                    {t.points.map((pt, i) => (
                      <li key={i} className="flex gap-2 text-sm text-[#8b949e] leading-relaxed">
                        <ChevronRight size={14} className="text-[#3d4551] mt-0.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
              <Card>
                <p className="font-mono text-[11px] uppercase tracking-wider text-[#5eead4] mb-3">Achievements</p>
                <ul className="space-y-2 text-sm text-[#8b949e]">
                  <li className="flex gap-2"><ChevronRight size={14} className="text-[#3d4551] mt-0.5 flex-shrink-0" />Runner-up, HackMatrix Hackathon, 2026</li>
                  <li className="flex gap-2"><ChevronRight size={14} className="text-[#3d4551] mt-0.5 flex-shrink-0" />2nd rank in academics, 2nd year</li>
                </ul>
              </Card>
            </div>
          </div>

          <div>
            <SectionLabel>education</SectionLabel>
            <div className="space-y-5">
              {education.map((e) => (
                <Card key={e.degree}>
                  <h3 className="font-bold text-[#f4f6f8] text-sm mb-1 leading-snug">{e.degree}</h3>
                  <p className="font-mono text-xs text-[#5eead4] mb-1">{e.org}</p>
                  <div className="flex justify-between font-mono text-[11px] text-[#8b949e] mt-2">
                    <span>{e.date}</span>
                    <span className="text-[#f0b429]">{e.detail}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CERTS */}
        <section className="mb-20">
          <SectionLabel>certifications</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-5">
            <Card>
              <p className="text-sm text-[#e6edf3] font-medium mb-1">REST API Testing (Automation) — Rest Assured Java</p>
              <p className="font-mono text-xs text-[#8b949e]">Udemy, Rahul Shetty Academy · 2026</p>
            </Card>
            <Card>
              <p className="text-sm text-[#e6edf3] font-medium mb-1">Watson Services — Rapid Development for AI</p>
              <p className="font-mono text-xs text-[#8b949e]">IBM Career Education Program · 2025</p>
            </Card>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact">
          <SectionLabel>contact</SectionLabel>
          <Card className="text-center py-10">
            <p className="text-[#8b949e] mb-6 max-w-md mx-auto">
              Open to entry-level Software Developer roles. Reach out by email
              or connect on LinkedIn.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="mailto:mazhummohammad@gmail.com" className="font-mono text-xs px-5 py-2.5 rounded-md bg-[#5eead4] text-[#0d1117] font-semibold hover:bg-[#7ff2e0] transition-colors">
                mazhummohammad@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/mohammadmazhum" target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-5 py-2.5 rounded-md border border-[#21262d] text-[#e6edf3] hover:border-[#5eead4]/50 transition-colors">
                LinkedIn ↗
              </a>
              <a href="https://github.com/mohammadmazhum" target="_blank" rel="noopener noreferrer" className="font-mono text-xs px-5 py-2.5 rounded-md border border-[#21262d] text-[#e6edf3] hover:border-[#5eead4]/50 transition-colors">
                GitHub ↗
              </a>
            </div>
          </Card>
        </section>
      </main>

      <footer className="border-t border-[#21262d] py-6">
        <p className="text-center font-mono text-[11px] text-[#3d4551]">
          Built by Mohammad Mazhum · 2026
        </p>
      </footer>
    </div>
  );
}
