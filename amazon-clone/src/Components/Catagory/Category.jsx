import React from "react";
import { CatagoryFullinfos } from "./CatagoryFullinfos"; 
import CategoryCard from "./CategoryCard";
import classes from "./Catagory.module.css"; // 

function Category() {
	return (
		<section className={classes.categoryContainer}>
			{CatagoryFullinfos.map((infos, index) => (
				<CategoryCard key={index} data={infos} />
			))}
		</section>
	);
}

export default Category;
