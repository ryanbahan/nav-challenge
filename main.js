var navBar = document.querySelector('nav');

navBar.addEventListener('click', makeActive)

function makeActive() {
  if (event.target.nodeName === "LI") {
    var navItems = navBar.querySelectorAll('li');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active-nav')
    };
    event.target.classList.add('active-nav')
  }
}
