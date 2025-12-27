# 🎨 CUSTOMIZATION GUIDE

This comprehensive guide will help you personalize your portfolio website to make it uniquely yours.

## 📝 Content Customization

### 1. Personal Information (index.html)

#### Update Your Name
Find and replace "Harsha P" with your name throughout the HTML file.

**Location**: Lines with your name
```html
<h1 class="hero-title">
    <span class="gradient-text">Your Name Here</span>
</h1>
```

#### Update Professional Titles
Find the typing effect roles:
```javascript
// In script.js, line ~180
const roles = [
    'Your Title 1',
    'Your Title 2',
    'Your Title 3',
    'Your Title 4',
    'Your Title 5'
];
```

#### Update Tagline
```html
<p class="hero-description">
    Your unique value proposition here
</p>
```

---

### 2. About Section

#### Professional Summary
Replace the paragraphs in the About section with your own story:

```html
<p class="about-description">
    Write about your background, passion for technology, 
    and what drives you as a developer...
</p>
```

**What to include**:
- Your background and journey
- What you're passionate about
- Your approach to development
- What makes you unique
- Your career goals

#### Update Statistics
```html
<div class="stat-number" data-target="15">0</div>
<div class="stat-label">Projects</div>
```
Change `data-target="15"` to your actual number of projects.

---

### 3. Skills Section

#### Add/Remove Skills
Each skill card follows this structure:

```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-python"></i> <!-- Change icon -->
    </div>
    <div class="skill-info">
        <h4>Python</h4> <!-- Change skill name -->
        <div class="skill-bar">
            <div class="skill-progress" style="--progress: 90%"></div>
            <!-- Change percentage -->
        </div>
    </div>
</div>
```

**To add a new skill category**:
1. Copy an entire `skill-category` div
2. Update the category header
3. Add your skills inside

**Icon Resources**:
- Font Awesome: https://fontawesome.com/icons
- Dev Icons: https://devicon.dev/

---

### 4. Projects Section

#### Update Project Details

For each project, customize:

```html
<div class="project-card" data-category="web ml" data-aos="fade-up">
    <div class="project-image">
        <img src="assets/your-project.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <!-- Live Demo Link -->
                <a href="https://your-demo.com" target="_blank">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <!-- GitHub Link -->
                <a href="https://github.com/you/project" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Describe what your project does, its key features, 
            and the problem it solves...
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <!-- Add all relevant technologies -->
        </div>
    </div>
</div>
```

**Project Categories** (for filtering):
- `web` - Web Development
- `ml` - Machine Learning
- `fullstack` - Full-Stack projects
- Add custom categories as needed

---

### 5. Experience Section

#### Update Work Experience

```html
<div class="timeline-item" data-aos="fade-right">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <div class="timeline-title-group">
                <h3 class="timeline-title">Your Job Title</h3>
                <p class="timeline-company">Company Name</p>
            </div>
            <span class="timeline-date">
                <i class="fas fa-calendar-alt"></i>
                Start Date - End Date
            </span>
        </div>
        <ul class="timeline-description">
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
            <li>Achievement or responsibility 3</li>
            <li>Achievement or responsibility 4</li>
        </ul>
        <div class="timeline-tech">
            <span class="tech-badge">Technology 1</span>
            <span class="tech-badge">Technology 2</span>
        </div>
    </div>
</div>
```

**Tips for descriptions**:
- Start with action verbs
- Quantify achievements (numbers, percentages)
- Focus on impact and results
- Keep it concise and relevant

---

### 6. Education Section

```html
<h3 class="education-degree">Your Degree Name</h3>
<p class="education-institution">
    <i class="fas fa-university"></i>
    Your University/College Name
</p>
<p class="education-duration">
    <i class="fas fa-calendar-alt"></i>
    Start Year - End Year
</p>
<p class="education-grade">
    <i class="fas fa-star"></i>
    GPA: X.X/10 or Your Grade
</p>
```

Update the coursework list with your relevant courses.

---

### 7. Achievements Section

#### Add Your Certifications

```html
<div class="achievement-item">
    <div class="achievement-badge">
        <i class="fas fa-award"></i>
    </div>
    <div class="achievement-content">
        <h4>Certification Name</h4>
        <p>Issuing Organization - Year</p>
    </div>
</div>
```

#### Add Hackathons/Competitions

```html
<div class="achievement-item">
    <div class="achievement-badge trophy"> <!-- or 'silver' or 'star' -->
        <i class="fas fa-trophy"></i>
    </div>
    <div class="achievement-content">
        <h4>Competition Name - Position</h4>
        <p>Brief description of achievement</p>
    </div>
</div>
```

---

### 8. Testimonials Section

#### Update Testimonials

```html
<div class="testimonial-card" data-aos="fade-up">
    <div class="testimonial-header">
        <img src="assets/person.jpg" alt="Person Name">
        <div class="testimonial-info">
            <h4 class="testimonial-name">Person's Name</h4>
            <p class="testimonial-position">Their Position, Company</p>
        </div>
    </div>
    <div class="testimonial-rating">
        <!-- 5 stars (remove <i> tags for less stars) -->
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">
        "The testimonial text goes here..."
    </p>
</div>
```

---

### 9. Contact Information

#### Update Contact Details

```html
<!-- Email -->
<a href="mailto:your.email@example.com">your.email@example.com</a>

<!-- Phone -->
<a href="tel:+1234567890">+1 (234) 567-890</a>

<!-- Location -->
<p>Your City, State, Country</p>
```

#### Update Social Media Links

Find all social links and update:

```html
<!-- GitHub -->
<a href="https://github.com/yourusername" target="_blank">

<!-- LinkedIn -->
<a href="https://linkedin.com/in/yourusername" target="_blank">

<!-- Twitter -->
<a href="https://twitter.com/yourusername" target="_blank">

<!-- Instagram (optional) -->
<a href="https://instagram.com/yourusername" target="_blank">
```

---

## 🎨 Visual Customization

### Change Color Scheme

Edit CSS variables in `styles.css`:

```css
:root {
  /* Primary Brand Color */
  --primary-color: #6366f1;      /* Change to your brand color */
  --primary-dark: #4f46e5;       /* Darker shade */
  --primary-light: #818cf8;      /* Lighter shade */
  --accent-color: #f59e0b;       /* Accent/highlight color */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Update with your colors */
}
```

**Helpful Tools**:
- Coolors.co - Color palette generator
- ColorHunt.co - Color inspiration
- Adobe Color - Advanced color tool
- Gradient generators - UIGradients.com

### Change Fonts

```css
:root {
  --font-primary: 'Your-Font-Name', sans-serif;
  --font-secondary: 'Another-Font', sans-serif;
}
```

**Popular Font Combinations**:
- Montserrat + Open Sans
- Raleway + Lato
- Playfair Display + Source Sans Pro
- Roboto + Roboto Slab

Update Google Fonts import in HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;600;700&display=swap" rel="stylesheet">
```

---

## 🔧 Feature Customization

### Add a Blog Section

1. Create a new section after Projects:

```html
<section id="blog" class="blog">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Latest Articles</span>
            <h2 class="section-title">Blog</h2>
            <div class="section-divider"></div>
        </div>
        
        <div class="blog-grid">
            <!-- Blog post cards here -->
        </div>
    </div>
</section>
```

2. Add corresponding CSS and JavaScript

### Customize Particles.js

In `script.js`, find the `initializeParticles` function:

```javascript
particlesJS('particles-js', {
  particles: {
    number: {
      value: 80,              // Number of particles
      density: {
        enable: true,
        value_area: 800       // Density
      }
    },
    color: {
      value: '#6366f1'        // Particle color
    },
    // ... more options
  }
});
```

**Experiment with**:
- Particle count
- Colors
- Connection distance
- Movement speed
- Particle shapes

---

## 📱 Responsive Adjustments

### Modify Breakpoints

In `styles.css`, adjust media queries:

```css
/* Tablet */
@media (max-width: 1024px) {
  /* Your tablet styles */
}

/* Mobile */
@media (max-width: 768px) {
  /* Your mobile styles */
}

/* Small Mobile */
@media (max-width: 480px) {
  /* Your small mobile styles */
}
```

---

## 🚀 Advanced Customizations

### Add Google Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Add Custom Domain

After deploying to GitHub Pages/Netlify:
1. Buy a domain (Namecheap, GoDaddy, Google Domains)
2. Configure DNS settings
3. Add CNAME file to repository (for GitHub Pages)
4. Or use Netlify's domain settings

### Enable PWA Features

Add a `manifest.json`:

```json
{
  "name": "Your Name - Portfolio",
  "short_name": "Portfolio",
  "description": "Professional Portfolio Website",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#6366f1",
  "icons": [
    {
      "src": "/assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

Link in HTML:
```html
<link rel="manifest" href="/manifest.json">
```

---

## ✅ Pre-Launch Checklist

Before making your portfolio live:

- [ ] Updated all personal information
- [ ] Added all your projects with descriptions
- [ ] Updated skills and technologies
- [ ] Added work experience and education
- [ ] Uploaded all images to assets folder
- [ ] Updated social media links
- [ ] Tested contact form
- [ ] Customized colors to match personal brand
- [ ] Proofread all content
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Optimized all images
- [ ] Added Google Analytics (optional)
- [ ] Created custom favicon
- [ ] Updated README.md
- [ ] Tested all external links
- [ ] Verified resume PDF works
- [ ] Checked page load speed
- [ ] Validated HTML/CSS
- [ ] Tested dark/light mode

---

## 💡 Best Practices

1. **Keep It Updated**: Regularly add new projects and skills
2. **Professional Photos**: Use high-quality, professional images
3. **Proofread**: No typos or grammatical errors
4. **Performance**: Keep page load time under 3 seconds
5. **Mobile First**: Most visitors use mobile devices
6. **Accessibility**: Use proper alt text and ARIA labels
7. **SEO**: Optimize meta tags and descriptions
8. **Consistent Branding**: Use consistent colors and style
9. **Clear CTAs**: Make it easy for people to contact you
10. **Analytics**: Track visitors and improve based on data

---

## 🆘 Common Issues & Solutions

### Issue: Images not loading
**Solution**: Check file paths are correct and images are in `assets/` folder

### Issue: Animations not working
**Solution**: Ensure AOS library is loaded and initialized

### Issue: Contact form not submitting
**Solution**: Check console for errors, ensure form validation is correct

### Issue: Dark mode not working
**Solution**: Verify theme toggle JavaScript is running

### Issue: Mobile menu not opening
**Solution**: Check hamburger menu JavaScript and CSS

---

## 📚 Additional Resources

- **HTML/CSS**: MDN Web Docs, CSS-Tricks
- **JavaScript**: JavaScript.info, MDN
- **Design Inspiration**: Dribbble, Behance, Awwwards
- **Icons**: Font Awesome, Heroicons, Feather Icons
- **Colors**: Coolors.co, Adobe Color
- **Fonts**: Google Fonts, Adobe Fonts
- **Animations**: Animate.css, GSAP Documentation
- **Deployment**: Netlify Docs, Vercel Docs, GitHub Pages Guide

---

**Happy customizing! Make it uniquely yours! 🎨✨**

If you need help with any customization, feel free to reach out or check the documentation.
