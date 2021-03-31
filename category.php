<!DOCTYPE html>
<html lang="en">

<?php
include ("partials/head.php");
?>

<body>
    <!--Navigation-->
    <?php
    include ("partials/navibar.php");
    ?>

    <!--Products-->
    <section class="shop mt-5 my-5">
        <div class="container">
            &nbsp; <!-- Solve the problem of navbar covering the next div-->
            <div class="path mt-4"> <!-- simple breadcrumb-->
                <span>
                    <a href="index.php">Women</a> / 
                    <a href="#">Dress</a>
            </div>
            <div class="d-flex justify-content-start">
                <div class="p-2 flex-grow-1 ">
                    <button type="button" class="btn-category-1">Dress</button>
                </div>
                <div class="p-2 " >
                    <button type="button" class="btn-refine">Refine by : </button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn-category">Tops+</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn-category">Pants+</button>
                </div>
                <div class="p-2">
                    <button type="button" class="btn-category">Dress+</button>
                </div>
            </div>
            <div class="row products mt-5">
                <div class="mb-4 pics">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-6.jpg" alt="Card img cap">
                        <p class="price-tag rounded-circle"><span class="price">29</span><span class="dollor">$</span>
                        </p>
                    </a>
                </div>
                <div class="mb-4 pics ">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-5.jpg" alt="Card image cap">
                        <p class="price-tag rounded-circle"><span class="price">29.99</span><span class="dolar">$</span>
                        </p>
                    </a>
                </div>
                <div class="mb-4 pics ">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-1.jpg" alt="Card image cap">
                        <p class="price-tag rounded-circle"><span class="price">19.99</span><span class="dolar">$</span>
                        </p>
                    </a>
                </div>
                <div class="mb-4 pics ">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-2.jpg" alt="Card image cap">
                        <p class="price-tag rounded-circle"><span class="price">19.99</span><span class="dolar">$</span>
                        </p>
                    </a>
                </div>
                <div class="mb-4 pics ">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-3.jpg" alt="Card image cap">
                        <p class="price-tag rounded-circle"><span class="price">39.99</span><span class="dolar">$</span>
                        </p>
                    </a>
                </div>
                <div class="mb-4 pics ">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-4.jpg" alt="Card image cap">
                        <p class="price-tag rounded-circle"><span class="price">19.99</span><span class="dolar">$</span>
                        </p>
                    </a>
                </div>
                <div class="mb-4 pics ">
                    <a href="product.php">
                        <img class="img-fluid" src="img/women-7.jpg" alt="Card image cap">
                        <p class="price-tag rounded-circle"><span class="price">99.99</span><span class="dolar">$</span>
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </section>

   
    <!--Footer-->
    <?php
    include ("partials/footer.php");
    ?>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</body>

</html>
