/* ============================================
   DEEP BRIEF - INTERACTIVE FEATURES
   JavaScript for animations and interactions
   ============================================ */

(function() {
  'use strict';

  // ============================================
  // READING PROGRESS BAR
  // ============================================
  function initReadingProgress() {
    // Only show on post pages
    if (!document.querySelector('.post-content')) return;

    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-bar"></div>';
    document.body.prepend(progressBar);

    // Update progress on scroll
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      const bar = progressBar.querySelector('.reading-progress-bar');
      if (bar) {
        bar.style.width = scrolled + '%';
      }
    });
  }

  // ============================================
  // FLOATING BUBBLES IN SIDEBAR
  // ============================================
  function initFloatingBubbles() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // Create 3 bubbles
    for (let i = 1; i <= 3; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      sidebar.appendChild(bubble);
    }
  }

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe post preview cards
    document.querySelectorAll('.post-preview').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });

    // Observe headings in post content
    document.querySelectorAll('.post-content h2, .post-content h3').forEach(el => {
      el.classList.add('fade-in-left');
      observer.observe(el);
    });

    // Observe images
    document.querySelectorAll('.post-content img').forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  }

  // ============================================
  // WAVE DIVIDERS
  // ============================================
  function addWaveDividers() {
    // Add wave divider after H1 in posts
    const postTitle = document.querySelector('.post-content')?.closest('article')?.querySelector('h1');
    if (postTitle) {
      const waveDiv = createWaveDivider();
      postTitle.insertAdjacentElement('afterend', waveDiv);
    }

    // Add wave dividers after horizontal rules in content
    document.querySelectorAll('.post-content hr').forEach(hr => {
      const waveDiv = createWaveDivider();
      hr.replaceWith(waveDiv);
    });
  }

  function createWaveDivider() {
    const div = document.createElement('div');
    div.className = 'wave-divider';
    div.innerHTML = `
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path class="wave" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
        <path class="wave" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
        <path class="wave" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    `;
    return div;
  }

  // ============================================
  // ENHANCED BUTTON RIPPLE EFFECT
  // ============================================
  function initRippleEffect() {
    document.querySelectorAll('.btn').forEach(btn => {
      btn.classList.add('btn-ripple');
    });
  }

  // ============================================
  // BIO-LUMINESCENT GLOW
  // ============================================
  function initBioGlow() {
    // Add glow effect to avatar
    const avatar = document.querySelector('.site-avatar img');
    if (avatar) {
      avatar.closest('.site-avatar').classList.add('bio-glow');
    }

    // Add glow to featured posts
    document.querySelectorAll('.pin').forEach(el => {
      el.closest('.post-preview')?.classList.add('featured-post');
    });
  }

  // ============================================
  // ENHANCED LINKS
  // ============================================
  function enhanceLinks() {
    // Add glow effect to content links
    document.querySelectorAll('.post-content a:not(.btn)').forEach(link => {
      link.classList.add('glow-link');
    });
  }

  // ============================================
  // SMOOTH SCROLL TO TOP
  // ============================================
  function enhanceBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // ============================================
  // ADD DEPTH CLASSES
  // ============================================
  function addDepthShadows() {
    // Add depth to cards
    document.querySelectorAll('.card').forEach(card => {
      card.classList.add('depth-2');
    });

    // Add depth to sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.classList.add('depth-3');
    }
  }

  // ============================================
  // PAGE TRANSITION
  // ============================================
  function initPageTransition() {
    document.querySelector('#main-wrapper')?.classList.add('page-transition');
  }

  // ============================================
  // INITIALIZE ALL FEATURES
  // ============================================
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initReadingProgress();
    initFloatingBubbles();
    initScrollAnimations();
    addWaveDividers();
    initRippleEffect();
    initBioGlow();
    enhanceLinks();
    enhanceBackToTop();
    addDepthShadows();
    initPageTransition();

    console.log('🌊 Deep Brief enhanced features loaded');
  }

  // Start initialization
  init();
})();
