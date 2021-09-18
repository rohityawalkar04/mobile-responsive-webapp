$(document).ready(function () {
  $(document).on('scroll', function () {
    let navbarClassList = document.querySelector('.navbar').classList;
    (window.scrollY === 0 && window.innerHeight > 1040) ? navbarClassList.remove('background') : navbarClassList.add('background');
  })

  let burger = document.querySelector('.burger')
  let navBar = document.querySelector('.navbar')
  let rightNav = document.querySelector('.rightNav')
  let navList = document.querySelector('.nav-list')

  burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navBar.classList.toggle('h-nav-resp')
  })

  // $('a').click(() => {
  //   setTimeout(() => {
  //     window.scrollTo({
  //       top: window.pageYOffset - 140,
  //       behavior: 'smooth'
  //     });
  //   }, 100);
  // })

  // const anchorTags = document.getElementsByTagName('a')
  // anchorTags.map((anchortag) => {
  //   console.log(anchortag)
  // })
})

// $('html, body').animate({
//   scrollTop: $(hash).offset().top - document.getElementById('nav').clientHeight - 10
// }, 800);
// window.location.hash = hash;