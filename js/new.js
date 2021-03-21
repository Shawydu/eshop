
/** 
 * mock data of products
 * category: 1 - women, 2 - man, 3 - kids
 */
const productList = [
	{
		"title": "Zilcremo Women Dress", "description": "description1", "price": "$79.99", "img": "img/women-3.jpg", "category": "women"
		, "ratings1": "fa fa-star checked", "ratings2": "fa fa-star checked", "ratings3": "fa fa-star checked", "ratings4": "fa fa-star", "ratings5": "fa fa-star"
	},
	{
		"title": "Pleated Chiffon Blouse", "description": "description2", "price": "$49.99", "img": "img/women-5.jpg", "category": "women"
		, "ratings1": "fa fa-star checked", "ratings2": "fa fa-star checked", "ratings3": "fa fa-star checked", "ratings4": "fa fa-star", "ratings5": "fa fa-star"
	},
	{
		"title": "Knit Dress", "description": "description4", "price": "$29.99", "img": "img/women-2.jpg", "category": "women"
		, "ratings1": "fa fa-star checked", "ratings2": "fa fa-star checked", "ratings3": "fa fa-star checked", "ratings4": "fa fa-star", "ratings5": "fa fa-star"
	},
	{
		"title": "Short-sleeved Cotton T-shirt", "description": "description5", "price": "$39.99", "img": "img/man-3.jpg", "category": "man"
		, "ratings1": "fa fa-star checked", "ratings2": "fa fa-star checked", "ratings3": "fa fa-star checked", "ratings4": "fa fa-star checked", "ratings5": "fa fa-star"
	},
	{
		"title": "Girls Fitted Lace-detail Dress", "description": "description7", "price": "$19.99", "img": "img/kids-2.jpg", "category": "kids"
		, "ratings1": "fa fa-star checked", "ratings2": "fa fa-star checked", "ratings3": "fa fa-star checked", "ratings4": "fa fa-star checked", "ratings5": "fa fa-star"
	},
	{
		"title": "Denim Shirt Jacke", "description": "description10", "price": "$59.99", "img": "img/man-1.jpg", "category": "man"
		, "ratings1": "fa fa-star checked", "ratings2": "fa fa-star checked", "ratings3": "fa fa-star checked", "ratings4": "fa fa-star checked", "ratings5": "fa fa-star"
	}
];

/**
 * if find the search in any string field in productList, return true
 * otherwise, return false
 * 
 * @param {*} regexp 
 * @return
 */
function matcher(regexp) {
	return function (obj) {
		let found = false;
		Object.keys(obj).forEach(function (key) {
			if (!found) {
				if ((typeof obj[key] == 'string') && regexp.exec(obj[key])) {
					found = true;
				}
			}
		});
		return found;
	};
}

/**
 * 
 * @param {*} jsonArray 
 * @param {*} keyword 
 * @returns 
 */
function findProduct(jsonArray, keyword) {
	let productSection = document.querySelector(".search");
	let regex = new RegExp(keyword, 'g');
	let matches = jsonArray.filter(matcher(regex));

	return matches;
}

/**
 * execute this function after page is loaded
 */
window.onload = function () {
	// receive the value from the index html, only get search keywords
	let searchWords = document.location.search.replace(/^.*?\=/, '');

	let subArray = findProduct(productList, searchWords);

	if (subArray.length == 0){
		document.querySelector("h2").textContent = "Not found!"
	}else{
		let productSection = document.querySelector(".search");
		for (let i = 0; i < subArray.length; i++) {
			createProduct(productSection, subArray[i]);
		}
	}

}

/**
 * Dynamically generate products in result html
 * 
 * @param {*} parent 
 * @param {*} product 
 * @param {*} linkText 
 */
function createProduct(parent, product) {
	let div1 = document.createElement("div");
	div1.setAttribute("class", "mb-3 pics");

	let a = document.createElement("a");

	let image = document.createElement("img");
	image.setAttribute("class", "img-fluid");
	image.setAttribute("src", product.img);
	image.setAttribute("alt", "Card image cap");
	image.appendChild(a);

	let div2 = document.createElement("div");
	div2.setAttribute("class", "shop-thumb__tag");
	div2.appendChild(a);

	let h5 = document.createElement("h5");
	h5.setAttribute("class", "shop-thumb__title");
	h5.innerText = product.title;

	let h6 = document.createElement("h6");
	h6.setAttribute("class", "shop-thumb__title");
	h6.innerText = product.price;

	let div3 = document.createElement("div");
	div3.setAttribute("class", "shop-thumb__rating");

	let span = document.createElement("span");
	span.innerText = "Ratings";



	let div4 = document.createElement("div");
	div4.setAttribute("class", product.ratings1);
	let div5 = document.createElement("div");
	div5.setAttribute("class", product.ratings2);
	let div6 = document.createElement("div");
	div6.setAttribute("class", product.ratings3);
	let div7 = document.createElement("div");
	div7.setAttribute("class", product.ratings4);
	let div8 = document.createElement("div");
	div8.setAttribute("class", product.ratings5);

	div3.appendChild(div4);
	div3.appendChild(div5);
	div3.appendChild(div6);
	div3.appendChild(div7);
	div3.appendChild(div8);

	div1.appendChild(image);
	div2.appendChild(h5);
	div2.appendChild(h6);
	div2.appendChild(div3);
	div3.appendChild(span);

	div1.appendChild(div2);
	parent.appendChild(div1);
}
