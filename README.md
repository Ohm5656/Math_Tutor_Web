# Prime Math Academy

A premium frontend for an online mathematics academy, built with Next.js App Router, TypeScript, and Tailwind CSS. The project is designed for a real course-selling business, with a strong focus on trust, clarity, mobile usability, and future backend integration.

## Overview

This project is a modern edtech-style frontend for an online mathematics course platform:

- Thai-language UI with a premium and trustworthy visual direction
- Supports course browsing, enrollment, and a mock payment flow
- Fully responsive across desktop, tablet, and mobile
- Reusable component system for easier future expansion
- Prepared for real payment/backend integration later

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- App Router

## Main Features

- Home page with hero section, value propositions, testimonials, FAQ, and CTAs
- Courses page with category filters
- Course detail page with full program information
- Checkout / enrollment page with a mock payment flow
- Payment success and failed pages
- About, Contact, Policies, and Terms pages
- Subtle motion and scroll reveal designed for an educational platform

## Routes

- `/` Home page
- `/courses` Course listing page
- `/courses/[slug]` Course detail page
- `/checkout` Enrollment / payment page
- `/payment/success` Payment success page
- `/payment/failed` Payment failed page
- `/about` About page
- `/contact` Contact page
- `/policies` Policy hub
- `/policies/privacy` Privacy policy
- `/policies/refund` Refund policy
- `/terms` Terms and conditions
- `/dashboard` Student dashboard placeholder

## Project Structure

```text
app/                   Next.js App Router pages
components/            Layout, UI, providers, and sections
data/                  Mock data for courses and site content
lib/                   Utility functions
scripts/               Local development helpers
services/              Payment integration abstraction
types/                 Shared TypeScript types
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open the app at:

```bash
http://localhost:3000
```

### 3. Build for production

```bash
npm run build
```

### 4. Start production server

```bash
npm run start
```

## Available Scripts

- `npm run dev` Run the dev server through the safe launcher
- `npm run dev:webpack` Run the dev server with webpack fallback
- `npm run build` Create a production build
- `npm run start` Start the production server
- `npm run clean` Remove the `.next` cache

## Payment Integration

The payment system in this project is currently a mock frontend flow, created to prepare for real backend integration later.

Related files:

- `services/payment.ts`
- `app/checkout/page.tsx`
- `components/sections/checkout-form.tsx`

Current flow:

- The frontend sends student and course data
- The service simulates payment session creation
- The user is redirected to success / failed placeholder pages

This can later be replaced with a real endpoint such as:

```txt
POST /api/create-payment-session
```

or an external business backend.

## Design Notes

This project is designed to feel suitable for a real educational business:

- Thai typography is readable while still feeling modern
- Motion is present but intentionally restrained
- Cards, buttons, and sections follow a clear visual hierarchy
- The overall tone is designed to feel trustworthy for both students and parents

## Notes

- Most course data and copy are mock content
- There is no real authentication or student dashboard yet
- No real payment gateway is connected yet
- The project is intended as a production-ready frontend foundation

## Deployment

This project can be deployed on Vercel or any platform that supports Next.js.

Typical deployment flow:

1. Connect the GitHub repository
2. Configure environment variables if a real backend is used
3. Deploy using the standard Next.js build process

## Repository Goal

The goal of this repository is to provide a launch-ready frontend for an online mathematics course business, while keeping the codebase ready for future real-world backend expansion.
