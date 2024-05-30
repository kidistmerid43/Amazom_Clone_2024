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
    signUp: false // Corrected signUP to signUp
  });

  const { dispatch } = useContext(DataContext);
  const history = useNavigate(); // Get access to history for navigation

  const authHandler = async (e) => {
    e.preventDefault();
    const { name } = e.target; // Destructure name directly from event target

    if (name === "signin") { // Corrected comparison
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          history.push("/"); // Navigate to home page after sign-in
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true }); // Corrected signUP to signUp
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER, // Corrected Type to TYPE
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false }); // Corrected signUP to signUp
          history.push("/"); // Navigate to home page after sign-up
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false }); // Corrected signUP to signUp
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
        <form>
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
            {loading.signIn ? (
              <CircleLoader color="#000" size="15" position="center"></CircleLoader>
            ) : (
              "Sign In"
            )}
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
          {loading.signUp ? (
            <CircleLoader color="#000" size="15" position="center"></CircleLoader> 
          ) : (
            "Create your Amazon Account"
          )}
        </button>
      </div>
    </section>
  );
}

export default Auth;
