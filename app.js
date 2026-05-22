const images = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526064088/FvDUy7st27kockWrnmUs8K/hero-bg-THAMdtqLvzzpwc3tq5rKv5.webp",
  event: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526064088/FvDUy7st27kockWrnmUs8K/portfolio-event-8WLU5AGJoYb2GRfrziovXL.webp",
  brand: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526064088/FvDUy7st27kockWrnmUs8K/portfolio-brand-8LnRFvzGFAnUQrjJ6cHwhR.webp",
  music: "https://d2xsxph8kpxj0f.cloudfront.net/310519663526064088/FvDUy7st27kockWrnmUs8K/portfolio-music-WBX9FCtR7zQnfC7GgpagsQ.webp",
  sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1000&q=80",
  concert: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1000&q=80",
  portrait: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&q=80",
  artist: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1000&q=80",
  studio: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1000&q=80",
  racing: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&q=80"
};

const navItems = [
  ["Work", "/work"],
  ["Services", "/services"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

const marquee = [
  "NFL",
  "NBA",
  "NHL",
  "Formula 1",
  "Nike",
  "MLS",
  "Red Bull",
  "Monster Energy",
  "Hennessy",
  "Coachella",
  "LeBron James",
  "Lollapalooza",
  "Stagecoach",
  "Dunkin' Donuts",
  "Converse",
  "McDonald's",
  "Babyface Ray",
  "Halsey",
  "Cookies",
  "Emmys",
  "Nikon"
];

const workItems = [
  { category: "BRAND", title: "UNRL x Timberwolves", subtitle: "Campaign", image: images.brand, videoUrl: "" },
  { category: "EVENTS", title: "Rolling Loud CA", subtitle: "Weekend Recap", image: images.event, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "Rucci & Lefty Gunplay", subtitle: "Vamonos", image: images.music, videoUrl: "" },
  { category: "BRAND", title: "UNRL x Williams Racing", subtitle: "Campaign", image: images.racing, videoUrl: "" },
  { category: "EVENTS", title: "Halsey", subtitle: "Recap", image: images.concert, videoUrl: "" },
  { category: "BRAND", title: "UNRL x United", subtitle: "Campaign", image: images.sports, videoUrl: "" },
  { category: "EVENTS", title: "Turnstile", subtitle: "Recap", image: images.artist, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "Babyface Ray & Mozzy", subtitle: "Hood Cry", image: images.music, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "Derek Pope", subtitle: "Every Night", image: images.studio, videoUrl: "" },
  { category: "SOCIAL", title: "Red Bull", subtitle: "Social Campaign", image: images.sports, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "Chloe Star", subtitle: "Happy Place", image: images.portrait, videoUrl: "" },
  { category: "SOCIAL", title: "Nike", subtitle: "Content Series", image: images.portrait, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "Pardyalone", subtitle: "Why9x", image: images.artist, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "PROF", subtitle: "Bad Time Boy", image: images.studio, videoUrl: "" },
  { category: "EVENTS", title: "Lollapalooza", subtitle: "Festival Coverage", image: images.event, videoUrl: "" },
  { category: "MUSIC VIDEOS", title: "Guapdad 4000", subtitle: "Champagne Showers", image: images.music, videoUrl: "" }
];

const stats = [
  ["10+", "Years Active"],
  ["500M+", "Video Views"],
  ["50+", "Brand Clients"],
  ["100+", "Projects Delivered"]
];

const services = [
  {
    number: "01",
    title: "Brand & Commercial",
    description:
      "Campaign photography and video for brands, product launches, activations, and sponsorships. Built for recognizable names in sports, spirits, and lifestyle.",
    tags: ["Photography", "Video", "Campaigns", "Activations"]
  },
  {
    number: "02",
    title: "Music Videos",
    description:
      "Concept-to-delivery music video production with a proven track record across major label and independent artists. Treatment, production, post, and delivery.",
    tags: ["Treatment", "Production", "Post", "Delivery"]
  },
  {
    number: "03",
    title: "Event Coverage",
    description:
      "Live event recaps, festival content, and sports activation coverage at any scale. Fast-turnaround content built for broadcast and social.",
    tags: ["Live Events", "Festivals", "Sports", "Broadcast"]
  },
  {
    number: "04",
    title: "Social Media Content",
    description:
      "Short-form video, photo packages, and platform-native content for brands and artists. One-time shoots or ongoing retainer relationships.",
    tags: ["Short-Form", "Photo Packages", "Retainer", "Platform-Native"]
  }
];

const process = [
  ["01", "Discovery", "We start with a conversation: goals, timeline, budget, and vision before anything else."],
  ["02", "Concept", "We develop a creative direction, treatment, or production plan tailored to your project and audience."],
  ["03", "Production", "Our crew handles every detail on set: lighting, camera, direction, and art department."],
  ["04", "Delivery", "Edited, color-graded, and formatted for every platform. Done means ready to go live."]
];

const clients = [
  {
    label: "Leagues & Sports",
    list: ["NFL", "NBA", "NHL", "MLS", "Formula 1", "Minnesota Timberwolves", "Minnesota Wild", "Williams Racing"]
  },
  {
    label: "Brands",
    list: ["Nike", "Red Bull", "Monster Energy", "Hennessy", "Converse", "Dunkin' Donuts", "McDonald's", "Nikon", "UNRL", "Cookies"]
  },
  {
    label: "Artists & Events",
    list: ["LeBron James", "Halsey", "Logic", "Babyface Ray", "Lefty Gunplay", "Coachella", "Lollapalooza", "Stagecoach", "Rolling Loud", "Emmys"]
  }
];

let activeFilter = "ALL";

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function videoEmbedUrl(url) {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    if (host.includes("youtube.com")) {
      const id = parsed.searchParams.get("v") || parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : url;
    }

    if (host.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : url;
    }

    return url;
  } catch {
    return url;
  }
}

function isDirectVideo(url) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(url);
}

function path() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

function navigate(to) {
  history.pushState(null, "", to);
  closeMenu();
  render();
  window.scrollTo(0, 0);
}

function link(label, href, className = "") {
  const active = path() === href ? " active" : "";
  return `<a href="${href}" class="${className}${active}" data-link>${label}</a>`;
}

function nav() {
  return `
    <header class="nav" id="nav">
      <div class="container nav-inner">
        <a href="/" class="brand" data-link>ELEVENTH<span>.</span></a>
        <nav class="nav-links">${navItems.map(([label, href]) => link(label, href, "nav-link")).join("")}</nav>
        <div class="nav-cta"><a href="/contact" class="btn btn-primary" data-link>Start a Project</a></div>
        <button class="menu-toggle" type="button" aria-label="Toggle menu" id="menuToggle">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu">
      <div class="container">
        ${navItems.map(([label, href]) => `<a href="${href}" data-link>${label}</a>`).join("")}
        <a href="/contact" class="btn btn-primary" data-link>Start a Project</a>
      </div>
    </div>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="/" class="brand" data-link>ELEVENTH<span>.</span></a>
            <p class="copy" style="max-width: 330px; margin-top: 1rem;">
              Full-service photo and video production for brands, sports leagues, and independent artists.
            </p>
          </div>
          <div>
            <p class="eyebrow">Navigate</p>
            ${navItems.map(([label, href]) => `<p><a href="${href}" data-link>${label}</a></p>`).join("")}
          </div>
          <div>
            <p class="eyebrow">Get in Touch</p>
            <p><a href="mailto:jake@eleventhcreative.com">jake@eleventhcreative.com</a></p>
            <p class="copy">Available Worldwide</p>
            <p><a href="/contact" class="btn btn-primary" data-link>Start a Project</a></p>
          </div>
        </div>
        <div class="footer-bottom">
          <span class="small-label">2026 Eleventh Creative. All rights reserved.</span>
          <span class="small-label">Photo / Video / Brand / Events / Music</span>
        </div>
      </div>
    </footer>
  `;
}

function projectCard(item, large = false) {
  const index = workItems.indexOf(item);
  const canPlay = Boolean(item.videoUrl);
  return `
    <article class="project-card ${large ? "large" : ""} ${canPlay ? "has-video" : ""}" ${canPlay ? `data-video-index="${index}" role="button" tabindex="0"` : ""}>
      <img src="${esc(item.image)}" alt="${esc(item.title)}" loading="${large ? "eager" : "lazy"}">
      ${canPlay ? `<span class="play-badge">Play</span>` : ""}
      <div class="project-meta">
        <p class="eyebrow">${esc(item.category)}</p>
        <h3 class="display">${esc(item.title)}</h3>
        <p class="copy">${esc(item.subtitle)}</p>
      </div>
    </article>
  `;
}

function videoModal() {
  return `
    <div class="video-modal" id="videoModal" aria-hidden="true">
      <button class="video-close" type="button" id="videoClose" aria-label="Close video">Close</button>
      <div class="video-frame" id="videoFrame"></div>
    </div>
  `;
}

function cta(title = "Let's Build Something.", copy = "Whether you're a brand looking for campaign content or an artist ready to roll out, we're ready.") {
  return `
    <section class="section">
      <div class="container">
        <div style="max-width: 650px;">
          <p class="eyebrow">Let's Work Together</p>
          <h2 class="display">${title}</h2>
          ${copy ? `<p class="copy" style="max-width: 500px; margin: 1.2rem 0 2rem;">${copy}</p>` : ""}
          <a href="/contact" class="btn btn-primary" data-link>Start a Conversation</a>
        </div>
      </div>
    </section>
  `;
}

function homePage() {
  const featured = workItems.slice(0, 3);
  const tickerItems = [...marquee, ...marquee].map((item) => `<span class="small-label">${esc(item)}<b>/</b></span>`).join("");
  return `
    <main class="page">
      <section class="hero">
        <div class="hero-media"><img src="${images.hero}" alt=""></div>
        <div class="container hero-content">
          <p class="eyebrow">Full-Service Content Agency</p>
          <h1 class="display">Built for Brands.<br>Wired for Artists.</h1>
          <p class="copy">Photo, video, and creative production for the world's most recognized brands, sports leagues, and independent artists.</p>
          <div class="hero-actions">
            <a href="/work" class="btn btn-primary" data-link>View Our Work</a>
            <a href="/contact" class="btn btn-secondary" data-link>Get in Touch</a>
          </div>
        </div>
      </section>
      <section class="ticker"><div class="ticker-track">${tickerItems}</div></section>
      <section class="section">
        <div class="container">
          <div class="section-head">
            <div>
              <p class="eyebrow">Selected Work</p>
              <h2 class="display">Highlighted Projects</h2>
            </div>
            <a href="/work" class="btn btn-secondary" data-link>View All Work</a>
          </div>
          <div class="work-feature">
            ${projectCard(featured[1], true)}
            <div class="project-grid">${projectCard(featured[0])}${projectCard(featured[2])}</div>
          </div>
        </div>
      </section>
      <section class="section section-deep">
        <div class="container">
          <p class="eyebrow" style="margin-bottom: 2rem;">By the Numbers</p>
          <div class="stats-grid">
            ${stats.map(([value, label]) => `<div><span class="stat-number">${value}</span><span class="small-label">${label}</span></div>`).join("")}
          </div>
        </div>
      </section>
      ${cta()}
    </main>
  `;
}

function workPage() {
  const filters = ["ALL", "MUSIC VIDEOS", "BRAND", "EVENTS", "SOCIAL"];
  const shown = activeFilter === "ALL" ? workItems : workItems.filter((item) => item.category === activeFilter);
  return `
    <main class="page">
      <section class="page-hero">
        <div class="container">
          <p class="eyebrow">Portfolio</p>
          <h1 class="display page-title">Our Work</h1>
          <p class="copy">Music videos, brand campaigns, event recaps, and social content, all in one place.</p>
        </div>
      </section>
      <div class="container">
        <div class="filters">
          ${filters.map((filter) => `<button class="filter-button ${filter === activeFilter ? "active" : ""}" data-filter="${filter}">${filter}</button>`).join("")}
        </div>
      </div>
      <section class="section">
        <div class="container">
          <div class="portfolio-grid">${shown.map((item) => projectCard(item)).join("")}</div>
        </div>
      </section>
      ${cta("Ready to Create?", "")}
    </main>
  `;
}

function servicesPage() {
  return `
    <main class="page">
      <section class="page-hero">
        <div class="container">
          <p class="eyebrow">What We Do</p>
          <h1 class="display page-title">Full-Service Production</h1>
          <p class="copy">From single-day shoots to full campaign rollouts: concept, production, and delivery across brand, artist, and event work.</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="services-grid">
            ${services.map((service) => `
              <article class="service-card">
                <div class="service-top">
                  <span class="step-number">${service.number}</span>
                  <span class="eyebrow">Production</span>
                </div>
                <h3 class="display">${esc(service.title)}</h3>
                <p class="copy">${esc(service.description)}</p>
                <div class="tags">${service.tags.map((tag) => `<span class="tag small-label">${esc(tag)}</span>`).join("")}</div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      <section class="section section-deep">
        <div class="container">
          <p class="eyebrow">How We Work</p>
          <h2 class="display" style="margin-bottom: 3rem;">The Process</h2>
          <div class="process-grid">
            ${process.map(([number, title, description]) => `
              <article>
                <span class="step-number">${number}</span>
                <h3 class="display" style="font-size: 1.3rem;">${title}</h3>
                <p class="copy">${description}</p>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
      ${cta("Ready to Start?", "Tell us about your project and we'll get back to you within 24 hours.")}
    </main>
  `;
}

function aboutPage() {
  return `
    <main class="page">
      <section class="page-hero">
        <div class="container story-grid">
          <div>
            <p class="eyebrow">Who We Are</p>
            <h1 class="display page-title">Built for Both Worlds.</h1>
          </div>
          <p class="copy" style="font-size: 1.08rem;">
            Eleventh Creative is a full-service photo and video production agency operating at the intersection of brand and artist work. We bring the same level of craft to a product launch as we do to an album rollout.
          </p>
        </div>
      </section>
      <section class="section">
        <div class="container story-grid">
          <p class="eyebrow">Our Story</p>
          <div>
            <p class="copy">Eleventh Creative was built on the belief that great visual content does not happen by accident. It takes intentional creative direction, the right team, and a relentless eye for detail on every project, regardless of budget or scope.</p>
            <p class="copy" style="margin-top: 1.4rem;">What started as a music video and artist content operation has grown into a full-service agency with major brand clients and a track record across some of the biggest stages in music, sports, and live events.</p>
            <p class="copy" style="margin-top: 1.4rem;">We operate across two worlds intentionally. Brand work sharpens our discipline. Artist work keeps our creative instincts sharp. The best work sits right at the intersection of both.</p>
          </div>
        </div>
      </section>
      <section class="section section-deep">
        <div class="container">
          <p class="eyebrow" style="margin-bottom: 2rem;">By the Numbers</p>
          <div class="stats-grid">
            ${stats.map(([value, label]) => `<div><span class="stat-number">${value}</span><span class="small-label">${label}</span></div>`).join("")}
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <p class="eyebrow">Clients & Collaborators</p>
          <h2 class="display" style="margin-bottom: 3rem;">Who We've Worked With</h2>
          <div class="client-grid">
            ${clients.map((group) => `
              <div>
                <p class="eyebrow">${esc(group.label)}</p>
                <div class="client-list">${group.list.map((client) => `<p>${esc(client)}</p>`).join("")}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
      ${cta("Let's Build Something.", "Whether you're a brand or an artist, we're ready when you are.")}
    </main>
  `;
}

function contactPage() {
  return `
    <main class="page">
      <section class="page-hero">
        <div class="container contact-grid">
          <div>
            <p class="eyebrow">Get in Touch</p>
            <h1 class="display page-title">Let's Build Something.</h1>
            <div style="margin: 2rem 0;">
              <p class="eyebrow">Email</p>
              <p><a href="mailto:jake@eleventhcreative.com">jake@eleventhcreative.com</a></p>
            </div>
            <div>
              <p class="eyebrow">Follow</p>
              <p><a href="https://www.instagram.com/eleventhcreative" target="_blank" rel="noopener">Instagram</a> / <a href="https://www.youtube.com/@eleventhcreative" target="_blank" rel="noopener">YouTube</a></p>
            </div>
            <div class="contact-card">
              <h3 class="display">Available Worldwide</h3>
              <p class="copy">We work with brands and artists across the US and internationally. No project is too far. We travel, we make it happen.</p>
              <div class="tags">
                ${["Nationwide", "International", "On-Location", "Remote"].map((tag) => `<span class="tag small-label">${tag}</span>`).join("")}
              </div>
            </div>
          </div>
          <div>
            <p class="eyebrow">Start a Project</p>
            <h2 class="display" style="font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 2rem;">Tell Us About Your Project</h2>
            <div class="success" id="successBox">
              <h3 class="display">Message Received.</h3>
              <p class="copy">We'll get back to you within 24 hours.</p>
            </div>
            <form class="contact-form" id="contactForm">
              <div class="form-row">
                <label><span class="small-label">Name</span><input required name="name" placeholder="Your name"></label>
                <label><span class="small-label">Email</span><input required type="email" name="email" placeholder="you@company.com"></label>
              </div>
              <label><span class="small-label">Company / Artist Name</span><input name="company" placeholder="Your brand or artist name"></label>
              <label>
                <span class="small-label">Project Type</span>
                <select name="projectType">
                  <option value="">Select project type</option>
                  <option>Brand Campaign</option>
                  <option>Music Video</option>
                  <option>Event Coverage</option>
                  <option>Social Media Content</option>
                  <option>Photography</option>
                  <option>Other</option>
                </select>
              </label>
              <label><span class="small-label">Tell Us About Your Project</span><textarea name="message" placeholder="Share details: timeline, vision, budget, references..."></textarea></label>
              <button class="btn btn-primary" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  `;
}

function notFoundPage() {
  return `
    <main class="page">
      <section class="page-hero">
        <div class="container">
          <p class="eyebrow">404</p>
          <h1 class="display page-title">Page Not Found</h1>
          <p class="copy">That page may have moved. Head back home and keep building.</p>
          <p style="margin-top: 2rem;"><a href="/" class="btn btn-primary" data-link>Go Home</a></p>
        </div>
      </section>
    </main>
  `;
}

function currentPage() {
  switch (path()) {
    case "/":
      return homePage();
    case "/work":
      return workPage();
    case "/services":
      return servicesPage();
    case "/about":
      return aboutPage();
    case "/contact":
      return contactPage();
    default:
      return notFoundPage();
  }
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}

function bindEvents() {
  document.querySelectorAll("[data-link]").forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const url = new URL(anchor.href);
      if (url.origin === window.location.origin) {
        event.preventDefault();
        navigate(url.pathname);
      }
    });
  });

  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      render();
    });
  });

  document.querySelectorAll("[data-video-index]").forEach((card) => {
    card.addEventListener("click", () => openVideo(Number(card.dataset.videoIndex)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openVideo(Number(card.dataset.videoIndex));
      }
    });
  });

  document.getElementById("videoClose")?.addEventListener("click", closeVideo);
  document.getElementById("videoModal")?.addEventListener("click", (event) => {
    if (event.target.id === "videoModal") closeVideo();
  });

  document.getElementById("contactForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.style.display = "none";
    document.getElementById("successBox").style.display = "block";
  });

  updateNav();
}

function openVideo(index) {
  const item = workItems[index];
  if (!item?.videoUrl) return;

  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  const source = videoEmbedUrl(item.videoUrl);

  frame.innerHTML = isDirectVideo(source)
    ? `<video src="${esc(source)}" controls autoplay playsinline></video>`
    : `<iframe src="${esc(source)}" title="${esc(item.title)}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;

  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("video-open");
}

function closeVideo() {
  const modal = document.getElementById("videoModal");
  const frame = document.getElementById("videoFrame");
  if (!modal || !frame) return;

  modal.setAttribute("aria-hidden", "true");
  frame.innerHTML = "";
  document.body.classList.remove("video-open");
}

function updateNav() {
  const navEl = document.getElementById("nav");
  if (!navEl) return;
  navEl.classList.toggle("is-scrolled", window.scrollY > 34);
}

function render() {
  document.getElementById("app").innerHTML = `${nav()}${currentPage()}${footer()}${videoModal()}`;
  document.title = path() === "/" ? "Eleventh Creative" : `Eleventh Creative - ${path().slice(1)}`;
  bindEvents();
}

window.addEventListener("popstate", render);
window.addEventListener("scroll", updateNav, { passive: true });

render();
