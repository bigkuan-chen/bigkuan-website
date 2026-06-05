# Big Kuan Personal Portfolio & Project Showcase

A modern, bright, and responsive multi-page personal portfolio website designed to present homework assignments, engineering experimentations, and technical projects.

📱 **Live Demo**: [https://bigkuan-chen.github.io/bigkuan-website](https://bigkuan-chen.github.io/bigkuan-website)

---

## ✨ Features

- **Bright & Clean Aesthetics**: Custom style tokens featuring soft slate backgrounds (`#f8fafc`), pure white card surfaces, soft shadows, and clean Indigo-Sky gradients.
- **High Readability**: Optimal contrast ratio utilizing comfortable dark-charcoal slate text (`#0f172a`) for maximum readability.
- **Reactive UI (Vue 3)**: Lightweight client-side reactive components handling mobile hamburger navigation toggling, filterable project grids, and overlay detail modals.
- **Micro-Animations (GSAP)**: Premium page entry load staggers, scroll-based text slides, and custom magnetic scale hover animations.
- **Integrated Sub-project Directory**: Pre-structured subfolders enabling direct deployment and hosting of individual assignments (e.g. `homework1/`, `homework2/`).

---

## 📂 Repository Structure

```text
/ (repository root)
├── index.html          # Homepage with a single-viewport landing frame
├── portfolio.html      # Portfolio page featuring a filterable projects grid
├── about.html          # Profile page containing biography and technical skills
├── contact.html        # Contact page with magnetic mailto and social channels
├── css/
│   └── style.css       # Global stylesheet (typography, variables, and animations)
├── img/                # Asset folder (AI theme backgrounds, profile picture, thumbnails)
├── homework1/          # Subdirectory stub for Homework 1
│   └── index.html
└── homework2/          # Subdirectory stub for Homework 2
    └── index.html
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
4. Drop your actual assignment builds (HTML, CSS, JS) directly inside the `homework1/`, `homework2/`, etc., folders and commit/push. They will automatically be hosted online!
