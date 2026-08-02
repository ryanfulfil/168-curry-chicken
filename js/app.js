/* 
  168 Curry Chicken - Main Application JS
*/

document.addEventListener('DOMContentLoaded', () => {
    initStallStatus();
    renderMenu('all');
    initFilterTabs();
    initMealBuilder();
    renderReviews();
    initMobileNav();
});

// Live Singapore Time (SGT) Open/Closed Calculator
function initStallStatus() {
    const statusContainer = document.getElementById('stall-status-badge');
    if (!statusContainer) return;

    function updateStatus() {
        // Calculate SGT Time (UTC+8)
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const sgtTime = new Date(utc + (3600000 * 8));

        const day = sgtTime.getDay(); // 0 = Sun, 1 = Mon ...
        const hours = sgtTime.getHours();
        const minutes = sgtTime.getMinutes();
        const currentTimeVal = hours * 60 + minutes;

        // Mon-Fri: 10:30 - 19:00
        // Sat-Sun: 11:30 - 19:00
        let openTimeVal = (day >= 1 && day <= 5) ? (10 * 60 + 30) : (11 * 60 + 30);
        let closeTimeVal = 19 * 60; // 7:00 PM

        const isOpen = currentTimeVal >= openTimeVal && currentTimeVal < closeTimeVal;

        if (isOpen) {
            statusContainer.className = 'status-indicator';
            statusContainer.innerHTML = `
                <span class="status-dot"></span>
                <span>Open Now • Closes 7:00 PM</span>
            `;
        } else {
            statusContainer.className = 'status-indicator status-closed';
            let nextOpenText = (day >= 1 && day <= 4) ? 'Tomorrow 10:30 AM' : (day === 0 ? 'Mon 10:30 AM' : 'Tomorrow 11:30 AM');
            statusContainer.innerHTML = `
                <span class="status-dot"></span>
                <span>Closed • Opens ${nextOpenText}</span>
            `;
        }
    }

    updateStatus();
    setInterval(updateStatus, 60000); // Check every minute
}

// Render Menu Cards
function renderMenu(categoryFilter = 'all') {
    const grid = document.getElementById('menu-grid');
    if (!grid) return;

    const filtered = categoryFilter === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === categoryFilter);

    grid.innerHTML = filtered.map(item => `
        <div class="menu-card" data-id="${item.id}">
            <div class="menu-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="badge menu-card-badge">${item.badge}</span>
            </div>
            <div class="menu-card-body">
                <div class="menu-card-header">
                    <div class="menu-card-title">
                        <h3>${item.name}</h3>
                        <span>${item.chineseName}</span>
                    </div>
                    <div class="menu-card-price">S$${item.price.toFixed(2)}</div>
                </div>
                <p class="menu-card-desc">${item.description}</p>
                <div class="menu-card-tags">
                    ${item.pairing.map(p => `<span class="tag-chip">${p}</span>`).join('')}
                </div>
                <div class="menu-card-actions">
                    <button class="btn btn-primary btn-card-add" onclick="addMealItem('${item.id}')">
                        + Add to Pre-Order
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Render Reviews Section Dynamically
function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid || !stallInfo.reviews) return;

    grid.innerHTML = stallInfo.reviews.map(r => `
        <div class="review-card">
            <div>
                <div class="review-stars">
                    ${'★'.repeat(Math.floor(r.rating))} ${r.rating % 1 !== 0 ? '½' : ''}
                </div>
                <p class="review-quote">"${r.quote}"</p>
            </div>
            <div class="review-author">
                <div>
                    <h4>${r.author}</h4>
                    <span style="font-size: 0.78rem; color: var(--curry-gold);">${r.tag}</span>
                </div>
                <span class="badge badge-red">Verified Review</span>
            </div>
        </div>
    `).join('');
}

// Initialize Category Filter Tabs
function initFilterTabs() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            renderMenu(category);
        });
    });
}

// Meal Builder State Management
let builderState = {};

function initMealBuilder() {
    // Populate default builder items
    menuData.forEach(item => {
        builderState[item.id] = 0;
    });

    renderBuilderControls();
    updateCartSummary();
}

function renderBuilderControls() {
    const container = document.getElementById('builder-items-container');
    if (!container) return;

    container.innerHTML = menuData.map(item => `
        <div class="builder-item-row">
            <div class="builder-item-info">
                <h4>${item.name}</h4>
                <p>${item.chineseName} — S$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-control">
                <button class="qty-btn" onclick="updateQty('${item.id}', -1)">-</button>
                <span class="qty-val" id="qty-${item.id}">${builderState[item.id] || 0}</span>
                <button class="qty-btn" onclick="updateQty('${item.id}', 1)">+</button>
            </div>
        </div>
    `).join('');
}

window.updateQty = function(id, change) {
    if (!builderState[id]) builderState[id] = 0;
    builderState[id] = Math.max(0, builderState[id] + change);
    
    const qtyElem = document.getElementById(`qty-${id}`);
    if (qtyElem) qtyElem.textContent = builderState[id];

    updateCartSummary();
};

window.addMealItem = function(id) {
    updateQty(id, 1);
    // Scroll to builder section smoothly if needed
    const builderSec = document.getElementById('builder');
    if (builderSec) {
        builderSec.scrollIntoView({ behavior: 'smooth' });
    }
};

function updateCartSummary() {
    const cartPreview = document.getElementById('cart-items-preview');
    const totalElem = document.getElementById('cart-total-price');
    const whatsappBtn = document.getElementById('whatsapp-order-btn');

    let total = 0;
    let selectedItems = [];

    menuData.forEach(item => {
        const qty = builderState[item.id] || 0;
        if (qty > 0) {
            const itemTotal = qty * item.price;
            total += itemTotal;
            selectedItems.push({
                name: item.name,
                chineseName: item.chineseName,
                qty: qty,
                price: itemTotal
            });
        }
    });

    if (selectedItems.length === 0) {
        cartPreview.innerHTML = `
            <p style="color: var(--text-muted); text-align: center; padding: 20px 0;">
                No items added yet. Click '+' on any dish to build your takeaway order!
            </p>
        `;
        totalElem.textContent = 'S$0.00';
        whatsappBtn.href = '#';
        whatsappBtn.classList.add('disabled');
        return;
    }

    whatsappBtn.classList.remove('disabled');
    cartPreview.innerHTML = selectedItems.map(i => `
        <div class="cart-preview-item">
            <span>${i.qty}x ${i.name}</span>
            <span style="color: var(--curry-gold); font-weight: 600;">S$${i.price.toFixed(2)}</span>
        </div>
    `).join('');

    totalElem.textContent = `S$${total.toFixed(2)}`;

    // Build WhatsApp Pre-Order Link
    const phone = stallInfo.whatsappPhone;
    let message = `Hello 168 Curry Chicken! 🍲 I would like to reserve/pre-order for collection at Stall #01-76 Old Airport Road:\n\n`;
    selectedItems.forEach(i => {
        message += `• ${i.qty}x ${i.name} (${i.chineseName}) - S$${i.price.toFixed(2)}\n`;
    });
    message += `\nTotal Estimated Cost: S$${total.toFixed(2)}\n\nPlease confirm availability and pickup time. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    whatsappBtn.href = `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Mobile Nav Toggle
function initMobileNav() {
    const toggle = document.querySelector('.mobile-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
            links.style.flexDirection = 'column';
            links.style.position = 'absolute';
            links.style.top = '70px';
            links.style.left = '0';
            links.style.right = '0';
            links.style.background = 'rgba(11, 15, 25, 0.95)';
            links.style.padding = '20px';
            links.style.borderBottom = '1px solid var(--border-card)';
        });
    }
}
