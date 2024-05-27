import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader"; // Ensure this import is correct

function ProductDetail() {
	
	const [product, setProduct] = useState({});
	const [isLoading, setIsLoading] = useState(false); 
	const { productId } = useParams();

	useEffect(() => {
		setIsLoading(true);
		axios.get(`${productUrl}/products/${productId}`)
			.then((res) => {
				setProduct(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	}, []);

	return (
		<Layout>
			{isLoading ?( <Loader />) : (<ProductCard product={product} />)}
		</Layout>
	);
}

export default ProductDetail;
