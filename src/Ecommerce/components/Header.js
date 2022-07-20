import React from "react";

const Header = () => {
	return (

		<div
			id='carouselExampleInterval'
			class='carousel slide'
			data-bs-ride='carousel'>
			<div class='carousel-inner'>
				<div class='carousel-item active' data-bs-interval='10000'>
					<img
						src='https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						class='d-block w-100 banner-img'
						height="800px"
						alt='...'

					/>
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>

				<div class='carousel-item'>
					<img
						src='https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						class='d-block w-100 banner-img'
						height="800px"
						alt='...'
					/>
					<div class="carousel-caption d-none d-md-block">
						<h5>Second slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
				<div class='carousel-item' data-bs-interval='2000'>
					<img
						src='https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						class='d-block w-100 banner-img'
						height="800px"
						alt='...'
					/>
					<div class="carousel-caption d-none d-md-block">
						<h5>Third slide label</h5>
						<p>Some representative placeholder content for the first slide.</p>
					</div>
				</div>
			</div>
			<button
				class='carousel-control-prev'
				type='button'
				data-bs-target='#carouselExampleInterval'
				data-bs-slide='prev'>
				<span class='carousel-control-prev-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Previous</span>
			</button>
			<button
				class='carousel-control-next'
				type='button'
				data-bs-target='#carouselExampleInterval'
				data-bs-slide='next'>
				<span class='carousel-control-next-icon' aria-hidden='true'></span>
				<span class='visually-hidden'>Next</span>
			</button>
		</div>

	);
};

export default Header;
