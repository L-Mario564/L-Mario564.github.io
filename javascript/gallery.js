function displayBanners() {
    const playerContainer = document.querySelector('#player-banners');
    const staffContainer = document.querySelector('#staff-banners');
    const banners = [pdn, est, ot, tc2, hkc].reverse();

    const playerBanners = [];
    const staffBanners = [];
    banners.forEach(banner => {
        if (banner.type == 'player') playerBanners.push(banner);
        else staffBanners.push(banner);
    });

    for (i = 0; i < playerBanners.length; i++) {
        var bannerDiv = document.createElement('div');

        var banner = document.createElement('img');
        banner.classList.add('player-banner');
        banner.setAttribute('src', `assets/banners/player/awarded/${playerBanners[i].src}.${playerBanners[i].format}`);
        banner.setAttribute('onclick', 'showFullImage(event);')

        bannerDiv.appendChild(banner);

        playerContainer.appendChild(bannerDiv);
    }

    for (i = 0; i < staffBanners.length; i++) {
        var bannerDiv = document.createElement('div');

        var banner = document.createElement('img');
        banner.classList.add('staff-banner');
        banner.setAttribute('src', `assets/banners/staff/awarded/${staffBanners[i].src}.${staffBanners[i].format}`);
        banner.setAttribute('onclick', 'showFullImage(event);')

        bannerDiv.appendChild(banner);

        staffContainer.appendChild(bannerDiv);
    }

    // Displays the layout using Bricklayer library
    new Bricklayer(document.querySelectorAll('.bricklayer')[0]);
    new Bricklayer(document.querySelectorAll('.bricklayer')[1]);

    return;
}

displayBanners();

function showFullImage(e) {
    if (window.matchMedia("(max-width: 600px)").matches) return;

    const imgBg = document.createElement('div');
    imgBg.classList.add('img-bg');
    imgBg.setAttribute('onclick', 'removeFullImage(event);');

    // Displays the image itself
    const image = document.createElement('img');
    image.classList.add('full-image');
    image.setAttribute('src', e.target.attributes[1].nodeValue);
    if (Number(image.width) > Number(image.height) * 2) image.style.height = '55%';
    else image.style.height = '80%';

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    imageContainer.appendChild(image);

    // Sets up buttons to slide through
    const leftBtn = document.createElement('button');
    leftBtn.classList.add('left-button')
    leftBtn.setAttribute('onclick', 'goToPreviousImage(event);')

    imageContainer.appendChild(leftBtn);

    const rightBtn = document.createElement('button');
    rightBtn.classList.add('right-button');
    rightBtn.setAttribute('onclick', 'goToNextImage(event);')
    

    imageContainer.appendChild(rightBtn);

    // Appens the container to the background
    imgBg.appendChild(imageContainer);
    // Appends everything to the body
    document.body.appendChild(imgBg);
    return;
}

function removeFullImage(e) {
    if (e.target.className !== 'img-bg') return;
    document.body.removeChild(e.target);
    return;
}

function goToPreviousImage(e) {
    const currentImage = e.target.parentNode.children[0];

    if (currentImage.src.includes('player')) {
        const playerBanners = document.querySelectorAll('.player-banner');
        const index = findIndex(playerBanners, currentImage);

        if (index - 1 < 0 || index - 1 > playerBanners.length - 1) return;

        // Replaces the current image with the next index
        const previousImageSrc = playerBanners.item(index - 1).attributes[1].nodeValue;

        // Displays the image itself
        const previousImage = document.createElement('img');
        previousImage.classList.add('full-image');
        previousImage.setAttribute('src', previousImageSrc);
        if (Number(previousImage.width) > Number(previousImage.height) * 2) previousImage.style.height = '55%';
        else previousImage.style.height = '80%';

        e.target.parentNode.replaceChild(previousImage, currentImage);
    } else {
        const staffBanners = document.querySelectorAll('.staff-banner');
        const index = findIndex(staffBanners, currentImage);

        if (index - 1 < 0 || index - 1 > staffBanners.length - 1) return;

        // Replaces the current image with the next index
        const previousImageSrc = staffBanners.item(index - 1).attributes[1].nodeValue;

        // Displays the image itself
        const previousImage = document.createElement('img');
        previousImage.classList.add('full-image');
        previousImage.setAttribute('src', previousImageSrc);
        if (Number(previousImage.width) > Number(previousImage.height) * 2) previousImage.style.height = '55%';
        else previousImage.style.height = '80%';

        e.target.parentNode.replaceChild(previousImage, currentImage);
    }
    return;
}

function goToNextImage(e) {
    if (!document.querySelector('.img-bg')) return;
    const currentImage = e.target.parentNode.children[0];

    if (currentImage.src.includes('player')) {
        const playerBanners = document.querySelectorAll('.player-banner');
        const index = findIndex(playerBanners, currentImage);

        if (index + 1 < 0 || index + 1 > playerBanners.length - 1) return;

        // Replaces the current image with the next index
        const nextImageSrc = playerBanners.item(index + 1).attributes[1].nodeValue;

        // Displays the image itself
        const nextImage = document.createElement('img');
        nextImage.classList.add('full-image');
        nextImage.setAttribute('src', nextImageSrc);
        if (Number(nextImage.width) > Number(nextImage.height) * 2) nextImage.style.height = '55%';
        else nextImage.style.height = '80%';

        e.target.parentNode.replaceChild(nextImage, currentImage);
    } else {
        const staffBanners = document.querySelectorAll('.staff-banner');
        const index = findIndex(staffBanners, currentImage);

        if (index + 1 < 0 || index + 1 > staffBanners.length - 1) return;

        // Replaces the current image with the next index
        const nextImageSrc = staffBanners.item(index + 1).attributes[1].nodeValue;

        // Displays the image itself
        const nextImage = document.createElement('img');
        nextImage.classList.add('full-image');
        nextImage.setAttribute('src', nextImageSrc);
        if (Number(nextImage.width) > Number(nextImage.height) * 2) nextImage.style.height = '55%';
        else nextImage.style.height = '80%';

        e.target.parentNode.replaceChild(nextImage, currentImage);
    }
    return;
}

function findIndex(nodeList, node) {
    for (i = 0; i < nodeList.length; i++) {
        if (nodeList.item(i).src == node.src) return i;
    }
    return;
}

// Detects arrow keys or scroll to go through gallery
document.onkeydown = e => {
    const key = e.key;

    if (key == 'ArrowLeft') {
        if (!document.querySelector('.left-button')) return;
        document.querySelector('.left-button').click();
    } else if (key == 'ArrowRight') {
        if (!document.querySelector('.right-button')) return;
        document.querySelector('.right-button').click();
    }
    return;
}

window.addEventListener('wheel', e => {
    var wDelta = e.deltaY > 0 ? 'down' : 'up';

    if (wDelta == 'down') {
        if (!document.querySelector('.left-button')) return;
        document.querySelector('.left-button').click();
    } else {
        if (!document.querySelector('.right-button')) return;
        document.querySelector('.right-button').click();
    }
    return;
});

// Disables content scrolling when viewing gallery
document.querySelector('.content'),addEventListener('wheel', e => {
    if (!document.querySelector('.img-bg')) return;
    else {
        e.preventDefault();
        e.stopPropagation();
    }
    return;
}, {passive: false});