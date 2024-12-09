window.addEventListener('load', () => {
    const welcomeText = document.querySelector('.welcome-container');
    
    // Задержка анимации на 1 секунду после загрузки страницы
    setTimeout(() => {
      welcomeText.style.animationPlayState = 'running';
    }, 1000);
  });
  