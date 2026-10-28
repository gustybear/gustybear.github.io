// Keep the image preview available to pointer and keyboard users alike.
document.addEventListener('DOMContentLoaded', () => {
  const directory = document.querySelector('.facility-list-page');
  if (!directory) return;
  const images = [directory.querySelector('#topImage'), directory.querySelector('#bottomImage')];
  const cards = [...directory.querySelectorAll('.facility-item')];
  function preview(card) {
    const title = card.querySelector('.facility-item-title')?.textContent.trim() || '';
    [card.dataset.imageTop, card.dataset.imageBottom].forEach((url, index) => {
      const image = images[index];
      if (!image) return;
      image.hidden = !url;
      if (url) {
        image.src = url;
        image.alt = `${title} — image ${index + 1}`;
      } else {
        image.removeAttribute('src');
        image.alt = '';
      }
    });
  }
  const initial = cards.find(card => card.dataset.imageTop || card.dataset.imageBottom);
  if (initial) preview(initial);
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => preview(card));
    card.closest('a')?.addEventListener('focus', () => preview(card));
  });
});
