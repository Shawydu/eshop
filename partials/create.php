<?php
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

include_once 'dao/productDAO.php';
include_once 'model/product.php';

$from = $_FILES['image']['tmp_name']; //the temporary filename of the uploaded file (stored on the server)
$input_image = 'img/'.$_FILES['image']['name']; //the original name of the file to be uploaded
$allowed = array('png', 'jpg', 'jpeg');
$to = "../img/".basename($_FILES['image']['name']); //the destination of the moved file

$file_moved = false;
if(move_uploaded_file ($from , $to)){ //check if the file is valid and moved successfully
    $file_moved = true;
}

$input_title = trim($_POST["title"]);
$input_description = trim($_POST["description"]);
$input_price = trim($_POST["price"]);
$input_rating = trim($_POST["rating"]);
$input_category = trim($_POST["category"]);

$productDAO = new productDAO();
$product = new product(3, $input_title, $input_description, $input_price, $input_rating, $input_image, $input_category);
$result = $productDAO->createProduct($product);

echo $result;
?>