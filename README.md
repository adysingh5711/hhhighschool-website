# H. H. High School Website

A modern, content-driven website for H. H. High School, Brambe — a rural education institution in Jharkhand, India. Built with Next.js, Payload CMS, and Tailwind CSS.

## About

This website showcases the school's mission, initiatives, alumni stories, and support opportunities. It features:

- **Leadership messages** from the Director and Principal
- **Alumni testimonials** with carousel navigation
- **Initiatives & programs** managed via CMS
- **Gallery** with categorized content
- **Scholarships** database with full CMS integration
- **Accolades & recognition** achievements
- **Support/Donation** platform
- **SEO optimization** for search engine and AI visibility
- **Image retry logic** for remote R2-hosted assets

## Tech Stack

- **Framework**: Next.js 16.3 (App Router)
- **CMS**: Payload CMS 3.88 (PostgreSQL + S3 storage)
- **Styling**: Tailwind CSS 4 + shadcn components
- **Animations**: Framer Motion + Embla Carousel
- **Database**: PostgreSQL via Payload
- **Storage**: Cloudflare R2 (S3-compatible)
- **Monitoring**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Cloudflare R2 account (for image hosting)

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file with:

```
DATABASE_URL=postgres://user:password@host/dbname
PAYLOAD_SECRET=your-secret-key
R2_PUBLIC_URL=https://your-bucket.r2.dev
AWS_ACCESS_KEY_ID=your-r2-access-key
AWS_SECRET_ACCESS_KEY=your-r2-secret-key
AWS_S3_BUCKET=your-bucket-name
AWS_S3_REGION=auto
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

The Payload CMS admin panel is available at [http://localhost:3000/admin](http://localhost:3000/admin).

### Payload CMS Type Generation

After making schema changes, regenerate TypeScript types:

```bash
npm run generate:types
```

## Project Structure

```
src/
├── app/               # Next.js app router
│   ├── (frontend)/    # Public-facing pages
│   ├── admin/         # Payload CMS admin panel
│   └── api/           # API routes (sitemap, robots.txt, etc.)
├── collections/       # Payload CMS schemas
├── components/        # React components
│   ├── home/          # Homepage sections
│   ├── layout/        # Header, footer, navigation
│   ├── ui/            # Reusable UI (buttons, modals, etc.)
│   ├── gallery/       # Gallery components
│   ├── initiatives/   # Initiative cards and details
│   └── ...
├── lib/               # Utilities and helpers
├── content/           # Static content (testimonials, etc.)
└── payload.config.ts  # Payload CMS configuration
```

## Building & Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is via [Vercel Platform](https://vercel.com):

```bash
vercel deploy
```

Environment variables are configured in Vercel project settings.

## Features

### Content Management

All content (initiatives, scholarships, alumni, accolades) is managed via Payload CMS:

- **Collections**: AlumniTestimonials, Scholarships, Initiatives, Gallery Categories, Accolades
- **Rich Text Editing**: Lexical editor for detailed content
- **Image Handling**: Automatic S3/R2 upload with retry logic for failed uploads
- **Metadata**: Optional alt text and descriptions on all media

### SEO Optimization

- Dynamic XML sitemap (`/sitemap.xml`)
- robots.txt with crawler directives
- Open Graph & Twitter Card metadata
- JSON-LD structured data (Organization, Article schemas)
- Canonical tags on all pages
- AI-optimized titles and descriptions for answer engine visibility

### Performance

- Image optimization via Next.js `<Image>` component
- Vercel Speed Insights for Core Web Vitals monitoring
- Cache-busting query params for failed image retries (no page refresh needed)
- Responsive design for mobile, tablet, and desktop

### Image Retry System

Images hosted on Cloudflare R2 automatically retry up to 2 times on load failure, then show a clickable "Retry" button. This avoids full page refreshes for transient network issues.

## Development Notes

### Hydration Warnings

Browser extensions (password managers, ad blockers) may inject attributes that cause hydration mismatches. These are safe to suppress on `<body>` using `suppressHydrationWarning`.

### Next.js Version

This project uses **Next.js 16.3**, which may have breaking changes from earlier versions. Always check `node_modules/next/dist/docs/` for the latest deprecation notices before making changes to core routing or config.

## Contributing

When making commits:
- Use clear, descriptive commit messages (e.g., `feat: add alumni carousel`, `fix: retry logic for R2 images`)
- Include the author's name in commits (not `Co-Authored-By: Claude`)
- Run `npm run lint` before pushing

## License

Private repository for H. H. High School.
