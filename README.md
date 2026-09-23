# Web Portfolio

A personal portfolio built to present my work, engineering experience, technical decisions, and selected projects in a simple and accessible way.

The goal of this project is not to build an overly complex portfolio.

It is to build something that is:

- fast
- responsive
- easy to understand
- easy to navigate
- technically maintainable
- visually consistent
- ready to grow into a personal publishing platform

The portfolio also serves as a place for me to document what I build, what I learn, and how I approach software engineering.

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Prisma**
- **PostgreSQL**

The application is designed around a relatively small stack with clear responsibilities.

Next.js handles the application and rendering layer, TypeScript provides type safety across the codebase, Tailwind CSS handles the design system and responsive UI, while Prisma and PostgreSQL provide the foundation for persistent content such as future blog posts.

---

## What This Portfolio Contains

### Projects

Selected projects with detailed case studies covering:

- the problem being solved
- project constraints
- technical approach
- architectural decisions
- outcomes
- lessons learned

The goal is to show more than screenshots.

Each project is intended to explain how I think about software, tradeoffs, product requirements, and implementation decisions.

Some of the projects currently featured include:

- **Vitademy** — an assessment platform that turns learning and thinking patterns into personalized recommendations
- **Velora Pack** — a public-facing business website for a packaging company
- **Velora Pack Internal Dashboard** — a role-based internal system for customers, leads, inquiries, and orders
- **HelloBake** — an e-commerce experience for a local bakery
- **3 Years Wrapped** — a Spotify Wrapped-inspired interactive storytelling experience

---

## Professional Experience

My background includes building both internal business systems and public-facing products.

### Mayora

**Lead Full-Stack Engineer**

I lead a small development team building internal applications used by operational teams.

My work includes:

- leading and mentoring junior developers
- designing and developing internal business applications
- supporting overseas factory transaction workflows
- building systems for local purchasing operations
- working directly with stakeholders to understand operational requirements
- translating business workflows into maintainable software

---

### Vitademy

**Technical Founder & CTO**

At Vitademy, I lead the technical direction of the platform and work across architecture, frontend development, backend systems, infrastructure, and developer mentoring.

My responsibilities include:

- product and technical architecture
- full-stack application development
- database design
- authentication and authorization
- deployment and infrastructure
- code reviews
- mentoring junior developers, interns, and contributors
- working with designers, content creators, and stakeholders

---

### Elevance

**Co-Founder**

Elevance is a software house focused on helping businesses digitalize their operations.

My role is intentionally broad.

I work across:

- software engineering
- technical planning
- client communication
- solution design
- product development
- marketing
- business development

Building Elevance has pushed me to think about software beyond implementation.

A technically correct system is not enough.

The software also needs to solve the right problem.

---

## Engineering Philosophy

I prefer software that is simple for the user and understandable for the developer.

That usually means:

- avoiding unnecessary abstractions
- keeping components focused
- separating business logic from presentation
- designing reusable patterns where reuse actually provides value
- keeping state close to where it belongs
- using shared state only when multiple parts of the application genuinely depend on it
- preferring clear data models over clever implementations
- building for maintainability before premature optimization

I do not believe complexity is a sign of engineering maturity.

A good system should solve the problem while remaining understandable enough for another developer to work on confidently.

---

## Architecture

The portfolio is structured around a separation between presentation, content, and persistent application data.

```text
app/
├── projects/
├── blog/
├── about/
└── ...

components/
├── ui/
├── layout/
└── sections/

lib/
├── db/
├── utilities/
└── ...

content/
├── projects
├── experience
└── ...

prisma/
└── schema.prisma
```

Static portfolio content can remain close to the codebase where appropriate.

Content that benefits from persistence, querying, relationships, or publishing workflows can live in PostgreSQL through Prisma.

This allows the portfolio to remain simple today without limiting how it can evolve later.

---

## Database

The database layer is intentionally lightweight.

Prisma provides a typed interface between the application and PostgreSQL.

The database will primarily support content that needs persistence, including the future blog system.

A simplified direction for the content model looks like:

```text
Post
├── id
├── title
├── slug
├── excerpt
├── content
├── published
├── publishedAt
├── createdAt
├── updatedAt
└── tags
```

The portfolio itself does not need to become a CMS.

The database exists where persistence provides real value.

---

## Blog

One of the longer-term goals of this repository is to support technical writing and personal journaling.

The blog will be used for topics such as:

- engineering lessons
- architecture decisions
- project retrospectives
- React and Next.js concepts
- database design
- technical leadership
- building internal tools
- lessons from running software projects
- things I learned while building products

The blog also provides a natural way to improve the portfolio's long-term discoverability through useful technical content.

---

## Theme

The interface supports both light and dark themes.

The theme system is designed so that components depend on semantic design tokens rather than hardcoded theme-specific values.

The objective is to maintain the same visual hierarchy and readability in both modes.

---

## Responsive Design

The application is designed to work across:

- mobile devices
- tablets
- laptops
- desktop displays
- larger screens

Responsiveness is treated as part of the component design rather than something added after the desktop interface is complete.

---

## Design Principles

The visual direction is intentionally restrained.

The interface should feel:

- clean
- calm
- direct
- readable
- efficient

Navigation and content hierarchy should always be obvious.

Animation should support understanding rather than distract from the content.

The design reflects the way I prefer to build software:

> Simple on the surface, deliberate underneath.

---

## Development

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Configure your database connection:

```env
DATABASE_URL="your-postgresql-connection-string"
```

Generate the Prisma client:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Database Development

After updating the Prisma schema:

```bash
npx prisma migrate dev --name your_migration_name
```

Regenerate the Prisma client when necessary:

```bash
npx prisma generate
```

To inspect database records during development:

```bash
npx prisma studio
```

---

## Project Structure Philosophy

I try to keep the codebase organized around a few rules.

### Keep components focused

A component should have a clear responsibility.

Large components are broken down when doing so improves readability, reuse, or separation of concerns.

### Keep state intentional

Local state stays local.

Shared state is introduced when several parts of the application genuinely need access to the same data or behavior.

### Separate UI from business logic

Reusable hooks, utilities, services, and data-access functions should handle behavior that does not belong inside presentation components.

### Prefer explicit code

Readable code is usually more valuable than compressed or overly abstract code.

Future contributors should be able to understand why something exists without reverse engineering the entire system.

### Optimize when there is a reason

Performance matters, but optimization should be driven by real constraints rather than assumptions.

---

## Current Priorities

The current focus of the project is:

1. Portfolio foundation
2. Responsive design system
3. Dark and light theme support
4. Professional experience
5. Project case studies
6. SEO and metadata
7. Database foundation
8. Blog publishing
9. Performance and accessibility improvements

---

## Future Improvements

Planned improvements include:

- technical blog
- article tagging
- sitemap generation
- structured metadata
- richer project case studies
- improved accessibility
- performance monitoring
- analytics
- private content management workflow
- automated image optimization
- better article discovery

---

## Why This Repository Exists

A portfolio should show more than which libraries someone knows.

I want this repository to demonstrate how I approach software engineering:

- understanding the problem first
- designing systems around actual requirements
- keeping complexity under control
- thinking about maintainability
- caring about the user experience
- understanding both frontend and backend concerns
- communicating technical decisions clearly

The projects inside this portfolio come from different contexts — internal enterprise tools, educational platforms, business websites, e-commerce, dashboards, and personal experiments.

That variety is intentional.

Software engineering is not about building the same application repeatedly.

It is about understanding different problems and choosing appropriate solutions.

---

## License

This repository contains my personal portfolio and project content.

The source code may be referenced for educational purposes, but personal content, project descriptions, branding, and assets should not be reused without permission.
