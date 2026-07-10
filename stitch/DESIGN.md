---
name: Focused Note Pin
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#454654'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#757686'
  outline-variant: '#c5c5d7'
  surface-tint: '#3b4fd2'
  primary: '#2036bd'
  on-primary: '#ffffff'
  primary-container: '#3e52d5'
  on-primary-container: '#d7daff'
  inverse-primary: '#bbc3ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#7e3100'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44200'
  on-tertiary-container: '#ffd3bf'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bbc3ff'
  on-primary-fixed: '#000d60'
  on-primary-fixed-variant: '#1d34ba'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb694'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7a2f00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  body-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-density professional productivity, prioritizing utility, clarity, and cognitive ease. The brand personality is disciplined, reliable, and unobtrusive—acting as a silent partner in the user's workflow rather than a distraction. 

The aesthetic follows a **Modern Corporate** approach with a "Dense but Calm" philosophy. It utilizes a refined grid, subtle borders instead of heavy shadows, and a purposeful use of whitespace to ensure that even data-rich environments feel breathable. The goal is to evoke a sense of focused control, reducing eye strain during long working sessions through low-contrast backgrounds and precise geometric alignments.

## Colors
The palette is anchored by a trustworthy indigo primary color, used sparingly for interactive elements and brand presence. The background uses a soft off-white (`#F1F5F9`) to diminish the harshness of pure white screens, while surfaces and cards use pure white to create a clear "layer" of focus.

Status colors are desaturated to ensure they provide necessary information without breaking the calm atmosphere of the interface. Grays are neutral-cool (slate), maintaining a professional and crisp appearance throughout the data hierarchy.

## Typography
The system uses **Inter** for its exceptional legibility at small sizes and its neutral, systematic character. The type scale is intentionally compact to support a high-density UI. 

- **Weight Usage:** 600 weight is reserved for headers and primary UI actions to provide clear signposting. 500 weight is used for labels to differentiate them from body text.
- **Data Density:** Use `body-md` (13px) as the standard text size for data tables and notes. 
- **Monospace:** For ID tags or technical metadata, use a monospace font to ensure character alignment and distinctiveness.

## Layout & Spacing
This design system utilizes a **Fixed Grid** philosophy for content areas, ensuring predictable reading lines, while sidebars and toolbars remain fluid. 

- **Rhythm:** A strict 4px baseline grid governs all vertical spacing.
- **Density:** Elements are packed efficiently. Margins within cards are generally `16px` (md), while gutters between data columns are `12px` to maximize information density without overlap.
- **Breakpoints:**
    - Mobile (< 768px): Single column, full-width cards, margins reduced to 16px.
    - Desktop (> 1024px): Multi-pane layout with a persistent left-hand navigation and a contextual right-hand inspector.

## Elevation & Depth
Depth is communicated primarily through **Tonal Layers** and **Low-Contrast Outlines** rather than aggressive shadows.

1.  **Level 0 (Background):** The base canvas (`#F1F5F9`).
2.  **Level 1 (Surfaces):** Cards and main content areas using pure white. These feature a 1px border (`#E2E8F0`) and a very soft 2px blur shadow with 5% opacity.
3.  **Level 2 (Popovers/Modals):** Floating elements like dropdowns use a slightly more pronounced shadow (8px blur, 10% opacity) to indicate they are temporary and "above" the workflow.

This approach ensures the UI feels flat and stable, reducing the "visual noise" that comes with multiple shadow directions.

## Shapes
The design system employs **Soft (0.25rem)** roundedness for standard components. This provides a modern, approachable feel while maintaining the structural integrity of a professional tool. 

- **Standard (4px):** Buttons, Input fields, Chips.
- **Large (8px):** Main cards and modal containers.
- **Pill:** Reserved exclusively for status indicators (tags) to distinguish them from interactive buttons.

## Components
- **Buttons:** Primary buttons are solid indigo with white text. Secondary buttons use a subtle gray border and no fill. All buttons feature a 200ms transition on hover, shifting to a slightly darker shade.
- **Data Tables:** Use 1px horizontal dividers only; avoid vertical lines. Headers are `label-sm` (uppercase). Rows use a subtle `neutral-100` background fill on hover to indicate interactivity.
- **Form Fields:** Use a 1px neutral border that transitions to the primary indigo on focus. Validation errors use a soft red border and a small `body-sm` hint text below the field.
- **Metric Cards:** Compact layouts using `headline-md` for the value and `label-md` for the title. Include a small trend indicator (up/down arrow) in status colors.
- **Search & Filter:** Persistent, pinned at the top of data views. Search bars include a trailing "CMD+K" label in `mono` font to emphasize the tool's professional efficiency.
- **Chips:** Small, low-contrast background with dark text. Used for categorization and filtering.