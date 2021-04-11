<?php
    include_once 'products.inc.php';
    
    $req = file_get_contents("php://input");
    
    $data = json_decode($req);

    $products = new Products;

    switch($data->optType){
        // get all products
        case 1:
            echo $products->getAllProducts();
            break;
        // get a product by id
        case 2:
            echo $products->getProductById($data->id);
            break;
        // insert a product into mysql
        case 3: 
            // var_dump($data->pData);
            $products->saveProduct($data->pData->id, $data->pData->title, $data->pData->description, $data->pData->price, $data->pData->rating, 
                                   $data->pData->img, $data->pData->category);
            break;
        default:
            http_response_code(500);
            echo "Unknown operation!";
    }

?>