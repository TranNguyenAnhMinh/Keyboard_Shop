var i = 0;

function changeImage() {

    var imgs = ["./img/slider1.png", "./img/slider2.png","./img/silder3.png"];
    document.getElementById('sliders').src = imgs[i];
    i++;
    if (i==imgs.length) {
        i = 0;
    }
}
setInterval(changeImage, 2500);
