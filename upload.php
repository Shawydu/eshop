<!DOCTYPE html>
<html lang="en">

<head>
    <title>EShop</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!--  Font awesome-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Style CSS-->
    <link rel="stylesheet" href="css/main.css">

    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap" rel="stylesheet">
</head>

<body>
    <!--Navigation-->
    <?php
    include "partials/navibar.php";
    ?>
    <section>
    <div class="container col-8 item">
        <!-- a new page(form) to input images and info 
        to create & add new product to the database -->
        <form id="createProduct">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" placeholder="Enter title">
            </div>
            <div class="form-group">
              <label for="description">description</label>
              <textarea class="form-control" id="description" rows="4" cols="50" aria-describedby="description" placeholder="Enter description"></textarea>
            </div>
            <div class="form-group">
              <label for="price">price</label>
              <input type="text" class="form-control" id="price" placeholder="Enter price">
            </div>
            <div class="form-group">
                <label for="category">category</label>
                <input type="text" class="form-control" id="category" placeholder="Enter category">
            </div>
            <div class="form-group">
                <label for="rating">rating</label>
                <input type="text" class="form-control" id="rating" placeholder="Enter rating">
            </div>
            <div class="form-group">
                <label for="image">image</label>
                <input type="file" class="form-control" id="image" placeholder="Upload image">
            </div>
            <div class="btn-group">
                <button type="submit" class="btn btn-primary">Create</button>
                <a href="index.html" class="btn btn-danger">Cancel</a>
            </div>
          </form>
    </div>
    </section>

    <!--Footer-->
    <?php
    include ("partials/footer.php");
    ?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" 
        integrity="sha512-+NqPlbbtM1QqiK8ZAo4Yrj2c4lNQoGv8P79DPtKzj++l5jnN39rHA/xsqn8zE9l0uSoxaCdrOgFs6yjyfbBxSg==" 
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="js/product.js"></script>
    <script type="eshop" src="js/eshop.js"></script>
</body>

</html>