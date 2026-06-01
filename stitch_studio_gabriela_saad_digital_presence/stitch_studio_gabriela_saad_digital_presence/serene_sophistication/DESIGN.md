---
name: Serene Sophistication
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#43474b'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#73777c'
  outline-variant: '#c3c7cb'
  surface-tint: '#4e616e'
  primary: '#435663'
  on-primary: '#ffffff'
  primary-container: '#5b6e7c'
  on-primary-container: '#def0ff'
  inverse-primary: '#b5c9d9'
  secondary: '#615e58'
  on-secondary: '#ffffff'
  secondary-container: '#e7e2da'
  on-secondary-container: '#67645e'
  tertiary: '#664f3e'
  on-tertiary: '#ffffff'
  tertiary-container: '#806755'
  on-tertiary-container: '#ffebde'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d1e5f5'
  primary-fixed-dim: '#b5c9d9'
  on-primary-fixed: '#091e29'
  on-primary-fixed-variant: '#364956'
  secondary-fixed: '#e7e2da'
  secondary-fixed-dim: '#cac6be'
  on-secondary-fixed: '#1d1c17'
  on-secondary-fixed-variant: '#494741'
  tertiary-fixed: '#fedcc6'
  tertiary-fixed-dim: '#e0c0ab'
  on-tertiary-fixed: '#29180a'
  on-tertiary-fixed-variant: '#584232'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-italic:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
  headline-md:
    fontFamily: Archivo Narrow
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: 0.1em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Archivo Narrow
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
  display-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
  stack-2xl: 128px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
---

## Brand & Style
The design system for Studio Gabriela Saad is rooted in an **Editorial Wellness** aesthetic. It targets a high-end audience seeking a balance between athletic precision and mindful luxury. The brand personality is serene, authoritative, and deeply feminine without being cliché.

The visual style follows a **Modern Minimalist** approach with **High-Fashion Editorial** influences. This is achieved through a deliberate use of expansive whitespace, high-contrast typography pairings, and a rhythmic layout that mimics a luxury print magazine. The interface should feel like an invitation to a sanctuary—organized, breathable, and premium.

## Colors
This design system utilizes a sophisticated, low-saturation palette to evoke calm and exclusivity.

- **Primary (Slate Blue):** Used for instructional text, iconography, and primary brand moments. It conveys stability and professionalism.
- **Secondary (Creme):** The foundational surface color. Use this for large sections and backgrounds to provide a softer, warmer feel than pure white.
- **Tertiary (Rose Quartz):** An accent for interactive elements, highlights, and subtle notifications. It adds a touch of softness and warmth.
- **Neutral (White):** Used for high-clarity containers, cards, and negative space to maintain the "editorial" breathability.
- **Accent (Charcoal):** Reserved for high-impact headlines and primary calls to action to provide grounding and authority.

## Typography
The typographic hierarchy is the core of the editorial feel. 

1.  **The Mix:** Headlines should frequently mix `headline-md` (Sans-serif caps) and `display-lg-italic` (Serif italic) within the same block to create visual interest and emphasize key emotional words.
2.  **Display:** Use **Playfair Display** for large-scale emotional statements. Italicize key verbs or brand values.
3.  **Secondary Headlines:** Use **Archivo Narrow** in All Caps with generous letter-spacing for categorization and navigation.
4.  **Body:** **Plus Jakarta Sans** provides a contemporary, clean, and highly legible experience for long-form content and descriptions.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop with significant side margins to create a "contained" luxury feel.

- **Desktop:** 12-column grid, 1200px max-width, 80px side margins. Use asymmetrical layouts where images bleed off one side or are centered with significant whitespace.
- **Mobile:** Single column with 20px side margins.
- **Rhythm:** Use `stack-2xl` (128px) to separate major sections. This "over-spacing" is intentional to reinforce the premium, unhurried nature of the brand.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Thin Outlines** rather than heavy shadows.

- **Surface Strategy:** Use the `secondary` (Creme) color as the base page color, with `neutral` (White) used for cards or containers that need to "float" above the background.
- **Fine Lines:** Use 1px solid lines in `primary` (Slate Blue) at 20% opacity to separate sections or define grid boundaries.
- **Soft Shadows:** If depth is required for interactive elements (like modals), use a single, highly diffused shadow: `0 20px 40px rgba(44, 44, 44, 0.05)`.

## Shapes
Shapes are disciplined and architectural. 
- **Corners:** Use **Soft (0.25rem)** roundedness for buttons and inputs. This provides a gentle touch while maintaining a clean, professional edge.
- **Imagery:** Photos should remain sharp-edged (0px radius) to maintain the editorial magazine aesthetic.
- **Interactive Elements:** Use chevrons (`>>`) for links and "Next" actions to imply forward motion and elegance.

## Components

### Buttons
- **Primary:** Solid `accent` (Charcoal) background with `neutral` (White) text. `label-caps` typography.
- **Secondary:** Transparent background with a 1px `primary` (Slate Blue) border.
- **Tertiary/Link:** Text-only with a thin underline and a trailing chevron (`>>`).

### Input Fields
- Underline style (bottom border only) is preferred over boxed inputs to maintain a minimalist feel. 
- Placeholder text should be in `body-md` using a lightened version of the `primary` color.

### Cards
- Use white backgrounds against the creme page surface. 
- No borders or heavy shadows; use the contrast between white and creme to define the boundary.
- Content inside cards should be center-aligned for a gallery feel.

### Lists & Navigation
- Navigation items should use `label-caps` with 0.15em letter spacing.
- Use thin horizontal lines to separate list items in a schedule or pricing table.

### Imagery
- Focus on high-contrast, professional photography of the studio space and pilates movements. 
- Implement a "parallax" effect on large hero images to add a sense of luxury and depth.