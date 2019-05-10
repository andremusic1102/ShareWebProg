var imageLinks = [
    "http://www.royalhost.com.tw/uploadfile/userfiles/%E6%83%85%E5%A2%83%E5%9C%96B-%E4%BF%AES(1).jpg",
    "https://www.lalpathlabs.com/blog/wp-content/uploads/2018/09/Food.jpg",
    "https://cdn.shopify.com/s/files/1/1228/3124/products/photo_porterhouse_steak_bdbaef5e-7c42-4893-ae30-ea77646eb48f_1024x1024.jpg?v=1463010050",
    "https://d3mamv5u81no62.cloudfront.net/wp-content/uploads/sites/5/2018/05/25145609/s_pixta_38281815_M-855x569.jpg",
    "https://realfood.tesco.com/media/images/RFO-1400x919--cdb61265-c5a8-4297-b243-e335ad51d3d8-0-1400x919.jpg",
]

var counter = 2;
var image;
var source;
var leftButton;
var rightButton;

window.onload = function () {

    image = document.getElementById("display");
    source = document.getElementById("source");
    leftButton = document.getElementById("leftButton");
    rightButton = document.getElementById("rightButton");

    leftButton.addEventListener("click", previousImage);
    rightButton.addEventListener("click", nextImage);
}

function previousImage() {

    counter--;

    source.innerHTML = imageLinks[counter];
    loadImage(image);

    if (counter === 0) {
        leftButton.classList.add("disabled");
        leftButton.removeEventListener("click", previousImage);
    }

    else if (counter === 3) {
        rightButton.classList.remove("disabled");
        rightButton.addEventListener("click", nextImage);
    }
}

function nextImage() {

    counter++;

    source.innerHTML = imageLinks[counter];
    loadImage(image);

    if (counter === 4) {
        rightButton.classList.add("disabled");
        rightButton.removeEventListener("click", nextImage);
    }
    else if (counter === 1) {
        leftButton.classList.remove("disabled");
        leftButton.addEventListener("click", previousImage);
    }
}


function loadImage(image) {
    /* Before loading finish */
    image.src = "./images/loading.gif";
    image.style.width = "6rem";
    image.style.height = "6rem";
    image.style.margin = "12rem 22rem";

    var downloadingImage = new Image();
    downloadingImage.onload = function () {
        /* After loading finish */
        image.style.width = "50rem";
        image.style.height = "30rem";
        image.style.margin = "auto";
        image.style.marginBottom = "1rem";
        image.src = this.src;
    };
    downloadingImage.src = imageLinks[counter];
}
