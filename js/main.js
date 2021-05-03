var image = new Image();
image.src = "./image.png";

var sheetWidth = 900;
var sheetHeigth = 495;


var sWidth = 195;
var sHeight = 380;

var cols = 5;
var rows = 2;

var x = 0;
var y = 0;

var srcX;
var srcY;

var width = sheetWidth / cols;
var height = sheetHeigth / rows;

var currentFrame = 0;



var largeur = screen.width;
var hauteur = screen.height;





var canvas = document.getElementById('canvas');
canvas.style.background = "black";
var ctx = canvas.getContext('2d');





function getRandomInt(max) {
    return Math.floor(Math.random() * ((max) / 3) * 2);
}

console.log(getRandomInt(3));


function rock(max) {

    var image = new Image();
    image.src = "./image.png";

    console.log('height ' + hauteur);

    var y = 10;
    var x = max;



    setInterval(function() {

        console.log('x ' + x);



        ctx.drawImage(image, x, 10, 10, y);


        ctx.clearRect(x, 10, 10, y - 10);

        if (y < hauteur) {

            y = y + 10;

        } else {
            y = 10;
            x = 0

        }

        //x = getRandomInt(largeur);


    }, 1000);


}


window.onload = function() {



    setInterval(function() {
        var max = getRandomInt(largeur);
        rock(max);
    }, 3000);

}




function updateFrame() {

    currentFrame = ++currentFrame % cols;

    srcX = currentFrame * width;

    srcY = 0;

    ctx.clearRect(srcX, srcY, width, height);
}




function draw() {

    updateFrame();

    ctx.drawImage(image, srcX, srcY, width, height, x, y, width, height);

    if (x > (largeur - 195)) {
        x = 0;
    }


}


document.addEventListener("keypress", logkey);

function logkey(e) {
    //alert('logkey ' + e.code);

    if (e.code == 'KeyD') {
        //alert('en avant marche');

        x = x + 10;
    }
}

setInterval(function() {
    //draw();
}, 200);