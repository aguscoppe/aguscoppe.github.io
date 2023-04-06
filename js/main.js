// ACTIVE NAV LINK
function isVisible(domElement) {
  return new Promise((resolve) => {
    const o = new IntersectionObserver(([entry]) => {
      resolve(entry.intersectionRatio === 1);
      o.disconnect();
    });
    o.observe(domElement);
  });
}

async function addActiveStyle() {
  const header = document.querySelector('#header');
  const sections = document.querySelectorAll('section');
  [header, ...sections].forEach(async (element) => {
    const visible = await isVisible(element);
    if (visible) {
      const navLink = document.querySelectorAll('nav .links a');
      navLink.forEach((currentLink) => {
        const currentId = currentLink.href.split('#')[1];
        if (currentId === element.id) {
          const currentActive = document.querySelector('.active');
          currentActive.classList.remove('active');
          currentLink.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', addActiveStyle);

// BURGER MENU
const burgerMenu = document.querySelector('.burger-menu');
const burgerLinks = document.querySelector('.burger-links');

burgerMenu.addEventListener('click', () => {
  burgerLinks.style.display = 'flex';
});
burgerLinks.addEventListener('click', () => {
  burgerLinks.style.display = 'none';
});
