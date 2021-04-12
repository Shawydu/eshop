
const page = {
	PRODUCT: "product.php",
	RESULT: "result.php",
};

/**
 * Execute the function to load products 
 * and add event listener on search button after landing page is ready
 */
 $(function () {
    getProductsFromService();
    // loadProducts();
    // registeEvent();
    
})

/**
 * invoke php service to get all products
 */
function getProductsFromService(){
    let request = new XMLHttpRequest();
    request.open('post', 'partials/service.php',false);
    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // window.productList is a global variable
            // set the productionList json array with the response
            window.productList = JSON.parse(this.responseText);

            // Execute the function to load products 
            // and add event listener on search button after landing page is ready
            loadProducts();
            registeEvent();
        }
        else{
            alert("error: " + this.responseText);
        }
    };

    
    const reqData = {
        optType: 1 // optType 1 - get all products
    };

    // sample for get product by ID -- wenwen 
    // let reqData = {
    //     optType: 2,
    //     id: 4 
    // };

    // sample for get product by search words -- xiaomeng 
    // const reqData = {
    //     optType: 4,
    //     searchWord: "cotton" 
    // };

    //sample for insert data   --wenwen 
    // const reqData = {
    //     optType: 3,  
    //     pData: {
    //                 "id": 11,
    //                 "title": "Printed T-shirt",
    //                 "description": "Straight-cut T-shirt in soft cotton jersey with a printed design. Ribbing at neck.",
    //                 "price": 9.9,
    //                 "rating": 5,
    //                 "img": "img/kids-4.jpg",
    //                 "category": 3
    //             }
    // };
    const jsonString = JSON.stringify(reqData);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(jsonString);
}

/**
 * Add event listener to elements
 */
function registeEvent(){
    // add click event to search box
    document.querySelector(".btn_search").addEventListener('click', function () { clickSearchBox(this); });

    // add click event to image click
	document.querySelectorAll("img").forEach((image) => {
		image.addEventListener('click',  function() { clickImage(this); });
	});

    // add scroll event
    let scrollButton = document.querySelector(".scroll-btn");
    window.addEventListener('scroll', () => {
        // When the user scrolls down 200px from the top of the document, show the button
        // reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            scrollButton.style.display = 'block';
        }else{
            scrollButton.style.display = 'none';
        }
    })

    // add click event on scroll button to scroll to top
    scrollButton.addEventListener('click', () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    });

}

/**
 * Pass value to result page
 */
function clickSearchBox(object){
    let searchText = document.querySelector(".form-inline input[type='text']").value;
    document.location = page.RESULT + '?searchWords='+searchText.toLowerCase();
}

/**
 * Pass value to product page
 */
 function clickImage(object){
    document.location = page.PRODUCT + '?id=' + object.id;
}

/**
 * load products after landing page is ready
 */
function loadProducts() {
    let productSection = document.querySelector(".products");

    for (let i = 0; i < window.productList.length; i++) {
        createProduct(productSection, window.productList[i]);
    }
}

/**
 * Dynamically create product 
 * 
 * @param {*} parent parent element of products
 * @param {*} product information of a product
 */
function createProduct(parent, product) {

    // crate a div
    let div = document.createElement("div");
    div.setAttribute("class", "mb-4 pics");

    // create a element
    let a = document.createElement("a");

    //create img element
    let image = document.createElement("img");
    image.setAttribute("class", "img-fluid");
    image.setAttribute("src", product.img);
    image.setAttribute("id", product.id);
    image.setAttribute("alt", "Card image cap");
    a.appendChild(image);

    // create p elment
    let p = document.createElement("p");
    p.setAttribute("class", "price-tag rounded-circle");

    // create span element
    let spanPrice = document.createElement("span");
    spanPrice.setAttribute("class", "price");
    spanPrice.innerText = product.price;
    p.appendChild(spanPrice);

    // create span element
    let spanDolar = document.createElement("span");
    spanDolar.setAttribute("class", "dolar");
    spanDolar.innerText = '$';

    p.appendChild(spanDolar);
    a.appendChild(p);
    div.appendChild(a);
    parent.appendChild(div);
}

