<?php
class Product{
    // database connection and table name
    private $conn;
    private $table_name = "products";

    // columns
    public $id;
    public $title;
    public $description;
    public $price;
    public $rating;
    public $img;
    public $category;

    function __construct($id, $title, $description, $price, $rating, $img, $category) {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->price = $price;
        $this->rating = $rating;
        $this->img = $img;
        $this->category = $category;
    }
    
    public function getId() {
        return $this->id;
    }
}
?>