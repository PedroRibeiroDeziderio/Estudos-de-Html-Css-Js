const img = document.querySelector("#img_1");

img.addEventListener("mouseenter", function() {

    img.style.width = "400px";
    img.style.height = "300px";
    const text = document.getElementById("Texto1").innerHTML="O macarrão italiano é um dos pratos mais tradicionais e conhecidos da culinária da Itália."
});

img.addEventListener("mouseleave", function() {

    img.style.width = "300px";
    img.style.height = "200px";
    const text = document.getElementById("Texto1").innerHTML=""
});