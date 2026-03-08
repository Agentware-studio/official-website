import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Github, Twitter, Youtube } from 'lucide-react';

const principles = [
  {
    title: 'Goal-Driven by Default',
    body: 'Agentware starts from intent, desired outcomes, and constraints rather than purely manual command sequences or static UI flows.',
  },
  {
    title: 'Memory-Native Architecture',
    body: 'It maintains structured and persistent context about users, tasks, environments, and prior actions to support long-horizon operation.',
  },
  {
    title: 'Tool-Mediated Execution',
    body: 'It acts through APIs, browsers, scripts, services, devices, and other digital interfaces to create real operational effects.',
  },
  {
    title: 'Governable Autonomy',
    body: 'Its autonomy is bounded by policy, auditability, intervention points, and safety constraints rather than unrestricted automation.',
  },
];

const characteristics = [
  {
    title: 'Goal-Oriented Operation',
    body: 'Operates from intent and desired outcomes rather than fixed user-driven command sequences.',
  },
  {
    title: 'Persistent Structured Memory',
    body: 'Maintains durable, organized context about tasks, users, environments, and prior actions.',
  },
  {
    title: 'Planning and Decomposition',
    body: 'Transforms high-level objectives into executable plans, subtasks, and decision points.',
  },
  {
    title: 'Tool-Mediated Action',
    body: 'Uses APIs, browsers, scripts, devices, and external systems to produce real-world effects.',
  },
  {
    title: 'Governable Autonomy',
    body: 'Acts autonomously within explicit operational, security, and policy boundaries.',
  },
  {
    title: 'Closed-Loop Improvement',
    body: 'Monitors outcomes, detects deviations, and refines behavior through feedback and evaluation.',
  },
];

const comparisonRows = [
  ['Primary Mode', 'Human-operated', 'Human-serving, agent-mediated execution'],
  ['Input Model', 'Commands and UI actions', 'Intent, objectives, and constraints'],
  ['System State', 'Session-bound or shallow', 'Persistent and structured memory'],
  ['Execution', 'Predefined workflows', 'Agent-mediated planning, coordination, and adaptive execution'],
  ['Service Targets', 'End users and teams', 'Humans, organizations, and other agents'],
  ['Value Delivery', 'Feature access', 'Outcome delivery through an operational agent layer'],
  ['Control Layer', 'Permissions and settings', 'Governance, auditability, and intervention'],
];

const domains = [
  'Personal intelligence systems',
  'Agent-native browsers and operator systems',
  'AI tutors with memory and curriculum adaptation',
  'Autonomous research and knowledge workflows',
  'Business operations and decision-support agents',
  'Developer toolchains for multi-agent execution',
];

const visions = [
  {
    title: 'Personal Intelligence Systems',
    body: 'Software that understands a user over time, builds working memory, and acts as an operational layer for thinking, planning, and decision support.',
  },
  {
    title: 'Agent-Native Browsers',
    body: 'Execution environments where agents navigate, inspect, act, and coordinate across the web as an operational layer for human and organizational outcomes.',
  },
  {
    title: 'AI Tutors and Cognitive Systems',
    body: 'Long-horizon learning systems that adapt curriculum, pacing, practice, and media generation around a persistent model of the learner.',
  },
  {
    title: 'Multi-Agent Workflows',
    body: 'Coordinated systems in which specialized agents share memory, negotiate responsibilities, and complete complex operational tasks together.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode, className?: string, delay?: number, key?: React.Key }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ label, title, description }: { label: string, title: string, description?: string }) {
  return (
    <div className="mb-12 max-w-3xl md:mb-16">
      <FadeIn>
        <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
          {label}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-3xl font-medium tracking-tight text-neutral-100 md:text-5xl md:leading-[1.1]">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="mt-6 text-lg leading-relaxed text-neutral-400 md:text-xl">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

export default function AgentwareDefinitionPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 selection:bg-white/90 selection:text-black">
      {/* Atmospheric Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-1/2 h-[800px] w-[1200px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] h-[600px] w-[600px] rounded-full bg-indigo-500/[0.02] blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[20%] h-[600px] w-[600px] rounded-full bg-emerald-500/[0.02] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
            <a href="#top" className="font-mono text-sm font-medium uppercase tracking-[0.2em] text-neutral-200 transition-colors hover:text-white">
              Agentware
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-500 md:flex">
              <a href="#definition" className="transition-colors hover:text-white">Definition</a>
              <a href="#why" className="transition-colors hover:text-white">Why</a>
              <a href="#principles" className="transition-colors hover:text-white">Principles</a>
              <a href="#vision" className="transition-colors hover:text-white">Vision</a>
            </nav>
          </div>
        </header>

        <main id="top" className="pt-24">
          {/* Hero Section */}
          <section className="relative flex min-h-[85vh] flex-col justify-center py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 backdrop-blur-md">
                Defining the next software paradigm
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-6xl font-medium tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
                Agentware
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-xl leading-relaxed text-neutral-300 md:text-2xl">
                Human-serving software powered by agent-mediated execution.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
                Agentware is a software paradigm built around agentic execution, where agents act as the operational layer for interpreting objectives, maintaining memory, planning actions, using tools, and delivering outcomes for humans, organizations, and other agents.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#definition"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Read the definition</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="https://github.com/Agentware-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/5 active:scale-95"
                >
                  <Github className="h-4 w-4" />
                  <span>View GitHub</span>
                </a>
              </motion.div>
            </motion.div>
          </section>

          {/* Definition Section */}
          <section id="definition" className="border-t border-white/5 py-24 md:py-32">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <FadeIn>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.03] md:p-12">
                  <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Definition</div>
                  <p className="text-2xl leading-relaxed text-neutral-300 md:text-3xl md:leading-snug">
                    <span className="font-semibold text-white">Agentware</span> is a class of software systems architected around agentic execution, where agents function as an operational layer with structured memory, planning, tool use, policy-bounded autonomy, and feedback loops to deliver outcomes for humans, organizations, and other agents.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:bg-white/[0.03] md:p-12">
                  <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Working Formula</div>
                  <div className="relative rounded-xl border border-white/10 bg-black/50 p-6 font-mono text-sm leading-relaxed text-neutral-300 shadow-inner">
                    <div className="absolute top-0 left-0 h-full w-1 bg-white/20" />
                    <span className="font-semibold text-white">Agentware</span> <span className="text-neutral-600">=</span> Intent <span className="text-neutral-600">+</span> Memory <span className="text-neutral-600">+</span> Planning <span className="text-neutral-600">+</span> Tools <span className="text-neutral-600">+</span> Execution <span className="text-neutral-600">+</span> Feedback <span className="text-neutral-600">+</span> Governance
                  </div>
                  <p className="mt-8 text-sm leading-relaxed text-neutral-400">
                    Not just software that responds to commands, but software that can interpret objectives, act within constraints, coordinate execution through agents, and improve through controlled iteration.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Why Section */}
          <section id="why" className="border-t border-white/5 py-24 md:py-32">
            <SectionHeading 
              label="Why Agentware" 
              title="Traditional software is built around interfaces. Agentware is built around outcomes."
              description="The dominant software model of the last era optimized for direct human operation: screens, menus, workflows, and manual control. The emerging era requires software architected around agentic execution, where agents mediate planning and action to deliver outcomes for humans, organizations, and inter-agent systems under human-defined governance."
            />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {characteristics.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="group h-full rounded-2xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:border-white/10 hover:bg-white/[0.03]">
                    <h3 className="mb-3 text-lg font-medium tracking-tight text-neutral-100">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-400">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Principles Section */}
          <section id="principles" className="border-t border-white/5 py-24 md:py-32">
            <SectionHeading 
              label="Principles" 
              title="The architectural principles of the agent era."
              description="Agentware is not merely AI-enabled software. It is software deliberately architected for memory, planning, execution, and governance. These principles define what separates an agentic system from a conventional application with an LLM attached."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="group h-full rounded-3xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:border-white/10 hover:bg-white/[0.03] md:p-10">
                    <h3 className="mb-4 text-xl font-medium tracking-tight text-neutral-100">{item.title}</h3>
                    <p className="text-base leading-relaxed text-neutral-400">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* Formalization & Comparison */}
          <section className="border-t border-white/5 py-24 md:py-32">
            <SectionHeading 
              label="Formalization" 
              title="A formal definition for a new class of systems."
            />

            <div className="mb-24 grid gap-4 lg:grid-cols-2">
              <FadeIn>
                <div className="h-full rounded-3xl border border-white/5 bg-white/[0.01] p-8 md:p-10">
                  <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Formal Definition</div>
                  <p className="text-base leading-relaxed text-neutral-300">
                    Agentware is software architected around agentic execution, in which software agents serve as the operational layer for interpreting objectives, maintaining context, planning actions, invoking tools, coordinating workflows, and delivering outcomes for humans, organizations, and other agents under human-defined governance.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="h-full rounded-3xl border border-white/5 bg-white/[0.01] p-8 md:p-10">
                  <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Plain-English Meaning</div>
                  <p className="text-base leading-relaxed text-neutral-300">
                    If traditional software is operated directly by people, Agentware uses agents as the execution and coordination layer to deliver outcomes for people, organizations, and other software systems.
                  </p>
                </div>
              </FadeIn>
            </div>

            <SectionHeading 
              label="Comparison" 
              title="Agentware vs. traditional software."
            />

            <FadeIn>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.01]">
                <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.02] text-xs font-medium uppercase tracking-wider text-neutral-500 md:grid-cols-3">
                  <div className="p-5 md:p-6">Dimension</div>
                  <div className="hidden p-5 md:block md:p-6">Traditional Software</div>
                  <div className="hidden p-5 md:block md:p-6">Agentware</div>
                </div>
                {comparisonRows.map(([a, b, c], i) => (
                  <div key={a} className="grid grid-cols-1 border-b border-white/5 text-sm transition-colors hover:bg-white/[0.02] last:border-b-0 md:grid-cols-3">
                    <div className="p-5 font-medium text-neutral-200 md:p-6">{a}</div>
                    <div className="p-5 text-neutral-400 md:p-6"><span className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-600 md:hidden">Traditional Software</span>{b}</div>
                    <div className="p-5 text-neutral-300 md:p-6"><span className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-600 md:hidden">Agentware</span>{c}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* Vision Section */}
          <section id="vision" className="border-t border-white/5 py-24 md:py-32">
            <SectionHeading 
              label="Vision" 
              title="Future products built on the Agentware paradigm."
              description="Agentware is not a narrow product category. It is a broader software paradigm in which agents mediate execution to serve human goals, organizational outcomes, and inter-agent coordination across cognition, education, operations, research, and digital infrastructure."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {visions.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="group h-full rounded-3xl border border-white/5 bg-white/[0.01] p-8 transition-all hover:border-white/10 hover:bg-white/[0.03] md:p-10">
                    <h3 className="mb-4 text-xl font-medium tracking-tight text-neutral-100">{item.title}</h3>
                    <p className="text-base leading-relaxed text-neutral-400">{item.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <FadeIn>
                <div className="h-full rounded-3xl border border-white/5 bg-white/[0.01] p-8 md:p-10">
                  <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Example Domains</div>
                  <ul className="space-y-4 text-sm leading-relaxed text-neutral-300">
                    {domains.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
                  <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] translate-x-1/3 -translate-y-1/3 rounded-full bg-white/[0.03] blur-[80px]" />
                  <div className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Positioning Statement</div>
                  <p className="text-2xl leading-relaxed text-white md:text-3xl md:leading-snug">
                    Agentware is to the agent era what software was to the computing era: the operational medium through which intelligence is coordinated and delivered into human and organizational value.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Contact / CTA Section */}
          <section id="contact" className="border-t border-white/5 py-24 md:py-32">
            <FadeIn>
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-16 lg:p-24">
                <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[100px]" />
                
                <div className="mx-auto max-w-3xl text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">Get Involved</div>
                  </div>
                  <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                    Building the software layer for the agent era.
                  </h2>
                  <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-neutral-400">
                    Agentware Studio is an early effort to define, systematize, and build the conceptual and practical foundations of agent-native software.
                  </p>
                  <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                      href="https://github.com/Agentware-studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95"
                    >
                      <Github className="h-4 w-4" />
                      <span>Follow on GitHub</span>
                    </a>
                    <a
                      href="https://x.com/Agentware190058"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/5 active:scale-95"
                    >
                      <Twitter className="h-4 w-4" />
                      <span>Follow on X</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        </main>

        <footer className="border-t border-white/5 py-12 text-sm text-neutral-500">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-mono font-medium uppercase tracking-widest text-neutral-300">Agentware Studio</div>
              <div className="mt-2 text-neutral-500">Defining the next software paradigm.</div>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Agentware-studio" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-300">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/Agentware190058" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-300">
                <span className="sr-only">X (Twitter)</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@Agentware-u7w" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neutral-300">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
