// ============================================
// EditFlow AI - Shared JavaScript
// ============================================

// Toast notification
function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = 'toast ' + type;
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// Close mobile menu when clicking a link
document.addEventListener('click', function(e) {
  const link = e.target.closest('.mobile-menu .nav-link');
  if (link) {
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.remove('open');
  }
});

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });
}

// Search modal
function openSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) {
    overlay.classList.add('open');
    const input = overlay.querySelector('input');
    if (input) setTimeout(() => input.focus(), 100);
  }
}

function closeSearch() {
  const overlay = document.getElementById('searchOverlay');
  if (overlay) overlay.classList.remove('open');
}

// Search keyboard shortcut
document.addEventListener('keydown', function(e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    openSearch();
  }
  if (e.key === 'Escape') {
    closeSearch();
    const menu = document.getElementById('mobileMenu');
    if (menu) menu.classList.remove('open');
  }
});

// Search functionality
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  if (!searchInput || !searchResults) return;

  const items = [
    { title: 'Home', url: '/', icon: '🏠', category: 'Page' },
    { title: 'Tutorials', url: '/tutorials/', icon: '📚', category: 'Page' },
    { title: 'AI Assistant', url: '/ai-assistant/', icon: '🤖', category: 'Page' },
    { title: 'Resources', url: '/resources/', icon: '📦', category: 'Page' },
    { title: 'Troubleshooting', url: '/troubleshooting/', icon: '🔧', category: 'Page' },
    { title: 'Community', url: '/community/', icon: '👥', category: 'Page' },
    { title: 'Admin Dashboard', url: '/admin/', icon: '⚙️', category: 'Page' },
    { title: 'Gaming Montage Guide', url: '/tutorials/', icon: '🎮', category: 'Tutorial' },
    { title: 'Anime Edit Tutorial', url: '/tutorials/', icon: '⛩️', category: 'Tutorial' },
    { title: 'Color Grading Masterclass', url: '/tutorials/', icon: '🎨', category: 'Tutorial' },
    { title: 'Sound Design Basics', url: '/tutorials/', icon: '🔊', category: 'Tutorial' },
    { title: 'Export Settings Guide', url: '/tutorials/', icon: '📤', category: 'Tutorial' },
    { title: 'Fix Lag & Stuttering', url: '/troubleshooting/', icon: '🐌', category: 'Fix' },
    { title: 'Fix Crashes', url: '/troubleshooting/', icon: '💥', category: 'Fix' },
    { title: 'Fix Rendering Issues', url: '/troubleshooting/', icon: '⏳', category: 'Fix' },
    { title: 'Free LUTs Pack', url: '/resources/', icon: '🎨', category: 'Resource' },
    { title: 'Transition Pack', url: '/resources/', icon: '✨', category: 'Resource' },
    { title: 'Overlay Pack', url: '/resources/', icon: '🔲', category: 'Resource' },
    { title: 'Font Collection', url: '/resources/', icon: '🔤', category: 'Resource' },
  ];

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    if (!query) {
      searchResults.innerHTML = '';
      return;
    }
    const filtered = items.filter(item => item.title.toLowerCase().includes(query));
    searchResults.innerHTML = filtered.map(item => `
      <a href="${item.url}" class="search-result-item" onclick="closeSearch()">
        <div class="search-result-icon">${item.icon}</div>
        <div class="search-result-info">
          <h4>${item.title}</h4>
          <span>${item.category}</span>
        </div>
      </a>
    `).join('');
    if (filtered.length === 0) {
      searchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-muted);">No results found</div>';
    }
  });
}

// Issue accordion
function toggleIssue(el) {
  const card = el.closest('.issue-card');
  if (card) card.classList.toggle('open');
}

// Download simulation
function downloadResource(name) {
  showToast('Starting download: ' + name, 'success');
  setTimeout(() => {
    showToast('Downloaded: ' + name, 'success');
  }, 1500);
}

function saveResource(name) {
  showToast('Saved to your collection: ' + name, 'success');
}

// Auth
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (email === 'demo@editflow.ai' && password === 'demo123') {
    localStorage.setItem('editflow_user', JSON.stringify({ email: email, name: 'Demo User' }));
    showToast('Welcome back, Demo User!', 'success');
    setTimeout(() => window.location.href = '/', 1000);
  } else {
    showToast('Invalid credentials. Try demo@editflow.ai / demo123', 'error');
  }
}

function handleSignup(e) {
  e.preventDefault();
  showToast('Account created! Welcome to EditFlow.', 'success');
  setTimeout(() => window.location.href = '/login/', 1000);
}

function logout() {
  localStorage.removeItem('editflow_user');
  showToast('Logged out successfully', 'success');
  setTimeout(() => window.location.href = '/', 1000);
}

function updateAuthUI() {
  const user = localStorage.getItem('editflow_user');
  const authBtn = document.getElementById('authBtn');
  const mobileAuth = document.getElementById('mobileAuth');
  if (user) {
    const data = JSON.parse(user);
    if (authBtn) {
      authBtn.textContent = data.name;
      authBtn.href = '#';
      authBtn.onclick = function(e) { e.preventDefault(); logout(); };
    }
    if (mobileAuth) {
      mobileAuth.textContent = 'Logout';
      mobileAuth.onclick = function(e) { e.preventDefault(); logout(); };
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  initHeaderScroll();
  initSearch();
  updateAuthUI();
});
