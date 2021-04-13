<?php
require_once('./dbeshop.inc.php');
require_once('./model/product.php');

class productDAO extends Dbeshop{
    public function getProduct($productId) {
        $query = 'SELECT * FROM products WHERE id = :id';
        $stmt = $this->connect()->prepare($query);
        $stmt->bindParam(':id', $productId); // integer
        $stmt->execute();
        // $result = $stmt->get_result();
        if($stmt->rowCount() > 0) {
            $temp = $stmt->fetch(PDO::FETCH_ASSOC);
            $product = new product($temp['id'], $temp['title'], $temp['description'], $temp['price'], $temp['rating'], $temp['img'], $temp['category']);
           
            return $product;
        }
        return false;
    }

    public function createProduct($product) {
        $dbh = $this->connect();
        try{
            $query = 'INSERT INTO products (title,description,price,rating,category,img) VALUES(?,?,?,?,?,?)';
            $stmt = $dbh->prepare($query);
            if($stmt) {
                $title = $product->title;
                $description = $product->description;
                $price = $product->price;
                $rating = $product->rating;
                $category = $product->category;
                $image = $product->img;
                $stmt->bindParam(1, $title);
                $stmt->bindParam(2, $description);
                $stmt->bindParam(3, $price);
                $stmt->bindParam(4, $rating);
                $stmt->bindParam(5, $category);
                $stmt->bindParam(6, $image);
                //Execute the statement
                $success = $stmt->execute();
                // $dbh->commit();         
            }            
           
            $id = $dbh->lastInsertId();
            $product = new product($id, $title, $description, $price, $rating, $image, $category);
            return $product;
            
        } catch( PDOException $e) {
            // $dbh->rollBack();
            return "Error: " . $e.getMessage();
        }
    }
}
?>