# Haq Mehr Finder — DESIGN.md

## Project Development Strategy

This project must be developed in clearly separated phases.

**Important rule for Claude Code:**

> Complete one phase at a time. After completing a phase, verify that all requirements and acceptance criteria for that phase are satisfied before moving to the next phase.

Do not build everything at once.

Do not introduce unnecessary dependencies.

Do not implement future-phase functionality early unless it is required by the current phase.

---

# Phase 1 — Project Foundation

## Objective

Set up the project architecture, development environment, global configuration, and core utilities.

## Tasks

* Create the Next.js project structure.
* Configure TypeScript.
* Configure Tailwind CSS / UI system according to the project stack.
* Configure ESLint.
* Configure formatting.
* Create environment variable structure.
* Create basic folder architecture.
* Create reusable utility structure.
* Create centralized constants.
* Create centralized configuration.
* Prepare responsive breakpoints.
* Prepare theme configuration.
* Prepare SEO configuration.

## Initial Folder Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   │
│   ├── haq-mehr-calculator/
│   ├── silver-rate/
│   ├── guides/
│   ├── faq/
│   ├── about/
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms/
│   └── disclaimer/
│
├── components/
│   ├── layout/
│   ├── calculator/
│   ├── content/
│   ├── image-generator/
│   ├── ads/
│   └── ui/
│
├── lib/
│   ├── calculator/
│   ├── currency/
│   ├── sharing/
│   ├── image/
│   ├── seo/
│   └── storage/
│
├── config/
│   ├── site.ts
│   ├── currencies.ts
│   ├── regions.ts
│   ├── languages.ts
│   └── mahr.ts
│
└── types/
```

## Acceptance Criteria

* Project starts successfully.
* TypeScript has no errors.
* Lint passes.
* Basic homepage renders.
* Folder architecture is ready for future phases.
* No unnecessary backend/database dependency is introduced.

---

# Phase 2 — Design System & Global Layout

## Objective

Build the visual identity and reusable layout system.

## Design Direction

The website must feel:

* Modern
* Minimal
* Trustworthy
* Professional
* Islamic-inspired but subtle
* Fast
* Clean
* Mobile-first

Avoid:

* Excessive Islamic decoration
* Heavy gradients
* Huge hero sections
* Excessive cards
* Excessive animations
* Clutter
* Stock-photo-heavy design

## Color Palette

```text
Primary:
#166534

Primary Light:
#22C55E

Accent:
#D4AF37

Background:
#F8FAFC

Surface:
#FFFFFF

Text:
#0F172A

Muted:
#64748B

Border:
#E2E8F0

Dark Background:
#0F172A
```

Gold must be used as a subtle accent.

Do not make the entire website green.

## Typography

English:

* Inter
* Geist
* or equivalent modern sans-serif

Arabic:

* Noto Sans Arabic
* Noto Kufi Arabic

Urdu:

* Noto Nastaliq Urdu
* Noto Sans Arabic

## Components

Create:

```text
Header
Footer
MobileMenu
ThemeSwitcher
LanguageSwitcher
Container
Section
Button
Card
Input
Select
Modal
Toast
```

## Header

Desktop:

```text
Logo
Calculator
Silver Rate
Guides
FAQ
About

Language
Theme
```

Mobile:

```text
Logo
Menu
```

## Acceptance Criteria

* Desktop responsive layout works.
* Tablet layout works.
* Mobile layout works.
* Header works.
* Footer works.
* Dark/light theme foundation works.
* Design tokens are centralized.
* No horizontal scrolling.

---

# Phase 3 — Multilingual & RTL Foundation

## Objective

Build English, Arabic, and Urdu support before implementing content-heavy pages.

## Languages

```text
English
العربية
اردو
```

## Requirements

Implement:

* Language switcher
* Locale configuration
* Translation structure
* RTL/LTR detection
* Direction provider
* Localized navigation
* Localized buttons
* Localized validation messages
* Localized calculator labels

## Direction

English:

```text
LTR
```

Arabic:

```text
RTL
```

Urdu:

```text
RTL
```

## RTL Must Work For

* Header
* Navigation
* Mobile menu
* Calculator
* Inputs
* Result card
* Calculation breakdown
* Footer
* Image generator
* Buttons
* Content sections

## Important

Do not simply mirror the page visually.

Ensure the reading order and text alignment are correct.

## Acceptance Criteria

* User can switch between all 3 languages.
* English uses LTR.
* Arabic uses RTL.
* Urdu uses RTL.
* No layout breaks after switching language.
* Long Arabic/Urdu text does not overflow.
* Typography remains readable.

---

# Phase 4 — Core Haq Mehr Calculator

## Objective

Build the actual product.

The calculator must work without authentication.

No database should be required.

## Calculator Inputs

### Silver Rate

Example:

```text
8000
```

Support decimal values.

### Currency

Initial currencies:

```text
PKR
INR
USD
GBP
EUR
SAR
AED
CAD
```

### Silver Unit

```text
Tola
Masha
Gram
```

### Rate Unit

```text
Per Tola
Per 10 Gram
Per Gram
```

## Calculation Configuration

Current product requirement:

```text
Minimum Haq Mehr:
10 Dirhams

Equivalent silver:
2.5 Tola approximately

Silver weight:
30.618 grams approximately
```

Store these in:

```text
config/mahr.ts
```

Do not hardcode them inside React components.

## Calculation Utilities

Create:

```text
lib/calculator/calculateMahr.ts
lib/calculator/convertUnits.ts
```

The calculation engine must be independent from UI components.

## Validation

Handle:

* Empty input
* Zero
* Negative values
* Invalid decimal
* Extremely large values
* Invalid currency
* Invalid unit

## Acceptance Criteria

* Calculator produces correct results.
* Tola/Masha/Gram conversion works.
* Rate-unit conversion works.
* Currency selection works.
* Validation works.
* Calculation is instant.
* No page reload is required.
* Calculator works on mobile.

---

# Phase 5 — Result, Sharing & Local History

## Objective

Make the calculator result useful and shareable.

## Result Card

Display:

```text
Your Estimated Haq Mehr

2.5 Tola Silver

PKR 20,000

≈ 30.618 grams of silver

Based on:
Silver Rate: PKR 8,000 / Tola
```

## Calculation Breakdown

Show:

```text
Silver Rate
Required Silver
Conversion
Calculation Formula
Final Estimated Amount
```

Do not show unexplained numbers.

## Actions

Implement:

```text
Share
Copy
WhatsApp
Facebook
Telegram
Generate Image
Calculate Again
```

Do not implement PDF.

## Local History

Use:

```text
localStorage
```

Store:

* Amount
* Currency
* Silver rate
* Unit
* Date
* Language/locale if useful

Do not store sensitive personal data.

Actions:

```text
View
Delete
Clear All
```

## Acceptance Criteria

* Result is visually prominent.
* Breakdown is understandable.
* Share works where browser/platform supports it.
* Copy works.
* WhatsApp share works.
* History persists after refresh.
* History can be deleted.
* No authentication required.

---

# Phase 6 — Result Image Generator

## Objective

Create a high-quality shareable image from the calculation result.

This is an important differentiating feature.

## Templates

Initial templates:

```text
Classic
Elegant
Minimal
Modern
Islamic
```

## Requirements

User can:

1. Calculate.
2. Open image generator.
3. Select template.
4. Preview image.
5. Generate image.
6. Download/share image.

## Image Must Contain

```text
Haq Mehr Finder

Silver Rate
Silver Quantity
Estimated Haq Mehr
Equivalent Weight

Optional:
Date
```

## Multilingual Requirements

Image generation must support:

* English
* Arabic
* Urdu

It must correctly render:

* Arabic characters
* Urdu characters
* RTL layout
* Currency symbols
* Number formatting

## Image Sizes

Prepare reusable templates for:

```text
Square / Social
WhatsApp-friendly
Instagram-friendly
General share
```

## Performance

Load image-generation code only when needed.

Do not significantly increase initial page bundle size.

## Acceptance Criteria

* All templates work.
* Preview works.
* Image generation works.
* Arabic works.
* Urdu works.
* English works.
* RTL layout works.
* Image is high quality.
* User can change template without recalculating.
* Download works.

---

# Phase 7 — Silver Rates & Regional Support

## Objective

Add silver-rate information and international regional support.

## Supported Regions

Initial regional support:

```text
Pakistan
India
United Kingdom
United States
Canada
Saudi Arabia
United Arab Emirates
```

## Supported Currencies

```text
PKR
INR
USD
GBP
EUR
SAR
AED
CAD
```

## Silver Rate Pages

Create:

```text
/silver-rate-pakistan
/silver-rate-india
/silver-rate-uk
/silver-rate-usa
/silver-rate-canada
/silver-rate-saudi-arabia
/silver-rate-uae
```

## Display

Show:

```text
Silver Rate Today

Per Tola
Per Gram
Per 10 Gram

Last Updated
Source
```

## Important

Do not claim "live" or "real-time" rates unless the source actually provides live data.

The architecture should support:

```text
Manual Rate
API Rate
```

without changing the calculator.

## Fallback

If API fails:

```text
Unable to fetch latest silver rate.
You can enter the silver rate manually.
```

Manual calculation must continue working.

## Acceptance Criteria

* Regional pages work.
* Currency formatting is correct.
* Manual rate works.
* API architecture is separated from calculator logic.
* API failure does not break calculator.
* Source and update time are clearly displayed.

---

# Phase 8 — SEO Pages, Guides & FAQ

## Objective

Build the organic-search content architecture.

## Core SEO Pages

Create:

```text
/haq-mehr-calculator
/haq-mehr-in-pakistan
/haq-mehr-in-india
/haq-mehr-in-uk
/haq-mehr-in-usa
/haq-mehr-in-canada
/haq-mehr-in-saudi-arabia
/minimum-haq-mehr
/haq-mehr-calculation
/haq-mehr-in-rupees
/haq-mehr-in-tola
/haq-mehr-in-masha
/haq-mehr-in-grams
```

Localized versions should follow the chosen internationalization architecture.

## Guides

Initial guides:

```text
What is Haq Mehr?
How is Haq Mehr Calculated?
What is the Minimum Haq Mehr?
How Many Grams of Silver is 10 Dirhams?
Haq Mehr Calculation in Pakistan
Haq Mehr Calculation in India
Haq Mehr in Tola
Haq Mehr in Masha
Haq Mehr in Grams
How Silver Rate Affects Haq Mehr
Common Haq Mehr Questions
```

## FAQ

Create useful FAQs covering:

* Haq Mehr
* Minimum amount
* Silver quantity
* Tola
* Masha
* Gram
* Cash
* Deferred Mehr
* Silver rate
* Currency conversion
* Calculation

## Content Rules

Do not:

* Keyword stuff
* Copy other websites
* Create thin doorway pages
* Publish unsupported religious claims
* Present disputed rulings as universally accepted

Content should be:

* Original
* Useful
* Well structured
* Search-intent focused
* Clearly sourced where religious claims are made

## Internal Linking

Every guide should naturally link to:

```text
Calculator
Related guides
Relevant silver-rate page
FAQ
```

## Acceptance Criteria

* All core pages exist.
* Guides are useful and unique.
* FAQ works.
* Internal linking works.
* Content is crawlable.
* English/Arabic/Urdu content architecture is ready.

---

# Phase 9 — Trust, Legal & Religious Content

## Objective

Build trust and prepare the website for public launch and AdSense review.

## Pages

Create:

```text
/about
/contact
/privacy-policy
/terms
/disclaimer
```

## Disclaimer

Clearly state:

> Haq Mehr Finder is an informational calculation tool only. It does not issue a religious ruling or replace qualified scholarly guidance. Religious rulings may vary according to scholarly interpretation, school of thought, local practice, and individual circumstances. Please review your calculation and consult a qualified Mufti or trusted Islamic scholar before relying on it for a Nikah or personal religious decision.

Translate into:

```text
English
Arabic
Urdu
```

## Religious Content

Clearly distinguish:

```text
Calculator result
General information
Religious interpretation
Scholarly guidance
```

Do not claim the website itself provides a fatwa.

## Contact

Fields:

```text
Name
Email
Message
```

Add spam protection.

## Acceptance Criteria

* All trust pages exist.
* Pages are linked from footer.
* Disclaimer is visible.
* Disclaimer is translated.
* Contact form validates correctly.
* Privacy practices match actual implementation.

---

# Phase 10 — AdSense Preparation

## Objective

Prepare the website for future Google AdSense monetization without damaging UX.

## Ad Slots

Create:

```text
components/ads/AdSlot.tsx
```

Possible locations:

```text
After calculator/result
Between informational sections
Inside long-form guides
Before FAQ
```

## Never Place Ads

* Over buttons
* Inside calculator controls
* Directly beside important controls
* Where they look like navigation
* Excessively on mobile

## AdSense Requirements Preparation

Verify:

* Original content
* Useful pages
* About
* Contact
* Privacy Policy
* Terms
* Disclaimer
* Clear navigation
* Good mobile UX
* No misleading elements
* No fake claims
* No copied content
* No excessive ads

Do not assume approval is guaranteed.

## Acceptance Criteria

* Ad slots are reusable.
* Ads do not interfere with calculator.
* Mobile ad placement is safe.
* No ad is accidentally styled as a calculator control.

---

# Phase 11 — Analytics, Accessibility & Performance

## Objective

Prepare the website for real users and production traffic.

## Analytics Events

Track:

```text
calculator_used
calculation_completed
result_shared
result_image_downloaded
silver_rate_viewed
guide_opened
language_changed
theme_changed
image_template_changed
```

Do not collect unnecessary personal information.

## Accessibility

Verify:

* Semantic HTML
* Labels
* Keyboard navigation
* Focus states
* Contrast
* Screen reader support
* RTL reading order
* Accessible error messages
* Reduced motion
* Touch target sizes

## Performance

Optimize:

* Initial JavaScript
* Images
* Fonts
* Image generator bundle
* API calls
* Unused dependencies

Calculator should remain extremely fast.

## Acceptance Criteria

* Lighthouse/performance issues are reviewed.
* No obvious accessibility violations.
* Mobile performance is acceptable.
* Image generator does not unnecessarily slow initial load.

---

# Phase 12 — Final QA & Production

## Objective

Test the complete product before deployment.

## Browser Testing

Test:

```text
Chrome
Edge
Firefox
Safari where available
```

## Device Testing

Test:

```text
Desktop
Laptop
Tablet
Mobile
```

## Language Testing

Test:

```text
English
Arabic
Urdu
```

## Direction Testing

Test:

```text
LTR
RTL
```

## Currency Testing

Test:

```text
PKR
INR
USD
GBP
EUR
SAR
AED
CAD
```

## Unit Testing

Test:

```text
Tola
Masha
Gram

Per Tola
Per Gram
Per 10 Gram
```

## Calculator Edge Cases

Test:

```text
0
Negative number
Empty field
Decimal
Very large number
Invalid input
```

## Image Generator

Test:

```text
English
Arabic
Urdu

LTR
RTL

All templates
```

## Sharing

Test:

```text
Copy
Native Share
WhatsApp
Facebook
Telegram
```

## SEO

Verify:

```text
Title
Description
Canonical
Open Graph
Sitemap
Robots
Structured Data
Internal Links
```

## Final Security Review

Verify:

* No exposed API keys
* Environment variables are correct
* Forms are protected
* Inputs are validated
* Firebase rules are secure if Firebase is used

---

# Claude Code Development Rules

Claude Code must follow these rules throughout the project.

## Rule 1 — Phase-by-Phase Development

Do not implement all phases simultaneously.

Work on:

```text
Phase 1
↓
Verify
↓
Phase 2
↓
Verify
↓
Phase 3
↓
...
```

## Rule 2 — Do Not Skip Acceptance Criteria

Before moving to the next phase, verify the current phase's acceptance criteria.

## Rule 3 — Do Not Overengineer

Prefer simple solutions.

Do not add:

* Unnecessary database
* Unnecessary authentication
* Unnecessary state-management library
* Unnecessary UI library
* Unnecessary API
* Unnecessary dependencies

## Rule 4 — Preserve Existing Features

When implementing a later phase, do not break functionality from previous phases.

## Rule 5 — Mobile First

Every feature must work on mobile before considering it complete.

## Rule 6 — RTL First-Class Support

Arabic and Urdu are not optional afterthoughts.

Every reusable component must be checked in both:

```text
LTR
RTL
```

## Rule 7 — Accessibility

Do not sacrifice accessibility for visual design.

## Rule 8 — SEO

SEO must be built into the architecture, not added at the end.

## Rule 9 — AdSense

Do not design the website around ads.

Design around user value first.

## Rule 10 — Religious Accuracy

Do not invent religious rulings.

Where a ruling is disputed:

* Clearly identify the disagreement.
* Avoid presenting one interpretation as universally accepted.
* Use reliable references.
* Recommend consultation with a qualified Mufti/scholar for personal cases.

---

# Final Product Goal

The finished product should provide:

```text
                    HAQ MEHR FINDER
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   Calculator          Silver Rates       Guides/SEO
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    Result Generation
                           │
                 ┌─────────┴─────────┐
                 │                   │
              Sharing          Image Generator
                 │                   │
                 └─────────┬─────────┘
                           │
                  Multilingual UX
                           │
              English / Arabic / Urdu
                           │
                 SEO + AdSense Ready
```

The primary experience must remain:

```text
Open Website
      ↓
Enter/Select Silver Rate
      ↓
Calculate
      ↓
See Haq Mehr
      ↓
Share / Generate Image
      ↓
Read Supporting Information
      ↓
Consult Qualified Scholar When Needed
```

The product should ultimately be:

**Fast + Trustworthy + Simple + Modern + Multilingual + RTL-friendly + SEO-focused + Shareable + AdSense-ready**
