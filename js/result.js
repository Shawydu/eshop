/**
 * execute this function after page is loaded
 */
window.onload = function (){

	registeEvent();

	// receive the value from the index html, only get search keywords
	let searchWords = document.location.search.replace(/^.*?\=/, '');

	// http request to grab all products that match searchWords
	getMatchProducts(searchWords);	

	let subArray = window.productList;
	
	
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
 * invoke php service to get all matched products
 */
 function getMatchProducts(keyword){
    let request = new XMLHttpRequest();
    request.open('post', 'partials/service.php',false);
    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            window.productList = JSON.parse(this.responseText);
        }
        else{
            alert("error: " + this.responseText);
        }
    };

    const reqData = {
        optType: 4,
        searchWord: keyword 
    };

    const jsonString = JSON.stringify(reqData);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(jsonString);
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
