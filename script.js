// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Sticky Navbar
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });


  document.getElementById("download").addEventListener("click",function(e){
    e.preventDefault();
    window.location.href = "https://www.mediafire.com/file/tmlwf35td9a3j6u/KU_Buddy_%2528V2.0%2529.apk/file"
  })
