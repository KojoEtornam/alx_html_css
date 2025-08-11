document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.getElementById('drawer');
  const closeBtn = document.querySelector('.close-btn');

  if (!menuBtn || !drawer || !closeBtn) return;

  menuBtn.addEventListener('click', function() {
    drawer.style.display = drawer.style.display === 'flex' ? 'none' : 'flex';
  });

  closeBtn.addEventListener('click', function() {
    drawer.style.display = 'none';
  });
});
