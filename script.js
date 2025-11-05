// KU Buddy site JS (menu, smooth scroll, modal, download)

document.addEventListener('DOMContentLoaded', function() {
  // Menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (menuToggle && navList) {
    menuToggle.addEventListener('click', function() {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('show');
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 72; // header height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        // close nav on mobile
        if (navList.classList.contains('show')) navList.classList.remove('show');
      }
    });
  });

  // Modal screenshot preview
  const modal = document.getElementById('modal');
  const modalImage = document.querySelector('.modal-image');
  const modalClose = document.querySelector('.modal-close');

  document.querySelectorAll('.screenshot').forEach(img => {
    img.addEventListener('click', function() {
      modalImage.src = this.src;
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
    img.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' ') this.click();
    });
  });

  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    modalImage.src = '';
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e){
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Download CTA: uses direct APK link (opens in new tab)
  const cta = document.getElementById('ctaDownload');
  if (cta) {
    cta.addEventListener('click', function(){ /* default opens new tab */ });
  }

  // Simple sticky navbar shadow on scroll
  window.addEventListener('scroll', function(){
    const header = document.querySelector('.navbar');
    if (!header) return;
    if (window.scrollY > 20) header.style.boxShadow = '0 8px 30px rgba(27,94,32,0.08)';
    else header.style.boxShadow = 'none';
  });
});
