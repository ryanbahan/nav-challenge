var main = document.querySelector('main');
var navBar = document.querySelector('nav');

navBar.addEventListener('click', toggleView)

function makeActive() {
    var navItems = navBar.querySelectorAll('li');
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].classList.remove('active-nav')
    };
    event.target.classList.add('active-nav')
}

function toggleView() {
  if (event.target.classList.contains('all-courses')) {
    displayAllCoursesView();
    makeActive();
  } else if (event.target.classList.contains('collections')) {
    displayCollectionsView();
    makeActive();
  } else if (event.target.classList.contains('wishlist')) {
    displayWishlistView();
    makeActive();
  } else if (event.target.classList.contains('archived')) {
    displayArchivedView();
    makeActive();
  }
}

function displayAllCoursesView() {
  main.innerHTML = `<div class="share-banner">
          <i class="fas fa-wallet"></i>
          <p>Share Udemy with friends</p>
          <i class="fas fa-times"></i>
        </div>`
};

function displayCollectionsView() {
  main.innerHTML = `<div class="top-cta">
          <h2>Organize and access your courses faster!</h2>
          <p><a href="#">Go to the All Courses tab</a> to create a collection.</p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8s6UNBnXapM"
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>`
}

function displayWishlistView() {
  main.innerHTML = `<button class="browse-courses">Browse courses now</button>`
}

function displayArchivedView() {
  main.innerHTML = `<div class="top-cta">
          <h2>Focus on only the courses that matter to you.</h2>
          <p><a href="#">Go to the All Courses tab</a> to archive.</p>
        </div>`
}
