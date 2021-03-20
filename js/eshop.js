// mock data of products
const productList = [
    { "title": "title1", "description": "description1", "price": "19", "img": "img/women-4.jpg", "category": "women" },
    { "title": "title2", "description": "description2", "price": "39", "img": "img/women-5.jpg", "category": "women" },
    { "title": "title3", "description": "description3", "price": "29", "img": "img/women-1.jpg", "category": "women" },
    { "title": "title4", "description": "description4", "price": "49", "img": "img/women-2.jpg", "category": "women" },
    { "title": "title5", "description": "description5", "price": "89", "img": "img/man-3.jpg", "category": "man" },
    { "title": "title6", "description": "description6", "price": "39", "img": "img/women-3.jpg", "category": "women" },
    { "title": "title7", "description": "description7", "price": "70", "img": "img/kids-2.jpg", "category": "kids" },
    { "title": "title8", "description": "description8", "price": "26", "img": "img/kids-4.jpg", "category": "kids" },
    { "title": "title9", "description": "description9", "price": "33", "img": "img/women-7.jpg", "category": "women" },
    { "title": "title10", "description": "description10", "price": "54", "img": "img/man-2.jpg", "category": "man" }
];


/**
 * load products on landing page
 */
$(function () { 
	let productSection  = document.querySelector(".products");
    for(let i = 0; i < productList.length; i++){
        createProduct(productSection, productList[i], "product.html");
    }
})

/**
 * Dynamically create product 
 * 
 * @param {*} section parent element of products
 * @param {*} product information of a product
 * @param {*} linkText webpage name
 */
function createProduct(section, product, linkText) {

    // crate a div
	let div = document.createElement("div");
	div.setAttribute("class", "mb-4 pics");

    // create a element
    let a = document.createElement("a");
    a.href = linkText;

    //create img element
    let image = document.createElement("img");
    image.setAttribute("class", "img-fluid");
    image.setAttribute("src", product.img);
    image.setAttribute("alt", "Card image cap");
    a.appendChild(image);

    // create p elment
    let p = document.createElement("p");
    p.setAttribute("class", "price-tag rounded-circle");
    
    // create span element
    let spanPrice = document.createElement("span");
    spanPrice.setAttribute("class","price");
    spanPrice.innerText = product.price;
    p.appendChild(spanPrice);

    // create span element
    let spanDolar = document.createElement("span");
    spanDolar.setAttribute("class","dolar");
    spanDolar.innerText = '$';
    
    p.appendChild(spanDolar);
    a.appendChild(p);
	div.appendChild(a);
	section.appendChild(div);
}

