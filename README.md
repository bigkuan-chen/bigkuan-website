# Big Kuan Personal Portfolio & Project Showcase

A modern, bright, and responsive multi-page personal portfolio website designed to present engineering experimentations, AI applications, and technical projects.

📱 **Live Demo**: [https://bigkuan-chen.github.io/bigkuan-website](https://bigkuan-chen.github.io/bigkuan-website)

---

## ✨ Features

- **Bright & Clean Aesthetics**: Custom style tokens featuring soft slate backgrounds (`#f8fafc`), pure white card surfaces, soft shadows, and clean Indigo-Sky gradients.
- **High Readability**: Optimal contrast ratio utilizing comfortable dark-charcoal slate text (`#0f172a`) for maximum readability.
- **Reactive UI (Vue 3)**: Lightweight client-side reactive components handling mobile hamburger navigation toggling, filterable project grids, and overlay detail modals.
- **Micro-Animations (GSAP)**: Premium page entry load staggers, scroll-based text slides, and custom magnetic scale hover animations.
- **Interactive Projects Showcase**: An interactive, responsive project grid showcasing diverse applications ranging from machine learning to cryptography and AI educational tools.

---

## 📂 Repository Structure

```text
/ (repository root)
├── index.html          # Homepage with a single-viewport landing frame
├── portfolio.html      # Portfolio page featuring a filterable projects grid
├── about.html          # Profile page containing biography and technical skills
├── contact.html        # Contact page with magnetic mailto and social channels
├── img/                # Asset folder (AI theme backgrounds, profile picture, thumbnails)
└── css/
    └── style.css       # Global stylesheet (typography, variables, and animations)
```

---

## 🛠️ Local Development

To run the project locally, start a simple HTTP server in the repository root directory:

**Using Python:**
```bash
python -m http.server 8000
```
Open your browser and visit `http://localhost:8000`.

---

## 🚀 Deployment to GitHub Pages

1. Push this repository to your GitHub account under `bigkuan-chen/bigkuan-website`.
2. Navigate to **Settings** > **Pages** inside your repository page.
3. Under the **Build and deployment** section:
   - Select **Deploy from a branch**.
   - Choose `main` as the source branch and `/ (root)` as the folder.
   - Click **Save**.
   - Your portfolio website will be hosted live online!
