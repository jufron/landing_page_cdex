const hamburgerMenu = document.getElementById('hamburger-menu');
const buttonToTop = this.document.querySelector('#to-top');

hamburgerMenu.addEventListener('click', () => {
  const hamburgerItems = document.getElementsByClassName("hamburger-item");
  const navbarToggle = document.querySelectorAll('#navbar-toggle');

  const toArray1 = [...hamburgerItems];
  const toArray2 = [...navbarToggle];

  toArray1.forEach(item => {
    item.classList.toggle('active');    
  });

  toArray2.forEach(item => {
    item.classList.toggle('active');
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('#navbar');
  const navbarAuth = this.document.querySelector('#navbar-auth');

  const shouldStick = window.scrollY > 100;

  navbar.classList.toggle('navbar-sticky', shouldStick);
  navbarAuth.classList.toggle('button', shouldStick);

  // scroll button to top
  const shouldShowButton = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;

  buttonToTop.classList.toggle('active', shouldShowButton);

});

// set date coppyright 
document.addEventListener('DOMContentLoaded', function() {
  const copyrightText = document.getElementById('copyright-text');
  const currentYear = new Date().getFullYear();
  copyrightText.textContent += ' ' + currentYear;

  console.log('oke');
});

// click button to top
buttonToTop.addEventListener('click', function() {
  // Mendapatkan tinggi dokumen
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  // Menentukan langkah-langkah per pergerakan scroll
  const scrollStep = -window.scrollY / (documentHeight / 100);

  // Menjalankan animasi scroll
  function scrollToTop() {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(scrollToTop);
    }
  }

  // Memanggil fungsi animasi scroll
  scrollToTop();
});
