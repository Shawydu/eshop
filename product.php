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

    <section>
        <div class="container item">
            <div class="row">
                <!-- col-numbers is Bootstrap 4 grid layouts (the column sum should add up to 12 or fewer) - learnt from w3schools -->
                <!-- image of the product -->
                <div class="col-4">
                    <img class="img-detail" alt="Zilcremo Women Casual Dress">
                </div>
                <div class="col-1"></div>
                <!-- descriptions for the product -->
                <div class="col-7 description">
                    <div class="container">
                        <div class="row">
                            <h2 id="title"></h2>
                        </div>
                        <div class="row" id="category">
                            <!-- an unordered list to display the product description -->
                            <!-- <ul>
                                <li>80% Cotton</li>
                                <li>Cotton lining</li>
                                <li>Tie Dye/Solid Print:95% Rayon,5% Polyester. 
                                    Floral Print:35% Cotton, 65% Polyester.</li>
                                <li>Women's split maxi dress is made of high quality fabric,lightweight,
                                    breathable and skin-friendly,super soft and comfortable to wear all day.</li>
                            </ul>                        -->
                            <p id="description"></p>
                        </div>
                        <form>
                            <div class="row">
                                <div>Price: $<span id="price"></span></div>
                            </div>
                            <div class="row">
                                <div>Size:</div>
                                <!-- list sizes of the product to let customers choose -->
                                <div class="col-6">
                                    <!-- Default radios are improved upon with the help of .form-check, 
                                        a single class for both input types that improves the layout and behavior 
                                        of their HTML elements. Group radios on the same horizontal row 
                                        by adding .form-check-inline to any .form-check.
                                         - learnt from Bootstrap froms -->
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sizeOptions" id="sizeOptionXS" value="1">
                                        <label class="form-check-label" for="sizeOptionXS">XS</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sizeOptions" id="sizeOptionS" value="2" checked>
                                        <label class="form-check-label" for="sizeOptionS">S</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sizeOptions" id="sizeOptionM" value="3">
                                        <label class="form-check-label" for="sizeOptionM">M</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sizeOptions" id="sizeOptionL" value="4">
                                        <label class="form-check-label" for="sizeOptionL">L</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="sizeOptions" id="sizeOptionXL" value="5">
                                        <label class="form-check-label" for="sizeOptionL">XL</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div>Quantity</div>
                                <div class="col-2">
                                    <!-- a drop-down list for selecting the quantity -->
                                    <select class="form-select quantity">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <!-- a star rating for the product -->
                                <div>Rating</div>
                                <div class="col-2 rating">
                                    <input type="radio" name="rating" value="5" id="5"><label for="5">☆</label>
                                    <input type="radio" name="rating" value="4" id="4"><label for="4">☆</label>
                                    <input type="radio" name="rating" value="3" id="3"><label for="3">☆</label>
                                    <input type="radio" name="rating" value="2" id="2"><label for="2">☆</label>
                                    <input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>   
                                </div>
                            </div>
                            <div class="row">
                                <!-- an add-to-cart button -->
                                <button type="submit" class="btn btn-dark col-3">Add to Cart</button>
                            </div>
                        </form>
                    </div>
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