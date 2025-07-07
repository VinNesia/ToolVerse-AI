// Tampilkan tools populer di beranda
function displayDailyPopularTools() {
    const popularToolsContainer = document.getElementById('dailyPopularTools');
    const popularTools = tools.filter(tool => tool.isPopular).slice(0, 4);
    
    popularToolsContainer.innerHTML = popularTools.map(tool => `
        <div class="tool-card" data-id="${tool.id}">
            <img src="${tool.logo}" alt="${tool.name}">
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <a href="${tool.url}" target="_blank">Kunjungi Situs</a>
            <button class="bookmark-btn" data-id="${tool.id}">⭐ Bookmark</button>
        </div>
    `).join('');
}

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    document.getElementById('darkModeToggle').textContent = isDarkMode ? '☀️ Mode Terang' : '🌙 Mode Gelap';
});

// Cek preferensi dark mode dari localStorage
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkModeToggle').textContent = '☀️ Mode Terang';
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayDailyPopularTools();
});
