document.addEventListener('DOMContentLoaded', () => {
  // Captcha functionality
  function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }

  const captchaText = document.getElementById('captcha-text');
  const refreshButton = document.getElementById('refresh-captcha');

  // Initialize captcha
  captchaText.textContent = generateCaptcha();

  // Refresh captcha
  refreshButton.addEventListener('click', () => {
    captchaText.textContent = generateCaptcha();
  });

  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const captchaInput = document.getElementById('captcha-input').value;
    const captchaTextContent = captchaText.textContent;

    if (captchaInput === captchaTextContent) {
      // Captcha verified
      const firstname = document.querySelector('input[name="firstname"]').value;
      const lastname = document.querySelector('input[name="lastname"]').value;
      const mobile = document.querySelector('input[name="mobile"]').value;
      const email = document.querySelector('input[name="email"]').value;
      const message = document.querySelector('textarea[name="message"]').value;

      // Format WhatsApp message
      const whatsappMessage = `
        Hello, Fayn Global!
        Name: ${firstname} ${lastname}
        Mobile: ${mobile}
        Email: ${email}
        Message: ${message}
      `.trim();

      // Open WhatsApp with the pre-filled message
      const whatsappURL = `https://wa.me/919094903551?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappURL, 'https://www.google.com/search?q=whatsapp+web&rlz=1C1VDKB_enIN1127IN1128&oq=wha&gs_lcrp=EgZjaHJvbWUqDQgCEAAYgwEYsQMYgAQyBggAEEUYOTITCAEQLhiDARjHARixAxjRAxiABDINCAIQABiDARixAxiABDINCAMQABiDARixAxiABDINCAQQABiDARixAxiABDIHCAUQABiABDIKCAYQABixAxiABDINCAcQABiDARixAxiABDIQCAgQABiDARixAxiABBiKBTIHCAkQABiPAtIBCTI3MTRqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8');
    } else {
      alert('Invalid captcha. Please try again.');
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselImages = document.querySelector('.carousel-images');
  let currentIndex = 0;

  const totalImages = carouselImages.children.length;

  // Move to the previous image
  function showPrevImage() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalImages - 1; // Loop to the last image
    }
    updateCarouselPosition();
  }

  // Move to the next image
  function showNextImage() {
    if (currentIndex < totalImages - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop to the first image
    }
    updateCarouselPosition();
  }

  // Update the position of the carousel images
  function updateCarouselPosition() {
    const offset = -currentIndex * 100; // Move by 100% width per image
    carouselImages.style.transform = `translateX(${offset}%)`;
  }

  // Event listeners for the carousel controls
  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);
});