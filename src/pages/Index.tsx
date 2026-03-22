import { useState } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "DevFlow Dashboard",
    description: "Платформа для управления задачами команды разработки с real-time обновлениями, Kanban-досками и аналитикой продуктивности.",
    tags: ["React", "TypeScript", "Node.js", "WebSocket"],
    image: "https://cdn.poehali.dev/projects/0755d197-38c5-48f5-828e-4c9b6c2d90ad/files/0d241bc5-e943-43ad-adaf-f49343997d2d.jpg",
    link: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "ShopCore Mobile",
    description: "Мобильное приложение для интернет-магазина с умными рекомендациями, корзиной и офлайн-режимом на React Native.",
    tags: ["React Native", "Redux", "REST API", "Firebase"],
    image: "https://cdn.poehali.dev/projects/0755d197-38c5-48f5-828e-4c9b6c2d90ad/files/678c5ed5-16eb-4d6f-b7b5-4b930a798b29.jpg",
    link: "#",
    year: "2024",
  },
  {
    id: 3,
    title: "Analytics Pro",
    description: "SaaS-сервис для визуализации бизнес-метрик. Интерактивные графики, настраиваемые дашборды и экспорт в PDF.",
    tags: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    image: "https://cdn.poehali.dev/projects/0755d197-38c5-48f5-828e-4c9b6c2d90ad/files/14d77352-9dbc-4c9c-90f2-17eb9c58a59e.jpg",
    link: "#",
    year: "2023",
  },
];

const skills = [
  { name: "React / Next.js", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js / Python", level: 80 },
  { name: "UI/UX Design", level: 75 },
  { name: "PostgreSQL", level: 72 },
];

const navItems = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
  { label: "skills", href: "#skills" },
  { label: "contact", href: "#contact" },
];

export default function Index() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-grid" style={{ backgroundColor: "var(--surface)" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{
          background: "linear-gradient(180deg, rgba(13,17,23,0.95) 0%, transparent 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="glow-dot" />
          <span className="font-mono-code text-sm" style={{ color: "var(--neon)" }}>
            AS.dev
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="nav-link"
            >
              .{item.label}()
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("#contact")}
          className="font-mono-code text-xs px-4 py-2 rounded border transition-all duration-200 hover:shadow-lg"
          style={{
            borderColor: "var(--neon)",
            color: "var(--neon)",
            background: "rgba(0,255,209,0.05)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,255,209,0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,255,209,0.05)";
          }}
        >
          hire_me
        </button>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-20"
      >
        {/* Background glow */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,255,209,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="max-w-5xl w-full mx-auto">
          <div className="animate-fade-up animate-fade-up-1">
            <span
              className="font-mono-code text-sm tracking-widest uppercase"
              style={{ color: "var(--neon)" }}
            >
              // привет, я —
            </span>
          </div>

          <h1
            className="mt-3 font-black leading-none tracking-tight animate-fade-up animate-fade-up-2"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
          >
            <span style={{ color: "#e6edf3" }}>Андрей</span>
            <br />
            <span className="gradient-text">Соколов</span>
          </h1>

          <p
            className="mt-6 font-mono-code text-lg animate-fade-up animate-fade-up-3"
            style={{ color: "var(--text-dim)" }}
          >
            &lt;Frontend Developer /&gt;
          </p>

          <p
            className="mt-4 max-w-xl text-base leading-relaxed animate-fade-up animate-fade-up-4"
            style={{ color: "#8b949e", fontWeight: 400 }}
          >
            Создаю быстрые, красивые веб-приложения с вниманием к деталям.
            Специализируюсь на React, TypeScript и современных инструментах разработки.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up animate-fade-up-4">
            <button
              onClick={() => scrollTo("#projects")}
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-200"
              style={{
                background: "var(--neon)",
                color: "var(--surface)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,209,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Icon name="FolderOpen" size={16} />
              Посмотреть проекты
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-200 border"
              style={{
                borderColor: "rgba(139,148,158,0.3)",
                color: "#e6edf3",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--neon)";
                e.currentTarget.style.color = "var(--neon)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(139,148,158,0.3)";
                e.currentTarget.style.color = "#e6edf3";
              }}
            >
              <Icon name="Mail" size={16} />
              Написать
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-8 animate-fade-up animate-fade-up-4">
            {[
              { num: "4+", label: "года опыта" },
              { num: "30+", label: "проектов" },
              { num: "15+", label: "клиентов" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-black text-3xl"
                  style={{ color: "var(--neon)" }}
                >
                  {stat.num}
                </span>
                <span className="font-mono-code text-xs mt-1" style={{ color: "var(--text-dim)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="glow-dot" />
            <span className="font-mono-code text-sm" style={{ color: "var(--neon)" }}>
              02.
            </span>
            <h2 className="text-3xl font-black tracking-tight" style={{ color: "#e6edf3" }}>
              Проекты
            </h2>
            <div
              className="flex-1 h-px ml-4"
              style={{ background: "linear-gradient(90deg, rgba(0,255,209,0.3), transparent)" }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card-hover rounded-lg overflow-hidden border cursor-pointer"
                style={{
                  background: "var(--surface-2)",
                  borderColor:
                    hoveredProject === project.id
                      ? "rgba(0,255,209,0.3)"
                      : "rgba(255,255,255,0.06)",
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden" style={{ height: 180 }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(13,17,23,0.9) 100%)",
                    }}
                  />
                  <span
                    className="absolute top-3 right-3 font-mono-code text-xs px-2 py-1 rounded"
                    style={{
                      background: "rgba(13,17,23,0.8)",
                      color: "var(--text-dim)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#e6edf3" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-dim)" }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="flex items-center gap-2 font-mono-code text-xs transition-colors duration-200"
                    style={{ color: "var(--neon)" }}
                  >
                    <Icon name="ExternalLink" size={13} />
                    Открыть проект
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="glow-dot" />
            <span className="font-mono-code text-sm" style={{ color: "var(--neon)" }}>
              03.
            </span>
            <h2 className="text-3xl font-black tracking-tight" style={{ color: "#e6edf3" }}>
              Навыки
            </h2>
            <div
              className="flex-1 h-px ml-4"
              style={{ background: "linear-gradient(90deg, rgba(0,255,209,0.3), transparent)" }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skill bars */}
            <div className="space-y-7">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-mono-code text-sm" style={{ color: "#e6edf3" }}>
                      {skill.name}
                    </span>
                    <span className="font-mono-code text-xs" style={{ color: "var(--neon)" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & stack */}
            <div>
              <p className="font-mono-code text-xs mb-5" style={{ color: "var(--text-dim)" }}>
                // инструменты и технологии
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Next.js", "TypeScript", "Tailwind CSS",
                  "Node.js", "Python", "PostgreSQL", "Redis",
                  "Docker", "AWS", "Figma", "Git",
                  "Vite", "GraphQL", "REST API", "WebSocket",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="tag-pill cursor-default"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-16 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="glow-dot" />
            <span className="font-mono-code text-sm" style={{ color: "var(--neon)" }}>
              04.
            </span>
            <h2 className="text-3xl font-black tracking-tight" style={{ color: "#e6edf3" }}>
              Контакты
            </h2>
            <div
              className="flex-1 h-px ml-4"
              style={{ background: "linear-gradient(90deg, rgba(0,255,209,0.3), transparent)" }}
            />
          </div>

          <div
            className="rounded-xl p-10 border text-center"
            style={{
              background: "var(--surface-2)",
              borderColor: "rgba(0,255,209,0.12)",
            }}
          >
            <p
              className="font-mono-code text-sm mb-2"
              style={{ color: "var(--text-dim)" }}
            >
              // готов к новым проектам
            </p>
            <h3 className="text-2xl font-black mb-4" style={{ color: "#e6edf3" }}>
              Есть интересный проект?
            </h3>
            <p className="text-sm max-w-md mx-auto mb-8" style={{ color: "var(--text-dim)" }}>
              Обсудим задачу, сроки и стоимость. Обычно отвечаю в течение нескольких часов.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm transition-all duration-200"
                style={{ background: "var(--neon)", color: "var(--surface)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(0,255,209,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Icon name="Mail" size={16} />
                hello@example.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all duration-200"
                style={{
                  borderColor: "rgba(139,148,158,0.3)",
                  color: "#e6edf3",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--neon)";
                  e.currentTarget.style.color = "var(--neon)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,148,158,0.3)";
                  e.currentTarget.style.color = "#e6edf3";
                }}
              >
                <Icon name="Github" size={16} />
                GitHub
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-3 rounded font-semibold text-sm border transition-all duration-200"
                style={{
                  borderColor: "rgba(139,148,158,0.3)",
                  color: "#e6edf3",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--neon)";
                  e.currentTarget.style.color = "var(--neon)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(139,148,158,0.3)";
                  e.currentTarget.style.color = "#e6edf3";
                }}
              >
                <Icon name="Linkedin" size={16} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="px-6 md:px-16 lg:px-24 py-8 border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono-code text-xs" style={{ color: "var(--text-dim)" }}>
            © 2024 Андрей Соколов
          </span>
          <span className="font-mono-code text-xs" style={{ color: "var(--text-dim)" }}>
            built with React + TypeScript
          </span>
        </div>
      </footer>
    </div>
  );
}
