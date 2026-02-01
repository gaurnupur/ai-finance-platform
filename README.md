# AI Finance Platform - Welth

An AI-powered financial management platform built with Next.js that helps you track, analyze, and optimize your spending with real-time insights.

## Features

- 🤖 **AI-Powered Receipt Scanning** - Extract transaction data from receipts using Google Gemini AI
- 📊 **Advanced Analytics** - Interactive charts and spending insights
- 💳 **Multi-Account Support** - Manage multiple bank accounts and credit cards
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🔒 **Secure Authentication** - Powered by Clerk
- 📧 **Email Notifications** - Budget alerts and transaction confirmations
- 🛡️ **Security Protection** - Rate limiting and bot protection with ArcJet

## Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS, Shadcn UI
- **Backend**: Prisma ORM, SQLite/PostgreSQL
- **Authentication**: Clerk
- **AI**: Google Gemini AI
- **Email**: Resend
- **Security**: ArcJet
- **Charts**: Recharts
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/gaurnupur/ai-finance-platform.git
cd ai-finance-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following variables:

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

## Made with 💗 by Nupur