//variáveis do tinho
let tinhox = 300;
let tinhoy = 180;
let tamanho = 15;

//velocidade do tinho
let velocidadetinhox = 5;
let velocidadetinhoy = 5;

//variáveis da raquete
let raquetex = 5;
let raquetey = 150;
let raquetecomprimento = 10;
let raquetealtura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  //mostratinho();
  //movimentatinho();
  //verificacolisaoborda();
  mostraraquete();
  movimentaminharaquete();
  verificacolisaoraquete();
  circle (tinhox, tinhoy, tamanho)
  tinhox += velocidadetinhox;
  tinhoy += velocidadetinhoy
}
  if (tinhox > width || 
      tinhox < 0){
    velocidadetinhox *= -1;
    
    
  if (tinhoy > height || 
      tinhoy < 0){
    velocidadetinhoy *= -1;
  }
  }

function mostraraquete(){
  rect (raquetex, raquetey, raquetecomprimento, raquetealtura)
}

function movimentaminharaquete(){
    if (keyIsDown(UP_ARROW)){
      raquetey -= 10;}
    if (keyIsDown(DOWN_ARROW)){
    raquetey += 10}
    }

function verificacolisaoraquete(){
  if (tinhox - raio < raquetex + raquetecomprimento
  && tinhoy - raio < raquetey + raquetealtura
  && tinhoy + raio > raquetey){
    velocidadetinhox *= -1;
  }
}
