
const page = {
	PRODUCT: "product.php",
	RESULT: "result.php",
};

/** 
 * mock data of products
 * category: 1 - women, 2 - man, 3 - kids
 */
const productList = [
    {
        "id": 1,
        "title": "Zilcremo Women Casual Dress",
        "description": "80% Cotton Tie Dye/Solid Print:95% Rayon,5% Polyester. Floral Print:35% Cotton, 65% Polyester. Women's split maxi dress is made of high quality fabric,lightweight, breathable and skin-friendly,super soft and comfortable to wear all day.",
        "price": 79,
        "rating": 3,
        "img": "img/women-3.jpg",
        "category": 1
    },
    {
        "id": 2,
        "title": "short-sleeved Cotton T-shirt",
        "description": "Cotton 100% A streetwear collection of minimalistic pieces – the perfect canvas for your personal style and creativity. This contemporary, short-sleeved T-shirt is made from heavy, 7 oz. cotton jersey for a premium handfeel. Straight-cut, oversized, and relaxed fit with a crew neck, dropped shoulders, and ribbing at neck and cuffs.",
        "price": 19,
        "rating": 4,
        "img": "img/man-3.jpg",
        "category": 3
    },
    {
        "id": 3,
        "title": "Pleated Chiffon Blouse",
        "description": "Shell: Polyester 100%Lining: Polyester 100% Blouse in airy chiffon made from recycled polyester. Low stand-up collar with pleats extending over shoulders and V-neck opening with narrow ties. Long, wide raglan sleeves and narrow cuffs and covered button. Lined. Lining made partly with recycled polyester.",
        "price": 39,
        "rating": 2,
        "img": "img/women-5.jpg",
        "category": 1
    },
    {
        "id": 4,
        "title": "Girls Fitted Lace-detail Dress",
        "description": "Cotton 100% Fitted T-shirt dress in soft cotton jersey with a printed design. Ribbed crew neck, heavily dropped shoulders, and wide sleeves.",
        "price": 29,
        "rating": 5,
        "img": "img/kids-2.jpg",
        "category": 3
    },
    {
        "id": 5,
        "title": "Knit Dress",
        "description": "Acrylic 63%, Polyamide 32%, Wool 5% Straight-cut, calf-length dress in a soft knit with wool content. Dropped shoulders, long sleeves, and removable tie belt at waist. Ribbing at neckline, cuffs, and hem. Slits at sides.",
        "price": 49,
        "rating": 2,
        "img": "img/women-2.jpg",
        "category": 1
    },
    {
        "id": 6,
        "title": "Denim Shirt Jacket",
        "description": "Cotton 100% Shirt jacket in thick, washed cotton denim. Collar, buttons at front, and a yoke at back. Chest pockets with flap and button, long sleeves with button at cuffs, and a straight-cut hem. Made partly from recycled cotton.",
        "price": 59,
        "rating": 3,
        "img": "img/man-1.jpg",
        "category": 2
    },
    {
        "id": 7,
        "title": "Relaxed Fit Shirt Jacket",
        "description": "Shirt jacket in washed cotton twill. Collar, buttons at front, and yoke at back. Chest pockets with flap and button, welt side pockets, and long sleeves with button at cuffs. Relaxed Fit – straight-cut with good room for movement and a relaxed, comfortable silhouette.",
        "price": 39,
        "rating": 3,
        "img": "img/man-2.jpg",
        "category": 2
    },
    {
        "id": 8,
        "title": "Oversized Jacket",
        "description": "Oversized jacket in woven fabric. Wide notch lapels, one button at front, decorative chest pocket, and welt front pockets with flap. Lining in satin made from recycled polyester.",
        "price": 26,
        "rating": 5,
        "img": "img/women-1.jpg",
        "category": 1
    },
    {
        "id": 9,
        "title": "Pleated Skirt",
        "description": "Calf-length, pleated skirt in woven fabric with a slight sheen. High waist, elasticized waistband, and overlocked hem. Unlined.",
        "price": 49,
        "rating": 3,
        "img": "img/women-6.jpg",
        "category": 1
    },
    {
        "id": 10,
        "title": "Printed T-shirt",
        "description": "Straight-cut T-shirt in soft cotton jersey with a printed design. Ribbing at neck.",
        "price": 9.9,
        "rating": 5,
        "img": "img/kids-4.jpg",
        "category": 3
    }
];

/**
 * Execute the function to load products 
 * and add event listener on search button after landing page is ready
 */
 $(function () {
    loadProducts();
    registeEvent();
    
})


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
    for (let i = 0; i < productList.length; i++) {
        createProduct(productSection, productList[i]);
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

