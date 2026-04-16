// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

const applyTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
};

const initialTheme = html.getAttribute('data-theme') || 'dark';
applyTheme(initialTheme);

themeToggle.addEventListener('click', () => {
  const nextTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
});

// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const offsetTop = targetSection.offsetTop - 80;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });

    // Update active link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = '0s';
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});

// Update active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
