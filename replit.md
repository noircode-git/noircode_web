# Noircode Corporate Website

## Overview
Modern corporate website for Noircode, a development team offering custom web development, web applications, business process automation, and registration form creation. Built with a dark, minimalist design featuring purple/blue-violet accents.

## Tech Stack
- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Express.js, Node.js
- **Storage**: In-memory storage (MemStorage)
- **Email**: Resend integration for contact form notifications
- **UI Components**: Shadcn UI
- **Routing**: Wouter
- **Form Handling**: React Hook Form with Zod validation

## Design System
- **Theme**: Dark mode with purple/violet accents
- **Primary Colors**: 
  - Purple accent: hsl(265, 85%, 65%)
  - Blue-violet accent: hsl(250, 75%, 70%)
- **Typography**: 
  - Headings: Space Grotesk
  - Body: Inter
- **Animations**: Framer Motion for smooth transitions, parallax effects, and micro-interactions

## Features
1. **Hero Section**: Full-viewport hero with animated gradient background, Noircode logo (black background version with glow), tagline, and CTA
2. **About Section**: Company introduction with fade-in animations and statistics card (50+ projects, 5+ years experience)
3. **Services Section**: 4 interactive service cards with hover effects
   - Webové stránky (Websites)
   - Webové aplikace (Web Applications)
   - Automatizace (Automation)
   - Registrační formuláře (Registration Forms)
4. **Portfolio Section**: 6 project showcases with real stock photos and interactive hover states
5. **Contact Section**: Functional contact form with email notifications sent to objednavky.noircode@seznam.cz
6. **Footer**: Logo, navigation links, phone number (+420 778 008 346), and copyright

## Contact Form Integration
- **Email Service**: Resend (connector:ccfg_resend_01K69QKYK789WN202XSE3QS17V)
- **Recipient**: objednavky.noircode@seznam.cz
- **Features**:
  - HTML formatted emails with professional styling
  - Reply-to set to sender's email for easy responses
  - Plain text fallback
  - Error handling (form submission succeeds even if email fails)

## Project Structure
- `/client/src/pages/home.tsx` - Main landing page with all sections
- `/shared/schema.ts` - Data models and validation schemas
- `/server/routes.ts` - API endpoints with email integration
- `/server/storage.ts` - In-memory data storage
- `/server/email.ts` - Resend email service integration
- `/design_guidelines.md` - Comprehensive design specifications

## Environment Variables & Integrations
- **Resend**: Configured via Replit connector (connection:conn_resend_01K85H6F5CEST9Y5FJ6QBJB2E3)
  - API keys managed securely via Replit Connectors
  - From email configured in Resend settings

## Recent Changes
- 2025-01-22: Initial project setup with complete frontend implementation
- 2025-01-22: Added real stock photos to portfolio section
- 2025-01-22: Improved visual design with gradient dividers, background decorations, and statistics
- 2025-01-22: Integrated Resend for email notifications to objednavky.noircode@seznam.cz
- 2025-01-22: Added phone number (+420 778 008 346) to footer

## User Preferences
- Czech language content
- Professional, technical aesthetic
- Purple/violet color scheme
- Smooth, subtle animations
- Contact form emails sent to: objednavky.noircode@seznam.cz
- Phone: +420 778 008 346
