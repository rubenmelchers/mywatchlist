<!DOCTYPE html>
<html>
<head>
	<title>Mywatchlist | popular movies</title>
	<link rel="stylesheet" type="text/css" href="dist/style.css"/>
</head>
<body>

	<header class="navigation">
		<div id="movie-links" class="navigation__wrapper container">
			<div class="row navigation__row">
				<div class="col-4 navigation__link">
					<a href="#" data-subject="popular">Popular movies</a>
				</div>
				<div class="col-4 navigation__link">
					<a href="#">Test</a>
				</div>
				<div class="col-4 navigation__link">
					<a href="#">Test2</a>
				</div>
			</div>
		</div>
	</header>

		<div class="container">
			<div class="row">
				<div id="popularmovies" class="popularmovie">
					<script id="template-error" type="text/template">
						<span class="error"><%= message %></span>
					</script>

					<script id="template-popular" type="text/template">

						<div class="col-12">
							<h1>
								Popular movies
							</h1>
						</div>
						<% _.each(movies, function(movie, index, list){

						console.log(movie);

						%>
						<div class="popularmovie__wrapper col-6 col-md-12">
							<h4 class="popularmovie__title"><%= movie.title %></h4>

							<div class="popularmovie__description">
								<%= movie.overview %>
							</div>
						</div>
						<% }); %>
					</script>
				</div>

			</div>
		</div>
	<script src="dist/bundle-script.js" type="text/javascript"></script>
</body>
</html>
