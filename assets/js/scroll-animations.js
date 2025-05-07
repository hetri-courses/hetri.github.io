// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// fade-up each chapter as it enters the viewport
gsap.utils.toArray('.chapter').forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    }
  );
});

// animate stat counters
gsap.utils.toArray('.stat-count').forEach(el => {
  const endVal = parseInt(el.dataset.target, 10);
  gsap.fromTo(el,
    { innerText: 0 },
    {
      innerText: endVal,
      duration: 1.5,
      ease: 'power1.out',
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
      }
    }
  );
});

// animate chart bars
gsap.utils.toArray('.chart-bar').forEach(bar => {
  const fill = parseFloat(bar.dataset.fill) || 0;
  gsap.to(bar, {
    height: `${fill * 100}%`,
    duration: 1,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: bar,
      start: 'top 90%',
    }
  });
});
