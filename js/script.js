/**
 * Digital Support Tech — Avast Premium Security Landing Page
 * Configuration centrale des liens commerciaux
 * Modifiez uniquement ces constantes pour mettre à jour les CTA.
 */

// ============================================================
// CONFIGURATION — Modifiable facilement
// ============================================================

const PAYMENT_URL = "https://dejnsyvg.mychariow.shop/prd_t233wmka";

const WHATSAPP_URL =
  "https://wa.me/22655757299?text=Bonjour%20Digital%20Support%20Tech%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20Avast%20Premium%20Security%20%C3%A0%205%20000%20FCFA.";

const EMAIL = "lamiendonaldo179@gmail.com";

// ============================================================
// INITIALISATION
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initPaymentButtons();
  initWhatsAppButtons();
  initEmailButtons();
  initSmoothScroll();
  initNavbarScroll();
  initMobileStickyCta();
  initFadeInAnimations();
  initAccordionA11y();
});

/**
 * Lie tous les boutons d'achat au lien Chariow
 */
function initPaymentButtons() {
  const selectors = [
    "[data-action='payment']",
    ".btn-payment",
    "#cta-payment",
    "#mobile-cta-payment",
  ];

  document.querySelectorAll(selectors.join(",")).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(PAYMENT_URL, "_blank", "noopener,noreferrer");
    });

    if (btn.tagName === "A") {
      btn.setAttribute("href", PAYMENT_URL);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    }
  });
}

/**
 * Lie tous les boutons WhatsApp
 */
function initWhatsAppButtons() {
  document.querySelectorAll("[data-action='whatsapp'], .btn-whatsapp").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
    });

    if (btn.tagName === "A") {
      btn.setAttribute("href", WHATSAPP_URL);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    }
  });
}

/**
 * Lie tous les boutons email
 */
function initEmailButtons() {
  document.querySelectorAll("[data-action='email'], .btn-email").forEach((btn) => {
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Demande d'information — Avast Premium Security"
    )}&body=${encodeURIComponent(
      "Bonjour Digital Support Tech,\n\nJe suis intéressé(e) par Avast Premium Security à 5 000 FCFA.\n\nCordialement,"
    )}`;

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = mailto;
    });

    if (btn.tagName === "A") {
      btn.setAttribute("href", mailto);
    }
  });
}

/**
 * Défilement fluide vers les ancres internes
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      const nav = document.querySelector(".navbar");
      const navHeight = nav ? nav.offsetHeight : 0;
      const mobileCta = document.querySelector(".mobile-sticky-cta");
      const extraOffset = mobileCta && window.innerWidth < 768 ? 70 : 0;

      const top =
        target.getBoundingClientRect().top +
        window.pageYOffset -
        navHeight -
        12 -
        extraOffset;

      window.scrollTo({ top, behavior: "smooth" });

      // Fermer le menu mobile Bootstrap si ouvert
      const collapse = document.querySelector(".navbar-collapse.show");
      if (collapse && window.bootstrap) {
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
      }
    });
  });
}

/**
 * Effet de la navbar au scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/**
 * Affiche / masque le CTA mobile sticky de façon non intrusive
 */
function initMobileStickyCta() {
  const sticky = document.querySelector(".mobile-sticky-cta");
  const hero = document.querySelector(".hero-section");
  if (!sticky || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // Afficher le sticky uniquement quand le hero n'est plus visible
      if (entry.isIntersecting) {
        sticky.classList.remove("is-visible");
      } else {
        sticky.classList.add("is-visible");
      }
    },
    { threshold: 0.15 }
  );

  observer.observe(hero);
}

/**
 * Animations d'apparition au scroll (Intersection Observer)
 */
function initFadeInAnimations() {
  const elements = document.querySelectorAll(".fade-in-up");
  if (!elements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Amélioration accessibilité accordion
 */
function initAccordionA11y() {
  document.querySelectorAll(".accordion-button").forEach((btn) => {
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        // Bootstrap gère déjà ; on laisse le comportement natif
      }
    });
  });
}
