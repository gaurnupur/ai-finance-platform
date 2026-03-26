"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PenBox, LayoutDashboard, Menu, X, TrendingUp, ChevronDown,
  BarChart3, Receipt, PieChart, Shield, Bell, Zap, CreditCard,
  Globe, Target, BookOpen, HelpCircle, MessageSquare, Star,
  ArrowRight, Sparkles,
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";

const productLinks = [
  { icon: <BarChart3 className="w-4 h-4" />, label: "Analytics", desc: "AI-powered spending insights", href: "#features", color: "text-blue-400" },
  { icon: <Receipt className="w-4 h-4" />, label: "Receipt Scanner", desc: "Scan & auto-categorize receipts", href: "#features", color: "text-violet-400" },
  { icon: <PieChart className="w-4 h-4" />, label: "Budget Planner", desc: "Smart budget recommendations", href: "#features", color: "text-emerald-400" },
  { icon: <CreditCard className="w-4 h-4" />, label: "Multi-Account", desc: "All accounts in one place", href: "#features", color: "text-orange-400" },
  { icon: <Globe className="w-4 h-4" />, label: "Multi-Currency", desc: "150+ currencies supported", href: "#features", color: "text-pink-400" },
  { icon: <Target className="w-4 h-4" />, label: "Goals Tracker", desc: "Set & hit financial goals", href: "#features", color: "text-cyan-400" },
];

const resourceLinks = [
  { icon: <BookOpen className="w-4 h-4" />, label: "Documentation", desc: "Guides & API reference", href: "#", color: "text-blue-400" },
  { icon: <MessageSquare className="w-4 h-4" />, label: "Blog", desc: "Finance tips & updates", href: "#", color: "text-violet-400" },
  { icon: <HelpCircle className="w-4 h-4" />, label: "Help Center", desc: "FAQs & support articles", href: "#faq", color: "text-emerald-400" },
  { icon: <Star className="w-4 h-4" />, label: "Changelog", desc: "Latest features & fixes", href: "#", color: "text-yellow-400" },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <div className={`nav-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] glass-dark rounded-2xl p-4 shadow-2xl shadow-black/50 border border-white/8 z-50 ${isOpen ? "open" : ""}`}>
      <div className="grid grid-cols-2 gap-1">
        {items.map((item, i) => (
          <a key={i} href={item.href} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all group">
            <div className={`mt-0.5 ${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</div>
            <div>
              <div className="text-white text-sm font-medium">{item.label}</div>
              <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass-dark shadow-xl shadow-black/30" : "bg-transparent"}`}>
      {/* Top announcement bar */}
      <div className="hidden md:flex items-center justify-center gap-2 py-2 text-xs text-gray-400 border-b border-white/5" style={{ background: "rgba(99,102,241,0.06)" }}>
        <Sparkles className="w-3 h-3 text-yellow-400" />
        <span>New: AI-powered monthly financial reports are now live</span>
        <a href="#features" className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-medium">
          Learn more <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <nav className="container mx-auto px-4 py-3.5 flex items-center justify-between" ref={dropdownRef}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
            <TrendingUp className="w-5 h-5 text-white" />
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#020817] animate-pulse" />
          </div>
          <div>
            <span className="text-xl font-black gradient-text-blue tracking-tight">Welth</span>
            <div className="text-[9px] text-gray-500 -mt-1 tracking-widest uppercase">AI Finance</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          <SignedOut>
            {/* Products dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                onMouseEnter={() => setActiveDropdown("products")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Products <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              <div onMouseEnter={() => setActiveDropdown("products")} onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownMenu items={productLinks} isOpen={activeDropdown === "products"} />
              </div>
            </div>

            {/* Resources dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all"
                onMouseEnter={() => setActiveDropdown("resources")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
              </button>
              <div onMouseEnter={() => setActiveDropdown("resources")} onMouseLeave={() => setActiveDropdown(null)}>
                <DropdownMenu items={resourceLinks} isOpen={activeDropdown === "resources"} />
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <a key={link.label} href={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                {link.label}
              </a>
            ))}
          </SignedOut>

          <SignedIn>
            {[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Accounts", href: "/account" },
              { label: "Transactions", href: "/transaction/create" },
              { label: "Analytics", href: "/dashboard" },
            ].map((l) => (
              <Link key={l.label} href={l.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all">
                {l.label}
              </Link>
            ))}
          </SignedIn>
        </div>

        {/* Right actions */}
        <div className="hidden lg:flex items-center gap-3">
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <button className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">Sign In</button>
            </SignInButton>
            <SignInButton forceRedirectUrl="/dashboard">
              <button className="relative px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:scale-105">
                Get Started Free
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button className="relative p-2 text-gray-400 hover:text-white rounded-xl hover:bg-white/5 transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500" />
            </button>
            <Link href="/transaction/create">
              <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/45 hover:scale-105 transition-all">
                <PenBox size={14} /> Add Transaction
              </button>
            </Link>
            <UserButton appearance={{ elements: { avatarBox: "w-9 h-9 ring-2 ring-blue-500/30 ring-offset-2 ring-offset-[#020817]" } }} />
          </SignedIn>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-xl hover:bg-white/5" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-dark border-t border-white/5 px-4 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <SignedOut>
            <div className="text-xs text-gray-500 uppercase tracking-widest px-3 py-2">Products</div>
            {productLinks.map((l, i) => (
              <a key={i} href={l.href} onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-3 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                <span className={l.color}>{l.icon}</span>{l.label}
              </a>
            ))}
            <div className="text-xs text-gray-500 uppercase tracking-widest px-3 py-2 mt-2">Navigation</div>
            {navLinks.slice(2).map((link) => (
              <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-white/5 mt-2">
              <SignInButton forceRedirectUrl="/dashboard">
                <button className="w-full py-3 text-sm text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 transition-all">Sign In</button>
              </SignInButton>
              <SignInButton forceRedirectUrl="/dashboard">
                <button className="w-full py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white">Get Started Free</button>
              </SignInButton>
            </div>
          </SignedOut>
          <SignedIn>
            {[
              { label: "Dashboard", href: "/dashboard" },
              { label: "Accounts", href: "/account" },
              { label: "Add Transaction", href: "/transaction/create" },
            ].map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                className="px-3 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/5">
              <UserButton appearance={{ elements: { avatarBox: "w-9 h-9" } }} />
            </div>
          </SignedIn>
        </div>
      )}
    </header>
  );
};

export default Header;
