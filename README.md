# 🚗 Audi Premium Service — Luxury Landing Page

A production-ready, premium luxury landing page for an Audi car service business.  
Built with **Next.js 14** , **Tailwind CSS** , and **Framer Motion** .

![Tech](https://img.shields.io/badge/Next.js-14-black) ![Tailwind](https://img.shields.io/badge/Tailwind-3-blue) ![Framer](https://img.shields.io/badge/Framer-Motion-pink)

## ✨ Features

- 🌑 Dark luxury theme (black, silver, white, red accents)
- 🎨 Audi-inspired branding & typography
- 🎬 Smooth Framer Motion animations & scroll reveals
- 🪟 Glassmorphism cards
- 📜 Parallax scrolling backgrounds
- 📊 Animated statistics counters
- 🎠 Auto-playing testimonial slider
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ SEO optimized
- 🌀 Custom loader animation
- 🍔 Animated mobile hamburger menu

## 🛠 Tech Stack

| Tech | Use |
|------|-----|
| Next.js 14 | App Router, SSR, Routing |
| React 18 | UI library |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Lucide React | Icons |

## 📦 Installation

```bash
# 1. Clone or extract the project
cd audi-service

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev

# 4. Open http://localhost:3000
```

## 🏗 Build for Production

```bash
npm run build
npm start
```

## 📁 Folder Structure

```
audi-service/
├── app/
│   ├── layout.js        # Root layout with metadata
│   ├── page.js          # Home page
│   └── globals.css      # Global styles + Tailwind
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── WhyChooseUs.jsx
│   ├── FeaturedModels.jsx
│   ├── Testimonials.jsx
│   ├── BookingCTA.jsx
│   ├── Footer.jsx
│   ├── Loader.jsx
│   └── ui/
│       ├── SectionHeading.jsx
│       └── Counter.jsx
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── jsconfig.json
└── package.json
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js`:
```js
audi: {
  red: "#BB0A30",     // Primary accent
  silver: "#C8CDD4",  // Subtle text
  charcoal: "#0A0A0A" // Background
}
```

### Images
All images load from Unsplash via `next/image` remote patterns.  
Update `next.config.js` if you switch sources.

### Content
Each section's data lives at the top of its component file — edit arrays directly.

## 🚀 Deployment

Deploy instantly to Vercel:

```bash
npm i -g vercel
vercel
```

Or push to GitHub and connect via [vercel.com](https://vercel.com).

## 📜 License

MIT — free to use for personal & commercial projects.

---
 **Crafted with precision · Driven by passion** ````

---

## ✅ Quick-Start Summary

```bash
mkdir audi-service && cd audi-service
# create files as listed above
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — and your **luxury Audi service landing page** is live. 🏁

### Key Highlights
- **All sections complete** : Loader → Navbar → Hero → Services → Why Choose Us → Featured Models → Testimonials → Booking CTA → Footer
- **All animations** : scroll reveals, parallax, counters, slider, hover zoom, hamburger
- **Reusable components** : `SectionHeading`, `Counter`, glass utility class
- **Production-ready** : SEO meta, responsive grid, optimized fonts, smooth scrolling

Everything compiles out-of-the-box with Next.js 14 App Router. Just `npm install` and run. 🚀