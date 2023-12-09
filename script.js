
document.addEventListener('DOMContentLoaded', () => {
    const educationInfo = document.getElementById('education-info');
    educationInfo.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
        this.style.color = getRandomColor();
    });

    const firstInfo = document.querySelector('.info');
    firstInfo.addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
        this.style.color = getRandomColor();
    });
});



function addImage() {
    const imgContainer = document.getElementById('city-link');
    const newImg = document.createElement('img');
    newImg.src = 'https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/6042a289a49a2_%D0%9A%D0%B8%D1%97%D0%B2.jpeg';
    newImg.alt = 'Kyiv';
    newImg.style.width = '400px';
    imgContainer.appendChild(newImg);
}

function increaseImage() {
    const imgs = document.querySelectorAll('#city-link img');
    imgs.forEach(img => {
        img.style.width = (img.clientWidth + 10) + 'px';
    });
}

function decreaseImage() {
    const imgs = document.querySelectorAll('#city-link img');
    imgs.forEach(img => {
        if (img.clientWidth > 10) {
            img.style.width = (img.clientWidth - 10) + 'px';
        }
    });
}

function removeImage() {
    const imgContainer = document.getElementById('city-link');
    if (imgContainer.hasChildNodes()) {
        imgContainer.removeChild(imgContainer.lastChild);
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
