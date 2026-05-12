export function initCafeInteractions() {
  setupTestimonials();
  setupMenuFilters();
  setupContactValidation();
  setupCounters();
}

function setupTestimonials() {
  const inner = document.getElementById("testimonial-inner");
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-testimonial-dot]"));
  if (!inner || dots.length === 0 || inner.dataset.initialized === "true") return;
  inner.dataset.initialized = "true";

  let index = 0;
  const setSlide = (next: number) => {
    index = next;
    inner.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.dataset.active = String(i === index);
      dot.setAttribute("aria-pressed", String(i === index));
    });
  };

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => setSlide(i));
  });

  setSlide(0);
  window.setInterval(() => setSlide((index + 1) % dots.length), 4200);
}

function setupMenuFilters() {
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-menu-filter]"));
  const cards = Array.from(document.querySelectorAll<HTMLElement>("[data-menu-category]"));
  if (filterButtons.length === 0 || cards.length === 0) return;
  if (filterButtons[0]?.dataset.initialized === "true") return;
  filterButtons.forEach((button) => {
    button.dataset.initialized = "true";
  });

  const applyFilter = (value: string) => {
    cards.forEach((card) => {
      const category = card.dataset.menuCategory;
      const show = value === "all" || category === value;
      card.style.display = show ? "block" : "none";
    });

    filterButtons.forEach((button) => {
      const active = button.dataset.menuFilter === value;
      button.dataset.active = String(active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.menuFilter ?? "all";
      applyFilter(value);
    });
  });

  applyFilter("all");
}

function setupContactValidation() {
  const form = document.getElementById("contact-form") as HTMLFormElement | null;
  if (!form) return;
  if (form.dataset.initialized === "true") return;
  form.dataset.initialized = "true";

  const nameInput = form.querySelector<HTMLInputElement>("#name");
  const emailInput = form.querySelector<HTMLInputElement>("#email");
  const messageInput = form.querySelector<HTMLTextAreaElement>("#message");
  const feedback = form.querySelector<HTMLElement>("#form-feedback");
  if (!nameInput || !emailInput || !messageInput || !feedback) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name.length < 2) {
      feedback.textContent = "Please enter a valid name.";
      feedback.className = "mt-3 text-sm text-destructive";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.className = "mt-3 text-sm text-destructive";
      return;
    }

    if (message.length < 10) {
      feedback.textContent = "Message should be at least 10 characters.";
      feedback.className = "mt-3 text-sm text-destructive";
      return;
    }

    feedback.textContent = "Thanks! Your message has been sent.";
    feedback.className = "mt-3 text-sm text-olive";
    form.reset();
  });
}

function setupCounters() {
  const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-counter-target]"));
  if (counters.length === 0) return;
  if (counters[0]?.dataset.initialized === "true") return;
  counters.forEach((counter) => {
    counter.dataset.initialized = "true";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const node = entry.target as HTMLElement;
        const target = Number(node.dataset.counterTarget ?? 0);
        let current = 0;
        const step = Math.max(1, Math.floor(target / 60));

        const timer = window.setInterval(() => {
          current += step;
          if (current >= target) {
            node.textContent = target.toLocaleString();
            window.clearInterval(timer);
          } else {
            node.textContent = current.toLocaleString();
          }
        }, 24);

        observer.unobserve(node);
      });
    },
    { threshold: 0.5 },
  );

  counters.forEach((counter) => observer.observe(counter));
}
