"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ListChecks,
} from "lucide-react";

export function Announcement() {
  return (
    <section
      id="announcement"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/85 backdrop-blur-md border-t border-b border-foundation-border/70 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Subheading */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider uppercase text-qiskit-blue mb-2.5">
            <span className="w-2 h-2 rounded-full bg-qiskit-pink animate-pulse" />
            <span>Tomorrow&apos;s Event</span>
            <ArrowRight className="w-3.5 h-3.5 text-qiskit-blue" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Coming Up Next
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#BDCDEF] font-medium mt-2.5 max-w-4xl leading-snug">
            Opening Ceremony &amp; Hackathon Launch
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Event Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mission & Theme Banner */}
            <div className="p-4 rounded-xl bg-foundation-surface/80 border border-foundation-border/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-foundation-muted uppercase tracking-wider block">
                  Theme &amp; Mission
                </span>
                <span className="text-base sm:text-lg font-semibold text-white">
                  Collaborate, innovate, and solve real-world quantum challenges together!
                </span>
              </div>
            </div>

            {/* Quick Logistics Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Date */}
              <div className="p-3.5 rounded-xl bg-foundation-surface border border-foundation-border/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-qiskit-blue/15 border border-qiskit-blue/30 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-qiskit-blue" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-foundation-muted uppercase tracking-wider block">
                    DATE
                  </span>
                  <span className="text-sm font-semibold text-white">
                    9th October, 2026
                  </span>
                </div>
              </div>

              {/* Time */}
              <div className="p-3.5 rounded-xl bg-foundation-surface border border-foundation-border/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-qiskit-pink/15 border border-qiskit-pink/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-qiskit-pink" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-foundation-muted uppercase tracking-wider block">
                    TIME
                  </span>
                  <span className="text-sm font-semibold text-white">
                    7:00 PM Onwards
                  </span>
                </div>
              </div>

              {/* Venue */}
              <div className="p-3.5 rounded-xl bg-foundation-surface border border-foundation-border/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-qiskit-purple/15 border border-qiskit-purple/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-qiskit-purple-light" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-foundation-muted uppercase tracking-wider block">
                    VENUE
                  </span>
                  <span className="text-sm font-semibold text-white">
                    LHC L-1, IISER Bhopal
                  </span>
                </div>
              </div>
            </div>

            {/* What to Expect Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-foundation-surface/90 border border-foundation-border/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-qiskit-purple-light uppercase tracking-wider">
                <ListChecks className="w-4 h-4 text-qiskit-purple" />
                <span>What to Expect</span>
              </div>
              <ul className="space-y-3 text-sm text-[#E0E0E0]/90">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-qiskit-blue mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Problem Statements: </span>
                    <span>Official release and reveal of the IBM Qiskit Fall Fest 2026 hackathon challenge tracks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-qiskit-pink mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Hackathon Prerequisites: </span>
                    <span>Guidelines on team formations, compute access, submission standards, and evaluation rubrics.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-qiskit-purple-light mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Event Overview: </span>
                    <span>Complete walkthrough of upcoming workshops, guest lectures, mentors, and prize distribution.</span>
                  </div>
                </li>
              </ul>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-300 border-t border-foundation-border/60">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Don&apos;t miss it! Open to all students, researchers, and quantum enthusiasts.</span>
              </div>
            </div>

            {/* Register CTA Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-foundation-surface/95 via-foundation-surface/90 to-foundation-surface/95 border border-foundation-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-mono text-qiskit-blue uppercase tracking-wider block font-semibold">
                  Official Registration
                </span>
                <p className="text-sm text-white font-medium">
                  Register now to secure your participation and hackathon access
                </p>
                <p className="text-xs font-mono text-foundation-muted">
                  https://qff-iiserb.vercel.app
                </p>
              </div>
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-qiskit-magenta hover:bg-[#d83f81] transition-all whitespace-nowrap shadow-md flex-shrink-0"
              >
                <span>Register Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Event Poster */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border border-foundation-border/80 bg-foundation-surface shadow-2xl">
              <div className="relative aspect-[793/1122] w-full bg-black/40">
                <Image
                  src="/assets/images/qiskit_opening.jpeg"
                  alt="Poster: IBM Qiskit Fall Fest 2026 Opening Ceremony and Hackathon Announcements"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
