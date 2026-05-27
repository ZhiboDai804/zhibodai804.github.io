console.log('%cVortisil (https://github.com/khitezza/vortisil)', 'font-style: italic;');

document.addEventListener('DOMContentLoaded', function () {
  const navbarBurger = document.getElementById('navbar-burger');
  const navbarMenu = document.getElementById('navbar-menu');
  const profilePhoto = document.querySelector('.about-profile-photo');

  navbarBurger.addEventListener('click', function () {
    navbarBurger.classList.toggle('active');
    navbarMenu.classList.toggle('active');
  });

  if (profilePhoto) {
    const photoSrcs = profilePhoto.dataset.photoSrcs.split(',');
    let activePhotoIndex = 0;

    profilePhoto.addEventListener('click', function () {
      activePhotoIndex = (activePhotoIndex + 1) % photoSrcs.length;
      profilePhoto.src = photoSrcs[activePhotoIndex];
    });
  }
});

scrollToTop = function () {
  const duration = 350;
  const start = window.scrollY;
  const startTime = performance.now();

  function scroll() {
    const now = performance.now();
    const time = Math.min(1, (now - startTime) / duration);
    const easedTime = time * (2 - time);

    window.scrollTo(0, start * (1 - easedTime));

    if (time < 1) {
      requestAnimationFrame(scroll);
    }
  }

  requestAnimationFrame(scroll);
}
