# 🍲 168 Curry Chicken (168 咖喱鸡) - Official Website

A modern, high-converting responsive website for **168 Curry Chicken**, the famous Singapore hawker stall located at **Old Airport Road Food Centre #01-76**.

---

## 🌟 Key Features

1. **Gourmet Singapore Hawker Design**: Dark ambient theme with rich curry gold and chili red accents, smooth glassmorphism cards, and high-resolution food visuals.
2. **Live Singapore Time (SGT) Opening Indicator**: Dynamically calculates whether Stall #01-76 is currently Open or Closed (Mon-Fri 10:30 AM–7 PM, Sat-Sun 11:30 AM–7 PM).
3. **Interactive Menu Filter**: Filter signature curry sets, curry noodles, rice bowls, family sharing boxes, and bread add-ons.
4. **Interactive Takeaway Calculator & WhatsApp Pre-Order**: Customers can select dishes and quantities, calculate estimated costs in real-time, and trigger a formatted pre-order WhatsApp message (+65 9105 8220).
5. **Old Airport Road Stall Locator**: Directions from Dakota MRT (Exit A) & Mountbatten MRT, address details, hours, and payment modes.
6. **Press & Reviews Showcase**: Highlights from SethLui, DanielFoodDiary, and CNA Lifestyle.
7. **SEO & Structured Data**: Built-in Schema.org `FastFoodRestaurant` JSON-LD data for Google Search indexing.

---

## 🚀 How to Host on GitHub Pages (Free)

This project requires **zero build steps** or framework installation. You can deploy it to GitHub Pages in 3 simple steps:

### Option A: Using GitHub Web Interface (Easiest)
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name it `168-curry-chicken` (or any repository name you prefer).
3. Upload all files from this project directory to your repository.
4. Go to **Settings** → **Pages**.
5. Under **Build and deployment** → **Source**, select **Deploy from a branch**, choose `main` and `/ (root)`, then click **Save**.
6. Your website will be live at: `https://<YOUR-GITHUB-USERNAME>.github.io/168-curry-chicken/`

### Option B: Using Git Terminal
```bash
cd 168-curry-chicken-website
git init
git add .
git commit -m "Deploy 168 Curry Chicken website"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/168-curry-chicken.git
git push -u origin main
```
The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically publish your site to GitHub Pages!

---

## 💻 Local Preview
To preview locally, open `index.html` in any web browser, or launch a quick local HTTP server:
```bash
# Using Python
python -m http.server 8000

# Or using npx serve
npx serve
```
Then visit `http://localhost:8000`.

---

## 📂 Project Structure
```
168-curry-chicken-website/
├── index.html                 # Main web page with semantic HTML5 & Schema.org SEO
├── css/
│   └── styles.css             # Glassmorphism design system, dark mode amber accents
├── js/
│   ├── app.js                 # UI interactions, live opening hours logic, WhatsApp generator
│   └── menu-data.js           # Dish database, prices, descriptions, and reviews
├── assets/
│   ├── hero_curry.jpg         # High quality food photography card
│   ├── curry_noodle.jpg       # Curry noodle dish visual
│   ├── family_box.jpg         # Family feast box visual
│   └── stall_banner.jpg       # 168 Curry Chicken stall visual
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow for automatic deployment
└── README.md                  # Documentation & GitHub Pages deployment guide
```
