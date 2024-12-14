// create the menu in mobile screen
var bar = document.getElementById("bar1");
var close = document.getElementById("close");
var nav = document.getElementById("navbar");
let btn_cart = document.getElementById("btn-cart");
if(bar){
    bar.addEventListener("click",() =>{
        nav.classList.add("active");
        console.log("clicked");
    })
}
if(close){
    close.addEventListener("click",() =>{
        nav.classList.remove("active");
        console.log("clicked");
    })
}





// /////////////////////////////////////////////////////////
// control for single product page
// [1] change the main image
// [2] change the small image
var MainImg = document.getElementById("main-img");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function () {
    MainImg.src = SmallImg[0].src;
};
SmallImg[1].onclick = function () {
    MainImg.src = SmallImg[1].src;
};
SmallImg[2].onclick = function () {
    MainImg.src = SmallImg[2].src;
};
SmallImg[3].onclick = function () {
    MainImg.src = SmallImg[3].src;
};

