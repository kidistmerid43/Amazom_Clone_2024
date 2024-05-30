import React from "react";
import PropTypes from "prop-types";
import classes from "./Catagory.module.css";
import {Link} from 'react-router-dom'

function CategoryCard({ data })
 {console.log(data)
	return (
		<div className={classes.category}>
			<Link to={`/category/${data.name}`}
				href={data?.link}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span>
					<h2>{data?.title}</h2>
				</span>
				<img src={data?.imgLink} alt={data.title} />
				<p className={classes.shopNow}>Shop now</p>
			</Link>
		</div>
	);
}

CategoryCard.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		imgLink: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	}).isRequired,
};

export default CategoryCard;
