/* Общие стили */
body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background-color: rgba(247, 247, 255, 0.58);
}

/* Задний фон */
.background {
    position: fixed;
    top: 0;
    left: 0;
    width: 1920px;
    height: 1080px;
    background-color: rgba(247, 247, 255, 0.58);
    z-index: -1;
}

/* Шапка */
.header {
    width: 1920px;
    height: 64px;
    background-color: rgb(249, 249, 249);
    border-bottom: 3px solid rgb(106, 220, 224);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
}

.header-buttons {
    display: flex;
    gap: 10px;
}

.header-button {
    width: 138px;
    height: 46px;
    border-radius: 89px;
    background-color: rgb(196, 196, 196);
    border: none;
    cursor: pointer;
}

/* Кнопка "Вставка" */
.insert-button {
    width: 653px;
    height: 646px;
    background-color: rgb(249, 249, 249);
    border: 8px dashed rgb(106, 220, 224);
    border-radius: 97px;
    margin: 181px 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.insert-label {
    font-size: 24px;
    color: rgba(68, 3, 121, 0.58);
    cursor: pointer;
}

.image-preview {
    width: 390.58px;
    height: 331px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 80px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 258px;
    left: 514.42px;
}

/* Окно классификации и бюджета */
.classification-window {
    width: 551px;
    height: 715px;
    background-color: rgb(249, 249, 249);
    border: 4px solid rgb(106, 220, 224);
    border-radius: 67px;
    position: absolute;
    top: 163px;
    left: 1143px;
    padding: 20px;
}

.classification-section, .budget-section {
    margin-bottom: 20px;
}

.dropdown {
    width: 247px;
    height: 77px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(106, 220, 224);
    border-radius: 61px;
    padding: 10px;
    font-size: 18px;
}

.points {
    font-size: 18px;
    color: rgba(68, 3, 121, 0.58);
    margin-bottom: 10px;
}

.generate-button {
    width: 372px;
    height: 151px;
    background-color: rgb(249, 249, 249);
    border: 4px solid rgb(106, 220, 224);
    border-radius: 67px;
    font-size: 24px;
    cursor: pointer;
    margin-top: 20px;
}

.generate-button:disabled {
    background-color: rgb(196, 196, 196);
    cursor: not-allowed;
}

/* Модальное окно */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.modal-content {
    position: relative;
    margin: auto;
    padding: 20px;
    width: 80%;
    max-width: 1200px;
    text-align: center;
}

.close-modal {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}

.arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: white;
    cursor: pointer;
}

.left-arrow {
    left: 20px;
}

.right-arrow {
    right: 20px;
}