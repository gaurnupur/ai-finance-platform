"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
  pricingData,
  securityData,
  faqData,
  tickerItems,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import { CheckCircle, ChevronDown, ChevronUp, ArrowRight, Star, Zap } from "lucide-react";

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Staggered children reveal ── */
function useStaggerReveal(count) {
  const refs = useRef([]);
  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => el.classList.add("visible"), i * 100);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
    });
  }, []);
  return refs;
}

/* ── Animated counter ── */
function Counter({ value }) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setCount(value); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{count}</span>;
}

/* ── FAQ Item ── */
function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className="reveal glass border border-white/8 rounded-2xl overflow-hidden card-hover"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium pr-4">{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function LandingPage() {
  const statsRefs = useStaggerReveal(statsData.length);
  const featureRefs = useStaggerReveal(featuresData.length);
  const stepsRefs = useStaggerReveal(howItWorksData.length);
  const pricingRefs = useStaggerReveal(pricingData.length);
  const securityRefs = useStaggerReveal(securityData.length);
  const testimonialRefs = useStaggerReveal(testimonialsData.length);

  const sectionTitleRef = useReveal();
  const featureTitleRef = useReveal();
  const howTitleRef = useReveal();
  const pricingTitleRef = useReveal();
  const securityTitleRef = useReveal();
  const testimonialTitleRef = useReveal();
  const faqTitleRef = useReveal();
  const ctaRef = useReveal();

  return (
    <div className="min-h-screen" style={{ background: "#020817" }}>
      {/* Hero */}
      <HeroSection />

      {/* ── Ticker ── */}
      <div className="py-4 border-y border-white/5 overflow-hidden" style={{ background: "rgba(99,102,241,0.05)" }}>
        <div className="animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mx-8 text-sm text-gray-400 whitespace-nowrap flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div
            ref={sectionTitleRef}
            className="reveal text-center mb-16"
          >
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">By the numbers</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Trusted by thousands</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsData.map((stat, i) => (
              <div
                key={i}
                ref={(el) => (statsRefs.current[i] = el)}
                className="reveal-scale glass border border-white/8 rounded-2xl p-8 text-center card-hover"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-black gradient-text-blue mb-2">
                  <Counter value={stat.value} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 relative">
        <div className="orb w-[400px] h-[400px] bg-violet-600 top-0 right-0" style={{ opacity: 0.08 }} />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={featureTitleRef} className="reveal text-center mb-16">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need to{" "}
              <span className="gradient-text-blue">master your money</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From AI receipt scanning to automated monthly reports — Welth gives you the full toolkit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuresData.map((feature, i) => (
              <div
                key={i}
                ref={(el) => (featureRefs.current[i] = el)}
                className="reveal glass border border-white/8 rounded-2xl p-6 card-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-white font-semibold text-lg">{feature.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full bg-gradient-to-r ${feature.color} text-white font-medium`}>
                    {feature.badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "rgba(99,102,241,0.03)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={howTitleRef} className="reveal text-center mb-16">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Up and running in <span className="gradient-text-blue">3 steps</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">No complex setup. No learning curve. Just results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-blue-500/50 to-violet-500/50" />
            {howItWorksData.map((step, i) => (
              <div
                key={i}
                ref={(el) => (stepsRefs.current[i] = el)}
                className="reveal text-center relative"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-2xl animate-float`}
                  style={{ animationDelay: `${i * 0.8}s` }}>
                  <div className="text-white">{step.icon}</div>
                </div>
                <div className="text-6xl font-black text-white/5 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 select-none">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 relative">
        <div className="orb w-[500px] h-[500px] bg-blue-600 bottom-0 left-0" style={{ opacity: 0.07 }} />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={pricingTitleRef} className="reveal text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, <span className="gradient-text-blue">transparent</span> pricing
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">No hidden fees. Cancel anytime. Start free forever.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingData.map((plan, i) => (
              <div
                key={i}
                ref={(el) => (pricingRefs.current[i] = el)}
                className={`reveal relative glass rounded-2xl p-8 card-hover ${plan.popular ? "border border-blue-500/50 glow-blue" : "border border-white/8"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 mb-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/sign-up">
                  <button className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                      : "glass border border-white/10 text-gray-300 hover:text-white hover:border-white/20"
                  }`}>
                    {plan.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security ── */}
      <section id="security" className="py-24 relative">
        <div className="absolute inset-0" style={{ background: "rgba(16,185,129,0.02)" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={securityTitleRef} className="reveal text-center mb-16">
            <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">Security</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your data is <span className="gradient-text-blue">fortress-grade</span> secure
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We take security as seriously as your bank does — because your financial data deserves nothing less.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {securityData.map((item, i) => (
              <div
                key={i}
                ref={(el) => (securityRefs.current[i] = el)}
                className="reveal glass border border-white/8 rounded-2xl p-6 text-center card-hover group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-violet-600 top-0 right-0" style={{ opacity: 0.07 }} />
        <div className="container mx-auto px-4 relative z-10">
          <div ref={testimonialTitleRef} className="reveal text-center mb-16">
            <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Loved by <span className="gradient-text-blue">50,000+ users</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Don't take our word for it — hear from the people who use Welth every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonialsData.map((t, i) => (
              <div
                key={i}
                ref={(el) => (testimonialRefs.current[i] = el)}
                className="reveal glass border border-white/8 rounded-2xl p-6 card-hover"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={44}
                    height={44}
                    className="rounded-full ring-2 ring-blue-500/30"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <div ref={faqTitleRef} className="reveal text-center mb-16">
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Got <span className="gradient-text-blue">questions?</span>
            </h2>
            <p className="text-gray-400">Everything you need to know about Welth.</p>
          </div>
          <div className="space-y-3">
            {faqData.map((item, i) => (
              <FAQItem key={i} {...item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-cyan-600/20" />
        <div className="orb w-[600px] h-[600px] bg-blue-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.12 }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div ref={ctaRef} className="reveal container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/20 text-sm text-blue-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            No credit card required
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Take control of your
            <br />
            <span className="gradient-text-blue">financial future</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join 50,000+ users who've transformed how they manage money. Start free, upgrade when you're ready.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/sign-up">
              <button className="group flex items-center gap-2 px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-base transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 animate-pulse-glow">
                Get Started — It's Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href="#features">
              <button className="px-10 py-4 rounded-2xl glass border border-white/10 text-gray-300 hover:text-white font-semibold text-base transition-all duration-300 hover:border-white/20">
                Explore Features
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
