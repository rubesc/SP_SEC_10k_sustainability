document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const caption = document.getElementById('caption'); // Caption container
    const closeButton = document.querySelector('.close');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        modalImage.src = this.dataset.src;
        modal.style.display = 'block';
        // Display caption
        const imageCaption = this.dataset.caption;
        caption.textContent = imageCaption;
      });
    });
  
    closeButton.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  });
  