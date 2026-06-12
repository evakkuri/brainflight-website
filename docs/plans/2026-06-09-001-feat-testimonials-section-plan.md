---
title: "feat: Add customer testimonials section"
type: feat
status: active
date: 2026-06-09
---

# Add customer testimonials section

## Summary

Add a testimonials section to the Brainflight homepage displaying three customer testimonials with name, role, and quote. The section follows the existing SectionHeader + data file + card component pattern, with a data model that accommodates optional LinkedIn profile links for future use.

---

## Requirements

- R1. Display three testimonials on the homepage with attribution (name, role/company, quote text)
- R2. Follow the established component pattern (SectionHeader, data file, card component)
- R3. Support optional LinkedIn profile URLs in the data model for future use
- R4. Responsive layout consistent with the rest of the site

---

## Scope Boundaries

- LinkedIn URL rendering and linking is deferred until URLs are provided — the data model will include the field but cards will not render links until populated
- No testimonial filtering, sorting, or pagination
- No changes to site navigation, routing, or overall layout beyond the new section
- No SEO or structured data markup for testimonials
- No author avatars or images

---

## Context & Research

### Relevant Code and Patterns

- `src/data/certifications.ts` — data file pattern with typed array exports
- `src/data/projects.ts` — data file pattern for rendered card lists
- `src/components/SectionHeader.astro` — reusable subheading + title component used across all sections
- `src/components/ServiceCard.astro` — card component pattern (icon, title, body)
- `src/components/ProjectCard.astro` — card component pattern (richer card with tags/chips)
- `src/components/Certification.astro` — card component pattern (image + link)
- `src/pages/index.astro` — page layout with section ordering and container styling

---

## Key Technical Decisions

- **Data file pattern over inline data**: Following the established `src/data/*.ts` convention keeps testimonial content editable without touching component markup, consistent with how certifications and projects are managed.
- **Optional `linkedinUrl` field**: Include in the type definition but not rendered until populated. This avoids a future data-migration when LinkedIn URLs are added.
- **Section placement after Services, before Projects**: On a consultancy site, testimonials work best after establishing what you do (Services) and before showing past work (Projects). This can be adjusted in `index.astro` at any time without changing components.

---

## Open Questions

### Deferred to Implementation

- **Exact visual styling of testimonial cards**: The card layout (quote prominence, attribution formatting, spacing) is best refined visually during implementation. The existing card components provide styling conventions to follow.
- **Section heading wording**: Subheading and title text for the SectionHeader can be decided during implementation (e.g., subheading="Testimonials", title="What clients and colleagues say").

---

## Implementation Units

- U1. **Testimonial data model and data file**

**Goal:** Create the TypeScript type and data file for testimonials, following the `certifications.ts` pattern.

**Requirements:** R1, R3

**Dependencies:** None

**Files:**
- Create: `src/data/testimonials.ts`
- Test: `src/data/testimonials.ts` (type correctness verified by Astro build)

**Approach:**
- Define a `Testimonial` type with `name` (string), `role` (string), `quote` (string), and `linkedinUrl` (optional string) fields
- Export a `testimonials` array with all three entries

**Patterns to follow:**
- `src/data/certifications.ts` — type definition + array export pattern

**Test scenarios:**
- Happy path: Astro dev server starts without errors; the three testimonials render correctly on the page
- Edge case: The `linkedinUrl` field validates as optional — entries without it (all three initially) should not cause type errors

**Verification:**
- `npm run build` succeeds with no type errors
- All three testimonials are readable from the exported array

---

- U2. **TestimonialCard component**

**Goal:** Create the Astro component that renders a single testimonial card with quote, name, and role.

**Requirements:** R1, R2, R4

**Dependencies:** U1

**Files:**
- Create: `src/components/TestimonialCard.astro`

**Approach:**
- Component accepts a `Testimonial` prop and renders the quote text, attribution (name + role), and conditionally links to LinkedIn when `linkedinUrl` is provided
- Style follows the site's visual language: teal accent color, slate body text, consistent spacing with `ServiceCard` and `ProjectCard`
- Responsive layout: cards stack vertically on mobile, side-by-side on desktop (3-column grid)

**Patterns to follow:**
- `src/components/ServiceCard.astro` — card component structure and styling
- `src/components/ProjectCard.astro` — richer card with attribution and descriptive text

**Test scenarios:**
- Happy path: Card renders quote text, name, and role correctly
- Edge case: Card renders without errors when `linkedinUrl` is undefined (current state for all three)
- Happy path: When `linkedinUrl` is provided, the name renders as a link to that URL
- Responsive: Card layout adapts between mobile (single column) and desktop (grid)

**Verification:**
- Cards render correctly in the dev server at all viewport sizes
- No console errors

---

- U3. **Integrate testimonials section into homepage**

**Goal:** Add the testimonials section to `index.astro` using SectionHeader and the new TestimonialCard component.

**Requirements:** R1, R2, R4

**Dependencies:** U1, U2

**Files:**
- Modify: `src/pages/index.astro`

**Approach:**
- Import `testimonials` from `src/data/testimonials.ts`, `TestimonialCard` from `src/components/TestimonialCard.astro`
- Add a new `<section id="testimonials">` block using `SectionHeader` and a grid of `TestimonialCard` components
- Place between the Services and Projects sections

**Patterns to follow:**
- Section structure in `src/pages/index.astro` — every section follows `SectionHeader` + content grid
- Grid layout classes: `grid grid-cols-1 md:grid-cols-3` consistent with services section

**Test scenarios:**
- Happy path: Three testimonial cards render in the section between Services and Projects
- Responsive: Section renders as single column on mobile, three columns on desktop
- Integration: SectionHeader subheading and title display correctly

**Verification:**
- `npm run build` succeeds
- The homepage at `/` shows the testimonials section with all three entries
- Layout is responsive and consistent with the rest of the page

---

## Risks & Dependencies

| Risk | Mitigation |
|------|------------|
| Visual styling doesn't match site's aesthetic | Follow existing card component patterns (ServiceCard, ProjectCard) closely; use teal/slate palette from global styles |
| Testimonial text may be long and break card layout | Quote text is paragraph-length; use flexible card sizing or consistent truncation approach |

---

## Sources & References

- Related code: `src/components/ServiceCard.astro`, `src/components/ProjectCard.astro`, `src/data/certifications.ts`, `src/pages/index.astro`