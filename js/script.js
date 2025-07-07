// Tampilkan tools populer
function tampilkanToolsPopuler() {
  const popularToolsContainer = document.getElementById('popularTools');
  const popularTools = tools.filter(tool => tool.isPopular).slice(0, 4);

  popularToolsContainer.innerHTML = popularTools.map(tool => `
    <div class="tool-card">
      <img src="${tool.logo}" alt="${tool.name}" class="tool-img">
      <div class="tool-content">
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
        <a href="${tool.url}" target="_blank" class="tool-link">Kunjungi Situs</a>
      </div>
    </div>
  `).join('');
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  document.getElementById('darkModeToggle').textContent = isDark ? '☀️ Mode Terang' : '🌙 Mode Gelap';
});

// Cek preferensi dark mode
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  document.getElementById('darkModeToggle').textContent = '☀️ Mode Terang';
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanToolsPopuler);
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll("img[data-src]");
  
  const lazyLoad = (img) => {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.onload = () => img.removeAttribute("data-src");
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lazyLoad(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
});
