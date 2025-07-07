// Dark Mode
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Pencarian
document.getElementById('searchInput').addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const results = searchTools(keyword);
  renderTools(results);
});

// Render Tools
function renderTools(tools) {
  const container = document.getElementById('popularTools');
  container.innerHTML = tools.map(tool => `
    <div class="tool-card">
      <img data-src="${tool.logo}" alt="${tool.name}" class="lazyload">
      <h3>${tool.name}</h3>
      <p>${tool.description}</p>
      <div class="tool-rating">
        <span class="stars">${'⭐'.repeat(Math.floor(tool.rating))}</span>
        <span>(${tool.reviews} ulasan)</span>
      </div>
      <a href="${tool.url}" target="_blank" class="cta-button">Kunjungi</a>
    </div>
  `).join('');
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
  renderTools(getPopularTools());
});
