const RFQ_STORAGE_KEY = 'emphz_rfq_cart';

function getRFQCart() {
    const data = localStorage.getItem(RFQ_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveRFQCart(cart) {
    localStorage.setItem(RFQ_STORAGE_KEY, JSON.stringify(cart));
}

function addToRFQCart(product) {
    const cart = getRFQCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1, cartId: Date.now().toString() });
    }
    saveRFQCart(cart);
    updateCartUI();
}

function removeFromRFQCart(cartId) {
    let cart = getRFQCart();
    cart = cart.filter(item => item.cartId !== cartId && item.id !== cartId);
    saveRFQCart(cart);
    updateCartUI();
}

function clearRFQCart() {
    saveRFQCart([]);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('manifest-items');
    if (!container) return;

    const cart = getRFQCart();
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="py-16 border border-dashed border-industrial-700/50 bg-industrial-800/20 rounded-sm text-center">
                <div class="w-12 h-12 bg-industrial-800 rounded-full flex items-center justify-center mx-auto mb-4 text-industrial-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <p class="text-industrial-400 text-sm mb-4 font-light">Manifest is currently empty.</p>
                <a href="/catalog" class="text-accent-blue font-bold text-[10px] hover:text-white uppercase tracking-widest transition-colors border-b border-accent-blue/30 hover:border-accent-blue pb-1">
                    Browse Systems
                </a>
            </div>
        `;
        document.getElementById('submit-rfq-btn').disabled = true;
        return;
    }

    document.getElementById('submit-rfq-btn').disabled = false;
    container.innerHTML = cart.map(item => `
        <div class="bg-industrial-800/50 border border-industrial-700 p-4 rounded-sm flex items-center justify-between group hover:border-industrial-600 transition-colors">
            <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-industrial-900 rounded-sm border border-industrial-700 flex-shrink-0 overflow-hidden">
                    <img src="${item.imageUrl || item.image}" alt="" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                    <div class="text-white font-medium text-sm group-hover:text-accent-blue transition-colors line-clamp-1">${item.name}</div>
                    <div class="text-[9px] text-industrial-500 font-mono mt-1 uppercase tracking-widest">SKU: ${item.id.substring(0, 8).toUpperCase()}</div>
                </div>
            </div>
            <div class="flex items-center gap-4">
                <div class="bg-black/40 px-3 py-1 rounded-sm text-xs font-mono text-accent-blue border border-industrial-700/50 font-bold">
                    x${item.quantity}
                </div>
                <button onclick="removeFromRFQCart('${item.cartId || item.id}')" class="text-industrial-500 hover:text-red-400 transition-colors p-2 hover:bg-industrial-700/50 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', updateCartUI);
