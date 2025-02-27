document.querySelector('img[src="images/bell-Photoroom.png"]').addEventListener('click', function() {
    document.querySelector('.product').style.display = "flex";
    document.querySelector('.bell').style.display = "none";
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.product').style.display = "none";
    document.querySelector('.bell').style.display = "flex";
});

const image = document.querySelector('img[src="images/images.jpeg"]');
const karkure = document.querySelector('.title');
const fiyat = document.querySelector('.price');

let list = JSON.parse(localStorage.getItem('list'))

document.querySelector('.dummy').addEventListener('click', function() {
    if(!list){
        list = [];
    }

    const item = {
        image: image.src,
        karkure: karkure.textContent,
        fiyat: fiyat.textContent,
    };
    list.push(item);
    localStorage.setItem('list', JSON.stringify(list));
});

const product = document.querySelector('.product');

list.forEach((item) => {
    const newProduct = document.createElement("div");

    const resim = document.createElement("img");
    resim.src = item.image;
    newProduct.appendChild(resim);

    const price = document.createElement("span");
    price.textContent = item.fiyat;   
    price.className = 'price';
    newProduct.appendChild(price);
    
    const title = document.createElement("span");
    title.textContent = item.karkure;
    title.className = 'title';
    newProduct.appendChild(title);

    product.appendChild(newProduct);
});




/* if(localStorage.getItem('item')){
const newProduct = document.createElement("div");
const resim = document.createElement("img");
resim.src = localStorage.getItem('item');
newProduct.appendChild(resim);
const price = document.createElement("span");  
price.textContent = localStorage.getItem('price');
price.className = 'price';
newProduct.appendChild(price);
const title = document.createElement("span");
title.textContent = localStorage.getItem('title');
title.className = 'title';
newProduct.appendChild(title);
console.log(newProduct);

const product = document.querySelector('.product');
product.appendChild(newProduct);
}; */
