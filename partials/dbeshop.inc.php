<?php
class Dbeshop{
    private $servername;
    private $username;
    private $password;
    private $dbname;

    public function connect(){
        $this->servername = "localhost";
        $this->username = "root";
        $this->password = "";
        $this->dbname = "eshop";
        //$this->charset = "utf8mb4";

        try{
            $ds = "mysql:host=".$this->servername.";dbname=".$this->dbname;
            $pdo = new PDO($ds, $this->username, $this->password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        }catch (PDOException $e){
            echo "Connection error: ".$e->getMessage();
        }
    }
}
?>