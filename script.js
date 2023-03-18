let btn = document.querySelector('.icon-cart');
btn.addEventListener('click',panier);
function panier() {
    let cart = document.querySelector('.cart');
    cart.classList.toggle('newcart');
}
let img = document.querySelectorAll('.images');
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click',image);
}
/*function image() {
    images()
}
function images() {
    let haut = document.querySelectorAll('.trimg');
    haut.forEach((elt) => elt.classList.toggle("translateimg")) 
}*/
function image() {
    images(this)
}
function images(elt) {
    let haut = document.querySelector('.haut');
    haut.children[0].src = elt.children[0].src.substring(0,44)+".jpg";  
}

/*haut.setAttribute("src",elt.getattribuute.src),
    haut.getAttribute.src = elt.getAttribute.src ;
    
    */