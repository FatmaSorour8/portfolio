// ========== MAIN JAVASCRIPT ==========

// Typewriter Effect
const typewriterText = "Fatma Sorour...";
const typewriterElement = document.getElementById('typewriter-text');
let index = 0;

function typeWriter() {
  if (index < typewriterText.length) {
    typewriterElement.innerHTML = typewriterText.substring(0, index + 1) + '<span class="typewriter-cursor"></span>';
    index++;
    setTimeout(typeWriter, 150);
  } else {
    typewriterElement.innerHTML = typewriterText + '<span class="typewriter-cursor"></span>';
    setTimeout(() => { index = 0; typeWriter(); }, 2500);
  }
}

// Load all portfolio data dynamically
function loadPortfolioData() {
  if (typeof portfolioData === 'undefined') {
    console.error('Portfolio data not loaded. Make sure data.js is included.');
    return;
  }

  const data = portfolioData;

  // Load Hero Section
  if (data.personal) {
    document.getElementById('hero-description').textContent = data.personal.heroDescription || '';
    if (data.personal.profileImage) {
      document.getElementById('profile-image').src = data.personal.profileImage;
    }
    if (data.personal.cvFile) {
      const cvButtons = document.querySelectorAll('#downloadCvBtn, #downloadCvBtn2');
      cvButtons.forEach(btn => {
        btn.href = data.personal.cvFile;
      });
    }
  }

  // Load About Section
  if (data.personal) {
    const aboutNameEl = document.getElementById('about-name');
    if (aboutNameEl && data.personal.aboutName) {
      const parts = data.personal.aboutName.split('-');
      if (parts.length >= 2) {
        aboutNameEl.innerHTML = parts[0] + '- <span class="gradient-text">' + parts[1] + '</span>';
      } else {
        aboutNameEl.innerHTML = data.personal.aboutName;
      }
    }
    
    const aboutDescEl = document.getElementById('about-description');
    if (aboutDescEl && data.personal.aboutDescription) {
      aboutDescEl.innerHTML = data.personal.aboutDescription.map(p => `<p>${p}</p>`).join('');
    }
  }

  // Load Social Links
  if (data.socialLinks) {
    const socialContainer = document.querySelector('.social-links');
    const footerSocialContainer = document.querySelector('.social-links-footer');
    
    const socialHtml = data.socialLinks.map(link => 
      `<a href="${link.url}" target="_blank" class="${link.color} text-xl transition transform hover:scale-110"><i class="${link.icon}"></i></a>`
    ).join('');
    
    if (socialContainer) socialContainer.innerHTML = socialHtml;
    if (footerSocialContainer) footerSocialContainer.innerHTML = socialHtml;
  }

  // Load Contact Info
  if (data.contactInfo) {
    const contactContainer = document.getElementById('contact-info-container');
    if (contactContainer) {
      contactContainer.innerHTML = `
        <div>
          <h3 class="text-3xl font-bold gradient-text">Contact me</h3>
          <div class="mt-6 space-y-4">
            <div class="contact-info-item">
              <i class="fas fa-map-marker-alt text-blue-400 w-7"></i> 
              ${data.contactInfo.address || ''}
            </div>
            <div class="contact-info-item">
              <i class="fas fa-envelope text-blue-400 w-7"></i> 
              <a href="mailto:${data.contactInfo.email}" class="hover:text-blue-400 transition">
                ${data.contactInfo.email || ''}
              </a>
            </div>
            <div class="contact-info-item">
              <i class="fas fa-phone-alt text-blue-400 w-7"></i> 
              ${data.contactInfo.phone || ''}
            </div>
            <div class="contact-info-item">
              <i class="fas fa-calendar-check text-green-400 w-7"></i> 
              ${data.contactInfo.availability || ''}
            </div>
          </div>
        </div>
      `;
    }
  }

  // Load Experience Section
  if (data.experiences && data.experiences.length > 0) {
    const expContainer = document.getElementById('experience-container');
    expContainer.innerHTML = data.experiences.map((exp, idx) => `
      <div class="ml-8 relative timeline-item stagger-item delay-${(idx+1)*100}">
        <div class="absolute -left-[42px] top-2 w-4 h-4 bg-${exp.color || 'blue'}-500 rounded-full shadow-lg shadow-${exp.color || 'blue'}-500/50"></div>
        <div class="glass-card p-6">
          <div class="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h3 class="text-2xl font-bold text-${exp.color || 'blue'}-300">${exp.title}</h3>
              <p class="text-lg font-medium mt-1">${exp.company}</p>
              <p class="text-sm mt-1 text-gray-400">${exp.location}</p>
            </div>
            <span class="project-tag">${exp.period}</span>
          </div>
          <ul class="mt-5 space-y-3 text-gray-400 leading-relaxed">
            ${exp.responsibilities.map(r => `<li>• ${r}</li>`).join('')}
          </ul>
          <div class="flex flex-wrap gap-2 mt-5">
            ${exp.technologies.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
    document.getElementById('experience').style.display = 'block';
  } else {
    document.getElementById('experience').style.display = 'none';
  }

  // Load Skills Section
  if (data.skills) {
    const skillsContainer = document.getElementById('skills-container');
    const skillCategories = [
      { title: "Frontend Development", icon: "fab fa-react", color: "text-blue-400", skills: data.skills.frontend },
      { title: "Backend Development", icon: "fas fa-server", color: "text-green-400", skills: data.skills.backend },
      { title: "Database", icon: "fas fa-database", color: "text-cyan-400", skills: data.skills.database },
      { title: "Source Controls & Others", icon: "fas fa-pen-fancy", color: "text-pink-400", skills: data.skills.others }
    ];
    
    skillsContainer.innerHTML = skillCategories.map((cat, idx) => `
      <div class="glass-card p-6 stagger-item delay-${(idx+1)*100}">
        <h3 class="text-2xl font-bold flex gap-2"><i class="${cat.icon} ${cat.color}"></i> ${cat.title}</h3>
        <div class="flex flex-wrap gap-2 mt-5">
          ${cat.skills ? cat.skills.map(s => `<span class="skill-badge px-4 py-2 rounded-full text-sm font-medium inline-block transition">${s}</span>`).join('') : ''}
        </div>
      </div>
    `).join('');
  }

  // Load Education Section
  if (data.education && data.education.length > 0) {
    const eduContainer = document.getElementById('education-container');
    eduContainer.innerHTML = data.education.map((edu, idx) => `
      <div class="p-6 rounded-2xl border-l-2 border-blue-500 transition transform hover:translate-x-1 stagger-item delay-${(idx+1)*100}" style="background: var(--bg-primary);">
        <p class="text-blue-300 text-sm">${edu.period}</p>
        <h3 class="text-xl font-bold mt-1">${edu.title}</h3>
        <p class="text-gray-400 mt-2">${edu.description}</p>
      </div>
    `).join('');
    document.getElementById('education').style.display = 'block';
  } else {
    document.getElementById('education').style.display = 'none';
  }

  // Load Projects Section
  if (data.projects && data.projects.length > 0) {
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = data.projects.map((proj, idx) => `
      <div class="glass-card p-5 h-full transition-all duration-300 project-card stagger-item delay-${(idx%5+1)*100}">
        ${proj.image ? `<img src="${proj.image}" alt="${proj.title}" class="w-full h-48 object-cover rounded-xl mb-4">` : ''}
        <h3 class="text-xl font-bold text-blue-300">${proj.title}</h3>
        <p class="text-sm mt-2" style="color:var(--text-secondary)">${proj.description}</p>
        <div class="flex flex-wrap gap-2 mt-4">
          ${proj.technologies.map(t => `<span class="project-tag text-xs inline-block transition">${t}</span>`).join('')}
        </div>
        <div class="flex gap-3 mt-4">
          ${proj.liveDemo ? `<a href="${proj.liveDemo}" target="_blank" class="text-blue-400 hover:text-blue-300 text-sm"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
          ${proj.github ? `<a href="${proj.github}" target="_blank" class="text-gray-400 hover:text-gray-300 text-sm"><i class="fab fa-github"></i> Code</a>` : ''}
        </div>
      </div>
    `).join('');
    document.getElementById('projects').style.display = 'block';
  } else {
    document.getElementById('projects').style.display = 'none';
  }
}

// Dark/Light Mode
function setTheme(theme) {
  if (theme === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');
  localStorage.setItem('portfolio-theme', theme);
  updateToggleIcons(theme);
}

function updateToggleIcons(theme) {
  const isLight = theme === 'light';
  const icons = document.querySelectorAll('#desktopThemeToggle i, #sideThemeToggle i');
  icons.forEach(icon => {
    if (icon.classList) icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  });
}

const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
if (storedTheme === 'light') document.body.classList.add('light');
updateToggleIcons(storedTheme);

document.getElementById('desktopThemeToggle')?.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  setTheme(newTheme);
});

document.getElementById('sideThemeToggle')?.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  setTheme(newTheme);
});

// Side Menu Functionality
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const openIcon = document.getElementById('mobileMenuIcon');
const closeSide = document.getElementById('closeSideMenu');

function openMenu() {
  sideMenu.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

openIcon?.addEventListener('click', openMenu);
closeSide?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);
document.querySelectorAll('.side-menu a').forEach(link => link.addEventListener('click', closeMenu));

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTopButton.classList.add('show');
  else backToTopButton.classList.remove('show');
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const successDiv = document.getElementById('form-success');
const errorDiv = document.getElementById('form-error');
const sendButton = document.getElementById('sendBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!firstName || !lastName || !email || !message) {
      errorDiv.classList.remove('hidden');
      successDiv.classList.add('hidden');
      setTimeout(() => errorDiv.classList.add('hidden'), 3000);
      return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorDiv.classList.remove('hidden');
      successDiv.classList.add('hidden');
      setTimeout(() => errorDiv.classList.add('hidden'), 3000);
      return;
    }
    
    const originalText = sendButton.innerHTML;
    sendButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    sendButton.disabled = true;
    
    const formData = new FormData();
    formData.append('name', `${firstName} ${lastName}`);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('_subject', `Portfolio Message from ${firstName} ${lastName}`);
    formData.append('_captcha', 'false');
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/fatmaa.sorour86@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success === true || response.ok) {
        successDiv.classList.remove('hidden');
        errorDiv.classList.add('hidden');
        contactForm.reset();
        setTimeout(() => successDiv.classList.add('hidden'), 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      errorDiv.classList.remove('hidden');
      successDiv.classList.add('hidden');
      setTimeout(() => errorDiv.classList.add('hidden'), 5000);
    } finally {
      sendButton.innerHTML = originalText;
      sendButton.disabled = false;
    }
  });
}

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-up');
      const staggerChildren = entry.target.querySelectorAll('.stagger-item');
      staggerChildren.forEach((child, idx) => {
        setTimeout(() => child.classList.add('revealed'), idx * 50);
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('section, .timeline-item, .glass-card:not(.stagger-item)').forEach(el => {
  if (!el.classList.contains('reveal-section')) el.classList.add('reveal-section');
  revealObserver.observe(el);
});
document.querySelectorAll('.stagger-item').forEach(el => revealObserver.observe(el));

// Canvas Network Animation
const canvas = document.getElementById('tech-canvas');
const ctx = canvas.getContext('2d');
let particlesArray = [];
let isLightMode = document.body.classList.contains('light');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

const observerTheme = new MutationObserver(() => {
  isLightMode = document.body.classList.contains('light');
});
observerTheme.observe(document.body, { attributes: true, attributeFilter: ['class'] });

class Particle {
  constructor(x, y, directionX, directionY, size) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = isLightMode ? 'rgba(37, 99, 235, 0.5)' : 'rgba(96, 165, 250, 0.6)';
    ctx.fill();
  }
  update() {
    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function initParticles() {
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 12000;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = (Math.random() * 3) + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let directionX = (Math.random() * 1) - 0.5;
    let directionY = (Math.random() * 1) - 0.5;
    particlesArray.push(new Particle(x, y, directionX, directionY, size));
  }
}

function connectParticles() {
  let maxDistance = 140;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
      if (distance < (maxDistance * maxDistance)) {
        let opacityValue = 1 - (distance / (maxDistance * maxDistance));
        let lineColor = isLightMode ? `rgba(37, 99, 235, ${opacityValue * 0.5})` : `rgba(167, 139, 250, ${opacityValue * 0.2})`;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update();
  connectParticles();
}

initParticles();
animateParticles();

// Set current year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Initialize typewriter and load data
typeWriter();
loadPortfolioData();