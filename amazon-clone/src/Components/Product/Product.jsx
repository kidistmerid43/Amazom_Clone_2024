import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";

function Product() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((res) => {
				setProducts(res.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<section className={classes.products_container}>
			{products?.map((singleProduct) => (
				<ProductCard
					renderAdd={true}
					key={singleProduct.id}
					product={singleProduct}
				/>
			))}
		</section>
	);
}

export default Product;
