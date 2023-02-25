const backgroundImages = ['url(../assets/Image_1.jpg)', 'url(../assets/Image_2.jpg)', 'url(../assets/Image_3.jpg)']

const backgroundImage = backgroundImages[Math.floor(Math.random()*backgroundImages.length)];

let style = document.querySelector('body').style;
style.setProperty('--background', backgroundImage);



anime({
    targets: '.dash',
    width: '100%',
    duration: 8000,
    easing: 'easeInOutCubic'
  });