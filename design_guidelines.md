# Noircode Website Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from modern tech agencies like Vercel, Linear, and Stripe, adapted for a dark, minimalist aesthetic with purple/violet accents. The design emphasizes professional credibility, technical sophistication, and interactive engagement.

## Color Palette

### Dark Mode (Primary)
- **Background Primary**: 220 15% 8% (deep charcoal)
- **Background Secondary**: 220 12% 12% (card backgrounds)
- **Background Tertiary**: 220 10% 16% (hover states)
- **Text Primary**: 0 0% 98% (near white)
- **Text Secondary**: 220 8% 70% (muted text)
- **Text Tertiary**: 220 6% 50% (subtle text)

### Accent Colors
- **Primary Accent**: 265 85% 65% (vibrant purple)
- **Secondary Accent**: 250 75% 70% (blue-violet)
- **Accent Gradient**: Linear from 265 85% 65% to 250 75% 70%
- **Success/Active**: 265 85% 65% (consistent with primary)

### Interactive States
- **Hover Glow**: Primary accent at 20% opacity with blur
- **Border Accent**: Primary accent at 30% opacity
- **Card Borders**: 220 10% 20% (subtle separation)

## Typography
**Font Family**: Space Grotesk for headings, Inter for body text

### Hierarchy
- **Hero Headline**: 4xl to 7xl, font-bold, tracking-tight, gradient text effect
- **Section Headlines**: 3xl to 5xl, font-semibold
- **Card Titles**: xl to 2xl, font-semibold
- **Body Text**: base to lg, font-normal, leading-relaxed
- **Button Text**: sm to base, font-medium, tracking-wide
- **Footer Text**: sm, font-normal

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32

### Container Strategy
- **Full-width sections**: w-full with inner max-w-7xl
- **Content sections**: max-w-6xl mx-auto
- **Vertical spacing**: py-20 (desktop), py-12 (mobile)
- **Section gaps**: mb-32 between major sections

## Component Specifications

### Hero Section
- **Height**: 90vh minimum, full viewport impact
- **Background**: Animated gradient mesh or particle effect using purple/violet tones
- **Logo**: Noircode logo (provided) at top, large scale
- **Headline**: "Tvoříme software, který pracuje za vás" with gradient text effect
- **CTA Button**: Large, primary accent background with subtle glow effect
- **Parallax Effect**: Subtle vertical movement on scroll (20-30px translation)

### About Section
- **Layout**: Single column, centered, max-w-4xl
- **Background**: Subtle gradient or geometric pattern overlay
- **Animations**: Fade-in from bottom on scroll (stagger text blocks)
- **Visual Element**: Consider code snippet visualization or terminal mockup

### Services Section
- **Grid**: 2x2 grid (desktop), single column (mobile)
- **Card Design**: 
  - Dark background (background secondary)
  - Accent border on hover (primary accent glow)
  - Icon at top (custom or from Heroicons)
  - Title + description + "Zjistit více" link
  - Hover: Lift effect (translateY -4px) + glow
  - Transition: all 300ms ease

### Portfolio/References Section
- **Layout**: Masonry-style grid or 3-column card layout
- **Cards**: 
  - Project thumbnail (use placeholder gradient backgrounds)
  - Overlay on hover with project name + tech stack
  - Interactive: Scale on hover (1.05)
  - Border: Subtle accent glow on active
- **Effect**: Staggered fade-in animation on scroll

### Contact Section
- **Layout**: Centered form, max-w-2xl
- **Form Fields**:
  - Name, Email, Message (textarea)
  - Dark backgrounds with accent borders on focus
  - Floating labels pattern
  - Large submit button "Zanechte nám zprávu"
  - Subtitle: "Ozveme se do 24 hodin" in muted text
- **Visual**: Decorative gradient blob or geometric shape behind form

### Footer
- **Layout**: 3-column (desktop), stacked (mobile)
- **Content**: 
  - Left: Noircode logo (smaller)
  - Center: Quick links (Služby, Reference, Kontakt)
  - Right: Copyright "© 2025 Noircode"
- **Styling**: Minimal, muted text, subtle top border

## Animation Guidelines

### Micro-Interactions
- **Button Hovers**: Scale 1.02, glow effect (box-shadow with accent color)
- **Card Hovers**: Lift (translateY -4px), border glow
- **Links**: Underline slide-in effect from left
- **Form Focus**: Border color transition + subtle scale 1.01

### Scroll Animations
- **Fade-ins**: Opacity 0→1 + translateY 20px→0, duration 600ms
- **Stagger**: 100ms delay between sibling elements
- **Hero Parallax**: Background elements move at 0.5x scroll speed

### Loading States
- **Buttons**: Spinner with accent color
- **Page Load**: Subtle fade-in of sections sequentially

## Images

### Hero Background
**Description**: Abstract gradient mesh or particle field animation in purple/violet tones (265 85% 65% to 250 75% 70%), dark background with glowing particles or flowing gradients
**Placement**: Full-width background behind hero content, z-index below text
**Treatment**: Semi-transparent overlay to ensure text readability

### Portfolio/Project Thumbnails
**Description**: Project screenshots or abstract gradient placeholders representing each project type (web apps in cooler tones, automation in warmer purples)
**Placement**: Within portfolio cards, aspect ratio 16:9
**Treatment**: Slight blur on initial load, sharp on hover

**Note**: This website features a large, impactful hero section with animated gradient background.