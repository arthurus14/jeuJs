const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//load image

const images = {};
images.player = new Image();
images.player.src = "./personnage.png";

//const characterActions = ['up', 'top right', 'right', 'down right', 'down', 'jump'];
const characterActions = ['up', 'right'];
const numberOfCharacters = 10;
const characters = [];



class Character {
    constructor() {
        //On reprend les éléments du personnage
        this.width = 103.0625;
        this.height = 113.125;
        this.frameX = 3;
        this.x = 0;
        this.y = 0;
        this.speed = (Math.random() * 3.5) + 1.5;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];

        if (this.action === 'up') {
            this.frameY = 0;
        } else if (this.action === 'right') {
            this.frameY = 3;
        }
    }
    draw() {

        drawSprite(images.player, this.width * this.frameX, this.height * this.frameY,
            this.width, this.height, this.x, this.y, this.width, this.height);

        //Animation du personnage vers la droite, le 13 est le nombre d'images sur la feuille
        if (this.frameX < 13) this.frameX++;
        else this.frameX = 3;

    }
    update() {
        if (this.action === 'right') {
            if (this.x > canvas.width + this.width) {
                this.x = 0 - this.width;
                this.y = Math.random() * canvas.height - this.height;

            } else {
                this.x += this.speed;
            }


        } else if (this.action === 'up') {
            if (this.y < (0 - this.height)) {
                this.y = canvas.height + this.height;
                this.x = Math.random() * canvas.width;

            } else {
                this.y -= this.speed;
            }
        }

    }
}


//Créer des instances de la class 
for (i = 0; i < numberOfCharacters; i++) {
    characters.push(new Character());
}

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Dessine le nombre d'instance de la classe
    for (i = 0; i < characters.length; i++) {
        characters[i].draw();
        characters[i].update();

    }

}


window.onload = setInterval(animate, 1000 / 30);

window.addEventListener('resize', function() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});