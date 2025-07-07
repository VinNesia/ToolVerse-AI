// Tambahkan bookmark
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bookmark-btn')) {
        const toolId = parseInt(e.target.dataset.id);
        addToBookmarks(toolId);
    }
});

function addToBookmarks(toolId) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (!bookmarks.includes(toolId)) {
        bookmarks.push(toolId);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        alert("Tool ditambahkan ke bookmark!");
    } else {
        alert("Tool sudah ada di bookmark!");
    }
}
