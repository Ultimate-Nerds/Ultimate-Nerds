import { Link } from "react-router-dom";
import "./login.css"
import logo from "./logo.png"
import { useContext, useRef } from "react";
import Context from "E:/Hackathon/agrostocks/src/context/Context.js";
import axios from "axios";


export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching} = useContext(Context);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/auth/login",{
              username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({type: "LOGIN_SUCCESS",payload: res.data});
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE"});
            console.log(error);
        }
        window.location.replace("/");
    };


  return (
    <div>
      <div class="container">
        <div class="jumbotron">
          <div class="row">
            <div class="col-4 leftcol">
              <center>
                <div class="logo my-4">
                  <img src={logo} alt="" />
                </div>
              </center>
            </div>
            <div class="col-8 rightcol">
              <h1>Sign In</h1>
              <form action="/login" onSubmit={handleSubmit}>
                <center>
                  <input
                    type="text"
                    class="my-2 uname"
                    placeholder="Username"
                    ref={userRef}
                  />
                  <br />
                  <input
                    type="password"
                    class="my-2 upass"
                    placeholder="Password"
                    ref = {passwordRef}
                  />
                  <br />
                  <button type="submit" class="my-3 submit" disabled={isFetching}>SIGN IN</button>
                  <hr class="w-50" />
                  <p>
                    Don't have an account ? <Link to="/register">SIGN UP</Link>
                  </p>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
