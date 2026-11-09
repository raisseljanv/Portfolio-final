
// ===== DEFAULT PRODUCTS DATA =====
const DEFAULT_PRODUCTS = [
  { id: 1,  name: 'Emerald Green Polo Knit Top',           category: 'Tops',    price: 799,  badge: 'New',         badgeClass: '',      img: 'images/emerald-green-polo-knit-top.jpg',           tags: ['tops','new'],          stock: 15 },
  { id: 2,  name: 'Off-White Polo Knit Top',               category: 'Tops',    price: 799,  badge: 'Best Seller', badgeClass: 'green', img: 'images/off-white-polo-knit-top.jpg',               tags: ['tops','bestsellers'],  stock: 8  },
  { id: 3,  name: 'Royal Blue Polo Bow Knit Top',          category: 'Tops',    price: 799,  badge: 'New',         badgeClass: '',      img: 'images/royal-blue-polo-bow-knit-top.jpg',          tags: ['tops','new'],          stock: 20 },
  { id: 4,  name: 'Light Pink & Black Striped Knit Top',   category: 'Tops',    price: 849,  badge: 'New',         badgeClass: '',      img: 'images/light-pink-black-striped-knit-top.jpg',     tags: ['tops','new'],          stock: 12 },
  { id: 5,  name: 'Light Grey Plaid Bow Knit Top',         category: 'Tops',    price: 849,  badge: 'Best Seller', badgeClass: 'green', img: 'images/light-grey-plaid-bow-knit-top.jpg',         tags: ['tops','bestsellers'],  stock: 3  },
  { id: 6,  name: 'Magenta Textured Bow Knit Top',         category: 'Tops',    price: 849,  badge: 'New',         badgeClass: '',      img: 'images/magenta-textured-bow-knit-top.jpg',         tags: ['tops','new'],          stock: 18 },
  { id: 7,  name: 'White Textured Bow Knit Top',           category: 'Tops',    price: 849,  badge: 'Best Seller', badgeClass: 'green', img: 'images/white-textured-bow-knit-top.jpg',           tags: ['tops','bestsellers'],  stock: 6  },
  { id: 8,  name: 'Apricot Cream Floral Puff Sleeve Dress',category: 'Dresses', price: 1299, badge: 'New',         badgeClass: '',      img: 'images/apricot-cream-floral-puff-sleeve-dress.jpg',tags: ['dresses','new'],       stock: 10 },
  { id: 9,  name: 'Sage Green Floral Puff Sleeve Dress',   category: 'Dresses', price: 1299, badge: 'Best Seller', badgeClass: 'green', img: 'images/sage-green-floral-puff-sleeve-dress.jpg',   tags: ['dresses','bestsellers'],stock: 4  },
  { id: 10, name: 'Oatmeal Ribbed Knit Bodycon Dress',     category: 'Dresses', price: 1199, badge: 'New',         badgeClass: '',      img: 'images/oatmeal-ribbed-knit-bodycon-dress.jpg',     tags: ['dresses','new'],       stock: 9  },
  { id: 11, name: 'Pale Pink Tiered Maxi Skirt',           category: 'Bottoms', price: 999,  badge: 'Best Seller', badgeClass: 'green', img: 'images/pale-pink-tiered-maxi-skirt.jpg',           tags: ['bottoms','bestsellers'],stock: 11 },
  { id: 12, name: 'White Tiered Ribbon Maxi Skirt',        category: 'Bottoms', price: 999,  badge: 'New',         badgeClass: '',      img: 'images/white-tiered-ribbon-maxi-skirt.jpg',        tags: ['bottoms','new'],       stock: 7  },
  { id: 13, name: 'Light Blue Tiered Ribbon Maxi Skirt',   category: 'Bottoms', price: 999,  badge: 'New',         badgeClass: '',      img: 'images/light-blue-tiered-ribbon-maxi-skirt.jpg',   tags: ['bottoms','new'],       stock: 14 },
  { id: 14, name: 'Navy Blue Wide Leg Trousers',           category: 'Bottoms', price: 1099, badge: '',            badgeClass: '',      img: 'images/navy-blue-wide-leg-trousers.jpg',           tags: ['bottoms'],             stock: 2  },
  { id: 15, name: 'Off-White Wide Leg Trousers',           category: 'Bottoms', price: 1099, badge: '',            badgeClass: '',      img: 'images/off-white-wide-leg-trousers.jpg',           tags: ['bottoms'],             stock: 16 },
  { id: 16, name: 'White Wide Leg Trousers',               category: 'Bottoms', price: 1099, badge: 'Best Seller', badgeClass: 'green', img: 'images/white-wide-leg-trousers.jpg',               tags: ['bottoms','bestsellers'],stock: 5  },
];
 
// ===== SHARED STORE (localStorage sync with admin) =====
const STORE_KEY    = 'dng-products';
const ORDERS_KEY   = 'dng-orders';
 
function loadProducts() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
  } catch(e) { return DEFAULT_PRODUCTS; }
}
function saveProducts(list) {
  localStorage.setItem(STORE_KEY, JSON.stringify(list));
}
 
// Live reference – storefront always reads this
let PRODUCTS = loadProducts();
 
// Seed localStorage on first visit if empty
if (!localStorage.getItem(STORE_KEY)) saveProducts(DEFAULT_PRODUCTS);
 
// ===== ORDERS STORE =====
const DEFAULT_ORDERS = [
  { id:'#DG-0143', customer:'Jessica M.',  email:'jessica.m@gmail.com',  date:'May 24, 2025', items:2, total:2598, status:'Delivered',  products:[8,9]  },
  { id:'#DG-0142', customer:'Camille R.',  email:'camille.r@gmail.com',  date:'May 24, 2025', items:1, total:849,  status:'Shipped',    products:[5]    },
  { id:'#DG-0141', customer:'Alyssa T.',   email:'alyssa.t@gmail.com',   date:'May 23, 2025', items:3, total:3147, status:'Processing', products:[11,3,16]},
  { id:'#DG-0140', customer:'Mia Santos',  email:'mia.santos@yahoo.com', date:'May 23, 2025', items:1, total:1299, status:'Delivered',  products:[8]    },
  { id:'#DG-0139', customer:'Rina Cruz',   email:'rina.cruz@gmail.com',  date:'May 22, 2025', items:2, total:1648, status:'Shipped',    products:[4,7]  },
  { id:'#DG-0138', customer:'Bianca Lee',  email:'bianca.lee@gmail.com', date:'May 22, 2025', items:1, total:999,  status:'Pending',    products:[11]   },
  { id:'#DG-0137', customer:'Sofia Tan',   email:'sofia.tan@gmail.com',  date:'May 21, 2025', items:4, total:3946, status:'Delivered',  products:[1,2,6,7]},
  { id:'#DG-0136', customer:'Dana Reyes',  email:'dana.reyes@gmail.com', date:'May 21, 2025', items:1, total:1099, status:'Cancelled',  products:[15]   },
  { id:'#DG-0135', customer:'Trisha Go',   email:'trisha.go@gmail.com',  date:'May 20, 2025', items:2, total:2398, status:'Delivered',  products:[9,13] },
  { id:'#DG-0134', customer:'Leah Ong',    email:'leah.ong@gmail.com',   date:'May 19, 2025', items:1, total:849,  status:'Delivered',  products:[7]    },
];
function loadOrders() {
  try {
    const saved = localStorage.getItem(ORDERS_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_ORDERS;
  } catch(e) { return DEFAULT_ORDERS; }
}
function saveOrders(list) { localStorage.setItem(ORDERS_KEY, JSON.stringify(list)); }
if (!localStorage.getItem(ORDERS_KEY)) saveOrders(DEFAULT_ORDERS);
 
const COLLECTIONS = [
  { id: 'spring',    name: 'Spring Bloom',     desc: 'Light, airy, and full of color',          color: 'linear-gradient(145deg, #f1aaaa, #f8e8b9)', tags: ['dresses','tops'] },
  { id: 'summer',   name: 'Summer Essentials', desc: 'Effortless heat-proof pieces',            color: 'linear-gradient(145deg, #eace89, #e8d0a0)', tags: ['tops','bottoms'] },
  { id: 'neutral',  name: 'Neutral Edit',       desc: 'Timeless tones for every mood',           color: 'linear-gradient(145deg, #d4d6c4, #c8d0a0)', tags: ['tops','bottoms','outerwear'] },
  { id: 'korean',   name: 'K-Style Series',     desc: 'Korean inspired everyday looks',          color: 'linear-gradient(145deg, #d4e8c2, #92c28a)', tags: ['dresses','tops'] },
  { id: 'after-dark',name: 'After Dark',        desc: 'Elevated evening silhouettes',            color: 'linear-gradient(145deg, #556b44, #3a4d2a)', tags: ['dresses','outerwear'] },
  { id: 'workwear', name: 'Office Chic',        desc: 'Polished pieces from desk to dinner',     color: 'linear-gradient(145deg, #c2858c, #a06070)', tags: ['tops','bottoms','outerwear'] },
];
 
// ===== CART STATE =====
let cart = JSON.parse(localStorage.getItem('dng-cart') || '[]');
let user = JSON.parse(localStorage.getItem('dng-user') || 'null');
 
function saveCart() { localStorage.setItem('dng-cart', JSON.stringify(cart)); }
function saveUser() { localStorage.setItem('dng-user', JSON.stringify(user)); }
 
// ===== CART FUNCTIONS =====
function addToCart(productId) {
  // Always read fresh product list in case admin updated it
  PRODUCTS = loadProducts();
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(x => x.id === productId);
  if (existing) { existing.qty++; }
  else { cart.push({ ...p, qty: 1 }); }
  saveCart();
  updateCartUI();
  showToast(`${p.name} added to bag 🛍️`);
}
 
function removeFromCart(productId) {
  cart = cart.filter(x => x.id !== productId);
  saveCart();
  updateCartUI();
  renderCartItems();
}
 
function updateQty(productId, delta) {
  const item = cart.find(x => x.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  saveCart();
  updateCartUI();
  renderCartItems();
}
 
function updateCartUI() {
  const total = cart.reduce((s, x) => s + x.qty, 0);
  const el = document.getElementById('cartCount');
  if (el) {
    el.textContent = total;
    el.classList.toggle('visible', total > 0);
  }
}
 
function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');
  if (!container) return;
 
  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty"><span>🛍️</span><p>Your bag is empty</p><a href="shop.html" class="btn-primary" onclick="toggleCart()">Start Shopping</a></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }
 
  const subtotal = cart.reduce((s, x) => s + x.price * x.qty, 0);
  if (totalEl) totalEl.textContent = `₱${subtotal.toLocaleString()}`;
  if (footer) footer.style.display = 'flex';
 
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="width:80px;height:80px;flex-shrink:0;border-radius:10px;overflow:hidden;background:#f5f5f5;">
        <img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.category}</p>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
          <span class="cart-item-price">₱${(item.price * item.qty).toLocaleString()}</span>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕ Remove</button>
    </div>
  `).join('');
}
 
// ===== TOGGLE FUNCTIONS =====
function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('overlay');
  if (!sidebar) return;
  const isOpen = sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active', isOpen);
  if (isOpen) renderCartItems();
}
 
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (!overlay) return;
  const isOpen = overlay.classList.toggle('open');
  if (isOpen) { setTimeout(() => document.getElementById('searchInput')?.focus(), 100); }
}
 
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburger');
  if (!menu) return;
  menu.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('open');
}
 
function closeAllModals() {
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('authModal')?.classList.remove('open');
  document.getElementById('searchOverlay')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('active');
}
 
// ===== AUTH =====
function openAuthModal() {
  if (user) { showProfileMenu(); return; }
  const modal = document.getElementById('authModal');
  const overlay = document.getElementById('overlay');
  if (modal) modal.classList.add('open');
  if (overlay) overlay.classList.add('active');
}
function closeAuthModal() {
  document.getElementById('authModal')?.classList.remove('open');
  document.getElementById('overlay')?.classList.remove('active');
}
function switchTab(tab) {
  document.getElementById('signinTab')?.classList.toggle('active', tab === 'signin');
  document.getElementById('signupTab')?.classList.toggle('active', tab === 'signup');
  document.getElementById('signinForm').style.display = tab === 'signin' ? 'block' : 'none';
  document.getElementById('signupForm').style.display = tab === 'signup' ? 'block' : 'none';
}
function handleSignIn() {
  const email = document.getElementById('signinEmail')?.value;
  const pass = document.getElementById('signinPass')?.value;

  // Ligtas na pag-check: Kung walang showToast, gagamit ng simpleng alert
  const notify = (msg) => { typeof showToast !== 'undefined' ? showToast(msg) : alert(msg); };

  if (!email || !pass) { 
    notify('Please fill in all fields'); 
    return; 
  }

  if (typeof window.firebase !== 'undefined' && window.firebase.auth) {
    window.firebase.auth().signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        currentUser = {
          name: user.displayName || user.email.split('@')[0],
          email: user.email,
          id: user.uid
        };
        localStorage.setItem('dng-user', JSON.stringify(currentUser));
        closeAuthModal();
        notify(`Welcome back, ${currentUser.name}! 💕`);
        updateProfileBtn();
        if(window.location.pathname.includes('orders.html')) renderOrdersPage();
      })
      .catch((error) => {
        notify(error.message);
      });
  } else {
    notify('Firebase is loading. Please refresh.');
  }
}

function handleSignUp() {
  const name = document.getElementById('signupName')?.value;
  const email = document.getElementById('signupEmail')?.value;
  const pass = document.getElementById('signupPass')?.value;

  // Ligtas na pag-check: Kung walang showToast, gagamit ng simpleng alert
  const notify = (msg) => { typeof showToast !== 'undefined' ? showToast(msg) : alert(msg); };

  if (!name || !email || !pass) { 
    notify('Please fill in all fields'); 
    return; 
  }

  if (typeof window.firebase !== 'undefined' && window.firebase.auth) {
    window.firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.updateProfile({ displayName: name }).then(() => {
          currentUser = {
            name: name,
            email: user.email,
            id: user.uid
          };
          localStorage.setItem('dng-user', JSON.stringify(currentUser));
          closeAuthModal();
          notify(`Welcome to D&G, ${name}! 🌸`);
          updateProfileBtn();
        });
      })
      .catch((error) => {
        notify(error.message);
      });
  } else {
    notify('Firebase is loading. Please refresh.');
  }
}
function showProfileMenu() {
  showToast(`Signed in as ${user.name} · Click to sign out`);
  setTimeout(() => {
    if (confirm(`Signed in as ${user.name}\nSign out?`)) {
      user = null; saveUser(); updateProfileBtn(); showToast('Signed out');
    }
  }, 300);
}
function updateProfileBtn() {
  const btn = document.getElementById('profileBtn');
  if (!btn) return;
  if (user) {
    btn.innerHTML = `<span style="font-weight:700;font-size:0.8rem;color:var(--red)">${user.name[0].toUpperCase()}</span>`;
  } else {
    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`;
  }
}
 
// ===== SEARCH =====
function handleSearch(query) {
  const container = document.getElementById('searchResults');
  if (!container) return;
  if (!query.trim()) { container.innerHTML = ''; return; }
  PRODUCTS = loadProducts(); // always fresh
  const q = query.toLowerCase();
  const results = PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  if (results.length === 0) {
    container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-mid)">No results for "${query}"</div>`;
    return;
  }
  container.innerHTML = results.slice(0, 6).map(p => `
    <div class="search-result-item" onclick="goToProduct(${p.id})">
      <div class="search-result-img" style="border-radius:10px;width:48px;height:48px;overflow:hidden;background:#f5f5f5;flex-shrink:0;">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      <div class="search-result-info"><h4>${p.name}</h4><p>${p.category}</p></div>
      <span class="search-result-price">₱${p.price.toLocaleString()}</span>
    </div>
  `).join('');
}
function goToProduct(id) {
  toggleSearch();
  window.location.href = `shop.html?id=${id}`;
}
 
// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
 
// ===== RENDER PRODUCTS =====
function renderFeaturedProducts(containerId, limit = 8, filter = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  PRODUCTS = loadProducts();
  let list = filter ? PRODUCTS.filter(p => p.tags.includes(filter)) : PRODUCTS;
  list = list.slice(0, limit);
  container.innerHTML = list.map(p => renderProductCard(p)).join('');
}
 
function renderAllProducts(containerId, filter = null) {
  const container = document.getElementById(containerId);
  if (!container) return;
  PRODUCTS = loadProducts();
  let list = filter ? PRODUCTS.filter(p => p.tags.includes(filter)) : PRODUCTS;
  container.innerHTML = list.map(p => renderProductCard(p)).join('');
}
 
function renderProductCard(p) {
  return `
    <div class="product-card" data-id="${p.id}">
      <div class="product-img" style="position:relative;overflow:hidden;background:#f5f5f5;">
        <img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.4s ease;">
        ${p.badge ? `<div class="product-badge ${p.badgeClass||''}">${p.badge}</div>` : ''}
        <div class="product-actions">
          <button class="btn-primary" onclick="addToCart(${p.id})">Add to Bag</button>
        </div>
      </div>
      <div class="product-info">
        <h4>${p.name}</h4>
        <div class="category">${p.category}</div>
        <div class="product-price-row">
          <span class="product-price">₱${p.price.toLocaleString()}</span>
          <button class="wishlist-btn" onclick="toggleWishlist(this, ${p.id})" title="Wishlist">♡</button>
        </div>
      </div>
    </div>
  `;
}
 
function toggleWishlist(btn, id) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
  PRODUCTS = loadProducts();
  const p = PRODUCTS.find(x => x.id === id);
  showToast(btn.classList.contains('active') ? `${p?.name} saved to wishlist 💕` : `Removed from wishlist`);
}
 
// ===== CHECKOUT: write order to shared store =====
function placeOrder(orderData = {}) {
  if (cart.length === 0) return null;

  const orders = loadOrders();
  const newId = '#DG-' + Math.floor(1000 + Math.random() * 9000);
  const user = JSON.parse(localStorage.getItem('dng-user'));

  // I-structure ang data para sa Cloud Firestore
  const orderForBackend = {
    orderId: newId,
    customerName: orderData.name || (user?.name || 'Guest User'),
    email: orderData.email || (user?.email || 'guest@example.com'),
    userId: user ? user.id : 'GUEST',
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    itemsCount: cart.reduce((s, x) => s + x.qty, 0),
    totalPrice: cart.reduce((s, x) => s + x.price * x.qty, 0),
    status: 'placed',
    products: cart.map(x => ({ id: x.id, name: x.name, qty: x.qty, price: x.price, img: x.img })),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  // I-save real-time sa Firebase Firestore
  if (typeof db !== 'undefined') {
    db.collection('orders').add(orderForBackend)
      .then((docRef) => {
        console.log("Order saved to Firestore ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Firestore Error: ", error);
      });
  }

  // Iwanang buo ang orihinal mong local clearing structure
  const newOrder = {
    id: newId,
    customerName: orderData.name || (user?.name || 'Guest'),
    email: orderData.email || (user?.email || ''),
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    items: cart.reduce((s, x) => s + x.qty, 0),
    total: cart.reduce((s, x) => s + x.price * x.qty, 0),
    status: 'placed',
    products: cart.map(x => x.id),
  };
  orders.unshift(newOrder);
  saveOrders(orders);

  cart = [];
  saveCart();
  updateCartUI();
  return newId;
}
 
// ===== NAV ACTIVE =====
function setActiveNav(page) {
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === page || (page === 'index.html' && href === 'index.html'));
  });
}
 
// ===== SCROLL NAVBAR =====
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
});
 
// ===== IMAGE HOVER ZOOM =====
document.addEventListener('mouseover', e => {
  const img = e.target.closest('.product-img')?.querySelector('img');
  if (img) img.style.transform = 'scale(1.06)';
});
document.addEventListener('mouseout', e => {
  const img = e.target.closest('.product-img')?.querySelector('img');
  if (img) img.style.transform = 'scale(1)';
});
 
// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  PRODUCTS = loadProducts();
  updateCartUI();
  updateProfileBtn();
});
// FIREBACK BACKEND INTEGRATION //
let currentUserData = null;

if (typeof auth !== 'undefined') {
  auth.onAuthStateChanged(user => {
    if (user) {
      currentUserData = {
        name: user.displayName || user.email.split('@')[0],
        email: user.email,
        uid: user.uid
      };
    } else {
      currentUserData = null;
    }
    if (typeof updateProfileBtn === 'function') updateProfileBtn();
  });
}
// Function para buksan ang Auth Modal
function openAuthModal() {
  const modal = document.getElementById('authModal');
  const overlay = document.getElementById('overlay');
  if (modal) modal.style.display = 'flex';
  if (overlay) overlay.style.display = 'block';
}

// Function para isara ang Auth Modal
function closeAuthModal() {
  const modal = document.getElementById('authModal');
  const overlay = document.getElementById('overlay');
  if (modal) modal.style.display = 'none';
  if (overlay) overlay.style.display = 'none';
}

// Function para maglipat-lipat sa Sign In at Sign Up tabs
function switchTab(tab) {
  const signinForm = document.getElementById('signinForm');
  const signupForm = document.getElementById('signupForm');
  const signinTab = document.getElementById('signinTab');
  const signupTab = document.getElementById('signupTab');

  if (tab === 'signin') {
    if (signinForm) signinForm.style.display = 'block';
    if (signupForm) signupForm.style.display = 'none';
    if (signinTab) signinTab.classList.add('active');
    if (signupTab) signupTab.classList.remove('active');
  } else if (tab === 'signup') {
    if (signinForm) signinForm.style.display = 'none';
    if (signupForm) signupForm.style.display = 'block';
    if (signinTab) signinTab.classList.remove('active');
    if (signupTab) signupTab.classList.add('active');
  }
}
// ===== FIREBASE AUTH STATE MONITOR FOR PROFILE/LOGOUT =====
firebase.auth().onAuthStateChanged((user) => {
  const profileBtn = document.getElementById('profileBtn');
  
  if (!profileBtn) return; 

 if (user) {
    profileBtn.onclick = null;
    profileBtn.style.display = "flex";
    profileBtn.style.alignItems = "center";
    profileBtn.style.gap = "8px";
    
    // Hindi natin buburahin ang button, maglalagay lang tayo ng text at logout
    profileBtn.innerHTML = `
      <span style="font-size: 11px; font-weight: 600; white-space: nowrap;">Hi, ${user.displayName || 'Lovely'}!</span>
      <button onclick="handleLogOut(event)" style="background: #ff4d4d; color: white; border: none; padding: 2px 6px; border-radius: 4px; font-size: 9px; cursor: pointer;">OUT</button>
    `;
} else {
    // Ibalik sa orihinal na icon kapag naka-logout
    profileBtn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    `;
    profileBtn.onclick = openAuthModal;
}
});

// ===== LOG OUT LOGIC =====
function handleLogOut() {
  if (confirm("Are you sure you want to log out, lovely? 🌸")) {
    firebase.auth().signOut()
      .then(() => {
        alert('Logged out successfully!');
        localStorage.removeItem('dng-user');
        location.reload(); 
      })
      .catch((error) => {
        alert('Error logging out: ' + error.message);
      });
  }
}