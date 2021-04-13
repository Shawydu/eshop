$(() => { //same as window.load
    retrieveProductById();

    $('form#createProduct').submit(createProduct);
});

var retrieveProductById = () => {
    const id = window.location.search.split("=")[1]; //extract product id from URL
    if(!id) {
        return;
    }
    
    const path = "partials/read.php?id=" + id;
    
    let product;
    // https://api.jquery.com/jQuery.getJSON/
    $.getJSON(path).done(data=> {
        product = data;
        $(".img-detail").attr("src", product.img); //update the product image
        $("#title").text(product.title); //update the product title
        $("#description").text(product.description); //update the product description
        $("#price").text(product.price); //update the product price
    
        $(".quantity").change(() => { //update price based on the selected quantity
            const quantity = $(".quantity option:selected").text();
            $("#price").text(parseFloat(product.price)*parseInt(quantity));
        });
    });
}

var createProduct = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('title', $("#title").val());
    formData.append('description', $("#description").val()); //update the product description
    formData.append('price', $("#price").val()); //update the product price
    formData.append('category',$("#category").val());
    formData.append('rating', $("#category").val());
    formData.append('image', $("#image")[0].files[0]);
    let request = new XMLHttpRequest();
    request.open('POST', 'partials/create.php');
    request.onreadystatechange = function() {
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            const product = JSON.parse(this.responseText);
            const redirectPath = 'product.php?id=' + product.id;
            window.location.replace(redirectPath);
        } else {
            $('#errorMessage').text(this.responseText);
        }
    }
    request.send(formData);
}
