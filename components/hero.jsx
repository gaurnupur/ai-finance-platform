"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, TrendingUp, TrendingDown, DollarSign, ShieldCheck } from "lucide-react";

const words = ["Intelligence", "Precision", "Clarity", "Confidence", "Freedom"];

/* Floating stat card */
function FloatCard({ className, children }) {
  return (
    <div className={`absolute glass-card rounded-2xl px-4 py-3 shadow-2xl border border-white/10 z-20 ${className}`}>
      {children}
    </div>
  );
}

const HeroSection = () => {
  const imageRef = useRef(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const el = imageRef.current;
    const handleScroll = () => {
      if (window.scrollY > 100) el?.classList.add("scrolled");
      else el?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const current = words[wordIndex];
    let t;
    if (!deleting && displayed.length < current.length)
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    else if (!deleting && displayed.length === current.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    else { setDeleting(false); setWordIndex((i) => (i + 1) % words.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 px-4 overflow-hidden">

      {/* ── Background opacity image ── */}
      <div
        className="hero-bg-image"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1920&q=80')" }}
      />

      {/* ── Dark gradient overlay on top of bg image ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817]/95 via-[#020817]/80 to-[#0a0f2e]/90 z-[1]" />

      {/* ── Coloured orbs ── */}
      <div className="orb w-[700px] h-[700px] bg-blue-700   top-[-250px] left-[-250px] z-[2]" />
      <div className="orb w-[500px] h-[500px] bg-violet-700 bottom-[-150px] right-[-150px] z-[2]" />
      <div className="orb w-[350px] h-[350px] bg-cyan-600   top-[45%] left-[55%] z-[2]" style={{ opacity: 0.09 }} />
      <div className="orb w-[250px] h-[250px] bg-pink-600   top-[20%] right-[10%] z-[2]" style={{ opacity: 0.07 }} />

      {/* ── Grid ── */}
      <div className="absolute inset-0 z-[3] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* ── Floating particles ── */}
      {[
        { top:"15%", left:"8%",  size:3, dur:"6s",  delay:"0s",   color:"bg-blue-400" },
        { top:"25%", left:"90%", size:2, dur:"8s",  delay:"1s",   color:"bg-violet-400" },
        { top:"60%", left:"5%",  size:4, dur:"7s",  delay:"2s",   color:"bg-cyan-400" },
        { top:"75%", left:"85%", size:2, dur:"9s",  delay:"0.5s", color:"bg-pink-400" },
        { top:"40%", left:"92%", size:3, dur:"5s",  delay:"3s",   color:"bg-emerald-400" },
        { top:"80%", left:"15%", size:2, dur:"10s", delay:"1.5s", color:"bg-yellow-400" },
      ].map((p, i) => (
        <div key={i} className={`absolute rounded-full ${p.color} opacity-60 animate-float z-[4]`}
          style={{ top: p.top, left: p.left, width: p.size*4, height: p.size*4, animationDuration: p.dur, animationDelay: p.delay }} />
      ))}

      {/* ── Main content ── */}
      <div className="container mx-auto text-center relative z-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-blue-500/25 text-sm text-blue-300 mb-8 animate-float shadow-lg shadow-blue-500/10">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="font-medium">Powered by Google Gemini AI</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[82px] font-black tracking-tight mb-6 leading-[1.05]">
          <span className="text-white">Manage Money</span>
          <br />
          <span className="text-white">with </span>
          <span className="gradient-text-blue text-glow inline-block min-w-[280px] md:min-w-[420px] text-left">
            <span suppressHydrationWarning>{displayed}</span><span className="animate-pulse opacity-80">|</span>
          </span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The AI-powered finance platform that tracks, analyzes, and optimizes
          your money — so you can focus on what matters most.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link href="/sign-up">
            <button className="group relative flex items-center gap-2 px-9 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-base transition-all duration-300 shadow-2xl shadow-blue-500/35 hover:shadow-blue-500/55 hover:scale-105">
              Start for Free — No Card Needed
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <a href="#how-it-works">
            <button className="flex items-center gap-2.5 px-8 py-4 rounded-2xl glass border border-white/12 text-gray-300 hover:text-white font-semibold text-base transition-all duration-300 hover:border-white/25 hover:bg-white/5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              Watch Demo
            </button>
          </a>
        </div>

        {/* Social proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16 text-sm">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {[75, 32, 44, 52, 74].map((n) => (
                <img key={n} src={`https://randomuser.me/api/portraits/men/${n}.jpg`}
                  className="w-9 h-9 rounded-full border-2 border-[#020817] object-cover" alt="" />
              ))}
            </div>
            <span className="text-gray-400"><span className="text-white font-bold">50,000+</span> users</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-lg">★</span>)}
            <span className="text-white font-bold ml-1">4.9</span>
            <span className="text-gray-500">/5 rating</span>
          </div>
          <div className="w-px h-6 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bank-grade security</span>
          </div>
        </div>

        {/* Dashboard preview with floating cards */}
        <div className="relative max-w-5xl mx-auto">

          {/* Floating card — top left */}
          <FloatCard className="-top-6 -left-4 md:-left-16 animate-float">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Monthly Savings</div>
                <div className="text-white font-bold text-sm">+$2,840</div>
              </div>
              <div className="text-emerald-400 text-xs font-semibold">↑ 12%</div>
            </div>
          </FloatCard>

          {/* Floating card — top right */}
          <FloatCard className="-top-6 -right-4 md:-right-16 animate-float-delay">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Net Worth</div>
                <div className="text-white font-bold text-sm">$48,290</div>
              </div>
            </div>
          </FloatCard>

          {/* Floating card — bottom left */}
          <FloatCard className="-bottom-6 -left-4 md:-left-12 animate-float-slow">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                <TrendingDown className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Expenses</div>
                <div className="text-white font-bold text-sm">$1,240</div>
              </div>
              <div className="text-red-400 text-xs font-semibold">↓ 8%</div>
            </div>
          </FloatCard>

          {/* Floating card — bottom right */}
          <FloatCard className="-bottom-6 -right-4 md:-right-12 animate-float-delay">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-300">AI Insight ready</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-medium">New</span>
            </div>
          </FloatCard>

          {/* Main image */}
          <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#020817] via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-cyan-500/20 blur-2xl" />
              <Image
                src="/banner.jpeg"
                width={1280}
                height={720}
                alt="Welth Dashboard"
                className="rounded-2xl shadow-2xl border border-white/10 relative z-0 w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Trusted by logos strip */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-30 grayscale">
            {["Google", "Microsoft", "Stripe", "Shopify", "Airbnb", "Netflix"].map((name) => (
              <span key={name} className="text-white font-bold text-lg tracking-tight">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
