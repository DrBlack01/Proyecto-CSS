// ========================================
// JAVASCRIPT PRINCIPAL
// ========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // ========================================
  // HEADER SCROLL EFFECT
  // ========================================
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Agregar clase 'scrolled' cuando se hace scroll
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  
  // ========================================
  // MOBILE MENU TOGGLE
  // ========================================
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Función para toggle del menú
  function toggleMenu() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Cambiar ARIA attribute para accesibilidad
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
  }
  
  // Event listener para el botón toggle
  if (navToggle) {
    navToggle.addEventListener('click', toggleMenu);
  }
  
  // Cerrar menú al hacer click en un link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Cerrar menú al hacer click fuera de él
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu();
      }
    }
  });
  
  
  // ========================================
  // SMOOTH SCROLL PARA LINKS INTERNOS
  // ========================================
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = header.offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  // ========================================
  // ACTIVE LINK EN NAVEGACIÓN
  // ========================================
  const sections = document.querySelectorAll('section[id]');
  
  function setActiveLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - header.offsetHeight - 100;
      const sectionId = section.getAttribute('id');
      const correspondingLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        // Remover active de todos los links
        navLinks.forEach(link => link.classList.remove('nav__link--active'));
        
        // Agregar active al link correspondiente
        if (correspondingLink) {
          correspondingLink.classList.add('nav__link--active');
        }
      }
    });
  }
  
  window.addEventListener('scroll', setActiveLink);
  
  
  // ========================================
  // ANIMACIONES AL HACER SCROLL (INTERSECTION OBSERVER)
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar elementos con clase .animate-on-scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));
  
  
  // ========================================
  // RIPPLE EFFECT EN BOTONES
  // ========================================
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple-effect');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
  
  
  // ========================================
  // LAZY LOADING DE IMÁGENES
  // ========================================
  if ('loading' in HTMLImageElement.prototype) {
    // El navegador soporta lazy loading nativo
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback para navegadores que no soportan lazy loading
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  
  // ========================================
  // FORMULARIOS (Si los hay)
  // ========================================
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Aquí puedes agregar lógica para enviar el formulario
      console.log('Formulario enviado');
      
      // Ejemplo de validación básica
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
      
      if (isValid) {
        // Aquí harías la petición AJAX o lo que necesites
        console.log('Formulario válido, listo para enviar');
      }
    });
  });
  
  
  // ========================================
  // PREVENIR TRANSICIONES EN RESIZE
  // ========================================
  let resizeTimer;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });
  
  
  // ========================================
  // DETECCIÓN DE DARK MODE (Opcional)
  // ========================================
  // Si quieres implementar dark mode en el futuro
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  if (prefersDarkScheme.matches) {
    // document.body.classList.add('dark-mode');
  }
  
  prefersDarkScheme.addEventListener('change', (e) => {
    if (e.matches) {
      // document.body.classList.add('dark-mode');
    } else {
      // document.body.classList.remove('dark-mode');
    }
  });
  
  
  // ========================================
  // CONSOLE LOG DE BIENVENIDA
  // ========================================
  console.log('%c¡Sitio desarrollado con ❤️!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
  console.log('%cGracias por visitar', 'color: #ec4899; font-size: 14px;');
  
});


// ========================================
// FUNCIONES AUXILIARES
// ========================================

// Throttle function para optimizar eventos que se disparan muy seguido
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounce function
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}