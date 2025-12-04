# Portfolio Website Analysis

## Hyperlink Issues Identified

### 1. Missing Icons Directory
**Location:** Lines 26, 29, 32 in index.html
**Issue:** References to `icons/linkedin.svg`, `icons/youtube.svg`, and `icons/itchio.svg` but the icons directory does not exist
**Impact:** Social media icons will not display, broken image links

### 2. Placeholder YouTube Link
**Location:** Line 28 in index.html
**Issue:** `https://www.youtube.com/@yourchannel` is a placeholder URL
**Impact:** Incorrect link destination for YouTube social icon

### 3. Placeholder Email Address
**Location:** Line 71 in index.html
**Issue:** `edward@example.com` is a placeholder email
**Impact:** Contact email is not functional

### 4. Placeholder Project Link
**Location:** Line 61 in index.html
**Issue:** `href="#"` is a placeholder link in the Projects section
**Impact:** Project link goes nowhere

## CSS Issues

### 1. Typo in Section Padding
**Location:** Line 44 in style.css
**Issue:** `padding-bottom: 280px 0;` should be `padding: 280px 0;` (padding-bottom doesn't accept two values)
**Impact:** Incorrect spacing between sections

## Dark Mode Implementation Plan

The website currently has:
- Light background: `#fafafa`
- Dark header/footer: `#222`
- Light contact section: `#f0f0f0`

Dark mode will require:
- Dark background for body
- Light text colors
- Adjusted section backgrounds
- Adjusted link colors for better contrast
- Adjusted video border colors
