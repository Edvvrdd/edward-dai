# CSS Modular Architecture - Documentation

## Overview
The CSS has been refactored from a single 3121-line file into a modular architecture for better maintainability and organization.

## File Structure

### Main Entry Point
- **style.css** (32 lines) - Main stylesheet that imports all modules

### CSS Modules

#### 1. Configuration & Base
- **variables.css** - CSS custom properties (colors, fonts, spacing, transitions)
- **base.css** - Global styles, resets, and foundational elements

#### 2. Layout Components
- **navigation.css** - Header and navigation styles
- **hero.css** - Hero section with rotating text and video carousel

#### 3. UI Components
- **components.css** - Landing section and shared components
- **buttons.css** - All button styles and CTAs
- **cards.css** - Skill cards, feature cards, project cards, testimonial cards, freebie cards

#### 4. Feature Sections
- **carousel.css** - Image and video carousels with navigation
- **testimonials.css** - Testimonials section layout
- **skills.css** - Skills grid and CTA sections
- **tech-banner.css** - Technology icons banner

#### 5. Page-Specific Styles
- **projects.css** - Game projects page (featured projects, personal projects, tech breakdown)
- **blog.css** - Blog listing and full blog post styles
- **freebies.css** - Freebies page with categories and contribute section

#### 6. Responsive Styles
- **responsive.css** - All media queries consolidated (1024px, 968px, 768px, 600px, 480px breakpoints)

## Backup
- **style-backup.css** - Original monolithic CSS file (preserved for reference)

## Import Order
The modules are imported in a specific order to ensure proper cascade:
1. Variables & Configuration
2. Base & Reset Styles
3. Layout Components
4. UI Components
5. Feature Sections
6. Page-Specific Styles
7. Responsive Styles

## HTML Integration
All HTML files continue to use the same import:
```html
<link rel="stylesheet" href="assets/css/style.css">
```

No changes to HTML files are required. The modular structure is transparent to the pages.

## Benefits
- **Maintainability**: Easy to locate and edit specific styles
- **Organization**: Logical grouping of related styles
- **Scalability**: Easy to add new modules or features
- **Performance**: Browser caching of individual modules
- **Collaboration**: Multiple developers can work on different modules

## Affected HTML Files
All 8 HTML files work seamlessly with the new structure:
- index.html
- sound-design.html
- lambyrinth.html
- game-works.html
- freebies.html
- freebies-blog-post.html
- blog.html
- blog-template.html

## Migration Notes
- Original CSS backed up as `style-backup.css`
- All functionality preserved
- Hover effects standardized across components
- No breaking changes

## Color System
- Primary Gold: #d4915d
- Secondary Blue: #5a7fa3
- Dark Background: #0f0f0f
- Card Background: #1a1819
- Text Gray: #656563

## Typography
- Headings: 'Syne', sans-serif
- Body: 'Space Grotesk', sans-serif

## Standard Effects
- Hover Translate: translateY(-2px)
- Hover Scale: scale(1.05)
- Transition: all 0.3s ease
- Border Gradient: linear-gradient(90deg, primary, secondary)
