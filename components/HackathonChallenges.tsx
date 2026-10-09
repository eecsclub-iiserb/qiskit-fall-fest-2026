"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FlaskConical,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  KeyRound,
  Lock,
  Layers,
  Search,
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Award,
  Zap,
  Info,
  GitFork,
  Bot,
  Laptop,
} from "lucide-react";
import {
  PROBLEM_STATEMENTS,
  HACKATHON_TRACKS,
  CROSS_TRACK_IDEAS,
  JUDGING_CRITERIA,
  HACKATHON_METADATA,
  ProblemStatement,
} from "@/data/hackathonData";

// Track visual styling tokens
const trackStyles: Record<
  string,
  {
    badge: string;
    border: string;
    glow: string;
    accent: string;
  }
> = {
  chemistry: {
    badge: "bg-qiskit-purple/15 text-qiskit-purple-light border-qiskit-purple/30",
    border: "border-qiskit-purple/40 hover:border-qiskit-purple",
    glow: "shadow-qiskit-purple/10",
    accent: "text-qiskit-purple-light",
  },
  qml: {
    badge: "bg-qiskit-blue/15 text-qiskit-blue border-qiskit-blue/30",
    border: "border-qiskit-blue/40 hover:border-qiskit-blue",
    glow: "shadow-qiskit-blue/10",
    accent: "text-qiskit-blue",
  },
  qaoa: {
    badge: "bg-qiskit-pink/15 text-qiskit-pink border-qiskit-pink/30",
    border: "border-qiskit-pink/40 hover:border-qiskit-pink",
    glow: "shadow-qiskit-pink/10",
    accent: "text-qiskit-pink",
  },
  qec: {
    badge: "bg-[#08BDBA]/15 text-[#3DDBD9] border-[#08BDBA]/30",
    border: "border-[#08BDBA]/40 hover:border-[#08BDBA]",
    glow: "shadow-[#08BDBA]/10",
    accent: "text-[#3DDBD9]",
  },
  qkd: {
    badge: "bg-[#F1C21B]/15 text-[#F1C21B] border-[#F1C21B]/30",
    border: "border-[#F1C21B]/40 hover:border-[#F1C21B]",
    glow: "shadow-[#F1C21B]/10",
    accent: "text-[#F1C21B]",
  },
  pqc: {
    badge: "bg-[#A7F0BA]/15 text-[#42BE65] border-[#42BE65]/30",
    border: "border-[#42BE65]/40 hover:border-[#42BE65]",
    glow: "shadow-[#42BE65]/10",
    accent: "text-[#42BE65]",
  },
};

export function HackathonChallenges() {
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("ps-01");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"problems" | "combine" | "judging">("problems");

  // Filtered problem statements
  const filteredProblems = useMemo(() => {
    return PROBLEM_STATEMENTS.filter((problem) => {
      const matchesTrack =
        selectedTrack === "all" || problem.trackId === selectedTrack;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        problem.title.toLowerCase().includes(q) ||
        problem.problem.toLowerCase().includes(q) ||
        problem.background.toLowerCase().includes(q) ||
        problem.trackLabel.toLowerCase().includes(q);
      return matchesTrack && matchesSearch;
    });
  }, [selectedTrack, searchQuery]);

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleCopy = (problem: ProblemStatement) => {
    const textToCopy = `Problem ${problem.number}: ${problem.title}\nTrack: ${problem.trackLabel}\n\nBackground:\n${problem.background}\n\nProblem:\n${problem.problem}\n\nHints:\n${problem.hints}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(problem.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const renderTrackIcon = (id: string) => {
    switch (id) {
      case "chemistry":
        return <FlaskConical className="w-4 h-4" />;
      case "qml":
        return <BrainCircuit className="w-4 h-4" />;
      case "qaoa":
        return <Cpu className="w-4 h-4" />;
      case "qec":
        return <ShieldCheck className="w-4 h-4" />;
      case "qkd":
        return <KeyRound className="w-4 h-4" />;
      case "pqc":
        return <Lock className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section
      id="hackathon"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-foundation-bg/90 backdrop-blur-md border-t border-foundation-border/60 relative scroll-mt-20"
      aria-label="Hackathon Problem Statements"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-qiskit-purple/15 text-qiskit-purple-light border border-qiskit-purple/25">
                Official Hackathon Release
              </span>
              <span className="text-xs font-mono text-[#BDCDEF]">
                {HACKATHON_METADATA.duration} · {HACKATHON_METADATA.author}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
              Hackathon Problem Statements
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#E0E0E0]/80 leading-relaxed font-normal">
              Ten official problem statements across 6 tracks—ranging from VQE and SQD to QNNs, QAOA, Steane codes, LDPC, QKD, and lattice-based cryptography. Pick one, extend one, combine several, or invent something more ambitious.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#BDCDEF] px-3.5 py-2.5 rounded-lg bg-foundation-surface border border-foundation-border self-start md:self-auto">
            <Laptop className="w-4 h-4 text-qiskit-blue flex-shrink-0" />
            <span>Simulators first · Real QPU bonus</span>
          </div>
        </div>

        {/* Key Details */}
        <div className="mb-6 p-5 sm:p-6 rounded-xl bg-foundation-surface/90 border border-foundation-border space-y-3">
          <p className="text-xs sm:text-sm font-mono text-white">{HACKATHON_METADATA.schedule}</p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#E0E0E0]/85">
            <li>{HACKATHON_METADATA.teamSize}</li>
            <li>{HACKATHON_METADATA.submitVia}</li>
            <li>{HACKATHON_METADATA.presentations}</li>
            <li>
              Full details and rules:{" "}
              <a href="https://github.com/eecsclubofficial/qiskit-hackathon-2026" target="_blank" rel="noopener noreferrer" className="underline text-qiskit-blue">
                github.com/eecsclubofficial/qiskit-hackathon-2026
              </a>
            </li>
            <li>
              Queries:{" "}
              <a href="https://chat.whatsapp.com/FvFrymOOzJZ52msbEnCFHv" target="_blank" rel="noopener noreferrer" className="underline text-qiskit-blue">
                Join the WhatsApp group
              </a>
            </li>
            <li>
              Contact:{" "}
              <a href={`mailto:${HACKATHON_METADATA.contact}`} className="underline text-qiskit-blue">
                {HACKATHON_METADATA.contact}
              </a>
            </li>
          </ul>
          <div className="p-3.5 rounded-lg bg-qiskit-purple/10 border border-qiskit-purple/25 text-xs sm:text-sm text-[#E0E0E0]/90">
            <span className="font-semibold text-white">Prepare a pitch deck in advance. </span>
            {HACKATHON_METADATA.pitchDeck.replace("Prepare a pitch deck in advance. ", "")}
          </div>
        </div>

        {/* Read This First Notice Card */}
        <div className="mb-10 p-5 sm:p-6 rounded-xl bg-foundation-surface/90 border border-foundation-border">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded bg-foundation-elevated border border-foundation-border text-qiskit-purple-light flex-shrink-0 mt-0.5">
              <Info className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-white">
                Read this first — What we reward
              </h3>
              <p className="text-xs sm:text-sm text-[#E0E0E0]/85 leading-relaxed">
                {HACKATHON_METADATA.whatWeReward}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-[#BDCDEF] pt-1">
                <span>⚡ {HACKATHON_METADATA.simulatorsFirst}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sub-Tabs: Problems vs Go Beyond vs Judging Criteria */}
        <div className="flex items-center gap-3 border-b border-foundation-border/60 mb-8 pb-3 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("problems")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border select-none ${
              activeTab === "problems"
                ? "bg-foundation-elevated text-white border-qiskit-blue shadow-lg shadow-qiskit-blue/10"
                : "bg-foundation-surface/80 text-[#BDCDEF] hover:text-white border-foundation-border hover:border-foundation-muted"
            }`}
          >
            <FileText className="w-4 h-4 text-qiskit-blue" />
            <span>Problem Statements ({PROBLEM_STATEMENTS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("combine")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border select-none ${
              activeTab === "combine"
                ? "bg-foundation-elevated text-white border-qiskit-purple shadow-lg shadow-qiskit-purple/10"
                : "bg-foundation-surface/80 text-[#BDCDEF] hover:text-white border-foundation-border hover:border-foundation-muted"
            }`}
          >
            <GitFork className="w-4 h-4 text-qiskit-purple-light" />
            <span>Go Beyond: Combine Tracks ({CROSS_TRACK_IDEAS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("judging")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border select-none ${
              activeTab === "judging"
                ? "bg-foundation-elevated text-white border-qiskit-pink shadow-lg shadow-qiskit-pink/10"
                : "bg-foundation-surface/80 text-[#BDCDEF] hover:text-white border-foundation-border hover:border-foundation-muted"
            }`}
          >
            <Award className="w-4 h-4 text-qiskit-pink" />
            <span>Judging & Submission Checklist</span>
          </button>
        </div>

        {/* TAB 1: Problem Statements */}
        {activeTab === "problems" && (
          <div>
            {/* Filter Bar: Track Pills & Search */}
            <div className="mb-8 pb-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
              {/* Track Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {HACKATHON_TRACKS.map((track) => {
                  const isActive = selectedTrack === track.id;
                  const count =
                    track.id === "all"
                      ? PROBLEM_STATEMENTS.length
                      : PROBLEM_STATEMENTS.filter((p) => p.trackId === track.id)
                          .length;

                  return (
                    <button
                      key={track.id}
                      onClick={() => setSelectedTrack(track.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap flex items-center gap-2 border select-none ${
                        isActive
                          ? "bg-foundation-elevated text-white border-qiskit-blue shadow-md shadow-qiskit-blue/10"
                          : "bg-foundation-surface/80 text-[#BDCDEF] hover:text-white border-foundation-border hover:border-foundation-muted"
                      }`}
                      aria-pressed={isActive}
                    >
                      <span className={isActive ? "text-qiskit-blue" : "text-[#BDCDEF]"}>
                        {renderTrackIcon(track.id)}
                      </span>
                      <span>{track.label}</span>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-qiskit-blue/25 text-qiskit-blue font-bold"
                            : "bg-foundation-border/60 text-[#BDCDEF]"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[240px] sm:w-64">
                <Search className="w-4 h-4 text-foundation-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search problem, VQE, SQD..."
                  className="w-full pl-9 pr-4 py-1.5 bg-foundation-surface/90 border border-foundation-border rounded-lg text-xs sm:text-sm text-white placeholder-foundation-muted focus:outline-none focus:border-qiskit-blue transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-foundation-muted hover:text-white font-mono"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Empty State */}
            {filteredProblems.length === 0 && (
              <div className="text-center py-16 px-4 rounded-xl bg-foundation-surface/60 border border-foundation-border">
                <Sparkles className="w-8 h-8 text-foundation-muted mx-auto mb-3" />
                <h3 className="text-base font-semibold text-white">No problem statements found</h3>
                <p className="mt-1 text-xs text-[#BDCDEF]">
                  Try adjusting your search terms or switch back to &quot;All Tracks&quot;.
                </p>
                <button
                  onClick={() => {
                    setSelectedTrack("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-lg text-xs font-mono bg-foundation-elevated border border-foundation-border text-white hover:border-qiskit-blue transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Problem Statements List */}
            <div className="space-y-5">
              {filteredProblems.map((problem) => {
                const isExpanded = expandedId === problem.id;
                const style =
                  trackStyles[problem.trackId] || trackStyles.chemistry;

                return (
                  <div
                    key={problem.id}
                    id={problem.id}
                    className={`bg-foundation-surface/95 border rounded-xl transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? `border-qiskit-blue/70 shadow-2xl ${style.glow} ring-1 ring-qiskit-blue/30`
                        : "border-foundation-border hover:border-foundation-muted"
                    }`}
                  >
                    {/* Problem Header (Clickable) */}
                    <div
                      onClick={() => handleToggle(problem.id)}
                      className="p-5 sm:p-6 cursor-pointer flex flex-col lg:flex-row lg:items-start justify-between gap-4 select-none"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleToggle(problem.id);
                        }
                      }}
                      aria-expanded={isExpanded}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-foundation-elevated text-white border border-foundation-border">
                            Problem {problem.number}
                          </span>
                          <span
                            className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded border ${style.badge}`}
                          >
                            {problem.trackLabel}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight leading-snug">
                          {problem.title}
                        </h3>

                        <p className="mt-2 text-xs sm:text-sm text-[#E0E0E0]/80 leading-relaxed font-normal line-clamp-2">
                          {problem.problem}
                        </p>
                      </div>

                      {/* Right: Actions */}
                      <div className="flex items-center gap-2 self-start lg:self-center flex-shrink-0 pt-2 lg:pt-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(problem);
                          }}
                          className="p-2 rounded-lg bg-foundation-elevated hover:bg-foundation-border text-[#BDCDEF] hover:text-white border border-foundation-border transition-colors text-xs flex items-center gap-1.5 font-mono"
                          title="Copy problem statement summary"
                          aria-label="Copy problem statement summary"
                        >
                          {copiedId === problem.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Copy</span>
                            </>
                          )}
                        </button>

                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${
                            isExpanded
                              ? "bg-qiskit-blue/20 text-qiskit-blue border-qiskit-blue/40"
                              : "bg-foundation-elevated text-white border-foundation-border hover:border-foundation-muted"
                          }`}
                        >
                          <span>{isExpanded ? "Close" : "Explore"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Detail Panel */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key={`content-${problem.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden border-t border-foundation-border/70 bg-foundation-elevated/25"
                        >
                          <div className="p-6 sm:p-8 space-y-6">
                            {/* Background & Problem */}
                            <div className="space-y-4">
                              <div className="p-4 rounded-lg bg-foundation-surface border border-foundation-border">
                                <span className="text-xs font-mono uppercase tracking-wider text-foundation-muted block mb-1.5 font-semibold">
                                  Background
                                </span>
                                <p className="text-xs sm:text-sm text-[#E0E0E0]/90 leading-relaxed font-normal">
                                  {problem.background}
                                </p>
                              </div>

                              <div className="p-4 rounded-lg bg-foundation-surface border border-qiskit-blue/30">
                                <span className="text-xs font-mono uppercase tracking-wider text-qiskit-blue block mb-1.5 font-semibold">
                                  The Problem
                                </span>
                                <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                                  {problem.problem}
                                </p>
                              </div>
                            </div>

                            {/* Core Tasks & Stretch Goals */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                              {/* Core tasks */}
                              <div className="p-5 rounded-lg bg-foundation-surface border border-foundation-border">
                                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-qiskit-purple-light font-semibold">
                                  <CheckCircle2 className="w-4 h-4 text-qiskit-purple" />
                                  <span>Core Tasks (Complete Submission)</span>
                                </div>
                                <ul className="space-y-2.5">
                                  {problem.coreTasks.map((task, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2.5 text-xs text-[#E0E0E0]/85 leading-relaxed"
                                    >
                                      <span className="text-qiskit-purple-light font-mono font-semibold mt-0.5 flex-shrink-0">
                                        {idx + 1}.
                                      </span>
                                      <span>{task}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Stretch goals */}
                              <div className="p-5 rounded-lg bg-foundation-surface border border-foundation-border">
                                <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-qiskit-pink font-semibold">
                                  <Zap className="w-4 h-4 text-qiskit-pink" />
                                  <span>Stretch Goals (What Makes It Excellent)</span>
                                </div>
                                <ul className="space-y-2.5">
                                  {problem.stretchGoals.map((goal, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2.5 text-xs text-[#E0E0E0]/85 leading-relaxed"
                                    >
                                      <span className="text-qiskit-pink font-mono font-semibold mt-0.5 flex-shrink-0">
                                        +
                                      </span>
                                      <span>{goal}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Hints on Tools */}
                            <div className="p-4 rounded-lg bg-foundation-surface border border-foundation-border/70 flex items-start gap-3">
                              <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                              <div>
                                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                                  Hint on Tools & Approach
                                </span>
                                <p className="text-xs text-[#E0E0E0]/85 leading-relaxed font-mono">
                                  {problem.hints}
                                </p>
                              </div>
                            </div>

                            {/* Footer Copy Action */}
                            <div className="pt-2 flex items-center justify-between border-t border-foundation-border/60 text-xs font-mono text-[#BDCDEF]">
                              <span>Problem ID: {problem.id}</span>
                              <button
                                type="button"
                                onClick={() => handleCopy(problem)}
                                className="px-3 py-1.5 rounded bg-foundation-elevated hover:bg-foundation-border border border-foundation-border text-white transition-colors flex items-center gap-1.5"
                              >
                                {copiedId === problem.id ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Copied Specification</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span>Copy Specification</span>
                                  </>
                                )}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Go Beyond (Combine Tracks or Invent Your Own) */}
        {activeTab === "combine" && (
          <div className="space-y-8">
            <div className="p-6 rounded-xl bg-foundation-surface/90 border border-foundation-border">
              <h3 className="text-lg font-semibold text-white tracking-tight mb-2">
                Combine tracks or invent your own
              </h3>
              <p className="text-xs sm:text-sm text-[#E0E0E0]/85 leading-relaxed">
                The most impressive entries will not stop at one box. Below are starting points, from approachable to ambitious. None of them is required, and you are free to propose something entirely different.
              </p>
            </div>

            {/* Cross-track combination cards table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CROSS_TRACK_IDEAS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-foundation-surface border border-foundation-border hover:border-foundation-muted transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-qiskit-purple/15 text-qiskit-purple-light border border-qiskit-purple/30">
                        {item.tracksCombined}
                      </span>
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">
                      {item.idea}
                    </h4>
                    <p className="text-xs text-[#E0E0E0]/80 leading-relaxed">
                      {item.whatMakesItInteresting}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Open Invitation & Scoping Advice */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-xl bg-foundation-surface border border-foundation-border">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-qiskit-blue" />
                  <span>Open Invitation</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#E0E0E0]/80 leading-relaxed">
                  {HACKATHON_METADATA.openInvitation}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-foundation-surface border border-foundation-border">
                <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-qiskit-pink" />
                  <span>How to scope a combined project</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#E0E0E0]/80 leading-relaxed">
                  {HACKATHON_METADATA.scopingAdvice}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Judging & Submission Checklist */}
        {activeTab === "judging" && (
          <div className="space-y-8">
            {/* Scoring Rubric */}
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Scoring Criteria (100 Points Total)
                </h3>
                <p className="text-xs text-[#BDCDEF] mt-1">
                  The scoring below applies to every problem statement and to original projects alike.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {JUDGING_CRITERIA.map((criterion, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-foundation-surface border border-foundation-border flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-white">
                          {criterion.criterion}
                        </span>
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-qiskit-blue/20 text-qiskit-blue border border-qiskit-blue/30">
                          {criterion.points} pts
                        </span>
                      </div>
                      <p className="text-xs text-[#BDCDEF] leading-relaxed">
                        {criterion.description}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Hardware Bonus Card */}
                <div className="p-5 rounded-xl bg-foundation-surface border border-qiskit-pink/30 flex flex-col justify-between sm:col-span-2 lg:col-span-1">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">
                        IBM Hardware Bonus
                      </span>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-qiskit-pink/20 text-qiskit-pink border border-qiskit-pink/30">
                        Extra Credit
                      </span>
                    </div>
                    <p className="text-xs text-[#BDCDEF] leading-relaxed">
                      {HACKATHON_METADATA.bonusHardware}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Checklist */}
            <div className="p-6 sm:p-8 rounded-xl bg-foundation-surface border border-foundation-border">
              <h3 className="text-base font-semibold text-white tracking-tight mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Submission Checklist</span>
              </h3>

              <div className="space-y-3">
                {HACKATHON_METADATA.submissionChecklist.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-foundation-elevated/40 border border-foundation-border/70 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded border border-foundation-border flex items-center justify-center text-xs font-mono text-qiskit-blue mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-[#E0E0E0]/90">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* On Using AI */}
              <div className="mt-6 pt-5 border-t border-foundation-border/60 flex items-start gap-3">
                <Bot className="w-5 h-5 text-qiskit-purple-light flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-qiskit-purple-light mb-1">
                    On Using AI
                  </h4>
                  <p className="text-xs text-[#E0E0E0]/80 leading-relaxed font-mono">
                    AI assistants are welcome at every step. The AI-use note and the questions asked of selected teams exist because the person submitting is responsible for the result: you should be able to explain each circuit, formula and plot, and show how you verified it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
