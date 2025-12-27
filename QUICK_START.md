# 🚀 QUICK START GUIDE

Get your portfolio website up and running in **15 minutes**!

## ⚡ Fast Track Setup

### Step 1: Prepare Your Content (5 minutes)

Open `index.html` and replace these key items:

1. **Your Name** (Line ~50)
   ```html
   <span class="gradient-text">YOUR NAME</span>
   ```

2. **Professional Titles** in `script.js` (Line ~180)
   ```javascript
   const roles = [
       'Your Title 1',
       'Your Title 2',
       'Your Title 3'
   ];
   ```

3. **Email Address** (Multiple locations)
   - Search for: `harsha@example.com`
   - Replace with: Your actual email

4. **Social Media Links** (Search for these and update)
   - GitHub: `https://github.com/yourusername`
   - LinkedIn: `https://linkedin.com/in/yourusername`
   - Twitter: `https://twitter.com/yourusername`

---

### Step 2: Add Your Images (5 minutes)

**Minimum Required Images:**

1. **Profile Photo** → Save as `assets/profile.jpg` (800x800px)
2. **Resume PDF** → Save as `assets/Harsha_P_Resume.pdf`

**Quick Placeholder Option:**
If you don't have images ready, use these temporary placeholders:

```html
<!-- Replace image src in index.html -->
<img src="https://ui-avatars.com/api/?name=Your+Name&size=800" alt="Your Name">
```

For project images, use:
```html
<img src="https://placehold.co/1200x800/6366f1/white?text=Project+1" alt="Project">
```

---

### Step 3: Test Locally (2 minutes)

**Option A: Direct Open**
- Simply double-click `index.html` in your file explorer
- Opens in your default browser

**Option B: Live Server (Recommended)**
- If using VS Code:
  1. Install "Live Server" extension
  2. Right-click `index.html`
  3. Select "Open with Live Server"

**Option C: Python Server**
```bash
cd harsha-portfolio
python -m http.server 8000
# Visit: http://localhost:8000
```

---

### Step 4: Deploy (3 minutes)

#### Option A: Netlify Drag & Drop (Easiest)

1. Go to [netlify.com](https://netlify.com)
2. Sign up (free)
3. Drag & drop your entire `harsha-portfolio` folder
4. Done! Your site is live

#### Option B: GitHub Pages

```bash
# In your project folder
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main

# Then enable GitHub Pages in repository settings
```

---

## 📋 Essential Customizations

### Update These ASAP:

1. **About Section**
   - Write 2-3 paragraphs about yourself
   - Update statistics (projects, certifications, years)

2. **Skills Section**
   - List your actual programming languages
   - Update skill percentages realistically

3. **Projects Section**
   - Add 3-6 of your best projects
   - Include GitHub and live demo links
   - Write clear project descriptions

4. **Experience Section**
   - Add your internships/jobs
   - Include key achievements
   - Mention technologies used

5. **Contact Form**
   - Test that form submission works
   - Consider connecting to FormSpree:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🎨 Quick Color Change

To quickly change the entire color scheme:

1. Open `styles.css`
2. Find line ~4 (CSS Variables)
3. Change this one line:
   ```css
   --primary-color: #YOUR_COLOR_HERE;
   ```

**Recommended Colors:**
- Blue: `#3b82f6`
- Purple: `#8b5cf6`
- Green: `#10b981`
- Orange: `#f59e0b`
- Red: `#ef4444`
- Pink: `#ec4899`

---

## ✅ 5-Minute Checklist

Before launching, verify:

- [ ] Name is correct everywhere
- [ ] Email address is updated
- [ ] Social media links work
- [ ] Profile photo is showing
- [ ] At least 3 projects added
- [ ] Resume PDF is downloadable
- [ ] Contact form works (or is connected)
- [ ] Mobile view looks good
- [ ] No "Lorem ipsum" placeholder text
- [ ] All external links open in new tab

---

## 🆘 Quick Troubleshooting

**Problem: Images not showing**
- Check files are in `assets/` folder
- Verify file names match exactly (case-sensitive)
- Check file paths in HTML

**Problem: Colors look wrong**
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is loading
- Verify no typos in color codes

**Problem: Form not working**
- Check console for errors (F12)
- Connect to FormSpree or similar service
- Or just link to your email: `mailto:your@email.com`

**Problem: Layout broken on mobile**
- Clear cache
- Check viewport meta tag is in HTML
- Test in Chrome DevTools mobile view

---

## 🎯 Next Steps (After Launch)

### Week 1:
- [ ] Get feedback from 3 people
- [ ] Add Google Analytics
- [ ] Share on LinkedIn
- [ ] Add to resume

### Week 2:
- [ ] Add more projects
- [ ] Get testimonials
- [ ] Optimize images further
- [ ] Check SEO score (PageSpeed Insights)

### Ongoing:
- [ ] Update with new projects monthly
- [ ] Keep skills current
- [ ] Add blog posts (optional)
- [ ] Monitor analytics

---

## 📱 Share Your Portfolio

Once live, share it on:

- ✅ LinkedIn (Add to "Featured" section)
- ✅ Resume (Include link)
- ✅ Email signature
- ✅ GitHub profile README
- ✅ Twitter/X bio
- ✅ Instagram bio (if relevant)
- ✅ Job applications
- ✅ Networking events

---

## 💡 Pro Tips

1. **Mobile First**: 70% of visitors will be on mobile
2. **Load Speed**: Keep under 3 seconds (test at PageSpeed Insights)
3. **Update Regularly**: Add new projects every month
4. **Real Content**: No "Lorem Ipsum" - use your actual work
5. **Professional Photos**: Quality matters - use good lighting
6. **Proofread**: No typos - they hurt credibility
7. **Test Everything**: Click every link, test every form
8. **Analytics**: Add Google Analytics to track visitors
9. **Feedback**: Ask 5 people to review before public launch
10. **Backup**: Keep a copy of your customized version

---

## 🎓 Learning Resources

**If you want to customize further:**

- HTML/CSS Basics: [freeCodeCamp.org](https://freecodecamp.org)
- JavaScript: [javascript.info](https://javascript.info)
- Web Design: [Refactoring UI](https://refactoringui.com)
- Color Theory: [Coolors.co](https://coolors.co)

---

## 🎉 You're Ready!

Your portfolio is a living document - it will evolve as you grow. 

**Remember:**
- Imperfect action > Perfect inaction
- Launch now, improve later
- Your work speaks louder than the design
- Keep it updated and authentic

---

## 📞 Need Help?

- Check `CUSTOMIZATION_GUIDE.md` for detailed instructions
- Review `ASSETS_GUIDE.md` for image requirements
- Read `README.md` for full documentation
- Search online: "how to [your question] html css"
- Ask AI assistants for code help

---

**Ready to launch? Let's go! 🚀**

Your portfolio will be a powerful tool in your career journey. Make it count!

Good luck! 🌟
