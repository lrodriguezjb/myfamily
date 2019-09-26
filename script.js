var pics = [
    "Foto1.jpg", 
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg"
];

var button = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;
button.addEventListener("click", function (){
    if(counter === 5){
        counter = 0;
    }
    img.src= pics [counter]
    counter = counter + 1;
});
