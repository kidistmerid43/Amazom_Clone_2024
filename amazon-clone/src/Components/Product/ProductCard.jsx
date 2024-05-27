import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
	const { image, title, id, rating, price } = product;

	// Check if 'rating' is defined before accessing its properties
	const ratingValue = rating ? rating.rate ?? 0 : 0;
	const ratingCount = rating ? rating.count ?? 0 : 0;

	return (
		<div className={classes.card_container}>
			<Link to={`/products/${id}`}>
				<img src={image} alt={title} />
			</Link>
			<div>
				<h3>{title}</h3>

				<div className={classes.rating}>
					{/* Use the values with optional chaining */}
					<Rating value={ratingValue} precision={0.1} readOnly />
					<small>{ratingCount}</small>
				</div>
				<div>
					<CurrencyFormat amount={price} />
				</div>
				<button className={classes.button}>add to cart</button>
			</div>
		</div>
	);
}

export default ProductCard;
