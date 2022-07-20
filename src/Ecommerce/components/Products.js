import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import './Custom.css';

const Products = () => {
	const [data, setData] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	let componentMounted = true;

	useEffect(() => {
		const getProducts = async () => {
			setLoading(true);
			const response = await fetch("https://fakestoreapi.com/products");
			// const response = await fetch("https://api.escuelajs.co/api/v1/products");
			if (componentMounted) {
				setData(await response.clone().json());
				setFilter(await response.json());
				setLoading(false);
				console.log(filter);
			}

			return () => {
				componentMounted = false;
			};
		};

		getProducts();
	}, []);

	const filterProduct = category => {
		const newProducts = data.filter(product => product.category === category);
		setFilter(newProducts);
	};

	return (
		<div className='container py-5'>
			<h2 className='text-center fw-bolder py-5 primary-color'>Latest Products</h2>
			<div className='buttons d-flex justify-content-center sort-buttons'>
				<button
					className='my-button btns'
					onClick={() => setFilter(data)}>
					ALL
				</button>
				<button
					className='my-button btns'
					onClick={() => filterProduct("men's clothing")}>
					MEN
				</button>
				<button
					className='my-button btns'
					onClick={() => filterProduct("women's clothing")}>
					WOMEN
				</button>
				<button
					className='my-button btns'
					onClick={() => filterProduct("jewelery")}>
					JEWELERY
				</button>
				<button
					className='my-button btns'
					onClick={() => filterProduct("electronics")}>
					ELECTRONIC
				</button>
			</div>
			{loading ? (
				<Loading />
			) : (
				<div className='row justify-content-center g-3 pt-5'>
					{filter.map(product => (
						<div className='col-md-3'>
							<div class='card h-100 text-center border-0 shadow-sm'>
								<img
									src={product.image}
									class='card-img-top p-4'
									height={250}
									alt={product.title}
								/>
								<div class='card-body'>
									<h5 class='card-title'>
										{product.title.substring(0, 12)}...
									</h5>
									<p class='card-text fw-bold'>${product.price}</p>
									<Link
										to={`/product/${product.id}`}
										class='btn my-button'>
										BUY NOW
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
