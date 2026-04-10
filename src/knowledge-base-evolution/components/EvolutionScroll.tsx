"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

import { useLocale } from "../i18n/provider";
import type { LevelTranslation } from "../i18n/resources";
import { HybridVisual, KeywordVisual, SemanticVisual, StructuredVisual } from "./Visuals";

const accentGlowClassName: Record<string, string> = {
  blue: "bg-blue-400/5",
  cyan: "bg-cyan-400/5",
  indigo: "bg-indigo-400/5",
  purple: "bg-purple-400/5",
};

type VisualComponent = typeof KeywordVisual;

type Level = LevelTranslation & {
  Visual: VisualComponent;
};

function LevelPage({
  level,
  nextLevelId,
}: {
  level: Level;
  nextLevelId: string | null;
  key?: string;
}) {
  const { messages } = useLocale();

  const scrollToNext = () => {
    const nextId = nextLevelId || "level-5";
    document.getElementById(nextId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id={level.id} className="snap-page flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1.3fr_0.7fr] gap-12 xl:gap-24 items-center px-10 xl:px-20 pl-24 xl:pl-28">
        <div className="space-y-10">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl xl:text-6xl font-black text-slate-900 mb-2 tracking-tighter leading-tight"
            >
              {level.title}
            </motion.h3>
            <p className="text-xl font-bold text-slate-400 mb-6">{level.subtitle}</p>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">{level.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 border-y border-slate-100 py-8">
            <div>
              <h4 className="flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-4">
                <CheckCircle2 size={14} /> {messages.common.advantages}
              </h4>
              <ul className="space-y-4">
                {level.pros.map((pro, index) => (
                  <li key={index} className="text-base text-slate-800 font-semibold leading-snug">
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-[10px] font-black text-rose-500 uppercase tracking-[0.3em] mb-4">
                <AlertCircle size={14} /> {messages.common.limitations}
              </h4>
              <ul className="space-y-4">
                {level.cons.map((con, index) => (
                  <li key={index} className="text-base text-slate-800 font-semibold leading-snug opacity-40">
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6">
            <div className="flex-1">
              <span className="text-[10px] font-black uppercase text-slate-400 block mb-2 tracking-widest">
                {messages.common.coreBreakthrough}:
              </span>
              <span className="text-xl font-black text-slate-900">{level.solved}</span>
            </div>
            <div className="flex-1 p-5 bg-slate-900 rounded-[1.5rem] shadow-xl shadow-slate-200">
              <span className="text-[10px] font-black uppercase text-slate-500 block mb-2 tracking-widest">
                {messages.common.representativeIssue}:
              </span>
              <span className="text-lg text-white font-medium italic leading-relaxed">{level.problem}</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-[12px] border-white bg-white h-[500px] w-full max-w-[420px]">
            <level.Visual />
          </div>
          <div
            className={`absolute -z-10 -inset-10 rounded-full blur-[100px] ${
              accentGlowClassName[level.accent] ?? "bg-slate-400/5"
            }`}
          />
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 pointer-events-none">
        <div className="max-w-7xl mx-auto flex px-10 justify-center">
          <div className="pointer-events-auto">
            <motion.button
              onClick={scrollToNext}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-6 p-1 bg-white border border-slate-200 rounded-full shadow-lg hover:shadow-2xl transition-all hover:border-slate-900 pr-6"
            >
              <div className="bg-slate-900 text-white px-5 py-3 rounded-full flex items-center gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest">{messages.common.paradigmShift}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-slate-500 italic max-w-sm text-left leading-tight line-clamp-2">{level.trigger}</p>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EvolutionScroll() {
  const { messages } = useLocale();
  const [activeLevel, setActiveLevel] = useState("hero");
  const [currentNum, setCurrentNum] = useState("1");

  const levels: Level[] = messages.levels.map((level, index) => ({
    ...level,
    Visual: [KeywordVisual, SemanticVisual, HybridVisual, StructuredVisual][index],
  }));

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "level-1", "level-2", "level-3", "level-4", "level-5"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLevel(id);
            const levelMatch = id.match(/level-(\d)/);
            if (levelMatch) setCurrentNum(levelMatch[1]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLevel = activeLevel.startsWith("level-") && activeLevel !== "level-5";

  return (
    <>
      <AnimatePresence>
        {isLevel && (
          <div className="fixed inset-x-0 top-1/2 z-[100] -translate-y-1/2 pointer-events-none">
            <div className="max-w-7xl mx-auto w-full px-10 xl:px-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="-translate-x-[92px] xl:-translate-x-[92px] flex w-fit items-center gap-[40px] pointer-events-auto"
              >
                <div className="flex flex-col items-center gap-0">
                  {"LEVEL".split("").map((letter, index) => (
                    <div key={index} className="text-3xl xl:text-5xl font-black text-slate-300 tracking-tighter leading-none mb-1">
                      {letter}
                    </div>
                  ))}
                  <div className="h-4" />
                  <div className="relative h-12 xl:h-16 w-full overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentNum}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="text-3xl xl:text-5xl font-black text-slate-900 absolute leading-none tracking-tighter"
                      >
                        {currentNum}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {[1, 2, 3, 4].map((n) => (
                    <div
                      key={n}
                      onClick={() => document.getElementById(`level-${n}`)?.scrollIntoView({ behavior: "smooth" })}
                      className={`w-1.5 rounded-full transition-all duration-700 cursor-pointer ${
                        currentNum === n.toString()
                          ? "bg-slate-900 h-16 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
                          : "bg-slate-200 h-6 opacity-40 hover:opacity-100"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <section id="hero" className="snap-page flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full px-10 xl:px-20 pl-28 xl:pl-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-7xl xl:text-[9rem] font-black tracking-tighter text-slate-900 leading-[0.8] mb-12">
              {messages.hero.titleLine1}
              <br />
              {messages.hero.titleLine2}
            </h1>
            <div className="flex flex-col xl:flex-row xl:items-end gap-8">
              <p className="text-2xl text-slate-400 font-light max-w-xl leading-relaxed">{messages.hero.subtitle}</p>
              <button
                onClick={() => document.getElementById("level-1")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-4 text-slate-900 font-black uppercase tracking-[0.3em] group text-sm mb-2"
              >
                {messages.hero.startJourney}
                <div className="p-3 rounded-full border border-slate-200 group-hover:border-slate-900 transition-all">
                  <ArrowRight size={16} />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {levels.map((level, index) => (
        <LevelPage key={level.id} level={level} nextLevelId={index < levels.length - 1 ? levels[index + 1].id : null} />
      ))}
    </>
  );
}
