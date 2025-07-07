// ========== DARK MODE ==========
const darkModeToggle = document.getElementById('darkModeToggle');
const currentMode = localStorage.getItem('darkMode');

// Set initial mode
if (currentMode === 'true') {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
}

// Toggle mode
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
  darkModeToggle.textContent = isDark ? '☀️' : '🌙';
});

// ========== RENDER TOOLS ==========
function renderTools(tools) {
  const container = document.getElementById('toolsContainer');
  container.innerHTML = tools.map(tool => `
    <div class="tool-card">
      <div class="tool-img-container">
        <img 
          src="assets/images/placeholder.jpg" 
          data-src="${tool.logo}" 
          alt="${tool.name}" 
          class="tool-img lazyload"
        >
      </div>
      <div class="tool-content">
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-rating">
          <span class="stars">${'⭐'.repeat(Math.floor(tool.rating))}${tool.rating % 1 ? '½' : ''}</span>
          <span class="review-count">(${tool.reviews.toLocaleString()} ulasan)</span>
        </div>
        <a href="${tool.url}" target="_blank" class="tool-link">Kunjungi</a>
      </div>
    </div>
  `).join('');
}

// ========== SEARCH FUNCTION ==========
document.getElementById('searchInput').addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  const results = tools.filter(tool => 
    tool.name.toLowerCase().includes(keyword) || 
    tool.description.toLowerCase().includes(keyword)
  );
  renderTools(results);
});

// ========== INITIAL LOAD ==========
document.addEventListener('DOMContentLoaded', () => {
  // Render popular tools
  const popularTools = tools.filter(tool => tool.isPopular);
  renderTools(popularTools);
  
  // Initialize lazy loading
  if (typeof lazyLoad === 'function') {
    lazyLoad();
  }
});
