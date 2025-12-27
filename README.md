# 🌟 Harsha P - Modern Portfolio Website

> A stunning, fully responsive portfolio website showcasing skills, projects, and professional journey.

![Portfolio Preview](assets/preview.png)

## ✨ Features

### 🎨 Design Excellence
- **Modern & Premium UI** - Clean, professional design that stands out
- **Dark/Light Mode Toggle** - Seamless theme switching with smooth transitions
- **Glassmorphism Effects** - Elegant frosted glass aesthetics
- **Smooth Animations** - Micro-interactions and scroll-based reveals
- **Gradient Accents** - Beautiful color gradients throughout
- **Custom Cursor** - Interactive cursor with smooth animations (desktop)

### 📱 Fully Responsive
- **Mobile-First Design** - Optimized for all screen sizes
- **Tablet Support** - Perfect layout on iPad and tablets
- **Desktop Enhanced** - Advanced features for larger screens
- **Touch-Friendly** - Optimized for touch interactions

### 🚀 Performance Optimized
- **Fast Loading** - Optimized assets and lazy loading
- **Smooth Scrolling** - 60fps scroll performance
- **SEO Ready** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant with proper ARIA labels

### 🎯 Key Sections
1. **Hero Section** - Eye-catching introduction with animated background
2. **About Me** - Professional summary with animated statistics
3. **Skills** - Categorized skill sets with progress indicators
4. **Projects** - Filterable project showcase with live demos
5. **Experience** - Timeline-based career journey
6. **Education** - Academic background
7. **Achievements** - Certifications, awards, and recognitions
8. **Testimonials** - Client and colleague feedback
9. **Contact** - Working contact form with validation
10. **Footer** - Social links and additional navigation

## 🎨 Design System

### Color Palette

#### Primary Colors
```css
Primary: #6366f1 (Indigo)
Primary Dark: #4f46e5
Primary Light: #818cf8
Accent: #f59e0b (Amber)
```

#### Light Mode
```css
Background Primary: #ffffff
Background Secondary: #f9fafb
Background Tertiary: #f3f4f6
Text Primary: #1f2937
Text Secondary: #6b7280
Border: #e5e7eb
```

#### Dark Mode
```css
Background Primary: #0f172a
Background Secondary: #1e293b
Background Tertiary: #334155
Text Primary: #f1f5f9
Text Secondary: #cbd5e1
Border: #334155
```

### Gradients
```css
Primary Gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
Secondary Gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
Accent Gradient: linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)
Success Gradient: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)
```

### Typography

**Primary Font**: Poppins
- Headings: 700-800 weight
- Body: 400-500 weight
- Small text: 300-400 weight

**Secondary Font**: Inter
- Used for body text and descriptions

**Font Sizes**:
- Hero Title: 4rem (64px)
- Section Titles: 2.5rem (40px)
- Subheadings: 1.5-2rem (24-32px)
- Body: 1rem (16px)
- Small: 0.9rem (14px)

### Spacing Scale
```css
xs: 8px
sm: 12px
md: 16px
lg: 24px
xl: 32px
2xl: 48px
3xl: 64px
```

### Border Radius
```css
Small: 8px
Medium: 12px
Large: 16px
Extra Large: 24px
Full: 9999px (pill shape)
```

## 📁 Project Structure

```
harsha-portfolio/
│
├── index.html              # Main HTML file
├── styles.css              # All CSS styles
├── script.js              # JavaScript functionality
├── README.md              # This file
│
├── assets/                # Assets folder
│   ├── favicon.svg        # Website favicon
│   ├── profile.jpg        # Profile picture for hero
│   ├── about-img.jpg      # About section image
│   ├── project1.jpg       # Project screenshots
│   ├── project2.jpg
│   ├── project3.jpg
│   ├── project4.jpg
│   ├── project5.jpg
│   ├── project6.jpg
│   ├── testimonial1.jpg   # Testimonial avatars
│   ├── testimonial2.jpg
│   ├── testimonial3.jpg
│   ├── Harsha_P_Resume.pdf # Resume PDF
│   └── preview.png        # Portfolio preview image
```

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Variables
- **JavaScript (ES6+)** - Vanilla JS for interactivity

### Libraries & Tools
- **Particles.js** - Animated background particles
- **AOS (Animate On Scroll)** - Scroll-based animations
- **Font Awesome 6** - Icon library
- **Google Fonts** - Poppins & Inter fonts

### Hosting Options
- GitHub Pages (Free)
- Netlify (Recommended)
- Vercel
- Firebase Hosting
- Any static hosting service

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Text editor (VS Code recommended)
- Git (optional)

### Installation

1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/harshap/portfolio.git
   cd portfolio
   ```

2. **Add Your Images**
   Place your images in the `assets/` folder:
   - `profile.jpg` - Your professional headshot (square, 800x800px recommended)
   - `about-img.jpg` - Another professional photo (landscape, 1200x800px)
   - `project1-6.jpg` - Project screenshots (1200x800px)
   - `testimonial1-3.jpg` - Testimonial avatars (200x200px)
   - `favicon.svg` - Your favicon
   - `Harsha_P_Resume.pdf` - Your resume PDF

3. **Customize Content**
   
   **Update Personal Information** in `index.html`:
   - Name and title
   - Professional summary
   - Skills and technologies
   - Project details (titles, descriptions, links)
   - Experience and education
   - Contact information
   - Social media links

   **Update Theme Colors** in `styles.css`:
   - Modify CSS variables in `:root` for custom colors
   - Adjust gradients to match your brand

4. **Test Locally**
   
   Simply open `index.html` in your browser, or use a local server:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server
   ```
   
   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## 📝 Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary-color: #6366f1;     /* Your brand color */
  --primary-dark: #4f46e5;
  --primary-light: #818cf8;
  --accent-color: #f59e0b;
  
  /* Update gradients */
  --gradient-primary: linear-gradient(135deg, #your-color1, #your-color2);
}
```

### Adding Projects

Add a new project card in the Projects section:

```html
<div class="project-card" data-category="web" data-aos="fade-up">
  <div class="project-image">
    <img src="assets/your-project.jpg" alt="Project Name">
    <div class="project-overlay">
      <div class="project-links">
        <a href="https://demo.com" target="_blank" class="project-link">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="https://github.com/..." target="_blank" class="project-link">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Description...</p>
    <div class="project-tech">
      <span class="tech-tag">React</span>
      <span class="tech-tag">Node.js</span>
    </div>
  </div>
</div>
```

### Updating Contact Form

The contact form currently logs to console. To connect to a backend:

**Option 1: FormSpree (Easiest)**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

**Option 2: Custom Backend**
Update in `script.js`:
```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
});
```

**Option 3: Netlify Forms**
Add `data-netlify="true"` to form tag:
```html
<form data-netlify="true" id="contact-form">
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/harshap/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "main" branch as source
   - Click Save
   - Your site will be live at: `https://harshap.github.io/portfolio/`

### Deploy to Netlify (Recommended)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag & drop** your project folder
3. **Done!** Your site is live

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import your GitHub repository**
3. **Deploy** with one click
4. **Done!** Your site is live

## 📊 SEO Optimization

### Meta Tags
Already included in `index.html`:
- Title and description
- Open Graph tags for social sharing
- Author and keywords

### Improve SEO Further:
1. **Add sitemap.xml**
2. **Add robots.txt**
3. **Optimize images** (WebP format, compressed)
4. **Add alt text** to all images
5. **Use semantic HTML** (already implemented)
6. **Submit to Google Search Console**

## 🎯 Performance Tips

### Image Optimization
```bash
# Compress images using online tools:
- TinyPNG (https://tinypng.com)
- Squoosh (https://squoosh.app)
- ImageOptim (Mac)
```

### Lazy Loading
Images are already set up for lazy loading. For additional images, use:
```html
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy">
```

### Minify Assets (Production)
```bash
# CSS
npx clean-css-cli styles.css -o styles.min.css

# JavaScript
npx terser script.js -o script.min.js --compress --mangle
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Testing Checklist

- [ ] Test on mobile devices (iPhone, Android)
- [ ] Test on tablets (iPad, Android tablets)
- [ ] Test on different desktop browsers
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Check dark/light mode toggle
- [ ] Verify responsive images
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Verify accessibility (WAVE tool)

## 🎨 Assets Needed

Before going live, prepare these assets:

### Images
- **Profile Photo**: Professional headshot, square (800x800px), high quality
- **About Image**: Another professional photo (1200x800px)
- **Project Screenshots**: 6 images (1200x800px each)
- **Testimonial Photos**: 3 images (200x200px each)
- **Favicon**: SVG or PNG (32x32px minimum)

### Documents
- **Resume**: Updated PDF file
- **Portfolio Preview**: Screenshot for README (1920x1080px)

### Content
- **Bio**: Professional summary (100-150 words)
- **Skills**: List of technologies and proficiency levels
- **Projects**: Descriptions, tech stacks, links
- **Experience**: Job titles, companies, dates, responsibilities
- **Achievements**: Certifications, awards, competitions

## 🤝 Contributing

This is a personal portfolio template. Feel free to:
- Fork this repository
- Customize for your own use
- Share with others
- Report issues or suggest improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Tips for Success

1. **Keep Content Updated** - Regularly update projects and skills
2. **Professional Photos** - Use high-quality, professional images
3. **Proofread Everything** - Check for typos and grammar
4. **Test Thoroughly** - Ensure all features work perfectly
5. **Get Feedback** - Ask friends/colleagues to review
6. **Track Analytics** - Use Google Analytics to monitor visitors
7. **Stay Active** - Link to active GitHub, LinkedIn profiles
8. **Mobile First** - Most visitors will be on mobile
9. **Load Speed Matters** - Keep it fast (< 3 seconds)
10. **Be Authentic** - Let your personality shine through

## 📞 Support

If you need help customizing this portfolio:
- Create an issue on GitHub
- Reach out via email
- Check documentation thoroughly first

## 🌟 Showcase

If you use this template for your portfolio, I'd love to see it! Share it with me:
- Email: harsha@example.com
- Twitter: @harshap
- LinkedIn: linkedin.com/in/harshap

## 🔮 Future Enhancements

Planned features for future versions:
- [ ] Blog section with Markdown support
- [ ] Admin panel for easy content updates
- [ ] Multi-language support
- [ ] Advanced animations with GSAP
- [ ] Integration with CMS (Contentful, Strapi)
- [ ] PWA (Progressive Web App) support
- [ ] Analytics dashboard
- [ ] Newsletter subscription

## 🙏 Acknowledgments

- **Particles.js** - Marc Bruederlin
- **AOS Library** - Michał Sajnóg
- **Font Awesome** - Fonticons, Inc.
- **Google Fonts** - Google
- **Design Inspiration** - Various modern portfolio websites

---

**Built with ❤️ by Harsha P**

⭐ If you found this helpful, please star the repository!

🚀 Happy coding and best of luck with your portfolio!
