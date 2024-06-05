function Somar(){
    var N1 = parseFloat(document.getElementById("n1").value);
    var N2 = parseFloat(document.getElementById("n2").value);
    var soma = N1 + N2;

    document.getElementById("resultado").innerText = "O resultado é: " + soma;
}

function Sub(){
    var N1 = parseFloat(document.getElementById("n1").value);
    var N2 = parseFloat(document.getElementById("n2").value);
    var sub = N1 - N2;

    document.getElementById("resultado").innerText = "O resultado é: " + sub;
}

function Mult(){
    var N1 = parseFloat(document.getElementById("n1").value);
    var N2 = parseFloat(document.getElementById("n2").value);
    var mult = N1 * N2;

    document.getElementById("resultado").innerText = "O resultado é: " + mult;
}

function Div(){
    var N1 = parseFloat(document.getElementById("n1").value);
    var N2 = parseFloat(document.getElementById("n2").value);
    var div = N1 / N2;

    document.getElementById("resultado").innerText = "O resultado é: " + div;
}

function Radiciação() {
    var Number1 = parseFloat(document.getElementById("number1").value);
    var rad = Math.sqrt(Number1);

    document.getElementById("resultado").innerText = "O resultado é: " + rad;
}

function Potencia() {
    var Numero1 = parseFloat(document.getElementById("numero1").value);
    var Numero2 = parseFloat(document.getElementById("numero2").value);
    var pot = Math.pow(Numero1, Numero2);

    document.getElementById("resul").innerText = "O resultado é: " + pot;
}

function Eqse () {
    
    var N1 = parseFloat(document.getElementById("n1").value);
    var N2 = parseFloat(document.getElementById("n2").value);
    var N3 = parseFloat(document.getElementById("n3").value);
    var delta = N2 * N2 - 4 * N1 * N3;
    var x1 = (-N2 + Math.sqrt(delta)) / (2 * N1)
    var x2 = (-N2 - Math.sqrt(delta)) / (2 * N1)

    if(delta > 0){
        document.getElementById("res").innerText = "A equação possui duas raízes reais X1 é: " + x1 + " e X2 é: " + x2;

    }

    else if(delta == 0){
        document.getElementById("res").innerText = "A equação possui uma raiz real X1 é: " + x1;
   
    }

    else if(delta < 0){
        document.getElementById("res").innerText = "A equação não possui nenhuma raiz real"
    }
}

function Sen(){
    var Se = parseFloat(document.getElementById("n1").value);
    if(Se === 30){
        document.getElementById("resultado").innerText = "Seno de 30º é: 1/2";
        document.getElementById("n1").value = "";
    }
    else if(Se === 45){
        document.getElementById("resultado").innerText = "Seno de 45º é: √2/2";
        document.getElementById("n1").value = "";
    }
    else if(Se === 60){
        document.getElementById("resultado").innerText = "Seno de 60º é: √3/2";
        document.getElementById("n1").value = "";
    }
    else {
        document.getElementById("resultado").innerText = "Insira números válidos";
        document.getElementById("n1").value = "";
    }
}

function Cos(){
    var Cos = parseFloat(document.getElementById("n2").value);
    if(Cos === 30){
        document.getElementById("resultado").innerText = "Cosseno de 30º é: √3/2";
        document.getElementById("n2").value = "";
    }
    else if(Cos === 45){
        document.getElementById("resultado").innerText = "Cosseno de 45º é: √2/2";
        document.getElementById("n2").value = "";
    }
    else if(Cos === 60){
        document.getElementById("resultado").innerText = "Cosseno de 60º é: 1/2";
        document.getElementById("n2").value = "";
    }
    else {
        document.getElementById("resultado").innerText = "Insira números válidos";
        document.getElementById("n2").value = "";
    }
}

function Tang(){
    var Tan = parseFloat(document.getElementById("n3").value);
    if(Tan === 30){
        document.getElementById("resultado").innerText = "Tangente de 30º é: √3/3";
        document.getElementById("n3").value = "";
    }
    else if(Tan === 45){
        document.getElementById("resultado").innerText = "Tangente de 45º é: 1";
        document.getElementById("n3").value = "";
    }
    else if(Tan === 60){
        document.getElementById("resultado").innerText = "Tangente de 60º é: √3";
        document.getElementById("n3").value = "";
    }
    else {
        document.getElementById("resultado").innerText = "Insira números válidos";
        document.getElementById("n3").value = "";
    }
}

function Calcular(trigonometria) {
    var Ang = parseFloat(document.getElementById("ang").value);
    var Rad = Ang * Math.PI / 180;
    

    switch (trigonometria){
        case "seno":
            var res = Math.sin(Rad);
            document.getElementById("res").innerText = "O seno de " + Ang + " é: " + res.toFixed(4);
            document.getElementById("ang").value = "";
            break;
        case "cos":
            var res = Math.cos(Rad);
            document.getElementById("res").innerText = "O cosseno de " + Ang + " é: " + res.toFixed(4);
            document.getElementById("ang").value = "";
            break;
        case "tan":
            var res = Math.tan(Rad);
            document.getElementById("res").innerText = "A tangente de " + Ang + " é: " + res.toFixed(4);
            document.getElementById("ang").value = "";
            break;
        default:
            return;
    }
}

function Velmed() {
    var Vel = parseFloat(document.getElementById("vel").value);
    var Temp = parseFloat(document.getElementById("temp").value);
    var Velmed = Vel / Temp;

    document.getElementById("resultado").innerText = "A velocidade média é: " + Velmed + "m/s"
}

function Cel(escalas) {
    var Celsius = parseFloat(document.getElementById("cel").value);

    switch(escalas) {
        case "fah":
            var fahren = (Celsius * 9 / 5) + 32;
            document.getElementById("res").innerText = "A temperatura em Fahrennheit é de: " + fahren;
            break;
        case "kel":
            var kel = Celsius + 273.15;
            document.getElementById("res").innerText = "A temperatura em Kelvin é de: " + kel;
            break;
        default:
            alert = "só apertar um botão, não é díficil";
    }
}

var slideIndex = 0;
addEventListener('load',()=>{
    showSlides();
})

function showSlides() {
    let slides = document.querySelectorAll('.carousel-item');
    
    if (slideIndex >= slides.length) {
        slideIndex = 0;
       
    }
    if (slideIndex < 0) {
        slideIndex = slides.length -1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}