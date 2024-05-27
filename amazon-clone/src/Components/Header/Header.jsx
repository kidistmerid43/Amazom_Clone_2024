import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
	return (
		<>
			<section>
				<div className={classes.header_container}>
					<div className={classes.logo_container}>
						{/* logo */}
						<Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
						{/* delivery */}
						<div className={classes.delivery}>
							<SlLocationPin />
							<div>
								<p>Deliver to</p>
								<span>Ethiopia</span>
							</div>
						</div>
					</div>

					<div className={classes.search}>
						{/* search */}
						<select name="categories" id="categories">
							<option value="all">All</option>
						</select>
						<input type="text" />
						<BsSearch size={25} />
					</div>

					{/* right side link */}
					<div className={classes.order_container}>
						<Link to="/" className={classes.language}>
							<img
								src="https://th.bing.com/th/id/R.a8854ee552e020fd9c957bb6842274f1?rik=CYBNsHDsVB%2bFnA&pid=ImgRaw&r=0"
								alt="USA Flag"
							/>
							<select name="language" id="language">
								<option value="EN">EN</option>
							</select>
						</Link>

						{/* Account and Lists */}
						<Link to="/signin">
							<p>Sign In</p>
							<span>Account and Lists</span>
						</Link>

						{/* Orders */}
						<Link to="/orders">
							<p>Returns</p>
							<span>& Orders</span>
						</Link>

						{/* Cart */}
						<Link to="/cart" className={classes.cart}>
							<BiCart size={35} />
							<span>0</span>
						</Link>
					</div>
				</div>
			</section>
			<LowerHeader />
		</>
	);
}

export default Header;
