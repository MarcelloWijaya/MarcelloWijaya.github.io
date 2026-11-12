import { useEffect } from 'react';

// Progressive enhancement: content remains visible until the observer registers.
// This keeps filter changes, deep links, and reduced-motion preferences usable.
export function usePortfolioMotion(routeKey) {
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.documentElement;
    const targets = 'main .section-top, main .skills-heading, main .soft-project-card, main .expertise-card, main .about-photo, main .about-intro, main .profile-facts, main .career-entry, main .case-detail-section, main .related-case-study-card, main .case-detail-meta, main .contact-bottom';
    let observer;

    const register = () => {
      document.querySelectorAll(targets).forEach((node, index) => {
        if (node.dataset.motionObserved) return;
        node.dataset.motionObserved = 'true';
        if (reduceMotion.matches || !('IntersectionObserver' in window)) return;
        // Don't hide elements already visible on initialization.
        const bounds = node.getBoundingClientRect();
        if (bounds.top < window.innerHeight * .96 && bounds.bottom > 0) return;
        node.classList.add('motion-pending');
        node.style.setProperty('--motion-delay', `${Math.min(index % 4, 3) * 65}ms`);
        observer?.observe(node);
      });
    };

    const updateProgress = () => {
      const scrolled = document.documentElement.scrollTop || window.scrollY || 0;
      const available = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty('--read-progress', `${Math.max(0, Math.min(1, scrolled / available)) * 100}%`);
    };

    if (!reduceMotion.matches && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove('motion-pending');
          entry.target.classList.add('motion-visible');
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });
    }
    register();
    updateProgress();

    const mutation = new MutationObserver(register);
    const main = document.querySelector('main');
    if (main) mutation.observe(main, { childList: true, subtree: true });
    const onReduce = () => {
      document.querySelectorAll('.motion-pending').forEach(node => node.classList.remove('motion-pending'));
    };
    reduceMotion.addEventListener?.('change', onReduce);
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    return () => {
      mutation.disconnect();
      observer?.disconnect();
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      reduceMotion.removeEventListener?.('change', onReduce);
      document.querySelectorAll('.motion-pending').forEach(node => node.classList.remove('motion-pending'));
    };
  }, [routeKey]);
}
