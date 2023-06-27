      // Toggle mobile menu
      const toggleMenuBtn = document.getElementById('toggleMenu');
      const mobileMenu = document.getElementById('mobileMenu');
  
      toggleMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });