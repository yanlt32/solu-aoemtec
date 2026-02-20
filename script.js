// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      
      // Alternar ícone do menu
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }
  
  // Fechar menu ao clicar em um link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
  
  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Animação ao scroll
  const animateElements = document.querySelectorAll('.animate-fadeIn, .animate-slideUp, .animate-scale');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
      }
    });
  }, { threshold: 0.1 });
  
  animateElements.forEach(element => {
    element.style.opacity = '0';
    observer.observe(element);
  });
  
  // Destacar link ativo no menu
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
  
  // Links atualizados da YR Systems
  console.log('YR Systems carregada com sucesso!');
  console.log('GitHub Yan: https://github.com/yanlt32');
  console.log('LinkedIn Yan: https://www.linkedin.com/in/yan-tortelli-65501633b/');
  console.log('GitHub Rikelmy: https://github.com/Rikelmydev');
  console.log('LinkedIn Rikelmy: https://www.linkedin.com/in/rikelmy-anacleto-07102006d18/');
  console.log('Contato WhatsApp: (11) 96209-4589');
});

// Lazy loading para imagens (se houver no futuro)
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
} else {
  // Fallback para navegadores antigos
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}

// Contador de visitas simples (opcional)
if (localStorage.getItem('visitCount')) {
  let count = parseInt(localStorage.getItem('visitCount'));
  localStorage.setItem('visitCount', count + 1);
} else {
  localStorage.setItem('visitCount', 1);
}

// Prevenir comportamento padrão do formulário se existir
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    alert('Mensagem enviada! Entraremos em contato em breve.');
  });
}