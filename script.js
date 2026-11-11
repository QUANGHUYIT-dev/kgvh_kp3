document.addEventListener("DOMContentLoaded", () => {
  // 1. Navbar style change on scroll
  const navbar = document.getElementById("navbar-main");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "8px 0";
      navbar.style.backgroundColor = "rgba(139, 0, 0, 0.98)";
    } else {
      navbar.style.padding = "16px 0";
      navbar.style.backgroundColor = "rgba(139, 0, 0, 0.95)";
    }
  });

  // 2. Custom Animate-On-Scroll (AOS Alternative)
  const animateElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  animateElements.forEach((el) => observer.observe(el));

  // 3. Auto close Bootstrap mobile navbar on click
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const menuToggle = document.getElementById("navbarNav");
  const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle.classList.contains("show")) {
        bsCollapse.toggle();
      }
    });
  });
});
