// Загрузка изображений
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.querySelector('.image-preview');
const generateButton = document.querySelector('.generate-button');

imageUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.style.backgroundImage = `url(${e.target.result})`;
            generateButton.disabled = false;
        };
        reader.readAsDataURL(file);
    }
});

// Модальное окно
const modal = document.querySelector('.modal');
const modalImage = document.querySelector('.modal-content img');
const closeModal = document.querySelector('.close-modal');

imagePreview.addEventListener('click', function () {
    modal.style.display = 'block';
    modalImage.src = imagePreview.style.backgroundImage.slice(4, -1).replace(/"/g, "");
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Переключение изображений в модальном окне
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', function () {
    // Логика переключения на предыдущее изображение
});

rightArrow.addEventListener('click', function () {
    // Логика переключения на следующее изображение
});