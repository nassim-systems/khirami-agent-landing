"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroParallax = {
    transform: `translateY(${scrollY * 0.08}px)`,
  };

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Khirami Systems — AI Architecture & Autonomous Systems</title>
        <meta
          name="description"
          content="Khirami Systems builds autonomous AI agents, intelligent workflows, and enterprise-grade architectures designed to scale without operational friction."
        />
        <meta property="og:title" content="Khirami Systems — AI Architecture" />
        <meta
          property="og:description"
          content="Enterprise-grade AI systems, autonomous workflows, and intelligent automation."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="min-h-screen w-full bg-[#050816] text-slate-100">
        {/* HEADER */}
        <header className="fixed top-0 left-0 right-0 z-30 border-b border-cyan-400/20 bg-[#050816]/70 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-300">
                Khirami Systems
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
              <a href="#architecture" className="hover:text-cyan-300 transition">
                Architecture
              </a>
              <a href="#why" className="hover:text-cyan-300 transition">
                Why Us
              </a>
              <a href="#capabilities" className="hover:text-cyan-300 transition">
                Capabilities
              </a>
              <a href="#process" className="hover:text-cyan-300 transition">
                Process
              </a>
              <a href="#contact" className="px-4 py-1.5 rounded-full bg-cyan-400 text-[#020617] shadow-[0_0_18px_rgba(34,211,238,0.6)] hover:bg-cyan-300 transition">
                Book a Call
              </a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="relative w-full px-6 pt-32 pb-28 bg-gradient-to-b from-[#050816] via-[#050816] to-[#020617]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute top-40 right-[-80px] h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">
                AI Architecture & Autonomous Systems
              </p>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-50">
                AI systems designed as
                <span className="block text-cyan-300">architectures, not prompts.</span>
              </h1>
              <p className="mt-6 text-sm md:text-base text-slate-300/85 max-w-xl">
                Khirami Systems builds autonomous AI agents, intelligent workflows, and enterprise-grade architectures for companies aiming to scale without operational friction.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg bg-cyan-400 text-[#020617] text-sm md:text-base font-medium shadow-[0_0_22px_rgba(34,211,238,0.7)] hover:bg-cyan-300 transition"
                >
                  Book a Call
                </a>
                <a
                  href="#architecture"
                  className="px-6 py-3 rounded-lg border border-cyan-400/60 text-cyan-200 text-sm md:text-base font-medium hover:bg-cyan-400/10 transition"
                >
                  View Architecture Blueprint
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div
                style={heroParallax}
                className="relative rounded-2xl border border-slate-700/70 bg-gradient-to-br from-[#020617] via-[#050816] to-[#0b1220] p-6 shadow-xl shadow-black/70 transition-transform duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                    Khirami System Map
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs md:text-sm">
                  {[
                    {
                      title: "Cognitive Engine",
                      desc: "LLM orchestration, reasoning, policies & guardrails.",
                    },
                    {
                      title: "Workflow Engine",
                      desc: "Autonomous multi-step execution, feedback loops, monitoring.",
                    },
                    {
                      title: "Knowledge Stack",
                      desc: "Vector DB, domain knowledge, live data connectors.",
                    },
                    {
                      title: "Integration Layer",
                      desc: "APIs, CRMs, internal tools, custom pipelines.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl border border-slate-700/80 bg-[#020617] p-4 shadow-[0_0_18px_rgba(15,23,42,0.9)] hover:border-cyan-400/60 hover:shadow-[0_0_24px_rgba(34,211,238,0.45)] transition"
                    >
                      <div className="absolute -top-2 left-3 h-4 w-4 rounded-full bg-cyan-400/70 blur-[3px] opacity-70" />
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        {item.title}
                      </p>
                      <p className="mt-2 text-[11px] md:text-xs text-slate-200/90">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section
          id="architecture"
          className="w-full px-6 py-20 bg-[#020617] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
                  Architecture
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
                  AI Systems Architecture
                </h2>
              </div>
              <p className="text-sm md:text-base text-slate-300/85 max-w-xl">
                Each system is designed as a complete architecture: cognitive engine, autonomous workflows, memory, integrations, and monitoring. Not isolated prompting — a real operational system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cognitive Engine",
                  desc: "Decision-making core powered by advanced LLMs, orchestration, business rules, and safety.",
                },
                {
                  title: "Autonomous Workflow Engine",
                  desc: "Task orchestration, feedback loops, supervision, and intelligent recovery.",
                },
                {
                  title: "Knowledge & Data Layer",
                  desc: "Vector DB, business documents, APIs, real-time data, controlled access.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-slate-800/80 bg-[#050816] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.85)] hover:border-cyan-400/60 hover:shadow-[0_0_32px_rgba(34,211,238,0.35)] transition"
                >
                  <div className="absolute -top-3 left-4 h-7 w-7 rounded-full bg-cyan-400/70 blur-[6px] opacity-70" />
                  <h3 className="text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* WHY US */}
        <section
          id="why"
          className="w-full px-6 py-24 bg-[#050816] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Why Khirami Systems
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              Why companies choose an AI Architect, not a prompt engineer
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Architecture-first approach",
                  desc: "Systems built as real architectures: cognitive engine, workflows, memory, integrations, monitoring. Not isolated prompts.",
                },
                {
                  title: "Enterprise-grade reliability",
                  desc: "Error handling, supervision, fallback logic, observability, and guardrails designed for real business operations.",
                },
                {
                  title: "Business-driven design",
                  desc: "Every system starts from business constraints, ROI, and operational bottlenecks — not from technology hype.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/80 bg-[#020617] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.85)] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition"
                >
                  <h3 className="text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section
          id="capabilities"
          className="w-full px-6 py-24 bg-[#020617] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              What Khirami Systems builds
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Autonomous AI Agents",
                  desc: "Agents capable of reasoning, planning, executing tasks, and interacting with tools and APIs.",
                },
                {
                  title: "Intelligent Workflows",
                  desc: "Multi-step automated processes with feedback loops, supervision, and error recovery.",
                },
                {
                  title: "Knowledge Systems",
                  desc: "Vector databases, embeddings, document intelligence, and domain-specific memory layers.",
                },
                {
                  title: "API Integrations",
                  desc: "CRM, ERP, Notion, Slack, HubSpot, custom APIs, internal tools, and data pipelines.",
                },
                {
                  title: "Monitoring & Observability",
                  desc: "Logs, metrics, dashboards, alerts, and continuous improvement loops.",
                },
                {
                  title: "Custom AI Architectures",
                  desc: "End-to-end systems designed for reliability, scalability, and operational efficiency.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/80 bg-[#050816] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.85)] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] transition"
                >
                  <h3 className="text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section
          id="tech"
          className="w-full px-6 py-24 bg-[#050816] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Tech Stack
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              Technologies used to build enterprise-grade AI systems
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-12 text-sm text-slate-300/85">
              {[
                "OpenAI / Anthropic / Llama",
                "LangChain / LlamaIndex",
                "Pinecone / Weaviate / Chroma",
                "FastAPI / Node.js / Python",
                "PostgreSQL / Redis",
                "Docker / Kubernetes",
                "Supabase / Firebase",
                "Zapier / Make / n8n",
              ].map((tech, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800/80 bg-[#020617] p-4 text-center hover:border-cyan-400/60 transition"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section
          id="industries"
          className="w-full px-6 py-24 bg-[#020617] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Industries
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              Industries where autonomous AI systems create massive leverage
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                "E‑commerce & Retail",
                "SaaS & Tech",
                "Real Estate",
                "Consulting & Agencies",
                "Customer Support",
                "Finance & Operations",
              ].map((industry, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800/80 bg-[#050816] p-5 text-center text-slate-300/85 hover:border-cyan-400/60 transition"
                >
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          id="process"
          className="w-full px-6 py-24 bg-[#050816] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Process
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              A clear, structured, enterprise-grade methodology
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding business constraints, workflows, data, and objectives.",
                },
                {
                  step: "02",
                  title: "Architecture",
                  desc: "Designing the cognitive engine, workflows, memory, and integrations.",
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "Implementation, testing, integration, and performance optimization.",
                },
                {
                  step: "04",
                  title: "Deploy & Improve",
                  desc: "Monitoring, metrics, iterations, and continuous improvement.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/80 bg-[#020617] p-6 hover:border-cyan-400/60 hover:shadow-[0_0_26px_rgba(34,211,238,0.35)] transition"
                >
                  <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-300/80">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* GUARANTEES */}
        <section
          id="guarantees"
          className="w-full px-6 py-24 bg-[#050816] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Guarantees
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              Commitments you can rely on
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Clear deliverables",
                  desc: "Every project includes documented architecture, workflows, and integration points.",
                },
                {
                  title: "Operational reliability",
                  desc: "Systems include fallback logic, monitoring, and error handling.",
                },
                {
                  title: "Continuous improvement",
                  desc: "Iteration cycles based on metrics, logs, and real usage.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/80 bg-[#020617] p-6 hover:border-cyan-400/60 transition"
                >
                  <h3 className="text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="w-full px-6 py-24 bg-[#020617] border-t border-slate-800/70"
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Pricing Tiers
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              Flexible engagement models
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: "Foundation",
                  desc: "Architecture blueprint, workflow mapping, system design.",
                },
                {
                  title: "Build",
                  desc: "Full implementation of autonomous agents and workflows.",
                },
                {
                  title: "Enterprise",
                  desc: "Custom architecture, integrations, monitoring, and continuous improvement.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800/80 bg-[#050816] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.85)] hover:border-cyan-400/60 transition"
                >
                  <h3 className="text-lg font-semibold text-slate-50">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300/85">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOUNDER */}
        <section className="w-full px-6 py-24 bg-[#050816] border-t border-slate-800/70">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-300/80">
              Founder / Architect
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-50">
              A Hybrid Approach: Consultant & Builder
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-300/85">
              I design autonomous AI systems based on real business constraints, not technology for the sake of technology. Architecture, workflow design, integration, deployment and continuous improvement: a complete, results‑driven approach.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="w-full px-6 py-24 bg-[#020617] border-t border-slate-800/70"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-50">
              Book a Call
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-300/85">
              A project, an idea, a system to design or improve? Let's discuss your AI architecture and what Khirami Systems can build for you.
            </p>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                className="px-8 py-3 rounded-lg bg-cyan-400 text-[#020617] text-sm md:text-base font-medium shadow-[0_0_26px_rgba(34,211,238,0.7)] hover:bg-cyan-300 transition"
              >
                Book via Calendly
              </a>

              <a
                href="mailto:nassim.automation@gmail.com"
                className="px-8 py-3 rounded-lg border border-cyan-400/60 text-cyan-200 text-sm md:text-base font-medium hover:bg-cyan-400/10 transition"
              >
                nassim.automation@gmail.com
              </a>
            </div>

            <section id="contact" className="mt-20">
              <h2 className="text-3xl font-bold mb-6">Book a Consultation</h2>
              <CalendlyEmbed />
            </section>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full py-8 text-center text-xs text-slate-500 bg-[#050816] border-t border-slate-800/70">
          © {new Date().getFullYear()} Khirami Systems — AI Architecture & Autonomous Systems.
        </footer>
      </main>
    </>
  );
}
