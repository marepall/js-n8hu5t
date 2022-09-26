let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 300;
canvas.height = 300;



class Loptica {

  constructor(x, y, vx, vy, r, color) {

    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.r = r;
    this.color = color;
  }
  crtaj() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, 6.28);
    ctx.fill();

  }
}


function random (min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
  function randomBoja(){

    return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
  }
let mnogoLoptica = [];
for (let i=0; i<20; i++) {

  let loptica = new Loptica (random(10,210),4,4, random(10,20), randomBoja());
  loptica.crtaj();
}
