// Shared footer HTML template string for file:// protocol fallback
const footerTemplate = `
<footer>
    <!-- <div class="footer-socials">
        <a href="https://github.com/bigkuan-chen" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:eagle.chen@gmail.com"><i class="fas fa-envelope"></i></a>
    </div> -->
    <p>&copy; {{ currentYear }} by CHEN KUAN LIANG. All rights reserved.</p>
</footer>
`;

// Loader function to fetch footer.html and insert it into the DOM before Vue mounts
async function initFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    // Direct fallback for local file:// protocol to bypass browser CORS blocks
    if (window.location.protocol === 'file:') {
        placeholder.outerHTML = footerTemplate;
        return;
    }

    try {
        const resp = await fetch('footer.html');
        if (!resp.ok) throw new Error('Failed to load footer.html');
        const html = await resp.text();
        placeholder.outerHTML = html;
    } catch (err) {
        console.warn('Fetch footer failed, falling back to local template:', err);
        placeholder.outerHTML = footerTemplate;
    }
}
