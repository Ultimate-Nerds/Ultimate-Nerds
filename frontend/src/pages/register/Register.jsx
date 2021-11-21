import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mob_no, setMob_no] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(false);
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        mob_no
      });
      res.data && window.location.replace("/login");
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div>
      <div class="container">
        <div class="jumbotron">
          <div class="row">
            <div class="col-4 leftcol">
              <center>
                <div class="logo">
                  <img src={logo} alt="" />
                </div>
              </center>
            </div>
            <div class="col-8 rightcol">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <center>
                  <input
                    type="text"
                    class="my-2 uname"
                    id="uname"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <br />
                  <input
                    type="email"
                    class="my-2 uname"
                    id="name"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <input
                    type="password"
                    class="my-2 upass"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                  <input
                    type="text"
                    class="my-2 uname"
                    placeholder="Mobile No."
                    onChange={(e) => setMob_no(e.target.value)}
                  />
                  <br />
                  <button type="submit" class="my-3 submit">
                    SING UP
                  </button>
                  <hr class="w-50" />
                  <p>
                    Already have an account ? <Link to="/login">SIGN IN</Link>
                  </p>

                  {error && (
                    <span style={{ color: "red", marginTop: "10px" }}>
                      Something wents wrong!
                    </span>
                  )}
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
