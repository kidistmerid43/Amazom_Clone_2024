import React, { useState, useContext } from "react";
import classes from "./signUP.module.css";
import { Link } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionType";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const [{ user }, dispatch] = useContext(DataContext);

	const authHandler = async (e) => {
		e.preventDefault();
		console.log(e.target.name);
		if (e.target.name === "signin") {
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: TYPE.SET_USER,
						user: userInfo.user,
					});
				})
				.catch((err) => {
					setError(err.message);
				});
		} else {
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfo) => {
					dispatch({
						type: TYPE.SET_USER,
						user: userInfo.user,
					});
				})
				.catch((err) => {
					setError(err.message);
				});
		}
	};

	return (
		<section className={classes.login}>
			<Link>
				<img
					src="https://th.bing.com/th/id/OIP.8t_KUtP9sJbR6ZTkrwj5agHaCL?w=505&h=149&rs=1&pid=ImgDetMain"
					alt=""
				/>
			</Link>
			<div className={classes.login_container}>
				<h1>Sign In</h1>
				<form action="">
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						type="submit"
						onClick={authHandler}
						name="signin"
						className={classes.login_signInButton}
					>
						Sign In
					</button>
				</form>
				<p>
					By signing in to Amazon, you agree that applicable federal law, and
					the laws of the state of Washington, without regard to principles of
					conflict of laws, apply.
				</p>
				<button
					type="submit"
					onClick={authHandler}
					name="signup"
					className={classes.login_registerButton}
				>
					Create your Amazon Account
				</button>
				{error && (
					<small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
				)}
			</div>
		</section>
	);
}

export default Auth;
