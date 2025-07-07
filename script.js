
let tools = window.toolsData || [];  // Ambil data dari index.html yang sudah ditanam
let currentPage = 1;
const toolsPerPage = 9;
const bookmarks = JSON.parse(localStorage.getItem('bookmarkedTools')) || [];

populateCategories();
displayTools();

function populateCategories() {
    const categories = [...new Set(tools.map(tool => tool.category))];
    const filter = document.getElementById('categoryFilter');
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        filter.appendChild(option);
    });
}

document.getElementById('searchInput').addEventListener('input', () => {
    currentPage = 1;
    displayTools();
});

document.getElementById('categoryFilter').addEventListener('change', () => {
    currentPage = 1;
    displayTools();
});

function displayTools() {
    const list = document.getElementById('toolsList');
    list.innerHTML = '';
    let filtered = tools.filter(tool => 
        tool.name.toLowerCase().includes(document.getElementById('searchInput').value.toLowerCase()) &&
        (document.getElementById('categoryFilter').value === '' || tool.category === document.getElementById('categoryFilter').value)
    );

    const totalPages = Math.ceil(filtered.length / toolsPerPage);
    filtered = filtered.slice((currentPage - 1) * toolsPerPage, currentPage * toolsPerPage);

    filtered.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.innerHTML = \`
            <h3>\${tool.name}</h3>
            <p>\${tool.description}</p>
            <a href="\${tool.url}" target="_blank">Kunjungi</a>
            <br>
            <button onclick="toggleBookmark('\${tool.id}')">\${bookmarks.includes(tool.id) ? 'Hapus Bookmark' : 'Bookmark'}</button>
        \`;
        list.appendChild(card);
    });

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.onclick = () => {
            currentPage = i;
            displayTools();
        };
        if (i === currentPage) btn.style.fontWeight = 'bold';
        pagination.appendChild(btn);
    }
}

function toggleBookmark(id) {
    const index = bookmarks.indexOf(id);
    if (index >= 0) {
        bookmarks.splice(index, 1);
        showNotification('Bookmark dihapus!');
    } else {
        bookmarks.push(id);
        showNotification('Berhasil Bookmark!');
    }
    localStorage.setItem('bookmarkedTools', JSON.stringify(bookmarks));
    displayTools();
}

document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.position = 'fixed';
    notif.style.bottom = '20px';
    notif.style.right = '20px';
    notif.style.background = '#ff416c';
    notif.style.color = 'white';
    notif.style.padding = '1rem';
    notif.style.borderRadius = '5px';
    notif.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    notif.style.zIndex = 1000;
    notif.textContent = message;
    document.body.appendChild(notif);
    setTimeout(() => document.body.removeChild(notif), 3000);
}

// Fitur Daily Popular Tools (acak otomatis) dari data tools yang sudah ada
const popular = [];
const tempTools = [...tools];
while (popular.length < 3 && tempTools.length > 0) {
    const random = tempTools.splice(Math.floor(Math.random() * tempTools.length), 1)[0];
    popular.push(random);
}
const container = document.createElement('div');
container.className = 'container';
container.innerHTML = '<h2>Tools Populer Hari Ini</h2>';
popular.forEach(tool => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = \`
        <h3>\${tool.name}</h3>
        <p>\${tool.description}</p>
        <a href="\${tool.url}" target="_blank">Kunjungi</a>
    \`;
    container.appendChild(card);
});
document.body.insertBefore(container, document.querySelector('.container'));
