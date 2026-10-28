// Reserve space for the side controls and fit the original device as one unit.
const phoneArea = document.querySelector('.phone-area');
const fitPhone = () => {
  const { width, height } = phoneArea.getBoundingClientRect();
  if (!width || !height) return;
  const scale = Math.max(0.1, Math.min(1, (width - 72) / 390, height / 844));
  phoneArea.style.setProperty('--phone-scale', scale);
};
new ResizeObserver(fitPhone).observe(phoneArea);
fitPhone();
