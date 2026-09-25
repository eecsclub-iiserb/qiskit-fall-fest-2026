"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  BookOpen,
  GraduationCap,
  Maximize2,
  X,
  CheckCircle2,
} from "lucide-react";

export function Announcement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="announcement"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-foundation-bg/85 backdrop-blur-md border-t border-b border-foundation-border/70 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow Label */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-qiskit-pink/15 border border-qiskit-pink/35 text-qiskit-pink text-xs font-mono font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-qiskit-pink animate-pulse" />
            Announcement
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-qiskit-purple/15 border border-qiskit-purple/30 text-qiskit-purple-light text-xs font-mono font-semibold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-qiskit-purple" />
            PRE-EVENT TALK
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Event Information */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-mono text-qiskit-blue tracking-wide uppercase font-medium mb-2">
                Prof. Aditya Nema · IIT Delhi
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
                An Invitation to the Fundamentals of Quantum Computing, Information and Learning
              </h2>
            </div>

            {/* Quick Logistics Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
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
                <span className="font-semibold text-white">Research focus: </span>
                Quantum information theory, quantum computation, error correction and quantum machine learning.
              </div>
            </div>
          </div>

          {/* Right Column: Poster Preview */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full max-w-sm sm:max-w-md rounded-2xl overflow-hidden border border-foundation-border/80 bg-foundation-surface shadow-2xl group cursor-pointer transition-all duration-300 hover:border-qiskit-purple/60 hover:shadow-qiskit-purple/10"
            >
              <div className="relative aspect-[4/5] w-full bg-black/40">
                <Image
                  src="/assets/images/aditya_nema_talk.jpeg"
                  alt="Pre-Event Talk Poster: Prof. Aditya Nema on Fundamentals of Quantum Computing"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-mono font-medium backdrop-blur-[2px]">
                  <Maximize2 className="w-4 h-4 text-qiskit-pink" />
                  <span>Click to enlarge poster</span>
                </div>
              </div>

              <div className="p-3 bg-foundation-elevated/70 border-t border-foundation-border/60 flex items-center justify-between text-xs font-mono text-[#BDCDEF]">
                <span>Official Event Poster</span>
                <span className="text-qiskit-blue flex items-center gap-1">
                  <Maximize2 className="w-3 h-3" />
                  Enlarge
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Poster */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-3xl max-h-[90vh] w-full rounded-2xl overflow-hidden border border-foundation-border/80 bg-foundation-bg shadow-2xl flex flex-col items-center p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-foundation-elevated/90 text-white hover:text-qiskit-pink border border-foundation-border z-10 transition-colors"
              aria-label="Close poster preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-[80vh] flex items-center justify-center">
              <Image
                src="/assets/images/aditya_nema_talk.jpeg"
                alt="Enlarged Pre-Event Talk Poster"
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
