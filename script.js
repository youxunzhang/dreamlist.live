// Use data from wishes-data.js
const wishes = window.wishesData || [];

// Get DOM elements
const wishesGrid = document.getElementById('wishesGrid');
const wishList = document.getElementById('wishList');
const selectAllBtn = document.getElementById('selectAllBtn');
const deselectAllBtn = document.getElementById('deselectAllBtn');
const printBtn = document.getElementById('printBtn');

// Modal related elements
const wishModal = document.getElementById('wishModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.getElementById('modalClose');
const addToWishlist = document.getElementById('addToWishlist');
const markCompleted = document.getElementById('markCompleted');

// State management
let selectedWishId = null;
let completedWishes = JSON.parse(localStorage.getItem('completedWishes') || '[]');
let checkedWishes = JSON.parse(localStorage.getItem('checkedWishes') || '[]');

// Render wish cards
function renderWishes() {
    wishesGrid.innerHTML = wishes.map(wish => `
        <div class="wish-card${completedWishes.includes(wish.id) ? ' completed' : ''}" data-id="${wish.id}">
            <div class="wish-image">
                <img src="${wish.image}" alt="${wish.title}" loading="lazy">
                ${completedWishes.includes(wish.id) ? '<div class="completed-badge">✓</div>' : ''}
            </div>
            <div class="wish-content">
                <div class="wish-title">${wish.title}</div>
                <div class="wish-description">${wish.description}</div>
                <span class="wish-category">${wish.category}</span>
            </div>
        </div>
    `).join('');
}

// Render wish list
function renderWishList() {
    wishList.innerHTML = wishes.map(wish => `
        <div class="wish-list-item${completedWishes.includes(wish.id) ? ' completed' : ''}">
            <input type="checkbox" class="wish-checkbox" data-id="${wish.id}" ${checkedWishes.includes(wish.id) ? 'checked' : ''}>
            <span class="wish-list-text">${wish.title} - ${wish.description}</span>
        </div>
    `).join('');
}

// Open modal
function openModal(wishId) {
    const wish = wishes.find(w => w.id === wishId);
    if (!wish) return;
    
    selectedWishId = wishId;
    modalTitle.textContent = wish.title;
    modalImage.src = wish.image;
    modalImage.alt = wish.title;
    modalCategory.textContent = `Category: ${wish.category}`;
    modalDescription.textContent = wish.detail;
    wishModal.classList.add('show');
    
    // Update button states
    addToWishlist.disabled = checkedWishes.includes(wishId);
    markCompleted.disabled = completedWishes.includes(wishId);
}

// Close modal
function closeModal() {
    wishModal.classList.remove('show');
    selectedWishId = null;
}

// Handle card click
function handleCardClick(e) {
    const card = e.target.closest('.wish-card');
    if (card) {
        const id = parseInt(card.getAttribute('data-id'));
        openModal(id);
    }
}

// Add to wishlist
function handleAddToWishlist() {
    if (!selectedWishId) return;
    if (!checkedWishes.includes(selectedWishId)) {
        checkedWishes.push(selectedWishId);
        localStorage.setItem('checkedWishes', JSON.stringify(checkedWishes));
        renderWishList();
    }
    closeModal();
}

// Mark as completed
function handleMarkCompleted() {
    if (!selectedWishId) return;
    if (!completedWishes.includes(selectedWishId)) {
        completedWishes.push(selectedWishId);
        localStorage.setItem('completedWishes', JSON.stringify(completedWishes));
        renderWishes();
        renderWishList();
    }
    closeModal();
}

// Handle wish list checkbox changes
function handleWishListChange(e) {
    const checkbox = e.target;
    const wishId = parseInt(checkbox.getAttribute('data-id'));
    
    if (checkbox.checked && !checkedWishes.includes(wishId)) {
        checkedWishes.push(wishId);
    } else if (!checkbox.checked && checkedWishes.includes(wishId)) {
        checkedWishes = checkedWishes.filter(id => id !== wishId);
    }
    
    localStorage.setItem('checkedWishes', JSON.stringify(checkedWishes));
}

// Select all wishes
function handleSelectAll() {
    checkedWishes = wishes.map(wish => wish.id);
    localStorage.setItem('checkedWishes', JSON.stringify(checkedWishes));
    renderWishList();
}

// Deselect all wishes
function handleDeselectAll() {
    checkedWishes = [];
    localStorage.setItem('checkedWishes', JSON.stringify(checkedWishes));
    renderWishList();
}

// Print wish list
function handlePrint() {
    const printWindow = window.open('', '_blank');
    const selectedWishes = wishes.filter(wish => checkedWishes.includes(wish.id));
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My Bucket List</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #2d3748; text-align: center; }
                .wish-item { margin: 10px 0; padding: 10px; border-bottom: 1px solid #eee; }
                .wish-title { font-weight: bold; color: #2d3748; }
                .wish-description { color: #718096; margin-top: 5px; }
                .wish-category { color: #4a5568; font-size: 0.9em; margin-top: 5px; }
                .checkbox { margin-right: 10px; }
            </style>
        </head>
        <body>
            <h1>My Bucket List</h1>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
            ${selectedWishes.map(wish => `
                <div class="wish-item">
                    <input type="checkbox" class="checkbox">
                    <span class="wish-title">${wish.title}</span><br>
                    <span class="wish-description">${wish.description}</span><br>
                    <span class="wish-category">${wish.category}</span>
                </div>
            `).join('')}
        </body>
        </html>
    `);
    
    printWindow.document.close();
    printWindow.print();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    renderWishes();
    renderWishList();
    
    // Card click events
    wishesGrid.addEventListener('click', handleCardClick);
    
    // Modal events
    modalClose.addEventListener('click', closeModal);
    addToWishlist.addEventListener('click', handleAddToWishlist);
    markCompleted.addEventListener('click', handleMarkCompleted);
    
    // Close modal when clicking outside
    wishModal.addEventListener('click', function(e) {
        if (e.target === wishModal) {
            closeModal();
        }
    });
    
    // Wish list events
    wishList.addEventListener('change', handleWishListChange);
    selectAllBtn.addEventListener('click', handleSelectAll);
    deselectAllBtn.addEventListener('click', handleDeselectAll);
    printBtn.addEventListener('click', handlePrint);
    
    // Keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && wishModal.classList.contains('show')) {
            closeModal();
        }
    });
}); 