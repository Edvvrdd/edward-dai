# Portfolio Site Updates - Darker Theme & Hover Animation Fixes

## Changes Made

### 1. Darker Color Scheme
Updated the overall site to use a much darker color palette:

- **Main background**: Changed from `#1d1d1d` to `#0f0f0f` (much darker)
- **Header background**: Changed from `#29272c` to `#1a1819` (darker)
- **Card backgrounds**: Changed from `#3c3231` to `#2a2221` (darker)
- **Section backgrounds**: Changed from `#29272c` to `#1a1819` (darker)
- **Border colors**: Changed from `#393836` to `#2a2829` (darker)

### 2. Fixed Hover Animation Issues
Fixed the hover animation bar that was appearing on top of card edges:

**Problem**: The `::before` pseudo-elements had `z-index: 10`, causing the gradient bar to appear above the card borders instead of being clipped within them.

**Solution**: 
- Changed `z-index` from `10` to `1` on all hover bars
- Added `overflow: hidden` to parent containers where missing
- Added `border-radius: 12px 12px 0 0` to ensure proper clipping
- Applied to:
  - `.carousel-card::before` (Featured Projects carousel)
  - `.testimonial-card::before` (Testimonials section)
  - `.project-card::before` (in both style.css and game-projects-styles.css)

### Files Modified
1. `/home/ubuntu/edward-dai/style.css` - Main stylesheet
2. `/home/ubuntu/edward-dai/game-projects-styles.css` - Game projects page styles

## Visual Impact
- Site now has a much more dramatic, darker appearance
- Hover animations now properly clip within card boundaries
- Cards maintain clean, professional edges during hover states
- Overall aesthetic is more refined and polished
