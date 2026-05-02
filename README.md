# Fabian Portfolio Website

![Portfolio Preview](https://via.placeholder.com/1200x600/3b82f6/ffffff?text=Fabian+Fernandes+Portfolio+Preview)

[![Deploy to Cloudflare Workers](https://img.shields.io/badge/Deploy-Cloudflare%20Workers-%23F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://www.cloudflare.com/developer-platform/products/workers/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-Excellent-lightgray?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-Gradients%20%26%20Animations-lightgray?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 🎯 Overview

A modern, responsive portfolio website showcasing **Fabian Fernandes'** expertise in IT infrastructure, digital marketing, and maritime operations. Built with cutting-edge CSS techniques and optimized for deployment on **Cloudflare Workers**.

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Stunning Visual Design** | Gradient backgrounds, glass morphism, and smooth animations |
| 📱 **Fully Responsive** | Looks perfect on mobile, tablet, and desktop |
| ⚡ **Cloudflare Workers Optimized** | Serverless deployment with edge caching |
| 🔮 **Modern CSS** | Uses latest CSS features including custom properties, flexbox, grid |
| ⚙️ **Interactive Elements** | Hover effects, scroll animations, and smooth transitions |
| 📊 **Experience Timeline** | Visual representation of professional journey |
| 💼 **Skills Showcase** | Interactive skill progress indicators |
| 🏢 **Affiliations Section** | Highlights professional connections |
| 🎓 **Education & Certifications** | Academic background and qualifications |

## 🚀 Deployment

### Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [Wrangler](https://developers.cloudflare.com/workers/cli-wrangler/install-update) (Cloudflare CLI)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ferns1992/fabian-portfolio-website-test.git
   cd fabian-portfolio-website-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

4. **Deploy to Cloudflare Workers**
   ```bash
   wrangler publish
   ```

5. **Your site will be live at:** `https://fabian-portfolio-website-test.<your-worker-subdomain>.workers.dev`

### Development
```bash
# Start local development server
wrangler dev
```

## 📁 Project Structure

```
fabian-portfolio-website-test/
├── public/                 # Static assets
│   ├── index.html          # Main HTML page
│   ├── style.css           # Advanced CSS with gradients & animations
│   ├── script.js           # Interactive JavaScript
│   ├── about.md            # Detailed background information
│   └── screenshots/        # Website screenshots (placeholders)
├── index.js                # Cloudflare Workers script
├── wrangler.toml           # Wrangler configuration
├── package.json            # Project dependencies & scripts
└── README.md               # This file
```

## 📸 Screenshots

| Homepage | Skills Section | Experience Timeline |
|----------|----------------|---------------------|
| ![Homepage](https://via.placeholder.com/400x300/3b82f6/ffffff?text=Homepage) | ![Skills](https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Skills+Section) | ![Experience](https://via.placeholder.com/400x300/ec4899/ffffff?text=Experience+Timeline) |

| Affiliations | Education | Responsive View |
|--------------|-----------|-----------------|
| ![Affiliations](https://via.placeholder.com/400x300/10b981/ffffff?text=Affiliations) | ![Education](https://via.placeholder.com/400x300/059669/ffffff?text=Education) | ![Responsive](https://via.placeholder.com/400x300/fbbf24/ffffff?text=Responsive+Design) |

> *Note: Screenshots are placeholders. Actual website features animated gradients and interactive elements.*

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Runtime** | Cloudflare Workers |
| **Language** | JavaScript (ES Modules) |
| **Styling** | CSS3 (Custom Properties, Flexbox, Grid, Animations) |
| **Build** | Wrangler |
| **Deployment** | Cloudflare Edge Network |
| **Version Control** | Git & GitHub |
| **Package Manager** | npm |

## 🎨 Design Highlights

- **Gradient Animations**: Continuously shifting color backgrounds
- **Glass Morphism**: Frosted glass effects with backdrop blur
- **Micro-interactions**: Hover lifts, button pulses, and scroll reveals
- **Typography**: Inter font system for excellent readability
- **Color Scheme**: Professional blue-purple palette with accent colors
- **Accessibility**: WCAG 2.1 compliant contrast ratios

## 👨‍💻 About Fabian Fernandes

Fabian Fernandes is a multidisciplinary IT and operations specialist with extensive experience in IT infrastructure, digital marketing, and maritime operations. He has played a key role in the digital and operational scaling of various business units within the Jasgroup of Companies, where he currently holds multiple concurrent roles.

### Key Expertise Areas
- **IT Infrastructure**: Active Directory, Oracle MICROS RES, Network Administration
- **Digital Marketing**: Meta/Facebook/Instagram advertising campaigns
- **Maritime Operations**: Licensed boat captain (24-36ft vessels)
- **Technical Skills**: SQL Server, C#.NET, ASP.NET 4.0, POS Systems
- **Business Operations**: Process optimization and efficiency improvement

*For more detailed information, visit the [About Page](./public/about.md) on the live site.*

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Cloudflare Workers](https://developers.cloudflare.com/workers/) for the powerful serverless platform
- [Google Fonts](https://fonts.google.com/) for the Inter typeface
- [Heroicons](https://heroicons.com/) for inspiration on icon usage
- The open-source community for invaluable resources and tools

---

<div align="center">
  <sub>Built with ❤️ by Fabian Fernandes • © 2026</sub>
</div>