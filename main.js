// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
document.body.classList.add(currentTheme + '-mode');
themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';

// Toggle theme
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Render Tools
function renderTools(tools) {
  const container = document.getElementById('toolsContainer');
  
  container.innerHTML = tools.map(tool => `
    <div class="tool-card">
      <div class="tool-image">
        <img src="${tool.logo}" alt="${tool.name}" loading="lazy">
      </div>
      <div class="tool-content">
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-meta">
          <div class="tool-rating">
            <span class="stars">${'⭐'.repeat(Math.floor(tool.rating))}</span>
            <span class="count">(${tool.reviews})</span>
          </div>
          <a href="${tool.url}" target="_blank" class="tool-button">Kunjungi</a>
        </div>
      </div>
    </div>
  `).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Render popular tools (first 6)
  const popularTools = tools.slice(0, 6);
  renderTools(popularTools);
  
  // Search functionality
  const searchInput = document.querySelector('.hero-search input');
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      const keyword = e.target.value.toLowerCase();
      const results = tools.filter(tool => 
        tool.name.toLowerCase().includes(keyword) || 
        tool.description.toLowerCase().includes(keyword)
      );
      renderTools(results);
    }
  });
});
