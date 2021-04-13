<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once 'dao/productDAO.php';

// instantiate database and product object
$productDAO = new productDAO();
$id = isset($_GET['id']) ? $_GET['id'] : false;

// retrieve single product by id
if($id) {
    $product = $productDAO->getProduct($id);
    if($product) {
        $product_item=array(
            "id" => $product->id,
            "title" => $product->title,
            "description" => $product->description,
            "price" => $product->price,
            "category" => $product->category,
            "rating" => $product->rating,
            "img" => $product->img
        );

        http_response_code(200);
        echo json_encode($product_item);
    } else {
        http_response_code(404);
        echo "product id=". $id ." not found";
    }
    die();
}

// list all products
$retrieved_products = $productDAO->listProducts();
$products_arr=array();
foreach($retrieved_products as $product) {
    $product_item=array(
        "id" => $id,
        "title" => $product->title,
        "description" => $product->description,
        "price" => $product->price,
        "category" => $product->category,
        "rating" => $product->rating,
        "img" => $product->img
    );
    array_push($products_arr, $product_item);
}
http_response_code(200);
echo json_encode($products_arr); // transform array response to json
$productDAO->getMysqli()->close();
?>