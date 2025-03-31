const style = document.createElement('style');
style.textContent = `
  .banner2, .pc-only, .mobile-only {
    display: none !important;
  }
`;
document.head.appendChild(style);