const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
	navLinks.classList.remove("open");
	menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const typingTarget = document.getElementById("typing");
const typingPhrases = [
  "solve(complex_problem)",
  "design(system_architecture)",
  "apply(ai_to_process)",
  "integrate(api + data + product)",
  "document(requirements)"
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = typingPhrases[phraseIndex];
  const visible = current.slice(0, charIndex);
  typingTarget.textContent = visible;

  if (!deleting && charIndex < current.length) {
	charIndex++;
	setTimeout(typeLoop, 70);
	return;
  }

  if (!deleting && charIndex === current.length) {
	deleting = true;
	setTimeout(typeLoop, 1200);
	return;
  }

  if (deleting && charIndex > 0) {
	charIndex--;
	setTimeout(typeLoop, 35);
	return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % typingPhrases.length;
  setTimeout(typeLoop, 250);
}

typeLoop();

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
	entries.forEach((entry) => {
	  if (entry.isIntersecting) {
		entry.target.classList.add("visible");
		revealObserver.unobserve(entry.target);
	  }
	});
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver(
  (entries) => {
	entries.forEach((entry) => {
	  if (!entry.isIntersecting) return;

	  navItems.forEach((item) => {
		item.classList.toggle(
		  "active",
		  item.getAttribute("href") === `#${entry.target.id}`
		);
	  });
	});
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];
let animationFrame;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const amount = Math.max(34, Math.floor((rect.width * rect.height) / 16000));

  particles = Array.from({ length: amount }, () => ({
	x: Math.random() * rect.width,
	y: Math.random() * rect.height,
	vx: (Math.random() - 0.5) * 0.45,
	vy: (Math.random() - 0.5) * 0.45,
	radius: Math.random() * 1.7 + 0.6
  }));
}

function drawParticles() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, index) => {
	p.x += p.vx;
	p.y += p.vy;

	if (p.x < 0 || p.x > width) p.vx *= -1;
	if (p.y < 0 || p.y > height) p.vy *= -1;

	ctx.beginPath();
	ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
	ctx.fillStyle = "rgba(103, 232, 249, 0.58)";
	ctx.fill();

	for (let j = index + 1; j < particles.length; j++) {
	  const q = particles[j];
	  const dx = p.x - q.x;
	  const dy = p.y - q.y;
	  const distance = Math.sqrt(dx * dx + dy * dy);

	  if (distance < 118) {
		ctx.beginPath();
		ctx.moveTo(p.x, p.y);
		ctx.lineTo(q.x, q.y);
		ctx.strokeStyle = `rgba(103, 232, 249, ${0.14 * (1 - distance / 118)})`;
		ctx.lineWidth = 1;
		ctx.stroke();
	  }
	}
  });

  animationFrame = requestAnimationFrame(drawParticles);
}

if (!prefersReducedMotion) {
  resizeCanvas();
  drawParticles();
  window.addEventListener("resize", () => {
	cancelAnimationFrame(animationFrame);
	resizeCanvas();
	drawParticles();
  });
}