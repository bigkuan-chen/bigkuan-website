// Shared header HTML template string for file:// protocol fallback
const headerTemplate = `
<header :class="{ 'scrolled': scrolled }">
    <nav>
        <a href="index.html#home" class="logo" @click="handleLogoClick($event)">
            <img src="img/can-icon.svg" alt="Can Logo"
                style="height: 32px; width: 32px; vertical-align: middle; margin-right: 8px;">
            Big Kuan
        </a>
        <ul class="nav-links" :class="{ 'active': menuActive }">
            <li><a href="index.html#home" @click="handleNavClick('home', $event)"
                    :class="{ 'active': isPageActive('home') }">Home</a></li>
            <li><a href="portfolio.html" :class="{ 'active': isPageActive('portfolio') }">Portfolio</a></li>
            <li><a href="about.html" :class="{ 'active': isPageActive('about') }">About</a></li>
            <li><a href="index.html#contact" @click="handleNavClick('contact', $event)"
                    :class="{ 'active': isPageActive('contact') }">Contact</a></li>
        </ul>
        <div class="menu-toggle" @click="toggleMenu">
            <i :class="menuActive ? 'fas fa-times' : 'fas fa-bars'"></i>
        </div>
    </nav>
</header>
`;

// Shared header methods mixin
const headerMixin = {
    methods: {
        isPageActive(page) {
            const path = window.location.pathname;
            const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
            
            if (page === 'portfolio') {
                return filename === 'portfolio.html';
            } else if (page === 'about') {
                return filename === 'about.html';
            } else if (page === 'home') {
                if (filename === 'index.html') {
                    return this.activeSection === 'home';
                }
                return false;
            } else if (page === 'contact') {
                if (filename === 'index.html') {
                    return this.activeSection === 'contact';
                }
                return filename === 'contact.html';
            }
            return false;
        },
        handleLogoClick(event) {
            const path = window.location.pathname;
            const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
            if (filename === 'index.html') {
                event.preventDefault();
                this.scrollToSection('home');
            }
        },
        handleNavClick(sectionId, event) {
            const path = window.location.pathname;
            const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
            if (filename === 'index.html') {
                event.preventDefault();
                this.scrollToSection(sectionId);
            }
        }
    }
};

// Loader function to fetch header.html and insert it into the DOM before Vue mounts
async function initHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    // Direct fallback for local file:// protocol to bypass browser CORS blocks
    if (window.location.protocol === 'file:') {
        placeholder.outerHTML = headerTemplate;
        return;
    }

    try {
        const resp = await fetch('header.html');
        if (!resp.ok) throw new Error('Failed to load header.html');
        const html = await resp.text();
        placeholder.outerHTML = html;
    } catch (err) {
        console.warn('Fetch header failed, falling back to local template:', err);
        placeholder.outerHTML = headerTemplate;
    }
}
