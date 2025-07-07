// Bookmark Functionality
function toggleBookmark(toolId) {
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  
  if (bookmarks.includes(toolId)) {
    // Remove bookmark
    bookmarks = bookmarks.filter(id => id !== toolId);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    showNotification('Tool removed from bookmarks', 'info');
  } else {
    // Add bookmark
    bookmarks.push(toolId);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    showNotification('Tool bookmarked!', 'success');
  }
  
  updateBookmarkButtons();
}

function updateBookmarkButtons() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  document.querySelectorAll('.bookmark-btn').forEach(btn => {
    const toolId = parseInt(btn.dataset.toolId);
    btn.innerHTML = bookmarks.includes(toolId) ? '⭐ Bookmarked' : '☆ Bookmark';
  });
}

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Initialize bookmarks
document.addEventListener('DOMContentLoaded', () => {
  updateBookmarkButtons();
  
  // Handle bookmark button clicks
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bookmark-btn')) {
      const toolId = parseInt(e.target.dataset.toolId);
      toggleBookmark(toolId);
    }
  });
});
