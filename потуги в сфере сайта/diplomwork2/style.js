/* Общие стили */
body {
    margin: 0;
    font-family: sans-serif;
    overflow: hidden; /* Предотвращаем прокрутку страницы */
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    background-color: rgba(247, 247, 255, 0.58);
    z-index: -1; /* Помещаем фон под остальное содержимое */
}

/* Шапка */
.header {
    width: 1920px;
    height: 64px;
    background-color: rgb(249, 249, 249);
    border-bottom-left-radius: 166px;
    border-bottom-right-radius: 166px;
    border: 3px solid transparent; /* Для имитации обводки */
    border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
    border-image-slice: 1;
    position: relative;
}

.header-container {
    display: flex;
    justify-content: flex-end; /* Выравниваем кнопки вправо */
    align-items: center;
    height: 100%;
    padding-right: 20px; /* Небольшой отступ справа */
}

.button {
    width: auto; /* ширина по содержимому */
    height: 46px;
    padding: 0 15px;
    margin-left: 10px; /* Расстояние между кнопками */
    border-radius: 89px;
    background-color: rgb(196, 196, 196);
    border: none;
    cursor: pointer;
}

/* Стили для выпадающего списка услуг */
.services-dropdown {
    position: relative;
    margin-left: 10px;
}

.services-button {
  width: 138px;
  height: 46px;
  border-radius: 89px;
  background-color: rgb(196, 196, 196);
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

.services-button.active {
    background: linear-gradient(to bottom, rgb(247, 243, 255), rgb(255, 255, 255));
    border: 1px solid transparent;
    border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
    border-image-slice: 1;
}

.service-type-selected {
  font-size: 16px;
  color: rgba(68, 3, 121, 0.58);
}

.service-type-details {
  font-size: 14px;
  color: rgba(7, 107, 83, 0.44);
}

/* Основной контент */
.main-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: calc(100vh - 64px); /* Высота экрана минус высота шапки */
}

/* Контейнер для загрузки изображений */
.image-upload-container {
    width: 653px;
    height: 646px;
    border-radius: 97px;
    background-color: rgb(249, 249, 249);
    border: 8px dashed transparent;
    border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
    border-image-slice: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-upload-area {
    width: 390.58px;
    height: 331px;
    background-color: rgb(255, 255, 255);
    border-radius: 80px;
    box-shadow: 0 0 80px -27px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden; /* Скрываем все, что выходит за границы */
    cursor: pointer;
}

.image-placeholder {
    display: flex;
    flex-wrap: wrap; /* Разрешаем перенос изображений на новую строку */
    justify-content: center; /* Центрируем изображения по горизонтали */
    align-items: center;      /* Центрируем изображения по вертикали */
    width: 100%;
    height: 100%;
    padding: 10px;
}

.image-placeholder img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Масштабируем изображение, чтобы оно полностью поместилось в контейнер */
    margin: 5px; /* добавляем небольшой отступ между изображениями */
    cursor: pointer;
}

/* Контейнер для классификации */
.classification-container {
    width: 551px;
    height: 715px;
    border-radius: 67px;
    background-color: rgb(249, 249, 249);
    border: 4px solid transparent;
    border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
    border-image-slice: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    justify-content: space-around;
}

.classification-box {
    width: 497px;
    height: 232px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; /* Равномерное распределение места */
    align-items: center;
}

.classification-box h3 {
    text-align: center;
}

/* Стили для выпадающего списка */
.dropdown {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center; /* Центрируем кнопку выпадающего списка */
}

.dropdown-button {
    width: 247px;
    height: 77px;
    border-radius: 61px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.25);
    border: none;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
}

.dropdown-list {
    position: absolute;
    top: 100%;
    left: 50%; /* Центрируем список относительно кнопки */
    transform: translateX(-50%); /* Корректируем центрирование */
    width: 319px;
    height: 317px;
    border-radius: 0px 61px 61px 61px;
    background-color: rgba(247, 243, 255, 0.43);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    overflow-y: auto; /* Добавляем вертикальную прокрутку, если нужно */
    z-index: 10; /* Убеждаемся, что список поверх других элементов */
    padding: 0;
    margin-top: 5px;  /* Небольшой отступ от кнопки */
}

.dropdown-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.dropdown-list li {
    padding: 10px 15px;
    cursor: pointer;
    text-align: center;
}

.dropdown-list li:hover {
    background-color: rgba(240, 240, 240, 0.5);
}

/* Стили для скроллбара */
.scrollbar-background {
  position: absolute;
  top: 25px;
  right: 7px;
  width: 19px;
  height: 265px;
  border-radius: 101px;
  background-color: rgba(249, 249, 249, 0.31);
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
}

.scrollbar-thumb {
    position: absolute;
    top: 0;
    left: 1px;
    width: 17px;
    height: 48px;
    border-radius: 101px;
    background-color: rgb(249, 249, 249);
    border: 1px solid transparent;
    border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
    border-image-slice: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

/* Кнопка "Сгенерировать" */
.generate-button {
    width: 372px;
    height: 151px;
    border-radius: 67px;
    background-color: rgb(249, 249, 249);
    border: 4px solid transparent;
    border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
    border-image-slice: 1;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.generate-button:hover {
  background-color: #e9e9e9;
}

.generate-button.disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    border: none;
    box-shadow: none;
}

/* Стили для панели полноразмерного изображения */
.fullscreen-image-panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8); /* Полупрозрачный черный фон */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Убедитесь, что панель поверх всего остального */
}

.fullscreen-image {
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
}

/* Стили для стрелочек */
.arrow-button {
  width: 116.5px;
  height: 241.5px;
  background-color: rgba(247, 243, 255, 0.43);
  border: 2px solid transparent;
  border-image: linear-gradient(to right, rgb(106, 220, 224), rgba(40, 46, 216, 0.66), rgba(126, 25, 235, 0.71), rgba(230, 36, 210, 0.58), rgba(0, 0, 0, 0));
  border-image-slice: 1;
  color: white;
  font-size: 3em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border-radius: 10px;
}

.arrow-button:hover {
    background-color: rgba(247, 243, 255, 0.6);
}

.hidden {
  display: none !important;
}

/* Стили для изображений */
.image-placeholder img {
    max-width: 100%;  /* Устанавливаем максимальную ширину в 100% контейнера */
    max-height: 100%; /* Устанавливаем максимальную высоту в 100% контейнера */
    object-fit: contain; /* Масштабируем изображение, чтобы оно полностью поместилось в контейнер */
    margin: 5px;       /* добавляем небольшой отступ между изображениями */
    cursor: pointer;
}