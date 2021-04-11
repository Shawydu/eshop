<?php
    include_once 'dbeshop.inc.php';

    class Products extends Dbeshop{
        public function getAllProducts(){
            $query = $this->connect()->query("select * from products");
            $prodcutsArray = $query->fetchAll(PDO::FETCH_ASSOC);

            return json_encode($prodcutsArray); //Fixme: try ... catch error
        }

        public function getProductById($id){
            $query = $this->connect()->prepare("select * from products where id = ?");
            $query->execute(array($id));

            $product = $query->fetchall(PDO::FETCH_ASSOC);
            return json_encode($product); //Fixme: try ... catch error
        }

        public function saveProduct($id, $title, $description, $price, $rating, $img, $category){
            $sql = "INSERT INTO products (id, title, description, price, rating, img, category) VALUES (?,?,?,?,?,?,?)";
            $this->connect()->prepare($sql)->execute([$id, $title, $description, $price, $rating, $img, $category]);

            //Fixme: try ... catch error
        }

        public function getProductByWords($words){       
            $query = $this->connect()->prepare("select * from products where title like ? or description like ?");
            $query->execute(array("%$words%", "%$words%"));

            if($query->rowCount() > 0){
                $products = $query->fetchall(PDO::FETCH_ASSOC); 
                return json_encode($products);
            }else{
                return json_encode (new stdClass); //empty json array
            }
        }
    }
?>