// Simpan bookmark
function simpanBookmark(toolId) {
  let bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];
  if (!bookmark.includes(toolId)) {
    bookmark.push(toolId);
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
    alert("Tool ditambahkan ke bookmark!");
  }
}

// Hapus bookmark
function hapusBookmark(toolId) {
  let bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];
  bookmark = bookmark.filter(id => id !== toolId);
  localStorage.setItem('bookmark', JSON.stringify(bookmark));
  alert("Tool dihapus dari bookmark!");
}

// Tampilkan bookmark
function tampilkanBookmark() {
  const bookmark = JSON.parse(localStorage.getItem('bookmark')) || [];
  const toolsContainer = document.getElementById('bookmarkTools');
  const toolsData = tools.filter(tool => bookmark.includes(tool.id));

  toolsContainer.innerHTML = toolsData.map(tool => `
    <div class="tool-card">
      <img src="${tool.logo}" alt="${tool.name}" class="tool-img">
      <div class="tool-content">
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
        <a href="${tool.url}" target="_blank" class="tool-link">Kunjungi Situs</a>
        <button onclick="hapusBookmark(${tool.id})" class="bookmark-btn">🗑️ Hapus</button>
      </div>
    </div>
  `).join('');
}

// Jalankan saat halaman bookmark dimuat
if (window.location.pathname.includes('bookmarks.html')) {
  document.addEventListener('DOMContentLoaded', tampilkanBookmark);
}
