<!DOCTYPE html>
<html lang="en">
<?php
include ("partials/head.php");
?>

<body>
    <div class="scroll-btn">
        <i class="fa fa-arrow-circle-up"></i>
    </div>
    <!--Navigation-->
    <!--Includes Logo, Category menu with dropdown, search and cart items
        code reference: https://getbootstrap.com/docs/4.3/components/navbar/?
    -->
    <?php
    include ("partials/navibar.php");
    ?>

    <!--Home screen-->
    <!--Three slides are to enrich the website.
        code reference: https://getbootstrap.com/docs/4.3/components/carousel/#slides-only
    -->
    <section class="home">
        <div id="homeSlides" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#homeSlides" data-slide-to="0" class="active"></li>
                <li data-target="#homeSlides" data-slide-to="1"></li>
                <li data-target="#homeSlides" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                <!-- Slide One - Set the background image for this slide in the line below -->
                <div class="carousel-item active"
                    style="background-image: url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2020-09-24-at-10-55-54-am-1600959382.png?crop=0.755xw:1.00xh;0.245xw,0&resize=1200:*')">
                </div>

                <!-- Slide Two - Set the background image for this slide in the line below -->
                <div class="carousel-item"
                    style="background-image: url('https://stylecaster.com/wp-content/uploads/2016/09/milan-fashion-week-street-style-spring-2017-feat-02.jpg')">
                </div>

                <!-- Slide Three - Set the background image for this slide in the line below -->
                <div class="carousel-item"
                    style="background-image: url('https://media1.popsugar-assets.com/files/thumbor/Y2aJ0gWKiQ6-jSrKYcNjdzeMP-M/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/28/770/n/1922564/c158ff7f7b935446_GettyImages-1137268816/i/All-I-Can-Say-Aint-Nobody-Fresher-Than-My-Clique.jpg')">
                </div>
            </div>
            <a class="carousel-control-prev" href="#homeSlides" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#homeSlides" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>

    <!--Call to action-->
    <!--
        Display reward information.
    -->
    <section class="call-to-action py-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 text-right"> <!--Text takes 8 columns-->
                    <h3 class="call-to-action-heading">Rewards Members Get more to Love</h3>
                    <p>Get 20x the points with eShop Credit <br> or 10x the points however else you pay</p>
                </div>
                <div class="col-lg-4"> <!--button takes 4 columns-->
                    <button class="btn btn-lg btn-outline-secondary mt-4">Learn More</button>
                </div>
            </div>
        </div>
    </section>

    <!--Products-->
    <!--
        Display the products most people like.
        Put the price at left-top on image via CSS.
    -->
    <section class="shop mt-5 my-5">
        <div class="container">
            <h2 class="section-heading">Most like clothing!</h2>
            <div class="row products mt-5">
            <!--load products by JS script-->
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
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
    <script src="js/eshop.js"></script>
</body>

</html>