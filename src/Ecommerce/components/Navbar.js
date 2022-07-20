import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import '../components/Custom.css';
const Navbar = () => {
	const state = useSelector(state => state.handleCart);

	return (
		<nav class='navbar navbar-expand-lg bg-white shadow-sm py-4'>
			<div class='container'>
				<Link to='/' class='navbar-brand fw-bold fs-4 primary-color'>
					<img
						alt=""
						src="https://i.ibb.co/pzkyQ7M/240-F-241390620-hihdd-CG15-N7-I8-Hy-PWUiv1e-UH85-D2-SN9z-removebg-preview.png"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					Jazz Buy
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav m-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<Link to='/' class='nav-link active' aria-current='page'>
								<span className="active-link me-4">Home</span>
							</Link>
						</li>
						<li class='nav-item'>
							<Link to='/products' class='nav-link  active' aria-current='page'>
								<span className="active-link me-4">Products</span>
							</Link>
						</li>
						<li class='nav-item'>
							<Link to='/contact' class='nav-link active' aria-current='page'>
								<span className="active-link">Contact</span>
							</Link>
						</li>
					</ul>
					<div className='buttons'>
						<Link to='/cart' className='btn my-button me-2'>
							<i className='fa fa-shopping-cart me-1'></i>
							Cart ({state.length})
						</Link>
						<Link to='/login' className='btn btn my-button me-2'>
							<i className='fa fa-sign-in me-1'></i>
							Login
						</Link>
						<Link to='/sing-up' className='btn my-button'>
							<i className='fa fa-user-plus me-1'></i>
							Register
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
