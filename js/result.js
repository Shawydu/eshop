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
	let productSection = document.querySelector(".row");
	let regex = new RegExp(keyword, 'g');
	let matches = jsonArray.filter(matcher(regex));

	return matches;
}
/**
 * execute this function after page is loaded
 */
window.onload = function (){

	registeEvent();
	// receive the value from the index html, only get search keywords
	let searchWords = document.location.search.replace(/^.*?\=/, '');

	let subArray = findProduct(productList, searchWords);
	
	
	if (subArray.length == 0){
		document.querySelector("h2").textContent = "Not found!"
	}else{
		let productSection = document.querySelector(".row");
		for (let i = 0; i < subArray.length; i++) {
			createProduct(productSection, subArray[i], "product.php");
		
		}
	}
	window.subArray = subArray;
	return window.subArray;	
}
/**
 * Dynamically generate products in result html
 * @param {*} parent 
 * @param {*} product 
 * @param {*} linkText 
 */
function createProduct(parent, product) {
	let div1 = document.createElement("div");
	div1.setAttribute("class", "mb-3 pics");

	let a = document.createElement("a");
	a.href = "product.php?id=" + product.id;
	

	let image = document.createElement("img");
	image.setAttribute("class", "img-fluid");
	image.setAttribute("src", product.img);
	image.setAttribute("alt", "Card image cap");			
				
	let div2 = document.createElement("div");
	div2.setAttribute("class", "shop-thumb__tag");						
						
	let h5 = document.createElement("h5");
	h5.setAttribute("class", "shop-thumb__title");
	h5.innerText = product.title;
								
	let h6 = document.createElement("h6");
	h6.setAttribute("class", "shop-thumb__title");
	h6.innerText = '$'+product.price; 
								
	let div3 = document.createElement("div");
	div3.setAttribute("class", "shop-thumb__rating");
						
	let span = document.createElement("span");
	span.innerText = "Ratings";													
	
	div3.appendChild(span);

	let rating = product.rating; 
	for (i = 0; i < 5; i++){
		let rateDiv = document.createElement("div"); 
		if (i < rating){
			rateDiv.setAttribute("class", "fa fa-star checked");
		}else{
			rateDiv.setAttribute("class", "fa fa-star");
		}
		
		div3.appendChild(rateDiv);
	}
							
	div1.appendChild(image);
	div2.appendChild(h5);
	div2.appendChild(h6);
	div2.appendChild(div3);	
	
	a.appendChild(image);
	a.appendChild(div2);	
	div1.appendChild(a);							
	parent.appendChild(div1);	
}
// regenerate products in result html by selected conditions
function reCreateProduct(newArr){
	try { // clear the products on the page
		for(let i = 0; i < window.subArray.length; i++){
			div1 = document.querySelector('.row').removeChild(div1 = document.querySelector('.mb-3'))
		}
	} finally { //Dynamically generate products in result html by filter
		let productSection = document.querySelector(".row");
		for (let i = 0; i < newArr.length; i++) {
			createProduct(productSection, newArr[i], "product.php");				
		}			
	}	
}
//Sort by Price
let PriceSort = document.querySelector('.form-control.store-select');
PriceSort.onchange = function sortByPrice(){
	subArray = window.subArray;	
	if(PriceSort.options[PriceSort.selectedIndex].value == "up"){	
		newArr = subArray.sort((a, b) => a.price - b.price);			
		reCreateProduct(newArr)
	};		
	if(PriceSort.options[PriceSort.selectedIndex].value == "down"){
		newArr = subArray.sort((a, b) => b.price - a.price);
		reCreateProduct(newArr)
	};		
	window.subArray = subArray;
	return window.subArray;	
}
//filter by price
let PriceFilters = document.querySelectorAll('input[type=radio][name=shop-filter__price]');
for (const PriceFilter of PriceFilters) {
	PriceFilter.addEventListener('click', function(event) {
		subArray = window.subArray;
		switch (PriceFilter.value){
			case "":
				newArr = subArray
				reCreateProduct(newArr)
				break;
			case "Under25":
				newArr = subArray.filter(item => item.price <= 25)
				reCreateProduct(newArr)		
				break;		
			case "25To50":
				newArr = subArray.filter(item => item.price >= 25 && item.price <= 50)
				reCreateProduct(newArr)		
				break;			
			case "50To100":
				newArr = subArray.filter(item => item.price >= 50 && item.price <= 100)
				reCreateProduct(newArr)	
				break;		
			case "Above100":
				newArr = subArray.filter(item => item.price >= 100)
				reCreateProduct(newArr)
				break;
			}
	})
}
//filter by ratings
let ratingFilters = document.querySelectorAll('input[type=checkbox]');
for (const ratingFilter of ratingFilters) {
	ratingFilter.addEventListener('click', function(event) {
		subArray = window.subArray
		//one checkBox be checked
		if(ratingFilters[0].checked && !ratingFilters[1].checked && !ratingFilters[2].checked&& !ratingFilters[3].checked){			
			newArr = subArray.filter(item => item.rating >= 4)
			reCreateProduct(newArr)
		}
		if(ratingFilters[1].checked && !ratingFilters[0].checked && !ratingFilters[2].checked&& !ratingFilters[3].checked){
			newArr = subArray.filter(item => item.rating >= 3 && item.rating < 4)
			reCreateProduct(newArr)
		}
		if(ratingFilters[2].checked&& !ratingFilters[0].checked && !ratingFilters[1].checked&& !ratingFilters[3].checked){
			newArr = subArray.filter(item => item.rating >= 2 && item.rating < 3)
			reCreateProduct(newArr)
		}
		if(ratingFilters[3].checked&& !ratingFilters[0].checked && !ratingFilters[1].checked&& !ratingFilters[2].checked){
			newArr = subArray.filter(item => item.rating < 2)
			reCreateProduct(newArr)
		}
		//two checkBoxes be checked
		if(ratingFilters[0].checked && ratingFilters[1].checked && !ratingFilters[2].checked && !ratingFilters[3].checked){
			newArr = subArray.filter(item => item.rating >= 3)
			reCreateProduct(newArr)
		}
		if(ratingFilters[0].checked && ratingFilters[2].checked && !ratingFilters[1].checked && !ratingFilters[3].checked){
			newArr = subArray.filter(item => (item.rating >= 2 && item.rating < 3)|| item.rating >= 4)
			reCreateProduct(newArr)
		}
		if(ratingFilters[0].checked && ratingFilters[3].checked && !ratingFilters[1].checked && !ratingFilters[2].checked){
			newArr = subArray.filter(item => item.rating < 2 || item.rating >= 4)
			reCreateProduct(newArr)
		}
		if(ratingFilters[1].checked && ratingFilters[2].checked && !ratingFilters[0].checked && !ratingFilters[3].checked){
			newArr = subArray.filter(item => item.rating >= 2 && item.rating < 4)
			reCreateProduct(newArr)
		}
		if(ratingFilters[1].checked && ratingFilters[3].checked && !ratingFilters[0].checked && !ratingFilters[2].checked){
			newArr = subArray.filter(item => (item.rating >= 3 && item.rating < 4) || item.rating < 2)
			reCreateProduct(newArr)
		}
		if(ratingFilters[2].checked && ratingFilters[3].checked && !ratingFilters[0].checked && !ratingFilters[1].checked){
			newArr = subArray.filter(item => item.rating < 3)
			reCreateProduct(newArr)
		}
		//three checkBoxes be checked
		if(ratingFilters[0].checked && ratingFilters[1].checked && ratingFilters[2].checked && !ratingFilters[3].checked){
			newArr = subArray.filter(item => item.rating >= 2)
			reCreateProduct(newArr)
		}
		if(ratingFilters[0].checked && ratingFilters[1].checked && ratingFilters[3].checked && !ratingFilters[2].checked){
			newArr = subArray.filter(item => item.rating >= 3 || item.rating < 2)
			reCreateProduct(newArr)
		}
		if(ratingFilters[0].checked && ratingFilters[2].checked && ratingFilters[3].checked && !ratingFilters[1].checked){
			newArr = subArray.filter(item => item.rating >= 4 || item.rating < 3)
			reCreateProduct(newArr)
		}
		if(ratingFilters[1].checked && ratingFilters[2].checked && ratingFilters[3].checked && !ratingFilters[0].checked){
			newArr = subArray.filter(item => item.rating < 4)
			reCreateProduct(newArr)
		}
		//four checkBoxes be checked
		if(ratingFilters[0].checked && ratingFilters[1].checked && ratingFilters[2].checked && ratingFilters[3].checked){
			newArr = subArray
			reCreateProduct(newArr)
		}
	})
};

//search bar function
const page = {
	PRODUCT: "product.php",
	RESULT: "result.php",
};
function registeEvent(){
    document.querySelector(".btn_search").addEventListener('click', function () { searchItem(this); });
}
function searchItem(object){
    let searchText = document.querySelector(".form-inline input[type='text']").value;
    document.location = page.RESULT + '?searchWords='+searchText.toLowerCase();
}
