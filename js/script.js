// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
fadeElements.forEach(el => observer.observe(el));

// Highlight active menu
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll('#nav-menu a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// Dark Mode toggle (with icon change)
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Keep theme after reload
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggle.textContent = '☀️';
}
