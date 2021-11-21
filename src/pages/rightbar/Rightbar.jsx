import React from "react";
import Context from "../../context/Context";
import { useContext } from "react";
import "./rightbar.css";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router ,Link } from "react-router-dom";
import logo from "./logo.png"

export default function Rightbar() {

  const {dispatch} = useContext(Context)
  // const {user, dispatch} = useContext(Context)
  // const PF = "http://localhost:5000/images/"

  const handleLogout=()=>{
    dispatch({type: "LOGOUT"})
    window.location.replace("/login");
  }
  const handleHome=()=>{
    window.location.replace("/")
  }
  const handleProfile=()=>{
    window.location.replace("/profile")
  }
  const handleHelp =()=>{
    window.location.replace("/help")
  }
  const handleContact =()=>{
    window.location.replace("/contactus")
  }
  return (
    <div className="rightbar">
      <Router>
      <div className="userimg">
        <Link className="uimg" to="/profile" onClick={handleProfile}><img src={logo} alt="" /></Link>
      </div>
      <div className="home">
        <Link className="homeicon" to="/" onClick={handleHome}><i class="fas fa-home"></i></Link>
      </div>
      <div className="help">
        <Link className="helpicon" to="/help" onClick={handleHelp}><i class="fas fa-info-circle"></i></Link>
      </div>
      <div className="contact">
        <Link className="contacticon" to="/contactus" onClick={handleContact}><i class="fas fa-envelope-square"></i></Link>
      </div>
      <div className="logout">
        <Link className="logouticon" to="/logout" onClick={handleLogout}><i class="fas fa-sign-out-alt"></i></Link>
      </div>
      </Router>
    </div>
  );
}
