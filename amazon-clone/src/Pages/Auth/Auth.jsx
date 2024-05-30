import React, { useState, useContext } from "react";
import classes from "./signUP.module.css";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";
import { auth } from "../../Utility/firebase";
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionType";
import { Link } from "react-router-dom";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState({
		signIn: false,
		signUp: false,
	});

	const { dispatch } = useContext(DataContext);
	const navigate = useNavigate();

	const authHandler = async (e) => {
		e.preventDefault();
		const { name } = e.target;
		console.log(e.target.name);

		if (name === "signin") {
			setLoading((prevState) => ({ ...prevState, signIn: true }));
			try {
				const userInfo = await signInWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch({
					type: Type.SET_USER,
					user: userInfo.user,
				});
				setLoading((prevState) => ({ ...prevState, signIn: false }));
				navigate("/");
			} catch (err) {
				setError(err.message);
				setLoading((prevState) => ({ ...prevState, signIn: false }));
			}
		} else if (name === "signup") {
			setLoading((prevState) => ({ ...prevState, signUp: true }));
			try {
				const userInfo = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				dispatch({
					type: Type.SET_USER,
					user: userInfo.user,
				});
				setLoading((prevState) => ({ ...prevState, signUp: false }));
				navigate("/");
			} catch (err) {
				setError(err.message);
				setLoading((prevState) => ({ ...prevState, signUp: false }));
			}
		}
	};

	return (
		<section className={classes.login}>
			<Link to="/">
				<img
					src="https://th.bing.com/th/id/OIP.8t_KUtP9sJbR6ZTkrwj5agHaCL?w=505&h=149&rs=1&pid=ImgDetMain"
					alt="Amazon Logo"
				/>
			</Link>
			<div className={classes.login_container}>
				<h1>Sign In</h1>
				<form onSubmit={authHandler}>
					<div>
						<label htmlFor="email">Email</label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
							required
						/>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
							required
						/>
					</div>
					<button
						type="submit"
						name="signin"
						className={classes.login_signInButton}
					>
						{loading.signIn ? (
							<CircleLoader color="#000" size={15} />
						) : (
							"Sign In"
						)}
					</button>
				</form>
				{error && <p className={classes.error}>{error}</p>}
				<p>
					By signing in to Amazon, you agree to Amazon's Terms and Conditions.
				</p>
				<button
					type="button"
					onClick={authHandler}
					name="signup"
					className={classes.login_registerButton}
				>
					{loading.signUp ? (
						<CircleLoader color="#000" size={15} />
					) : (
						"Create your Amazon Account"
					)}
				</button>
			</div>
		</section>
	);
}

export default Auth;
