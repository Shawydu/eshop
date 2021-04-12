
function getProductByIDFromService(id){
    let request = new XMLHttpRequest();
    request.open('post', 'partials/service.php',false);
    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {

            // window.productList is a global variable
            // set the productionList json array with the response
            window.productList = JSON.parse(this.responseText);

            // Execute the function to load products 
            // Here we pick up the first item because there is only one element in the json array
            displayProduct(window.productList[0]);
        }
        else{
            alert("error: " + this.responseText);
        }
    };

    // request data
    let reqData = {
        optType: 2,
        id: id 
    };
 
    const jsonString = JSON.stringify(reqData);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(jsonString);
}

function displayProduct(product){
    $(".img-detail").attr("src", product.img); //update the product image
    $("#title").text(product.title); //update the product title
    $("#description").text(product.description); //update the product description
    $("#price").text(product.price); //update the product price

    $(".quantity").change(() => { //update price based on the selected quantity
        const quantity = $(".quantity option:selected").text();
        $("#price").text(parseFloat(product.price)*parseInt(quantity));
    });
}

$(() => { //same as window.load
    const id = window.location.search.split("=")[1]; //extract product id from URL

    getProductByIDFromService(id);

});
