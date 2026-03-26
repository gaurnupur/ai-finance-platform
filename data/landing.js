import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Shield,
  Bell,
  TrendingUp,
  Lock,
  Cpu,
  RefreshCw,
  CheckCircle,
  Star,
  ArrowRight,
  Wallet,
  Target,
  LineChart,
} from "lucide-react";

export const statsData = [
  { value: "50K+", label: "Active Users", icon: "👥" },
  { value: "$2B+", label: "Transactions Tracked", icon: "💳" },
  { value: "99.9%", label: "Uptime SLA", icon: "⚡" },
  { value: "4.9/5", label: "User Rating", icon: "⭐" },
];

export const featuresData = [
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Advanced Analytics",
    description: "Deep AI-powered insights into your spending patterns with predictive forecasting and trend analysis.",
    color: "from-blue-500 to-cyan-500",
    badge: "AI Powered",
  },
  {
    icon: <Receipt className="h-7 w-7" />,
    title: "Smart Receipt Scanner",
    description: "Instantly extract and categorize transaction data from any receipt using Google Gemini AI.",
    color: "from-violet-500 to-purple-500",
    badge: "Gemini AI",
  },
  {
    icon: <PieChart className="h-7 w-7" />,
    title: "Budget Planning",
    description: "Set intelligent budgets with real-time alerts and AI recommendations to hit your goals.",
    color: "from-emerald-500 to-teal-500",
    badge: "Smart Alerts",
  },
  {
    icon: <CreditCard className="h-7 w-7" />,
    title: "Multi-Account Support",
    description: "Manage all your bank accounts, credit cards, and wallets in one unified dashboard.",
    color: "from-orange-500 to-amber-500",
    badge: "Unified View",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Multi-Currency",
    description: "Track finances across 150+ currencies with live exchange rates and automatic conversion.",
    color: "from-pink-500 to-rose-500",
    badge: "150+ Currencies",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Automated Insights",
    description: "Receive monthly AI-generated financial reports with actionable recommendations via email.",
    color: "from-yellow-500 to-orange-500",
    badge: "Auto Reports",
  },
  {
    icon: <RefreshCw className="h-7 w-7" />,
    title: "Recurring Transactions",
    description: "Automatically track and process recurring bills, subscriptions, and income streams.",
    color: "from-cyan-500 to-blue-500",
    badge: "Automated",
  },
  {
    icon: <Target className="h-7 w-7" />,
    title: "Financial Goals",
    description: "Set savings goals and track your progress with visual milestones and projections.",
    color: "from-indigo-500 to-violet-500",
    badge: "Goal Tracking",
  },
  {
    icon: <Bell className="h-7 w-7" />,
    title: "Smart Notifications",
    description: "Get real-time alerts for unusual spending, budget thresholds, and bill reminders.",
    color: "from-teal-500 to-emerald-500",
    badge: "Real-time",
  },
];

export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8" />,
    title: "Connect Your Accounts",
    description: "Securely link your bank accounts and credit cards in under 2 minutes with bank-grade encryption.",
    step: "01",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "AI Analyzes Your Data",
    description: "Our AI engine automatically categorizes transactions and identifies patterns in your spending.",
    step: "02",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Get Actionable Insights",
    description: "Receive personalized recommendations and monthly reports to optimize your financial health.",
    step: "03",
    color: "from-emerald-500 to-teal-500",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote: "Welth has transformed how I manage my business finances. The AI insights helped me cut costs by 30% in just 3 months.",
    rating: 5,
    company: "Johnson & Co.",
  },
  {
    name: "Michael Chen",
    role: "Senior Software Engineer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote: "The receipt scanning feature saves me hours each month. The AI categorization is incredibly accurate — I'm genuinely impressed.",
    rating: 5,
    company: "TechCorp Inc.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote: "I recommend Welth to all my clients. The multi-currency support and detailed analytics are unmatched in the market.",
    rating: 5,
    company: "Rodriguez Finance",
  },
  {
    name: "David Park",
    role: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Managing runway and burn rate has never been easier. Welth gives me the clarity I need to make confident financial decisions.",
    rating: 5,
    company: "ParkTech Ventures",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "As a freelancer with irregular income, Welth's budget alerts and forecasting keep me financially stress-free.",
    rating: 5,
    company: "Independent",
  },
  {
    name: "James Wilson",
    role: "Investment Analyst",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote: "The analytics depth rivals enterprise tools I've used at $500/month. Welth delivers premium value at a fraction of the cost.",
    rating: 5,
    company: "Capital Partners",
  },
];

export const pricingData = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for individuals getting started",
    color: "from-slate-700 to-slate-800",
    borderColor: "border-slate-700",
    features: [
      "Up to 2 accounts",
      "100 transactions/month",
      "Basic analytics",
      "Receipt scanning (10/month)",
      "Email support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "For power users who want full control",
    color: "from-blue-600 to-violet-600",
    borderColor: "border-blue-500",
    features: [
      "Unlimited accounts",
      "Unlimited transactions",
      "Advanced AI analytics",
      "Unlimited receipt scanning",
      "Monthly AI reports",
      "Budget alerts",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Business",
    price: "$29",
    period: "/month",
    description: "For teams and growing businesses",
    color: "from-violet-600 to-purple-700",
    borderColor: "border-violet-500",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Business expense tracking",
      "Tax report exports",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const securityData = [
  {
    icon: <Lock className="h-7 w-7" />,
    title: "256-bit Encryption",
    description: "All your data is encrypted at rest and in transit using AES-256 bank-grade encryption.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Bot Protection",
    description: "Powered by Arcjet, every request is screened for malicious bots and rate-limited.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <CheckCircle className="h-7 w-7" />,
    title: "SOC 2 Compliant",
    description: "We follow SOC 2 Type II security standards to protect your financial data.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <Wallet className="h-7 w-7" />,
    title: "Read-Only Access",
    description: "We never store your banking credentials. All connections are read-only by design.",
    color: "from-orange-500 to-amber-500",
  },
];

export const faqData = [
  {
    question: "Is my financial data safe with Welth?",
    answer: "Absolutely. We use 256-bit AES encryption, never store banking credentials, and are protected by Arcjet's enterprise-grade bot protection. Your data is read-only and never shared with third parties.",
  },
  {
    question: "How does the AI receipt scanner work?",
    answer: "Simply upload a photo of any receipt. Our Google Gemini AI extracts the merchant, amount, date, and category automatically — no manual entry needed.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "Yes! Welth supports unlimited accounts on Pro and Business plans. You can connect checking, savings, credit cards, and investment accounts all in one dashboard.",
  },
  {
    question: "What currencies are supported?",
    answer: "We support 150+ currencies with real-time exchange rates. Perfect for frequent travelers, expats, and international business owners.",
  },
  {
    question: "How do the monthly AI reports work?",
    answer: "On the first of every month, our AI analyzes your previous month's transactions and emails you a personalized report with spending insights, trends, and 3 actionable recommendations.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, cancel anytime with no questions asked. Your data remains accessible for 30 days after cancellation.",
  },
];

export const tickerItems = [
  "🚀 AI-Powered Analytics",
  "💳 Multi-Account Support",
  "🔒 Bank-Grade Security",
  "📊 Real-Time Insights",
  "🤖 Gemini AI Receipt Scanning",
  "📧 Monthly AI Reports",
  "⚡ 99.9% Uptime",
  "🌍 150+ Currencies",
  "🎯 Smart Budget Alerts",
  "📱 Mobile Responsive",
];
