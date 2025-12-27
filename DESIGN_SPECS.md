# 🎨 PORTFOLIO DESIGN SPECIFICATIONS

## Color Palette Reference Card

### Primary Colors
```
Primary Indigo:    #6366f1  rgb(99, 102, 241)
Primary Dark:      #4f46e5  rgb(79, 70, 229)
Primary Light:     #818cf8  rgb(129, 140, 248)
Accent Amber:      #f59e0b  rgb(245, 158, 11)
```

### Light Theme
```
Background Primary:    #ffffff  rgb(255, 255, 255)
Background Secondary:  #f9fafb  rgb(249, 250, 251)
Background Tertiary:   #f3f4f6  rgb(243, 244, 246)
Text Primary:          #1f2937  rgb(31, 41, 55)
Text Secondary:        #6b7280  rgb(107, 114, 128)
Text Tertiary:         #9ca3af  rgb(156, 163, 175)
Border:                #e5e7eb  rgb(229, 231, 235)
```

### Dark Theme
```
Background Primary:    #0f172a  rgb(15, 23, 42)
Background Secondary:  #1e293b  rgb(30, 41, 59)
Background Tertiary:   #334155  rgb(51, 65, 85)
Text Primary:          #f1f5f9  rgb(241, 245, 249)
Text Secondary:        #cbd5e1  rgb(203, 213, 225)
Text Tertiary:         #94a3b8  rgb(148, 163, 184)
Border:                #334155  rgb(51, 65, 85)
```

### Gradients
```
Primary:    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Secondary:  linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
Accent:     linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)
Success:    linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)
```

---

## Typography System

### Font Families
```css
Primary:    'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Secondary:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Font Weights
```
Light:      300
Regular:    400
Medium:     500
Semi-Bold:  600
Bold:       700
Extra-Bold: 800
```

### Font Sizes
```
Hero Title:         4rem    (64px)
Section Title:      2.5rem  (40px)
Large Heading:      2rem    (32px)
Medium Heading:     1.5rem  (24px)
Small Heading:      1.25rem (20px)
Body Large:         1.2rem  (19.2px)
Body:               1rem    (16px)
Body Small:         0.95rem (15.2px)
Caption:            0.85rem (13.6px)
```

### Line Heights
```
Headings:  1.2 - 1.3
Body:      1.6 - 1.8
Captions:  1.4 - 1.5
```

---

## Spacing System

### Base Unit: 4px

```
xs:   8px   (0.5rem)
sm:   12px  (0.75rem)
md:   16px  (1rem)
lg:   24px  (1.5rem)
xl:   32px  (2rem)
2xl:  48px  (3rem)
3xl:  64px  (4rem)
4xl:  96px  (6rem)
5xl:  128px (8rem)
```

### Section Spacing
```
Section Padding:  100px 0  (top/bottom)
Container Max:    1200px
Container Padding: 0 20px
```

---

## Border Radius

```
Small:       8px   (cards, inputs)
Medium:      12px  (cards, modals)
Large:       16px  (featured cards)
Extra Large: 24px  (hero elements)
Full:        9999px (pills, buttons)
```

---

## Shadows

### Light Mode
```css
Small:  0 1px 2px 0 rgba(0, 0, 0, 0.05)
Medium: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
Large:  0 10px 15px -3px rgba(0, 0, 0, 0.1)
XL:     0 20px 25px -5px rgba(0, 0, 0, 0.1)
2XL:    0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

### Dark Mode
```css
Small:  0 1px 2px 0 rgba(0, 0, 0, 0.5)
Medium: 0 4px 6px -1px rgba(0, 0, 0, 0.5)
Large:  0 10px 15px -3px rgba(0, 0, 0, 0.5)
XL:     0 20px 25px -5px rgba(0, 0, 0, 0.5)
2XL:    0 25px 50px -12px rgba(0, 0, 0, 0.7)
```

---

## Animation Timing

```css
Fast:   0.2s ease
Base:   0.3s ease
Slow:   0.5s ease
```

### Common Easing Functions
```
Linear:         cubic-bezier(0, 0, 1, 1)
Ease:           cubic-bezier(0.25, 0.1, 0.25, 1)
Ease-In:        cubic-bezier(0.42, 0, 1, 1)
Ease-Out:       cubic-bezier(0, 0, 0.58, 1)
Ease-In-Out:    cubic-bezier(0.42, 0, 0.58, 1)
```

---

## Breakpoints

```css
Small Mobile:   480px
Mobile:         768px
Tablet:         1024px
Desktop:        1200px
Large Desktop:  1440px
```

### Media Query Usage
```css
/* Mobile First Approach */
@media (max-width: 480px)  { /* Small phones */ }
@media (max-width: 768px)  { /* Tablets */ }
@media (max-width: 1024px) { /* Small laptops */ }
```

---

## Component Specifications

### Buttons

**Primary Button:**
```
Background: gradient-primary
Color: #ffffff
Padding: 14px 30px
Border Radius: 9999px (full)
Font Weight: 600
Shadow: medium
Hover: translateY(-3px) + larger shadow
```

**Secondary Button:**
```
Background: transparent
Border: 2px solid border-color
Color: text-primary
Padding: 14px 30px
Border Radius: 9999px (full)
Font Weight: 600
Hover: bg-secondary + translateY(-3px)
```

### Cards

**Project Card:**
```
Background: bg-primary
Border Radius: 16px
Shadow: medium
Border: 1px solid border-color
Hover: translateY(-10px) + xl shadow
```

**Skill Card:**
```
Background: bg-primary
Padding: 20px
Border Radius: 12px
Border: 1px solid border-color
Hover: translateX(10px) + border-color: primary
```

### Navigation

**Navbar:**
```
Height: ~80px
Background: transparent (glass when scrolled)
Backdrop Filter: blur(10px) when scrolled
Position: fixed
Z-Index: 1000
```

### Forms

**Input Fields:**
```
Padding: 15px 20px
Background: bg-primary
Border: 2px solid border-color
Border Radius: 12px
Focus: border-color: primary + shadow
```

---

## Icon System

### Font Awesome 6
Used throughout the project for:
- Social media icons
- Section icons
- Action icons
- Decorative elements

### Common Icons
```html
<i class="fas fa-envelope"></i>      Email
<i class="fas fa-phone"></i>         Phone
<i class="fab fa-github"></i>        GitHub
<i class="fab fa-linkedin"></i>      LinkedIn
<i class="fab fa-twitter"></i>       Twitter
<i class="fas fa-download"></i>      Download
<i class="fas fa-arrow-right"></i>   Arrow
<i class="fas fa-external-link-alt"></i> External Link
```

---

## Glassmorphism Effect

```css
background: rgba(255, 255, 255, 0.7);  /* Light mode */
background: rgba(30, 41, 59, 0.7);     /* Dark mode */
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.18);
```

---

## Grid Layouts

### Projects Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
gap: 35px;
```

### Skills Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 25px;
```

### Hero Layout
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 60px;
align-items: center;
```

---

## Z-Index Scale

```
Cursor:         10000
Loader:         9999
Back to Top:    999
Modal:          998
Navbar:         1000
Scroll Progress: 1001
```

---

## Accessibility Features

### Color Contrast
- Text on light bg: Minimum 4.5:1 ratio
- Text on dark bg: Minimum 4.5:1 ratio
- All tested with WCAG AA standards

### Focus States
- Visible focus indicators
- 4px outline with offset
- Primary color for focus ring

### ARIA Labels
```html
aria-label="Toggle theme"
aria-label="Toggle menu"
aria-label="Back to top"
```

### Semantic HTML
- Proper heading hierarchy (h1 → h6)
- Section landmarks
- Alt text on all images
- Form labels properly associated

---

## Performance Guidelines

### Image Optimization
```
JPG for photos: Quality 80-85%
PNG for graphics: 8-bit where possible
Max file size: 500KB per image
Use lazy loading: loading="lazy"
```

### CSS
```
Use CSS variables for theming
Minimize use of !important
Avoid deep nesting (max 3 levels)
Group related styles together
```

### JavaScript
```
Defer non-critical scripts
Use event delegation where possible
Debounce scroll events
Minimize DOM manipulation
```

---

## Browser Support

```
✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)
⚠️ IE11 (not supported - modern features used)
```

---

## Testing Checklist

### Visual Testing
- [ ] Colors consistent across pages
- [ ] Typography hierarchy clear
- [ ] Spacing consistent
- [ ] Alignment perfect
- [ ] Images load properly

### Responsive Testing
- [ ] Mobile (375px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1200px+)
- [ ] Landscape orientation

### Functional Testing
- [ ] All links work
- [ ] Forms validate
- [ ] Animations smooth
- [ ] Dark mode toggles
- [ ] Navigation works

### Performance Testing
- [ ] PageSpeed score > 90
- [ ] Load time < 3 seconds
- [ ] Images optimized
- [ ] No console errors

---

## Quick Reference URLs

### Hosted Libraries
```html
<!-- Google Fonts -->
fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700

<!-- Font Awesome 6 -->
cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css

<!-- AOS Animation -->
unpkg.com/aos@2.3.1/dist/aos.css
unpkg.com/aos@2.3.1/dist/aos.js

<!-- Particles.js -->
cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js
```

---

## Design Philosophy

### Principles
1. **Clean & Modern** - Minimal clutter, maximum impact
2. **User-Centric** - Easy to navigate, clear CTAs
3. **Professional** - Polished, attention to detail
4. **Accessible** - Inclusive design for all users
5. **Performant** - Fast loading, smooth interactions

### Visual Hierarchy
1. Hero section grabs attention
2. Clear section divisions
3. Important content emphasized
4. Supporting details subtle
5. CTAs prominent and clear

---

**Use this as your design reference guide!** 🎨

All specifications are implemented in `styles.css` and can be customized to match your personal brand.
