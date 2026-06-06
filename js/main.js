
// ========== EDITABLE PORTFOLIO ENGINE ========== //
// All content comes from /data/portfolio.json so it can be edited from Decap CMS on Netlify.

let portfolioDataCache = null;
let currentProjectsPage = 1;

const defaultPortfolioData = {"site": {"logoText": "Fatma.dev", "pageTitle": "Fatma Sorour | Full-Stack Developer Portfolio - ASP.NET Core & Angular Expert", "metaDescription": "Fatma Sorour - Professional Full-Stack Developer specializing in ASP.NET Core, Angular, MSSQL Server, and enterprise web applications.", "canonicalUrl": "https://your-domain.netlify.app/"}, "personal": {"name": "Fatma Sorour", "fullName": "Fatma Mohamed Sorour", "typewriterText": "Fatma Sorour...", "title": "Full-Stack Developer", "heroDescription": "Specialized in ASP.NET Core, Angular, MSSQL Server, and enterprise web applications. Passionate about building scalable, secure, and production-ready systems with clean architecture and modern UI/UX.", "profileImage": "/assets/profile.png", "cvFile": "/assets/Fatma_Sorour_CV.pdf", "aboutSubtitle": "About me", "aboutTitle": "Who am I?", "aboutDescription": ["I'm Fatma Mohamed Sorour, a .NET Full-Stack Developer with hands-on experience building enterprise web applications using ASP.NET Core, Angular, MSSQL Server, and Web API technologies. I specialize in developing scalable systems, workflow automation platforms, and management dashboards with clean architecture principles and secure backend integrations.", "I have practical experience working on real-world enterprise systems including PMO platforms, workflow management systems, shipping systems, and e-commerce solutions. My development approach focuses on performance, maintainability, SOLID principles, and delivering production-ready applications with excellent user experience."]}, "contactInfo": {"address": "Cairo - Egypt", "email": "fatmaa.sorour86@gmail.com", "phone": "+20 128 842 7468", "availability": "Freelance: Available Right Now"}, "socialLinks": [{"platform": "github", "url": "https://github.com/FatmaSorour8", "icon": "fab fa-github", "hoverClass": "hover:text-blue-400"}, {"platform": "linkedin", "url": "https://www.linkedin.com/in/fatma-mohamed-sorour/", "icon": "fab fa-linkedin", "hoverClass": "hover:text-blue-400"}, {"platform": "whatsapp", "url": "https://wa.me/201288427468", "icon": "fab fa-whatsapp", "hoverClass": "hover:text-green-400"}], "experiences": [{"title": "Software Developer", "company": "Positive Side Horizons (PSH)", "location": "Riyadh, KSA", "period": "Aug 2024 — Present", "color": "blue", "responsibilities": ["Developed enterprise-level workflow and management systems.", "Built scalable ASP.NET Core APIs and Angular dashboards.", "Worked with MSSQL Server, NHibernate, and Entity Framework.", "Applied SOLID principles and clean architecture practices."], "technologies": ["ASP.NET Core", "Angular", "SQL Server", "WebForms", "NHibernate", "Web API"]}, {"title": "Shopify Frontend Developer", "company": "Freelance / E-Commerce Projects", "location": "Remote", "period": "2026 — Present", "color": "purple", "responsibilities": ["Customized Shopify themes and storefront UI.", "Built responsive e-commerce pages with modern UX.", "Integrated third-party apps and payment solutions.", "Optimized store performance and mobile responsiveness."], "technologies": ["Shopify", "Liquid", "HTML5", "CSS3", "JavaScript", "Responsive Design"]}], "skills": {"frontend": ["Angular", "Responsive Design", "HTML5", "CSS3", "Bootstrap5", "JavaScript", "TypeScript", "React.js", "jQuery", "Shopify", "Liquid", "Shopify CLI", "Theme Customization"], "backend": ["ASP.NET Core MVC", "ASP.NET Core Web API", "WebForms", "Entity Framework Core", "LINQ", "C#", "JWT Authentication", "REST APIs", "Blazor"], "database": ["MSSQL Server", "NHibernate", "MongoDB", "SQL"], "others": ["Git & GitHub", "Docker", "SOLID Principles", "Design Patterns", "Agile"]}, "education": [{"period": "2019 – 2023", "title": "Bachelor of Computer Science | BFCAI", "description": "Graduated with a strong foundation in software engineering, databases, algorithms, and system design."}, {"period": "Oct, 2023 – Jul, 2024", "title": "Professional Training Program(9-Month) | ITI", "description": ".NET Full-Stack Web Development Scholarship."}, {"period": "Jul, 2023 – Oct, 2023", "title": "Full-Stack MEARN Track | ITI", "description": "MongoDB, Express, Angular/React, Node.js. Full-stack apps & integration."}], "projectsSettings": {"itemsPerPage": 3}, "projects": [{"title": "PMOS Enterprise System", "category": "Fullstack", "description": "Enterprise PMO management system following PMI standards with dashboards, reports, and workflow management.", "technologies": ["WebForms", "NHibernate", "SQL Server"], "image": "/assets/project-pmos.png", "githubLink": "", "liveLink": ""}, {"title": "Masarat Workflow System", "category": "Fullstack", "description": "Workflow automation platform for managing repetitive business processes and approvals.", "technologies": ["ASP.NET Core API", "Angular", "SQL Server"], "image": "", "githubLink": "", "liveLink": ""}, {"title": "Hotelier Booking System", "category": "Fullstack", "description": "Hotel booking platform with secure authentication and streamlined reservation management.", "technologies": ["ASP.NET Core MVC", "SQL Server", "LINQ"], "image": "/assets/project-hotelier.png", "githubLink": "", "liveLink": ""}, {"title": "Online Examination System", "category": "Desktop App", "description": "Automated examination generation system with reporting and question bank management.", "technologies": ["C#", "EF", "SQL Server", "Windows Forms"], "image": "/assets/project-exam.png", "githubLink": "", "liveLink": ""}, {"title": "MedRecChain - Graduation project", "category": "Blockchain", "description": "Blockchain-based decentralized electronic medical records sharing platform.", "technologies": ["Ethereum", "Solidity", "React", "IPFS"], "image": "/assets/project-medrecchain.png", "githubLink": "", "liveLink": ""}]};

async function loadPortfolioData() {
  try {
    const response = await fetch('/data/portfolio.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('Cannot load portfolio.json');
    portfolioDataCache = await response.json();
  } catch (error) {
    console.warn('Using fallback portfolio content because JSON could not be loaded.', error);
    portfolioDataCache = defaultPortfolioData;
  }
  applyPortfolioData(portfolioDataCache);
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function safeUrl(url, fallback = '#') {
  return url && String(url).trim() ? String(url).trim() : fallback;
}

function iconForPlatform(platform = '') {
  const p = platform.toLowerCase();
  if (p.includes('github')) return 'fab fa-github';
  if (p.includes('linkedin')) return 'fab fa-linkedin';
  if (p.includes('whatsapp')) return 'fab fa-whatsapp';
  if (p.includes('facebook')) return 'fab fa-facebook';
  if (p.includes('instagram')) return 'fab fa-instagram';
  if (p.includes('x') || p.includes('twitter')) return 'fab fa-twitter';
  return 'fas fa-link';
}

function renderSocialLinks(container, links = []) {
  if (!container) return;
  container.innerHTML = links.map(link => {
    const icon = link.icon || iconForPlatform(link.platform);
    const hover = link.hoverClass || 'hover:text-blue-400';
    return `<a href="${safeUrl(link.url)}" target="_blank" rel="noopener noreferrer" class="${hover} text-xl transition transform hover:scale-110" aria-label="${escapeHtml(link.platform)}"><i class="${escapeHtml(icon)}"></i></a>`;
  }).join('');
}

function applyPortfolioData(data) {
  if (!data || !data.personal) return;
  const personal = data.personal || {};
  const site = data.site || {};

  document.title = site.pageTitle || `${personal.name || 'Portfolio'} | Portfolio`;
  document.querySelector('meta[name="description"]')?.setAttribute('content', site.metaDescription || personal.heroDescription || '');
  document.querySelector('meta[name="author"]')?.setAttribute('content', personal.fullName || personal.name || '');
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', site.pageTitle || `${personal.name || 'Portfolio'} | Portfolio`);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', site.metaDescription || personal.heroDescription || '');
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', site.canonicalUrl || window.location.href);

  const logo = document.querySelector('nav a.gradient-text');
  if (logo) logo.textContent = site.logoText || `${personal.name || 'Portfolio'}.dev`;

  const heroTitle = document.querySelector('#home h3 span');
  if (heroTitle) heroTitle.textContent = personal.title || '';

  const heroDescription = document.querySelector('#home p');
  if (heroDescription) heroDescription.textContent = personal.heroDescription || '';

  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.src = safeUrl(personal.profileImage, './assets/profile.png');
    profileImg.alt = `${personal.name || 'Profile'} - Profile Picture`;
  }

  document.querySelectorAll('a[id^="downloadCvBtn"], a[href*="Fatma_Sorour_CV"]').forEach(a => {
    a.href = safeUrl(personal.cvFile, './assets/Fatma_Sorour_CV.pdf');
    a.setAttribute('download', (personal.cvFile || 'Fatma_Sorour_CV.pdf').split('/').pop());
    a.setAttribute('target', '_blank');
  });

  const aboutText = document.querySelector('#about .space-y-4.leading-relaxed');
  if (aboutText) {
    aboutText.innerHTML = (personal.aboutDescription || []).map(p => `<p>${escapeHtml(p)}</p>`).join('');
  }

  renderSocialLinks(document.querySelector('#home .flex.gap-6.pt-6'), data.socialLinks || []);
  renderSocialLinks(document.querySelector('#contact .flex.gap-6.pt-12'), data.socialLinks || []);
  renderSocialLinks(document.querySelector('footer .flex.items-center.gap-6'), data.socialLinks || []);

  renderExperiences(data.experiences || []);
  renderSkills(data.skills || {});
  renderEducation(data.education || []);
  renderContact(data.contactInfo || {});
  renderProjects(1);
  startTypewriter(personal.typewriterText || personal.name || '');
  setupContactForm(data.contactInfo?.email || '');
  revealNewItems();
}

// ========== BACK TO TOP BUTTON ==========
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) backToTopButton?.classList.add('show');
  else backToTopButton?.classList.remove('show');
});
backToTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== TYPEWRITER EFFECT ==========
let typewriterTimeout;
function startTypewriter(text) {
  const typewriterElement = document.getElementById('typewriter-text');
  if (!typewriterElement) return;
  clearTimeout(typewriterTimeout);
  let index = 0;
  function typeWriter() {
    if (index < text.length) {
      typewriterElement.innerHTML = escapeHtml(text.substring(0, index + 1)) + '<span class="typewriter-cursor"></span>';
      index++;
      typewriterTimeout = setTimeout(typeWriter, 150);
    } else {
      typewriterElement.innerHTML = escapeHtml(text) + '<span class="typewriter-cursor"></span>';
      typewriterTimeout = setTimeout(() => { index = 0; typeWriter(); }, 2500);
    }
  }
  typeWriter();
}

function renderSkills(skills) {
  const renderBadges = (selector, list = []) => {
    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = list.map(s => `<span class="skill-badge px-4 py-2 rounded-full text-sm font-medium inline-block transition">${escapeHtml(s)}</span>`).join('');
  };
  renderBadges('#frontendSkills', skills.frontend || []);
  renderBadges('#backendSkills', skills.backend || []);
  renderBadges('#database', skills.database || []);
  renderBadges('#SourceControls', skills.others || []);
}

function renderEducation(items = []) {
  const container = document.getElementById('educationList');
  if (!container) return;
  container.innerHTML = items.map((edu, idx) => `
    <div class="p-6 rounded-2xl border-l-2 border-blue-500 transition transform hover:translate-x-1 stagger-item delay-${((idx % 5) + 1) * 100}" style="background: var(--bg-primary);">
      <p class="text-blue-300 text-sm">${escapeHtml(edu.period)}</p>
      <h3 class="font-bold mt-1">${escapeHtml(edu.title)}</h3>
      <p class="text-gray-400 mt-2">${escapeHtml(edu.description)}</p>
    </div>`).join('');
}

function renderExperiences(items = []) {
  const container = document.querySelector('#experience .relative.border-l');
  if (!container) return;
  container.innerHTML = items.map((exp, idx) => {
    const color = exp.color === 'purple' ? 'purple' : 'blue';
    return `
      <div class="ml-5 relative timeline-item stagger-item delay-${((idx % 5) + 2) * 100}">
        <div class="absolute -left-[28px] top-2 w-4 h-4 bg-${color}-500 rounded-full shadow-lg shadow-${color}-500/50"></div>
        <div class="glass-card p-5">
          <div class="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h3 class="text-2xl font-bold text-${color}-300">${escapeHtml(exp.title)}</h3>
              <p class="text-lg font-medium mt-1">${escapeHtml(exp.company)}</p>
              <p class="text-sm mt-1 text-gray-400">${escapeHtml(exp.location)}</p>
            </div>
            <span class="project-tag">${escapeHtml(exp.period)}</span>
          </div>
          <ul class="mt-5 space-y-3 text-gray-400 leading-relaxed">
            ${(exp.responsibilities || []).map(r => `<li>• ${escapeHtml(r)}</li>`).join('')}
          </ul>
          <div class="flex flex-wrap gap-2 mt-5">${(exp.technologies || []).map(t => `<span class="project-tag">${escapeHtml(t)}</span>`).join('')}</div>
        </div>
      </div>`;
  }).join('');
}

function renderContact(info) {
  const container = document.querySelector('#contact .mt-6.space-y-4');
  if (!container) return;
  const email = info.email || '';
  container.innerHTML = `
    <div class="contact-info-item"><i class="fas fa-map-marker-alt text-blue-400 w-7"></i> ${escapeHtml(info.address || '')}</div>
    <div class="contact-info-item"><i class="fas fa-envelope text-blue-400 w-7"></i> <a href="mailto:${escapeHtml(email)}" class="hover:text-blue-400 transition">${escapeHtml(email)}</a></div>
    <div class="contact-info-item"><i class="fas fa-phone-alt text-blue-400 w-7"></i> ${escapeHtml(info.phone || '')}</div>
    <div class="contact-info-item"><i class="fas fa-calendar-check text-green-400 w-7"></i> ${escapeHtml(info.availability || '')}</div>
  `;
  const footer = document.querySelector('footer p');
  if (footer) footer.innerHTML = `© <span id="currentYear">${new Date().getFullYear()}</span> ${escapeHtml(portfolioDataCache?.personal?.name || '')} — ${escapeHtml(portfolioDataCache?.personal?.title || '')}. All rights reserved.`;
}

function projectLink(url, classes, icon, label) {
  if (!url || !String(url).trim()) return '';
  return `<a href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer" class="${classes}"><i class="${icon}"></i> ${label}</a>`;
}

function renderProjects(page = 1) {
  const container = document.getElementById('projects-container');
  if (!container || !portfolioDataCache) return;
  const projects = portfolioDataCache.projects || [];
  const itemsPerPage = Number(portfolioDataCache.projectsSettings?.itemsPerPage || 3);
  const totalPages = Math.max(1, Math.ceil(projects.length / itemsPerPage));
  currentProjectsPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentProjectsPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(start, start + itemsPerPage);

  container.innerHTML = currentProjects.map((proj, idx) => {
    const imgSrc = safeUrl(proj.image, `https://placehold.co/600x400/1e293b/3b82f6?text=${encodeURIComponent(proj.title || 'Project')}`);
    const liveUrl = proj.liveLink;
    const githubUrl = proj.githubLink;
    const delayClass = `delay-${((idx % 5) + 1) * 100}`;
    return `
      <div class="glass-card p-0 overflow-hidden h-full transition-all duration-300 project-card stagger-item ${delayClass} flex flex-col revealed">
        <div class="relative w-full h-48 overflow-hidden bg-gray-800 group">
          <img src="${imgSrc}" alt="${escapeHtml(proj.title)} screenshot" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src='https://placehold.co/600x400/1e293b/3b82f6?text=${encodeURIComponent(proj.title || 'Project')}';">
          ${liveUrl ? `<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
            <a href="${safeUrl(liveUrl)}" target="_blank" rel="noopener noreferrer" class="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg transition transform hover:scale-105 flex items-center gap-1"><i class="fas fa-external-link-alt"></i> Live Demo →</a>
          </div>` : ''}
        </div>
        <div class="p-5 flex flex-col flex-grow">
          <h3 class="text-xl font-bold text-blue-300">${escapeHtml(proj.title)}</h3>
          <p class="text-sm mt-2 flex-grow" style="color:var(--text-secondary)">${escapeHtml(proj.description)}</p>
          <div class="flex flex-wrap gap-2 mt-4">${(proj.technologies || []).map(t => `<span class="project-tag text-xs inline-block transition">${escapeHtml(t)}</span>`).join('')}</div>
          ${(githubUrl || liveUrl) ? `<div class="mt-5 flex gap-4 pt-3 border-t border-gray-700/40">
            ${projectLink(githubUrl, 'text-xs text-blue-400 hover:text-blue-300 transition flex items-center gap-1', 'fab fa-github', 'Source Code')}
            ${projectLink(liveUrl, 'text-xs text-purple-400 hover:text-purple-300 transition flex items-center gap-1', 'fas fa-globe', 'Live Preview')}
          </div>` : ''}
        </div>
      </div>`;
  }).join('');

  renderProjectPagination(totalPages, projects.length, itemsPerPage);
  revealNewItems();
}

function renderProjectPagination(totalPages, totalItems, itemsPerPage) {
  let pagination = document.getElementById('projects-pagination');
  const section = document.getElementById('projects');
  if (!section) return;
  if (!pagination) {
    pagination = document.createElement('div');
    pagination.id = 'projects-pagination';
    pagination.className = 'projects-pagination';
    section.appendChild(pagination);
  }
  if (totalItems <= itemsPerPage) {
    pagination.innerHTML = '';
    pagination.style.display = 'none';
    return;
  }
  pagination.style.display = 'flex';
  const buttons = [];
  buttons.push(`<button class="pagination-btn" ${currentProjectsPage === 1 ? 'disabled' : ''} data-page="${currentProjectsPage - 1}" aria-label="Previous projects page"><i class="fas fa-chevron-left"></i></button>`);
  for (let i = 1; i <= totalPages; i++) {
    buttons.push(`<button class="pagination-btn ${i === currentProjectsPage ? 'active' : ''}" data-page="${i}">${i}</button>`);
  }
  buttons.push(`<button class="pagination-btn" ${currentProjectsPage === totalPages ? 'disabled' : ''} data-page="${currentProjectsPage + 1}" aria-label="Next projects page"><i class="fas fa-chevron-right"></i></button>`);
  buttons.push(`<span class="pagination-info">Page ${currentProjectsPage} of ${totalPages}</span>`);
  pagination.innerHTML = buttons.join('');
  pagination.querySelectorAll('button[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const nextPage = Number(btn.dataset.page);
      renderProjects(nextPage);
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupContactForm(targetEmail) {
  const contactForm = document.getElementById('contactForm');
  const successDiv = document.getElementById('form-success');
  const errorDiv = document.getElementById('form-error');
  const sendButton = document.getElementById('sendBtn');
  if (!contactForm || contactForm.dataset.bound === 'true') return;
  contactForm.dataset.bound = 'true';
  contactForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!firstName || !lastName || !email || !message || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errorDiv?.classList.remove('hidden');
      successDiv?.classList.add('hidden');
      setTimeout(() => errorDiv?.classList.add('hidden'), 3000);
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
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail || 'example@example.com'}`, { method: 'POST', body: formData });
      const data = await response.json();
      if (data.success === true || response.ok) {
        successDiv?.classList.remove('hidden');
        errorDiv?.classList.add('hidden');
        contactForm.reset();
        setTimeout(() => successDiv?.classList.add('hidden'), 5000);
      } else throw new Error('Form submission failed');
    } catch (error) {
      console.error('Failed to send email:', error);
      errorDiv?.classList.remove('hidden');
      successDiv?.classList.add('hidden');
      setTimeout(() => errorDiv?.classList.add('hidden'), 5000);
    } finally {
      sendButton.innerHTML = originalText;
      sendButton.disabled = false;
    }
  });
}

// ========== DARK / LIGHT MODE ==========
function setTheme(theme) {
  if (theme === 'light') document.body.classList.add('light');
  else document.body.classList.remove('light');
  localStorage.setItem('portfolio-theme', theme);
  updateToggleIcons(theme);
}
function updateToggleIcons(theme) {
  const isLight = theme === 'light';
  document.querySelectorAll('#desktopThemeToggle i, #sideThemeToggle i').forEach(icon => {
    icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  });
}
const storedTheme = localStorage.getItem('portfolio-theme') || 'dark';
if (storedTheme === 'light') document.body.classList.add('light');
else document.body.classList.remove('light');
updateToggleIcons(storedTheme);
document.getElementById('desktopThemeToggle')?.addEventListener('click', () => setTheme(document.body.classList.contains('light') ? 'dark' : 'light'));
document.getElementById('sideThemeToggle')?.addEventListener('click', () => setTheme(document.body.classList.contains('light') ? 'dark' : 'light'));

// ========== SIDE MENU FUNCTIONALITY ==========
const sideMenu = document.getElementById('sideMenu');
const overlay = document.getElementById('menuOverlay');
const openIcon = document.getElementById('mobileMenuIcon');
const closeSide = document.getElementById('closeSideMenu');
function openMenu() { sideMenu?.classList.add('open'); overlay?.classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeMenu() { sideMenu?.classList.remove('open'); overlay?.classList.remove('active'); document.body.style.overflow = ''; }
openIcon?.addEventListener('click', openMenu);
closeSide?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);
document.querySelectorAll('.side-menu a').forEach(link => link.addEventListener('click', closeMenu));

// ========== SCROLL REVEAL OBSERVER ==========
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-up');
      entry.target.querySelectorAll('.stagger-item').forEach((child, idx) => {
        setTimeout(() => child.classList.add('revealed'), idx * 50);
      });
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
function revealNewItems() {
  document.querySelectorAll('section, .timeline-item, .glass-card:not(.stagger-item)').forEach((el) => {
    if (!el.classList.contains('reveal-section')) el.classList.add('reveal-section');
    revealObserver.observe(el);
  });
  document.querySelectorAll('.stagger-item').forEach((el) => revealObserver.observe(el));
}

// ========== CANVAS NETWORK ANIMATION ==========
const canvas = document.getElementById('tech-canvas');
const ctx = canvas?.getContext('2d');
let particlesArray = [];
let isLightMode = document.body.classList.contains('light');
if (canvas && ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
  });
  new MutationObserver(() => { isLightMode = document.body.classList.contains('light'); }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
}
class Particle {
  constructor(x, y, directionX, directionY, size) { this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; }
  draw() { if (!ctx) return; ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = isLightMode ? 'rgba(37, 99, 235, 0.5)' : 'rgba(96, 165, 250, 0.6)'; ctx.fill(); }
  update() { if (!canvas) return; if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX; if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY; this.x += this.directionX; this.y += this.directionY; this.draw(); }
}
function initParticles() {
  if (!canvas) return;
  particlesArray = [];
  let numberOfParticles = (canvas.height * canvas.width) / 12000;
  for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1 - 0.5, Math.random() * 1 - 0.5, Math.random() * 3 + 1));
}
function animateParticles() {
  if (!ctx || !canvas) return;
  requestAnimationFrame(animateParticles);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  particlesArray.forEach(p => p.update());
  connectParticles();
}
function connectParticles() {
  if (!ctx) return;
  let maxDistance = 140;
  for (let a = 0; a < particlesArray.length; a++) {
    for (let b = a; b < particlesArray.length; b++) {
      let distance = (particlesArray[a].x - particlesArray[b].x) ** 2 + (particlesArray[a].y - particlesArray[b].y) ** 2;
      if (distance < maxDistance * maxDistance) {
        let opacityValue = 1 - distance / (maxDistance * maxDistance);
        ctx.strokeStyle = isLightMode ? `rgba(37, 99, 235, ${opacityValue * 0.5})` : `rgba(167, 139, 250, ${opacityValue * 0.2})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();
      }
    }
  }
}

initParticles();
animateParticles();
loadPortfolioData();
