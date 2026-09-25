"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
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
            <span>Upcoming Event</span>
            <ArrowRight className="w-3.5 h-3.5 text-qiskit-blue" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
            Coming Up Next
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-[#BDCDEF] font-medium mt-2.5 max-w-4xl leading-snug">
            An Invitation to the Fundamentals of Quantum Computing, Information and Learning
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Event Information */}
          <div className="lg:col-span-7 space-y-6">
            {/* Speaker Byline */}
            <div className="p-4 rounded-xl bg-foundation-surface/80 border border-foundation-border/80 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-foundation-muted uppercase tracking-wider block">
                  Distinguished Speaker
                </span>
                <span className="text-base sm:text-lg font-semibold text-white">
                  Dr. Aditya Nema
                </span>
                <span className="text-xs font-mono text-qiskit-purple-light ml-2">
                  IIT Delhi
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
                    Mon, 28th Sept
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
                    5:00 PM
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
                    L4, IISER Bhopal
                  </span>
                </div>
              </div>
            </div>

            {/* About the Talk */}
            <div className="p-5 sm:p-6 rounded-2xl bg-foundation-surface/90 border border-foundation-border/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-qiskit-purple-light uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-qiskit-purple" />
                <span>About the Talk</span>
              </div>
              <p className="text-sm text-[#E0E0E0]/90 leading-relaxed font-normal">
                Explore the fundamentals of quantum computing and quantum information, and a route towards quantum machine learning. The talk covers current developments, where a few key areas are headed, and the theoretical and implementation challenges still to be tackled.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-emerald-300">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>No prerequisites needed. Everyone is welcome.</span>
              </div>
            </div>

            {/* About the Speaker */}
            <div className="p-5 sm:p-6 rounded-2xl bg-foundation-surface/90 border border-foundation-border/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-qiskit-blue uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-qiskit-blue" />
                <span>About the Speaker</span>
              </div>
              <p className="text-sm text-[#E0E0E0]/90 leading-relaxed font-normal">
                Dr. Aditya Nema is an Assistant Professor in Electrical Engineering at IIT Delhi. He has previously worked at IIT Gandhinagar, RWTH Aachen University (postdoc) and Nagoya University, and earned his Masters and PhD in quantum information theory from TIFR Mumbai.
              </p>
              <div className="pt-1 text-xs font-mono text-[#BDCDEF] border-t border-foundation-border/60">
                <span className="font-semibold text-white">Research: </span>
                Quantum information theory, quantum computation, error correction and quantum machine learning.
              </div>
            </div>
          </div>

          {/* Right Column: Clean Poster Display (No caption or overlay) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border border-foundation-border/80 bg-foundation-surface shadow-2xl">
              <div className="relative aspect-[4/5] w-full bg-black/40">
                <Image
                  src="/assets/images/aditya_nema_talk.jpeg"
                  alt="Poster: Dr. Aditya Nema on Fundamentals of Quantum Computing, Information and Learning"
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
