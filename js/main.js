
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.menu');

  btn.onclick = () => {
    menu.classList.toggle('show');
  };

  document.querySelectorAll('.dropdown').forEach(item => {
    item.onclick = () => {
      if (window.innerWidth <= 767) {
        item.classList.toggle('open');
      }
    };
  });

