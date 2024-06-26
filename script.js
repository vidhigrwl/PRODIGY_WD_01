window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#555'; // Change background color when scrolled
    } else {
      header.style.backgroundColor = '#333'; // Revert to original color when at the top
    }
  });

