import React from "react";
import Product from "../../Components/Product/Product";
import LayOut from "../../Components/Layout/Layout";
import Catagory from "../../Components/Catagory/Category";
import Carousel from "../../Components/Carousel/Carousel";

function Landing() {
	return (
		<LayOut>
			<Carousel />
			<Catagory />
			<Product />
		</LayOut>
	);
}

export default Landing;
