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

	<!--filter & sort by-->
	<section class="shop-filter">
		<div class="container">
			<!--sort by price -->
			<div class="span1">
				<h3>Sort By :</h3>
				<select class="form-control store-select">
					<option value="default">Default</option>
					<option value="up">Price(Low > High)</option>
					<option value="down">Price(High > Low)</option>
				</select>
			</div>

			<!--filter by price-->
			<div class="span1">
				<h3 class="headline"><span>Price</span></h3>
				<div class="radio">
					<input type="radio" name="shop-filter__price" id="shop-filter-price_1" value="">
					<label for="shop-filter-price_1">all</label>
				</div>				
				<div class="radio">
					<input type="radio" name="shop-filter__price" id="shop-filter-price_1" value="Under25">
					<label for="shop-filter-price_1">Under $25</label>
				</div>
				<div class="radio">
					<input type="radio" name="shop-filter__price" id="shop-filter-price_2" value="25To50">
					<label for="shop-filter-price_2">$25 to $50</label>
				</div>
				<div class="radio">
					<input type="radio" name="shop-filter__price" id="shop-filter-price_3" value="50To100">
					<label for="shop-filter-price_3">$50 to $100</label>
				</div>
				<div class="radio">
					<input type="radio" name="shop-filter__price" id="shop-filter-price_4" value="Above100">
					<label for="shop-filter-price_4">Above $100</label>
				</div>
			</div>


			<!--filter by ratings-->
			<div class="span1">
				<h3 class="headline">
					<span>Ratings</span>
				</h3>
				<div class="checkbox">
					<input type="checkbox" name='rating' value="above4" id="shop-filter-checkbox_1" >
					<label for="shop-filter-checkbox_1">4 Star & up</label>
				</div>
				<div class="checkbox">
					<input type="checkbox"  name='rating' value="3To4" id="shop-filter-checkbox_2" >
					<label for="shop-filter-checkbox_2">3 star to 4 star</label>
				</div>
				<div class="checkbox">
					<input type="checkbox"  name='rating' value="2To3" id="shop-filter-checkbox_3" >
					<label for="shop-filter-checkbox_3">2 star to 3 star</label>
				</div>
				<div class="checkbox">
					<input type="checkbox"  name='rating' value="under2" id="shop-filter-checkbox_4" >
						<label for="shop-filter-checkbox_4">Under 2 star</label>
				</div>
			</div>
		</div>
	</section>

<!--products-->
	<section class="shop mt-5 my-5">
		<div class="container">
			<h2 class="section-heading">Search results</h2>
			
				<div class="row">
					<!--	
				<div class="mb-3 pics" data-price="79.99">
					<a href="product.html">
						<img class="img-fluid" src="img/women-3.jpg" alt="Card image cap">
						<div class="shop-thumb__tag">
							<h5 class="shop-thumb__title">Zilcremo Women Dress</h5>
							<h6 class="shop-thumb__price">$79.99</h6>							
						</div>
					</a>
					<div class="shop-thumb__rating">
						<Span>Ratings</Span>
						<div class="fa fa-star checked"></div>
						<div class="fa fa-star checked"></div>
						<div class="fa fa-star checked"></div>
						<div class="fa fa-star"></div>
						<div class="fa fa-star"></div>
					</div>
				</div>
				-->
			</div>
				
		</div>
	</section>

	<!--Footer-->
    <?php
    include ("partials/footer.php");
    ?>

	<!-- Optional JavaScript -->
	<script src="js/result.js"></script>
	
</body>

</html>
