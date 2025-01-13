// scripts.js
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  const arrow = item.querySelector('.arrow');
  const submenu = item.querySelector('.submenu');

  item.addEventListener('click', (event) => {
    // Fecha outros menus abertos
    document.querySelectorAll('.submenu').forEach(menu => {
      if (menu !== submenu) {
        menu.style.display = 'none';
        const otherArrow = menu.parentElement.querySelector('.arrow');
        if (otherArrow) otherArrow.style.transform = 'rotate(0deg)';
      }
    });

    // Alterna o submenu atual
    if (submenu) {
      const isVisible = submenu.style.display === 'block';
      submenu.style.display = isVisible ? 'none' : 'block';

      // Alterna a rotação da seta
      if (arrow) {
        arrow.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(180deg)';
      }

      event.preventDefault(); // Impede que o clique vá para o link principal
    }
  });
});
