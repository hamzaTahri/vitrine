<div align="center">

# 🇲🇦 Moroccan Business Web App Portfolio

### *Des solutions web modernes pour les entreprises marocaines*
### *حلول ويب عصرية للمقاولات المغربية*

![Morocco](https://img.shields.io/badge/Built_for-Morocco_🇲🇦-c1272d?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen?style=for-the-badge)
![Apps](https://img.shields.io/badge/Demo_Apps-1_Live_|_7_Planned-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

![Languages](https://img.shields.io/badge/Darija-🗣️-orange?style=flat-square)
![Languages](https://img.shields.io/badge/Français-🇫🇷-blue?style=flat-square)
![Languages](https://img.shields.io/badge/العربية-🇸🇦-green?style=flat-square)
![Languages](https://img.shields.io/badge/English-🇬🇧-red?style=flat-square)

---

**Building modern, affordable, and culturally authentic web presence for Moroccan local businesses — from hammams in the medina to salons in Maarif, from riads in Marrakech to pharmacies in Agadir.**

Morocco's small businesses deserve more than a Facebook page. This portfolio is a collection of production-ready, mobile-first web applications designed specifically for Moroccan SMBs — with local languages, local payment norms, WhatsApp-first contact flows, and pricing in MAD (درهم). Each demo app is a complete, deployable solution that a real business can use today.

</div>

---

## 📑 Table of Contents

- [Vision & Positioning](#-vision--positioning)
- [Demo Apps Roadmap](#-demo-apps-roadmap)
- [Demo 1 — Beauty Salon Web App](#-demo-1--beauty-salon-web-app-deep-dive)
- [Core Features (Shared)](#-core-features-shared-across-all-apps)
- [Localization & Cultural Notes](#-localization--cultural-notes)
- [Implementation Plan](#-implementation-plan)
- [Success Metrics](#-success-metrics)
- [Contributing / Contact](#-contributing--contact)
- [License](#-license)

---

## 🔭 Vision & Positioning

### Why Morocco, Why Now?

Morocco is at a digital inflection point. The country presents a unique opportunity for web-first business solutions:

| Indicator | Value | Source / Context |
|---|---|---|
| Smartphone penetration | **~80%+** of the population | ANRT 2024 reports |
| Internet users | **~36 million** | Over 90% mobile-first |
| E-commerce growth | **+30% YoY** | Accelerated post-COVID |
| SMBs with a proper website | **< 15%** | Massive underserved market |
| WhatsApp usage | **~20M+ active users** | Primary business communication |
| Youth population (under 30) | **~50%** | Digital-native consumers |

Despite rapid digital adoption, the vast majority of Moroccan small businesses still rely on **word of mouth**, a **Facebook page**, or a **handwritten sign** as their entire digital presence. International website builders (Wix, Squarespace, WordPress) fail these businesses because they:

- ❌ Don't support Darija (Moroccan Arabic) natively
- ❌ Require credit cards and international payment methods
- ❌ Optimize for email-based contact (Moroccans use WhatsApp)
- ❌ Ignore local SEO patterns (city-specific search behavior)
- ❌ Assume fast broadband (most users are on 4G/3G)
- ❌ Price in USD/EUR, alienating local business owners

### 🎯 Target Customers

This portfolio targets **micro and small businesses** across Morocco's diverse economy:

| Sector | Examples | Why They Need This |
|---|---|---|
| 🏥 **Health & Beauty** | Salons de coiffure, hammams, spas, barbiers | Booking management, service catalogs |
| 🍽️ **Food & Beverage** | Restaurants, cafés, snacks, pâtisseries | Menus, delivery info, reservations |
| 🏨 **Hospitality** | Riads, maisons d'hôtes, gîtes | Room showcase, availability, booking |
| 🎨 **Artisans** | Zellige craftsmen, leather workers, carpet weavers | Portfolio, e-commerce, story-telling |
| 💊 **Pharmacies** | Pharmacie de garde, parapharmacies | Product catalog, garde schedule, location |
| 🔧 **Services** | Plombiers, électriciens, mécaniciens | Service listing, quote requests, reviews |
| 📚 **Education** | Crèches, auto-écoles, centres de soutien | Course listings, enrollment, schedules |
| 🏋️ **Fitness** | Salles de sport, clubs, personal trainers | Class schedules, membership info |

### 🏆 Competitive Positioning — Morocco-First UX

What makes this portfolio fundamentally different:

```
┌─────────────────────────────────────────────────────────────┐
│                    MOROCCO-FIRST APPROACH                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🗣️  Darija / Français / العربية / English                  │
│      → Not just translated — culturally adapted             │
│                                                             │
│  📱  WhatsApp = Primary CTA                                 │
│      → Not email forms that nobody checks                   │
│                                                             │
│  💰  MAD (درهم) Pricing                                     │
│      → Native currency, local price psychology              │
│                                                             │
│  🏦  CIH / Barid Bank / CMI / Cash                          │
│      → No Stripe/PayPal dependency                          │
│                                                             │
│  🕌  Prayer Times & Ramadan Awareness                       │
│      → Culturally respectful scheduling                     │
│                                                             │
│  📍  City-Specific SEO                                      │
│      → "salon coiffure Casablanca" not generic keywords     │
│                                                             │
│  ⚡  3G/4G Optimized                                        │
│      → < 3s load on Inwi/Orange/Maroc Telecom networks      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 🌟 Mission Statement

> **"Donner à chaque entreprise marocaine une vitrine numérique digne de son savoir-faire."**
>
> *"كل مقاولة مغربية خاصها تكون عندها واجهة رقمية على قد شغلها."*
>
> Give every Moroccan business a digital storefront worthy of its craft.

---

## 🗺️ Demo Apps Roadmap

Each demo app is a fully functional, deployable web application targeting a specific Moroccan business vertical. Every app is open-source, mobile-first, and culturally adapted.

| # | App Name | Business Type | Status | Key Differentiating Feature |
|---|---|---|---|---|
| 1 | **Salon Jamila** *(صالون جميلة)* | Beauty Salon / Salon de Coiffure | ✅ Live | Online booking with WhatsApp confirmation |
| 2 | **Riad Nour** *(رياض نور)* | Riad / Maison d'hôtes | ✅ Live demo (port 3002) | Room gallery with availability calendar + Booking.com parity |
| 3 | **Snack Lmoumen** *(سناك المومن)* | Restaurant / Snack | ✅ Live demo (port 3001) | Digital menu with photos + delivery zone map |
| 4 | **Dar L'Artisan** *(دار الصانع)* | Artisan Workshop | 📋 Planned | Product portfolio with craft story + international shipping info |
| 5 | **Pharmacie El Amal** *(صيدلية الأمل)* | Pharmacy | 📋 Planned | Pharmacie de garde schedule + product search |
| 6 | **Hammam Salam** *(حمام السلام)* | Hammam / Spa | ✅ Live demo (port 3003) | Service packages with couples/family options + gift cards |
| 7 | **Auto-École Najah** *(أوطو إيكول النجاح)* | Driving School | ✅ Live demo (port 3004) | Course progress tracker + exam prep resources |
| 8 | **Coach Fit Maroc** *(كوتش فيت ماروك)* | Gym / Personal Training | 📋 Planned | Class schedule with trainer profiles + trial booking |
| 9 | **Café Littéraire** *(مقهى أدبي)* | Café / Cultural Space | 📋 Planned | Events calendar + menu + cultural programming |
| 10 | **Plombier Express** *(بلومبيي إكسبرس)* | Plumber / Home Services | 📋 Planned | Quote request form + service area map + reviews |
| 11 | **Meilou** *(ميلو)* | Amlou / Miels artisanaux | ✅ Live demo (port 3005) | Boutique, panier & commande WhatsApp, histoire de marque |

### Roadmap Visualization

```
  Q1 2027          Q2 2027          Q3 2027          Q4 2027
 ─────────       ─────────       ─────────       ─────────
 │ Salon  │      │ Riad   │      │ Hammam │      │ Café   │
 │ Jamila │      │ Nour   │      │ Salam  │      │ Littér │
 │  ✅    │      │  🔄    │      │  📋    │      │  📋    │
 ─────────       ─────────       ─────────       ─────────
                 │ Snack  │      │ Auto-  │      │Plombier│
                 │Lmoumen │      │ École  │      │Express │
                 │  📋    │      │  📋    │      │  📋    │
                 ─────────       ─────────       ─────────
                                 │ Pharma │      │Coach   │
                                 │El Amal │      │Fit     │
                                 │  📋    │      │  📋    │
                                 ─────────       ─────────
                                 │  Dar   │
                                 │L'Artis │
                                 │  📋    │
                                 ─────────
```

---

## 💇 Demo 1 — Beauty Salon Web App (Deep Dive)

### *Salon Jamila — صالون جميلة*

> **"Votre beauté, notre passion. Réservez en un clic."**
>
> *"جمالك، شغفنا. حجزي موعدك بضغطة وحدة."*

The Beauty Salon app is the flagship demo — the first fully production-ready application in the portfolio. It demonstrates every core principle of the Morocco-first approach: mobile-first design, multilingual support, WhatsApp integration, and culturally appropriate UX.

---

### 🎯 Features Overview

#### 1. 📅 Online Booking System

- **Time-slot based booking** — clients select a service, stylist, date, and time
- **WhatsApp confirmation** — booking details sent via WhatsApp (not email)
- **Intelligent scheduling** — avoids conflicts, respects prayer times, adjusts for Ramadan hours
- **Walk-in friendly** — clear indicator for "pas besoin de rendez-vous" services
- **Cancellation & rescheduling** — via WhatsApp message to the salon

```
┌─────────────────────────────────────────┐
│         📅 Prendre un Rendez-vous       │
│            حجز موعد                     │
├─────────────────────────────────────────┤
│                                         │
│  Service:  [Coupe + Brushing ▼]         │
│  Styliste: [Khadija          ▼]         │
│  Date:     [Mar 15 Nov 2027  📅]        │
│  Heure:    [10:00  10:30  11:00]        │
│                                         │
│  Prix: 150 MAD (درهم)                   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  📱 Confirmer via WhatsApp      │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

#### 2. 💄 Services Catalog

- **Categorized services** with descriptions in French and Darija
- **Pricing in MAD (درهم)** with clear display
- **Duration estimates** for each service
- **Before/after photos** where appropriate
- **Popular / recommended badges** for high-demand services

| Service | Description | Durée | Prix (MAD) |
|---|---|---|---|
| Coupe Femme | قصة شعر للنساء — Coupe classique ou moderne | 45 min | 120 MAD |
| Brushing | بروشينغ — Mise en plis et brushing | 30 min | 80 MAD |
| Coloration | صباغة — Coloration complète | 90 min | 250 MAD |
| Mèches | ميش — Mèches et balayage | 120 min | 350 MAD |
| Lissage Brésilien | ليساج — Lissage kératine | 180 min | 800 MAD |
| Maquillage Mariée | ماكياج العروسة — Maquillage complet mariage | 120 min | 1,500 MAD |
| Épilation Visage | حلاوة الوجه — Épilation au fil ou cire | 20 min | 50 MAD |
| Soin Cheveux | عناية بالشعر — Masque et traitement profond | 45 min | 150 MAD |
| Henné | حنة — Application henné traditionnel | 60 min | 200 MAD |

#### 3. 📸 Photo Gallery

- **Masonry grid layout** showcasing the salon's work
- **Before/after sliders** for transformations
- **Categories**: Coupes, Coloration, Mariées, Henné, Soins
- **Instagram integration** — pulls latest posts
- **Optimized images** — WebP format, lazy loading, < 100KB per image

#### 4. ⭐ Testimonials Section

- **Client reviews** with names, photos (optional), and star ratings
- **Bilingual reviews** — clients can write in French or Darija
- **Google Reviews integration** placeholder
- **Featured testimonials** on homepage

> ⭐⭐⭐⭐⭐
> *"Khadija hiya l'ahsan coiffeuse f Casa. Dima kanmchi 3ndha w dima kankhrej farḥana!"*
> — Fatima Z., Casablanca

> ⭐⭐⭐⭐⭐
> *"Excellent service, accueil chaleureux. Le lissage brésilien est parfait, ça fait 3 mois et c'est toujours impeccable."*
> — Salma B., Casablanca

#### 5. 💰 Pricing in Moroccan Dirhams (MAD / درهم)

- All prices displayed in **MAD (درهم)**
- **No currency conversion** — prices are natively Moroccan
- **Price ranges** for variable services (e.g., "à partir de 120 MAD")
- **Package deals** displayed prominently (e.g., "Forfait Mariée: 2,500 MAD")
- **Student / loyalty discounts** section

#### 6. 📱 WhatsApp Contact Integration

- **Floating WhatsApp button** — always visible on mobile
- **Pre-filled messages** — "Bonjour, je voudrais prendre un rendez-vous pour [service]" / "سلام، بغيت نحجز موعد ل[خدمة]"
- **Click-to-chat** with the salon's WhatsApp Business number
- **Booking confirmations** sent via WhatsApp
- **No email forms** — WhatsApp is the primary contact channel

```
📱 WhatsApp Integration Flow:

  Client clicks "Réserver"          Salon receives
  ────────────────────────          ────────────────
  ┌──────────────────┐              ┌──────────────────┐
  │ Pre-filled msg:  │   ──────►   │ 📩 New booking   │
  │ "Salam, bghit    │              │ request from     │
  │  nakhod rdv l    │              │ +212 6XX-XXXXXX  │
  │  brushing nhar   │              │                  │
  │  l'khmis 10:00" │              │ ✅ Confirm       │
  └──────────────────┘              │ ❌ Reschedule    │
                                    └──────────────────┘
```

#### 7. 📱 Mobile-First Responsive Design

- **Mobile-first** — designed for the 80%+ who browse on phones
- **Thumb-friendly** — large tap targets, bottom navigation
- **Fast loading** — optimized for 3G/4G (< 3s first paint)
- **Progressive enhancement** — works without JavaScript for basic info
- **Responsive breakpoints**: 320px → 375px → 768px → 1024px → 1440px

---

### 🛠️ Technical Stack

| Layer | Technology | Why |
|---|---|---|
| **Framework** | Next.js 16 (App Router) | SSR for SEO, fast page loads, React ecosystem |
| **Styling** | Tailwind CSS 3 | Rapid development, responsive utilities, small CSS bundle |
| **Database** | PostgreSQL (via Prisma ORM) | Reliable, scalable, relational data for bookings |
| **Hosting** | Abacus.AI Platform | Managed infrastructure, auto-scaling, CDN |
| **Authentication** | NextAuth.js | Secure admin panel access |
| **Animations** | Framer Motion | Smooth, performant UI animations |
| **Icons** | Lucide React | Clean, consistent iconography |
| **Image Optimization** | Next.js Image component | WebP conversion, lazy loading, responsive sizes |
| **Internationalization** | Custom i18n system | Darija / French / Arabic / English support |
| **Analytics** | Google Analytics 4 | Traffic tracking, conversion monitoring |

---

### 📸 Screenshots / Mockups

> *Screenshots will be added as the app reaches visual completion.*

| View | Description | Screenshot |
|---|---|---|
| 🏠 Homepage | Hero section with booking CTA and services preview | ![Homepage](./screenshots/salon-homepage.png) |
| 💄 Services | Full catalog with prices in MAD and descriptions | ![Services](./screenshots/salon-services.png) |
| 📅 Booking | Step-by-step booking flow with WhatsApp confirmation | ![Booking](./screenshots/salon-booking.png) |
| 📸 Gallery | Masonry photo grid with before/after comparisons | ![Gallery](./screenshots/salon-gallery.png) |
| ⭐ Reviews | Client testimonials in French and Darija | ![Reviews](./screenshots/salon-reviews.png) |
| 📱 Mobile | Full responsive mobile view | ![Mobile](./screenshots/salon-mobile.png) |

---

### 🔗 Live Demo

> 🚧 **Live demo link will be added here once deployed.**
>
> `[Live Demo — Salon Jamila](https://your-demo-url.abacus.ai)`
>
> Access the admin panel: `[Admin Panel](https://your-demo-url.abacus.ai/admin)`

---

## 🧩 Core Features (Shared Across All Apps)

Every application in this portfolio shares a common set of features and design principles. These are not afterthoughts — they are foundational requirements baked into the architecture from day one.

### 📱 Mobile-First Design

- **Primary target**: smartphone users on 4G/3G networks
- **Touch-optimized**: minimum 44px tap targets, swipe gestures
- **Bottom navigation**: thumb-zone-friendly on mobile
- **Progressive Web App (PWA)**: installable, offline-capable for basic info
- **Performance budget**: < 3s First Contentful Paint on 3G, < 200KB initial JS

```
Performance Targets:

  Metric                    Target        Measurement
  ─────────────────────     ──────────    ─────────────
  First Contentful Paint    < 2.0s        3G (1.6 Mbps)
  Largest Contentful Paint  < 3.0s        3G (1.6 Mbps)
  Time to Interactive       < 3.5s        3G (1.6 Mbps)
  Cumulative Layout Shift   < 0.1         All devices
  Total Page Weight         < 500KB       Compressed
  JavaScript Bundle         < 200KB       Compressed
  Image per item            < 100KB       WebP format
```

### 🌍 Multilingual Support (Darija / French / Arabic / English)

Every app supports four language modes, switchable via a language toggle:

| Language | Code | Direction | Use Case |
|---|---|---|---|
| **Français** 🇫🇷 | `fr` | LTR | Primary UI, professional context, menus, legal |
| **Darija** 🇲🇦 | `dar` | LTR (Latin) / RTL (Arabic) | Informal, testimonials, WhatsApp messages, greetings |
| **العربية** | `ar` | RTL | Formal Arabic, religious contexts, official documents |
| **English** 🇬🇧 | `en` | LTR | International visitors, tourism-facing businesses |

**Default language logic:**
1. Detect browser language preference
2. If Arabic → show French (Darija users typically have Arabic browser settings but prefer French UI)
3. If French → show French
4. If English → show English
5. Fallback → French

### 📱 WhatsApp Integration

- **Floating action button (FAB)** — persistent WhatsApp icon on all pages
- **Pre-populated messages** — context-aware (e.g., booking request, price inquiry)
- **WhatsApp Business API** ready — for automated responses
- **No email dependency** — WhatsApp IS the contact form
- **Click-to-chat links**: `https://wa.me/212XXXXXXXXX?text=...`

### 💰 Local Currency (MAD / درهم)

- All prices in **Moroccan Dirhams (MAD)**
- Symbol display: `150 MAD` or `150 درهم` depending on language mode
- No currency conversion widgets
- Price formatting: `1,500 MAD` (comma for thousands)
- Centimes display: `99.50 MAD` when applicable (rare for services)

### 🔍 SEO for Moroccan Cities

Each app includes SEO optimization targeting the major Moroccan cities:

| City | Arabic | Population | SEO Priority |
|---|---|---|---|
| Casablanca | الدار البيضاء | ~3.7M | ⭐⭐⭐⭐⭐ |
| Marrakech | مراكش | ~1.0M | ⭐⭐⭐⭐⭐ |
| Rabat | الرباط | ~0.6M | ⭐⭐⭐⭐ |
| Fès | فاس | ~1.1M | ⭐⭐⭐⭐ |
| Tanger | طنجة | ~1.0M | ⭐⭐⭐⭐ |
| Agadir | أكادير | ~0.6M | ⭐⭐⭐ |
| Meknès | مكناس | ~0.6M | ⭐⭐⭐ |
| Oujda | وجدة | ~0.5M | ⭐⭐ |
| Kénitra | القنيطرة | ~0.4M | ⭐⭐ |
| Tétouan | تطوان | ~0.4M | ⭐⭐ |

**SEO Strategy:**
- City-specific landing pages (e.g., `/salon-coiffure-casablanca`)
- Structured data (JSON-LD) for local businesses
- Google My Business integration
- Arabic + French meta tags
- City name in `<title>`, `<meta description>`, `<h1>`
- Hreflang tags for language variants

### 🗺️ Google Maps Integration

- **Embedded map** showing business location
- **Directions button** — opens Google Maps / Waze with the address
- **Nearby landmarks** — "à côté de…" / "قريب من…" for businesses in medinas
- **Multiple branch support** — for businesses with several locations
- **Delivery/service zone overlay** — for restaurants and service providers

### ⚡ Fast Loading on 4G/3G Networks

- **Server-side rendering (SSR)** for instant first paint
- **Image optimization**: WebP format, responsive sizes, lazy loading
- **Code splitting**: only load what's needed per page
- **CDN-hosted assets**: edge-cached across Morocco
- **Minimal JavaScript**: < 200KB compressed initial bundle
- **Font optimization**: system fonts + single web font (preloaded)
- **Critical CSS inlined**: above-the-fold styles load instantly

### 🔗 Social Media Links

Every app includes integration with the platforms Moroccan businesses actually use:

| Platform | Usage in Morocco | Integration |
|---|---|---|
| **Instagram** 📸 | Primary visual showcase | Feed embed, link to profile |
| **Facebook** 📘 | Business page, community | Page link, reviews widget |
| **TikTok** 🎵 | Growing fast, especially youth | Profile link, video embed |
| **WhatsApp** 📱 | Primary communication | Click-to-chat, FAB |
| **YouTube** 🎥 | Tutorials, vlogs | Channel link |

---

## 🌐 Localization & Cultural Notes

This section documents the linguistic, cultural, and UX decisions that make these apps authentically Moroccan — not just translated, but **culturally native**.

### 🗣️ Darija (Moroccan Arabic) Specifics

Darija (الدارجة) is the mother tongue of most Moroccans. It's distinct from Modern Standard Arabic (MSA / فصحى) and varies by region. Supporting Darija properly requires understanding its unique characteristics.

#### Phonetic Latinized Darija vs Arabic Script

Darija is commonly written in **two forms** in digital contexts:

| Form | Example | Use Case |
|---|---|---|
| **Latin script (Arabizi)** | "Salam, bghit nakhod rdv" | WhatsApp messages, social media, younger users |
| **Arabic script** | "سلام، بغيت ناخد رونديفو" | Formal contexts, older users, app UI |

**Our approach:**
- UI labels → Arabic script Darija or French (user's choice)
- WhatsApp pre-filled messages → Latin script Darija (more natural for chat)
- Testimonials → preserve the client's original writing style
- Search / SEO → both forms indexed

#### Arabizi Number-Letter Conventions

Moroccan internet users use numbers to represent Arabic sounds that don't exist in the Latin alphabet:

| Number | Sound | Arabic Letter | Example |
|---|---|---|---|
| **3** | ع (ain) | ع | "3lach" = علاش (why) |
| **7** | ح (ha) | ح | "7lib" = حليب (milk) |
| **9** | ق (qaf) | ق | "9ahwa" = قهوة (coffee) |
| **5** | خ (kha) | خ | "5obz" = خبز (bread) |
| **8** | غ (ghain) | غ | "8ali" = غالي (expensive) |
| **2** | ء (hamza) | ء | "ma2kla" = مأكلة (food) |

#### Common Business Greetings in Darija

These phrases are used throughout the apps for an authentic feel:

| Context | Darija (Latin) | Darija (Arabic) | French Equivalent |
|---|---|---|---|
| Welcome | "Merhba bik/bik" | "مرحبا بيك" | Bienvenue |
| How can I help? | "Kifach n9der n3awnek?" | "كيفاش نقدر نعاونك؟" | Comment puis-je vous aider ? |
| Book an appointment | "7jez maw3ed" | "حجز موعد" | Prendre un rendez-vous |
| See prices | "Chouf l'ataman" | "شوف الأثمان" | Voir les prix |
| Contact us | "Twasel m3ana" | "تواصل معانا" | Contactez-nous |
| Thank you | "Choukran" | "شكراً" | Merci |
| See you soon | "Ntsennawk" | "نتسناوك" | À bientôt |
| Open / Closed | "Me7loul / Mesdoud" | "محلول / مسدود" | Ouvert / Fermé |

#### Salon-Specific Darija Vocabulary

| Term | Darija | French | Usage |
|---|---|---|---|
| Appointment | رونديفو / موعد | Rendez-vous | Booking flow |
| Haircut | قصة | Coupe | Services list |
| Blow-dry | بروشينغ | Brushing | Services list |
| Hair dye | صباغة | Coloration | Services list |
| Bride makeup | ماكياج العروسة | Maquillage mariée | Services list |
| Threading | حلاوة | Épilation au fil | Services list |
| Henna | حنة | Henné | Services list |
| Stylist | كوافوزة | Coiffeuse | Team page |

#### RTL Layout Considerations

- **Arabic/Darija (Arabic script) mode**: full RTL layout
  - Navigation flows right-to-left
  - Text alignment: right
  - Icons flip horizontally (arrows, chevrons)
  - Form labels on the right side
  - Number display remains LTR (phone numbers, prices)
- **Darija (Latin script) mode**: LTR layout (same as French)
- **Mixed content**: BiDi algorithm handles inline mixing
- **CSS strategy**: `dir="rtl"` on `<html>`, Tailwind RTL plugin for utility classes

```css
/* RTL-aware spacing example */
.service-card {
  @apply ltr:pl-4 rtl:pr-4;
  @apply ltr:text-left rtl:text-right;
}
```

---

### 🇫🇷 French as the Primary Business Language

French remains the **dominant language** for business, commerce, and professional communication in Morocco. Our apps reflect this reality.

#### UI Labels Convention

| Element | Language | Example |
|---|---|---|
| **Navigation menu** | French | "Accueil", "Services", "Galerie", "Contact" |
| **CTAs (buttons)** | French | "Réserver maintenant", "Voir les prix" |
| **Form labels** | French | "Nom", "Téléphone", "Date souhaitée" |
| **Legal / footer** | French | "Mentions légales", "Politique de confidentialité" |
| **Prices** | French format | "150 MAD" (not "١٥٠ درهم" in French mode) |
| **Error messages** | French | "Ce créneau n'est plus disponible" |

#### Professional Tone vs Darija Informality

| Context | Tone | Language Choice |
|---|---|---|
| Official UI (menus, buttons) | Professional | French |
| Marketing copy (hero, taglines) | Warm, inviting | French + Darija sprinkles |
| Testimonials | Authentic, personal | Darija (client's voice) |
| WhatsApp messages | Casual, friendly | Darija (Latin script) |
| Legal pages | Formal | French |
| Social media captions | Playful | Mix of French + Darija |

---

### 🕌 Cultural Considerations

#### Prayer Times Awareness

- **Booking system** avoids suggesting time slots during:
  - **Salat al-Jumu'ah** (Friday noon prayer, ~12:30–13:30) — slots grayed out or marked "pause déjeuner / صلاة الجمعة"
  - Optionally: other prayer times shown as soft warnings, not hard blocks
- **Display of prayer times** in footer or info section (via API like Aladhan)
- **Friday hours**: many businesses close 12:00–14:30 — schedule reflects this

#### 🌙 Ramadan Mode

During Ramadan (رمضان), Moroccan businesses dramatically shift their hours and offerings:

| Aspect | Normal Mode | Ramadan Mode |
|---|---|---|
| **Operating hours** | 9:00 – 20:00 | 10:00 – 15:00, then 21:00 – 01:00 |
| **Booking slots** | Standard | Adjusted to Ramadan schedule |
| **Special offers** | Regular promotions | "Offre Ramadan" / "عرض رمضان" |
| **Homepage banner** | Standard hero | Ramadan greeting + adjusted info |
| **UI theme** | Standard | Optional: crescent moon accents, gold tones |
| **F'tour menu** (restaurants) | N/A | Special Iftar menu featured prominently |

**Implementation:**
- Automatic detection based on Hijri calendar
- Manual toggle in admin panel for custom dates
- Ramadan-specific banner component
- Hour adjustment system

#### Modesty Norms in Imagery

- **Salon / Hammam apps**: images show results (hair, nails) rather than full-body shots
- **No revealing imagery** — respect for Islamic modesty norms, especially for family-oriented businesses
- **Consent-aware**: testimonial photos are optional; initials or avatars are default
- **Gender-aware services**: many salons and hammams are gender-specific — UI reflects this clearly
- **Bridal content**: allowed to be more glamorous, as it's culturally expected

#### 🎨 Moroccan Color Palette Preferences

Inspired by traditional Moroccan aesthetics — zellige tiles, medina walls, Atlas landscapes:

| Color | Hex | Inspiration | Usage |
|---|---|---|---|
| **Zellige Teal** | `#1A7A6D` | Traditional tilework | Primary accent, CTAs |
| **Moorish Gold** | `#C8A951` | Brass lanterns, jewelry | Highlights, premium features |
| **Terracotta** | `#C67B4B` | Marrakech medina walls | Warm backgrounds, cards |
| **Riad White** | `#FAF7F2` | Whitewashed courtyards | Page backgrounds |
| **Atlas Blue** | `#2E4057` | Chefchaouen, Atlantic | Text, headers, dark mode |
| **Henna Red** | `#8B2500` | Traditional henna paste | Warnings, important notices |
| **Mint Green** | `#A8D5BA` | Moroccan mint tea | Success states, freshness |
| **Desert Sand** | `#E8D5B7` | Saharan dunes | Secondary backgrounds |
| **Majorelle Blue** | `#6050DC` | Jardin Majorelle | Accent, links (tourism apps) |

```css
/* Moroccan Design System — CSS Variables */
:root {
  --color-zellige-teal: #1A7A6D;
  --color-moorish-gold: #C8A951;
  --color-terracotta: #C67B4B;
  --color-riad-white: #FAF7F2;
  --color-atlas-blue: #2E4057;
  --color-henna-red: #8B2500;
  --color-mint-green: #A8D5BA;
  --color-desert-sand: #E8D5B7;
  --color-majorelle-blue: #6050DC;
}
```

---

### 💳 Payment & Contact Norms

#### WhatsApp as Primary Contact Channel

| Channel | Usage in Morocco | Our Approach |
|---|---|---|
| **WhatsApp** 📱 | **95%+ of businesses** use it | Primary CTA, floating button, pre-filled messages |
| **Phone call** 📞 | Common, especially older generation | Secondary CTA, click-to-call |
| **Instagram DM** 📸 | Growing, especially beauty/fashion | Link to profile, not embedded |
| **Email** 📧 | Very low usage for local businesses | Not featured as contact method |
| **Contact forms** 📝 | Unfamiliar to most SMB owners | Replaced by WhatsApp |

#### Cash-Dominant Economy

Morocco remains **heavily cash-based** for local services:

| Payment Method | Usage | App Approach |
|---|---|---|
| **Cash (espèces)** | ~70% of transactions | Default payment shown: "Paiement sur place" |
| **CMI cards** | Growing, ~20% | "Carte bancaire acceptée" badge when applicable |
| **CIH Bank / Barid Bank** | Transfer for deposits | Bank transfer details in booking confirmation |
| **Mobile money (M-Wallet)** | Emerging | Future integration |
| **Stripe / PayPal** | **Not used** by local customers | ❌ **Not implemented** — would alienate users |

**Critical decision**: We do **NOT** integrate Stripe or PayPal. These services:
- Require international credit cards (most Moroccans don't have them)
- Charge in foreign currency
- Are unfamiliar to the target audience
- Create trust barriers ("why do they need my card online?")

Instead, the booking flow ends with a **WhatsApp confirmation** and payment is handled **in person** (cash or local card terminal) — which is exactly how Moroccan businesses operate today.

---

## 📋 Implementation Plan

A phased approach to building out the full portfolio, from the first demo to a sustainable platform.

### Phase 1: Foundation (Month 1–2) 🏗️

**Goal**: Ship the first demo app and establish the technical foundation.

| Task | Details | Status |
|---|---|---|
| ✅ Beauty Salon app (Salon Jamila) | Complete, production-ready demo | ✅ Live |
| ✅ Core design system | Moroccan color palette, typography, component library | ✅ Done |
| ✅ Mobile-first responsive framework | Tailwind config, breakpoints, touch optimization | ✅ Done |
| 🔄 Localization system (i18n) | French/Darija/Arabic/English switching | 🔄 In Progress |
| 🔄 WhatsApp integration module | Reusable component for all apps | 🔄 In Progress |
| 📋 SEO foundation | Meta tags, structured data, sitemap generation | 📋 Planned |
| 📋 Performance optimization | Image pipeline, code splitting, CDN setup | 📋 Planned |

**Deliverables:**
- 1 live demo app (Beauty Salon)
- Reusable component library
- Documentation and contribution guide

---

### Phase 2: Expansion (Month 3–4) 🚀

**Goal**: Launch 2 more demo apps and optimize for Moroccan search.

| Task | Details | Priority |
|---|---|---|
| 📋 Riad Nour (Hospitality demo) | Room showcase, availability, booking | High |
| 📋 Snack Lmoumen (Restaurant demo) | Digital menu, delivery info | High |
| 📋 City-specific SEO pages | Landing pages for top 6 cities | High |
| 📋 Google My Business integration | Structured data, reviews sync | Medium |
| 📋 Performance audit | Lighthouse scores, 3G testing | Medium |
| 📋 Analytics dashboard | Track visitor behavior, WhatsApp clicks | Low |

**Deliverables:**
- 3 live demo apps total
- SEO landing pages for 6 cities
- Google My Business integration guide

---

### Phase 3: Vertical Expansion (Month 5–6) 📈

**Goal**: Reach 5 verticals and add real backend functionality.

| Task | Details | Priority |
|---|---|---|
| 📋 Dar L'Artisan (Artisan demo) | Portfolio, craft stories | High |
| 📋 Pharmacie El Amal (Pharmacy demo) | Product catalog, garde schedule | High |
| 📋 Booking backend system | Database-driven scheduling | High |
| 📋 WhatsApp Business API integration | Automated confirmations & reminders | Medium |
| 📋 Admin panel (shared) | Business owners manage content | Medium |
| 📋 RTL layout polish | Full Arabic/Darija RTL support | Medium |
| 📋 Ramadan mode system | Auto-detection, hour adjustments | Low |

**Deliverables:**
- 5 live demo apps total
- Functional booking backend
- WhatsApp automation for confirmations
- Admin panel for content management

---

### Phase 4: Scale & Monetize (Month 7–12) 💎

**Goal**: Complete portfolio, onboard real businesses, launch paid tier.

| Task | Details | Priority |
|---|---|---|
| 📋 3 more demo apps (8+ total) | Hammam, Auto-École, Coach Fit | High |
| 📋 Local business partnerships | Onboard 10+ real businesses | High |
| 📋 Paid tier launch | Custom domain, branding, advanced features | High |
| 📋 Template customization system | Business owners personalize colors/content | Medium |
| 📋 Multi-branch support | Businesses with multiple locations | Medium |
| 📋 Moroccan dev community | Workshops, open-source contributions | Medium |
| 📋 Case studies | Document success stories | Low |
| 📋 Mobile app (PWA) | Installable versions for key verticals | Low |

**Deliverables:**
- 8+ live demo apps
- 10+ real businesses onboarded
- Revenue from paid tier
- Community of Moroccan developers

---

### 📊 Implementation Timeline

```
 Month 1    Month 2    Month 3    Month 4    Month 5    Month 6    Month 7-12
 ────────   ────────   ────────   ────────   ────────   ────────   ──────────
 ┌──────────────────┐
 │   PHASE 1        │
 │   Foundation     │
 │   1 demo live    │
 └──────────────────┘
            ┌──────────────────┐
            │   PHASE 2        │
            │   Expansion      │
            │   3 demos live   │
            └──────────────────┘
                       ┌──────────────────┐
                       │   PHASE 3        │
                       │   Verticals      │
                       │   5 demos live   │
                       └──────────────────┘
                                  ┌────────────────────────────────┐
                                  │   PHASE 4                      │
                                  │   Scale & Monetize             │
                                  │   8+ demos, paid tier, partners│
                                  └────────────────────────────────┘
```

---

## 📊 Success Metrics

Clear, measurable KPIs to track the portfolio's progress and impact.

### Key Performance Indicators (KPIs)

| KPI | Target (6 months) | Target (12 months) | Measurement Method |
|---|---|---|---|
| **Demo apps live** | 5 | 8+ | Deployment count |
| **Monthly unique visitors** (all demos) | 5,000 | 25,000 | Google Analytics |
| **WhatsApp click-through rate** | > 15% | > 20% | Event tracking |
| **Booking conversion rate** | > 8% | > 12% | Booking completions / visitors |
| **Average page load time (3G)** | < 3.0s | < 2.5s | Lighthouse / WebPageTest |
| **Lighthouse Performance score** | > 85 | > 90 | Lighthouse CI |
| **Moroccan cities in SEO** | 6 | 10+ | Search Console impressions |
| **Local businesses onboarded** | 5 | 20+ | CRM tracking |
| **Monthly recurring revenue (MAD)** | — | 10,000 MAD | Billing system |
| **GitHub stars** | 50 | 200+ | GitHub API |
| **Community contributors** | 5 | 15+ | GitHub insights |

### 📈 Tracking Dashboard Metrics

```
  ┌────────────────────────────────────────────────────────────┐
  │                    📊 Portfolio Dashboard                   │
  ├────────────────────────────────────────────────────────────┤
  │                                                            │
  │  Apps Live          Visitors/mo       WhatsApp CTR         │
  │  ┌──────┐          ┌──────┐          ┌──────┐             │
  │  │  1   │          │  --  │          │  --  │             │
  │  │ / 8  │          │      │          │      │             │
  │  └──────┘          └──────┘          └──────┘             │
  │                                                            │
  │  Avg Load (3G)     Bookings/mo       Cities in SEO        │
  │  ┌──────┐          ┌──────┐          ┌──────┐             │
  │  │  --  │          │  --  │          │  --  │             │
  │  └──────┘          └──────┘          └──────┘             │
  │                                                            │
  │  Businesses        MRR (MAD)         Contributors          │
  │  ┌──────┐          ┌──────┐          ┌──────┐             │
  │  │  0   │          │  0   │          │  0   │             │
  │  └──────┘          └──────┘          └──────┘             │
  │                                                            │
  └────────────────────────────────────────────────────────────┘
```

---

## 🤝 Contributing / Contact

This project is built **by Moroccans, for Moroccans** — and we welcome contributions from the community.

### How to Contribute

1. **🐛 Report bugs** — Found something broken? Open an issue.
2. **💡 Suggest a vertical** — Know a business type that needs a demo? Tell us.
3. **🌍 Improve translations** — Help us get the Darija/Arabic/French just right.
4. **🎨 Design contributions** — UI/UX improvements, illustrations, icons.
5. **💻 Code contributions** — Pick an issue, fork, PR — the usual flow.
6. **📝 Content** — Write case studies, blog posts, documentation.

### For Moroccan Developers 🇲🇦

We especially welcome Moroccan developers who understand the **nuances** of building for the local market. If you've ever:

- Built a website for a family member's business
- Struggled with RTL + LTR mixed layouts
- Wished there was a proper Darija i18n framework
- Thought "why does no one build for Moroccan SMBs?"

…then this project is for you. **Merhba bik! مرحبا بيك!**

### For Moroccan Business Owners 🏪

If you own a local business in Morocco and want a **modern, professional web presence** without the international pricing:

- 📱 **WhatsApp**: [+212 XXX-XXXXXX](https://wa.me/212XXXXXXXXX)
- 📧 **Email**: `contact@example.com` *(placeholder)*
- 💬 **Feedback form**: Coming soon

We'd love to hear what features matter most to **you** — bzzaf! 💚

### Links

| Resource | Link |
|---|---|
| 🌐 **Live Portfolio** | *Coming soon* |
| 📂 **GitHub Repository** | `[github.com/your-username/morocco-portfolio](https://github.com/your-username/morocco-portfolio)` |
| 📋 **Issue Tracker** | `[GitHub Issues](https://github.com/your-username/morocco-portfolio/issues)` |
| 💬 **Discussions** | `[GitHub Discussions](https://github.com/your-username/morocco-portfolio/discussions)` |
| 🐦 **Twitter / X** | `@your-handle` |
| 📸 **Instagram** | `@your-handle` |

---

## 📄 License

```
MIT License

Copyright (c) 2027 Moroccan Business Web App Portfolio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### 🇲🇦 Built with ❤️ for Morocco

**"L'avenir du commerce marocain est digital."**

*"المستقبل ديال التجارة المغربية هو الرقمنة."*

The future of Moroccan commerce is digital.

---

![Made in Morocco](https://img.shields.io/badge/Made_in-Morocco_🇲🇦-c1272d?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open_Source-💚-brightgreen?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-blue?style=for-the-badge)

*Merhba bik — مرحبا بيك — Bienvenue — Welcome*

</div>
