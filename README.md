# Shiv Core Tech — Enterprise Digital Solutions Architecture

This repository contains the source code for the **Shiv Core Tech** corporate platform. The application is built using Next.js (App Router), Tailwind CSS v4, Framer Motion, and Base UI. It is optimized for production static exports and deploys seamlessly to standard Linux/Apache/IIS hosting providers (such as Hostinger).

---

## 📖 Table of Contents
1. [System Architecture](#-system-architecture)
2. [Codebase Directory Layout](#-codebase-directory-layout)
3. [Design System & Styling Philosophy](#-design-system--styling-philosophy)
4. [Key Components & Interactive Workflows](#-key-components--interactive-workflows)
5. [Backend API Integration](#-backend-api-integration)
6. [Local Development & Commands](#-local-development--commands)
7. [Production Deployment Guide (Hostinger / Static Host)](#-production-deployment-guide-hostinger--static-host)

---

## 🏛️ System Architecture

The platform uses a decoupled component structure to ensure high performance, responsiveness, and clean rendering.

```mermaid
graph TD
    Client([User Browser]) -->|Request /| NextApp[Next.js Static Engine]
    NextApp --> Layout[Root Layout layout.tsx]
    Layout --> Navigation[Conditional Navbar navbar.tsx]
    Layout --> MainContent{Static Page Routes}
    
    MainContent -->|Home "/"| HomePage[Home Page page.tsx]
    HomePage --> Hero[Hero Section]
    HomePage --> About[About Section]
    HomePage --> Expertise[Expertise Section]
    HomePage --> Tech[Tech Showcase]
    HomePage --> Portfolio[Portfolio Case Studies]
    HomePage --> Testimonials[Testimonials]
    HomePage --> Contact[Contact Form]
    
    MainContent -->|Careers "/careers/"| CareersPage[Careers Page page.tsx]
    CareersPage --> CareersUI[Careers Section careers.tsx]
    CareersUI --> Accordion[Interactive Accordions]
    CareersUI --> ApplicationForm[Application Form]
    
    Contact -->|WhatsApp Direct / Post API| API_Contact[API Route: /api/contact]
    ApplicationForm -->|Nodemailer SMTP / Buffer Attachments| API_Apply[API Route: /api/apply]
```

---

## 📂 Codebase Directory Layout

```
.
├── app/                        # Next.js App Router root folder
│   ├── api/                    # Server-side API endpoints
│   │   ├── apply/              # Careers SMTP submission endpoint
│   │   └── contact/            # General contact form submission endpoint
│   ├── careers/                # Careers route (/careers/)
│   │   └── page.tsx            # Main page component for Careers
│   ├── privacy-policy/         # Privacy Policy page route
│   ├── terms-of-service/       # Terms of Service page route
│   ├── globals.css             # Main stylesheet & Tailwind CSS v4 directives
│   ├── layout.tsx              # Root Layout, global providers, and head meta tags
│   └── page.tsx                # Client-rendered corporate Home Page
├── components/                 # Reusable component layers
│   └── ui/                     # UI components with tailored styles
│       ├── button.tsx          # Custom CVA-powered semantic button component
│       ├── card-premium.tsx    # Interactive mouse-tracking card with radial glow
│       ├── careers.tsx         # Detailed job roles with interactive accordions
│       ├── navbar.tsx          # Responsive navigation header with mobile overlays
│       ├── section.tsx         # Structured semantic layout wrappers
│       └── ...                 # Modular sections (Hero, About, Expertise, etc.)
├── lib/                        # Utility & configuration helpers
│   ├── metadata.ts             # SEO Metadata generation helpers
│   └── utils.ts                # Class merger helper (cn) using tailwind-merge
├── public/                     # Static media assets (webp, logo, svg)
├── postcss.config.mjs          # PostCSS compilation setup
├── tailwind.config.js          # Tailwind legacy config overrides (if any)
└── tsconfig.json               # TypeScript compiler config
```

---

## 🎨 Design System & Styling Philosophy

### 1. Tailwind CSS v4 & Styling Tokens
We leverage **Tailwind CSS v4**'s native CSS-first configuration layer via `@theme` variables inside [app/globals.css](file:///c:/Users/chate/Desktop/shivcore_tech/app/globals.css).

| Theme Token | CSS Variable | Fallback Color Value | Description |
| :--- | :--- | :--- | :--- |
| `--color-primary` | `oklch(0.68 0.20 220)` | Slate Blue | Branding primary highlights |
| `--color-secondary` | `oklch(0.68 0.22 45)` | Cyan/Amber | Accent highlights and buttons |
| `--color-accent` | `oklch(0.60 0.20 200)` | Bright Violet | Highlights for AI/ML modules |
| `--color-background` | `oklch(0.07 0.02 248)` | Dark Navy/Black | Global viewport canvas |

### 2. Premium Micro-Animations
The site implements high-end visual enhancements to ensure premium interaction:
* **Radial Mouse Glows**: Implemented via [components/ui/card-premium.tsx](file:///c:/Users/chate/Desktop/shivcore_tech/components/ui/card-premium.tsx) using Framer Motion's `useMotionValue` and `useMotionTemplate` to track the user’s cursor dynamically.
* **Infinite Marquees**: Inline CSS marquee scrolling `@keyframes marquee-scroll` used in the technical capabilities ribbon.
* **Floating Animations**: Subtle vertical loops (`@animate-float`) to keep UI blocks feeling alive.

---

## ⚙️ Key Components & Interactive Workflows

### 💼 Careers Card Accordion (Mobile-Optimized)
Located in [components/ui/careers.tsx](file:///c:/Users/chate/Desktop/shivcore_tech/components/ui/careers.tsx), this handles expandable job cards:
* **Accessibility**: Implements `role="button"`, `tabIndex={0}`, keyboard support (`Enter` / `Space`), and `aria-expanded` attributes.
* **Tap Event Propagation**: Includes stop-propagation helpers (`e.stopPropagation()`) on sub-buttons to ensure clean click registering on iOS Safari and Chrome.
* **Responsive Buttons**: The "Apply for this Position" button dynamically adjusts to full width (`w-full`) on mobile and behaves inline (`sm:w-auto`) on larger screens.

### 📜 Fixed Header Scroll Offset
To prevent the sticky, fixed glass navbar from covering layout items during smooth scroll triggers:
```typescript
const navbarHeight = 85; 
const elementPosition = formElement.getBoundingClientRect().top + window.scrollY;
const offsetPosition = elementPosition - navbarHeight;

window.scrollTo({
  top: offsetPosition,
  behavior: "smooth"
});
```

---

## 🔌 Backend API Integration

### 1. `/api/apply` Route (Job Application SMTP)
Handles careers form submissions:
* Extracts applicant data, salary details, and cover letters.
* Parses uploaded resumes as a files array from `FormData` and pipes it as an array buffer attachment.
* **Graceful Logging Fallback**: If SMTP credentials (`SMTP_HOST`, `SMTP_USER`, `SMTP_PASS`) are missing from `.env.local`, the server logs the application details to the node console.

### 2. `/api/contact` Route (WhatsApp / Mail Contact)
Directs enquiries to either email via SMTP or converts data payload into a WhatsApp link template format to open WhatsApp Web (`https://wa.me/`) with predefined messages:
```markdown
*New Enquiry from Shiv Core Tech*
----------------------------------
*Name:* [Candidate Name]
*Email:* [Candidate Email]
*Service:* [Requested Service]
*Message:* [Message Body]
```

---

## 💻 Local Development & Commands

Ensure you have [Node.js](https://nodejs.org/) installed. Run the following commands:

```bash
# Install dependencies
npm install

# Run the local development server (starts on http://localhost:3000)
npm run dev

# Format code and run ESLint checks
npm run lint

# Generate static production builds
npm run build
```

---

## 🚀 Production Deployment Guide (Hostinger / Static Host)

The codebase is pre-configured for **Static Exports** (SSG) in [next.config.ts](file:///c:/Users/chate/Desktop/shivcore_tech/next.config.ts):
```typescript
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};
```

### 📋 Exporting Procedure
1. Build the application:
   ```bash
   npm run build
   ```
2. The compiler creates a production-optimized static directory named `/out` at the root.

### 🌐 Deploying to Hostinger (hPanel File Manager)
1. Log in to your Hostinger hPanel.
2. Open the **File Manager** for your domain.
3. Navigate to the public directory (usually `/public_html`).
4. Upload all files and folders located *inside* the generated `/out` folder. (Do not upload the folder itself; upload its contents: `index.html`, `careers/`, `_next/`, `favicon.ico`, etc.).

> [!WARNING]
> **Mobile Responsive Warning**:
> Next.js client pages (using `"use client"`) generated via static HTML export can sometimes drop the viewport metadata if not explicitly set. 
> To ensure correct rendering, we have hardcoded the viewport meta tag directly in [app/layout.tsx](file:///c:/Users/chate/Desktop/shivcore_tech/app/layout.tsx):
> `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />`
> Always redeploy the entire build folder to guarantee responsive layout rendering.
