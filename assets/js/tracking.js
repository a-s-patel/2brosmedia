/* ============================================================
   2BROS MEDIA — GA4 EVENT TRACKING
   Tracks all CTA button clicks across every page
============================================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- TRACK ALL CTA BUTTON CLICKS ----
  const ctaButtons = document.querySelectorAll('.btn');

  ctaButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const label = btn.textContent.trim();
      const destination = btn.getAttribute('href') || 'no-href';
      const page = window.location.pathname;

      gtag('event', 'cta_click', {
        'event_category': 'CTA Button',
        'event_label': label,
        'page_path': page,
        'link_url': destination
      });
    });
  });

  // ---- TRACK SPECIFIC HIGH-VALUE BUTTONS ----

  // "Apply For Greatness" clicks — highest intent signal
  document.querySelectorAll('a[href*="/contact/"], a[href*="contact.html"]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      gtag('event', 'apply_click', {
        'event_category': 'High Intent',
        'event_label': btn.textContent.trim(),
        'page_path': window.location.pathname
      });
    });
  });

  // Portfolio "View Project" clicks
  document.querySelectorAll('.pf-item-cta, .portfolio-card-cta').forEach(function(btn) {
    btn.addEventListener('click', function() {
      gtag('event', 'portfolio_click', {
        'event_category': 'Portfolio',
        'event_label': btn.closest('article')?.querySelector('h3')?.textContent || 'Unknown Project'
      });
    });
  });

  // Service card clicks
  document.querySelectorAll('.service-card-link, .svc-card-footer .btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      gtag('event', 'service_interest', {
        'event_category': 'Services',
        'event_label': btn.closest('article')?.querySelector('h3')?.textContent || btn.textContent.trim()
      });
    });
  });

  // FAQ accordion opens — shows what questions prospects have
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.getAttribute('aria-expanded') === 'false') {
        gtag('event', 'faq_open', {
          'event_category': 'FAQ',
          'event_label': btn.querySelector('span:first-child')?.textContent || btn.textContent.trim()
        });
      }
    });
  });

  // Social media link clicks in footer
  document.querySelectorAll('.footer-social').forEach(function(link) {
    link.addEventListener('click', function() {
      gtag('event', 'social_click', {
        'event_category': 'Social Media',
        'event_label': link.getAttribute('aria-label') || 'Social Link'
      });
    });
  });

});