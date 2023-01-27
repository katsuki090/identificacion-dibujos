

function setup() {
    canvas=createCanvas(250, 250);
    canvas.position(550, 260);
    background("white");
    canvas.mouseReleased(tt);
    v = window.speechSynthesis;
}
  

function preload() {
    vic = ml5.imageClassifier('DoodleNet');
}
  

function draw() {
  strokeWeight(15);
  stroke(0);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  } 

}

function dxh() {
    background("white");
}

function tt() {
    vic.classify(canvas, h);
}
function h(error, resultados) {
    if (error) {
        console.error(error);
    }
        console.log(resultados);
    document.getElementById("label").innerHTML = "Etiqueta: " +resultados[0].label;
    document.getElementById("confidence").innerHTML = "confianza: " +Math.round(resultados[0].confidence*100)+"%";
    a = new SpeechSynthesisUtterance(resultados[0].label);
    v. speak(a);
}

  

  
  
  