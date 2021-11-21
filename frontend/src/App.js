import "./App.css";
import Homepage from "./pages/homepage/Homepage.jsx";
import Rightbar from "./pages/rightbar/Rightbar";
import Profile from "./pages/profile/Profile";
import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Context from "./context/Context";
import Login from "./pages/login/Login";
import Instructions from "./pages/instructions/Instructions";
import Register from "./pages/register/Register";
import Investment from "./pages/investmentpage/Investment";
import Cart from "./pages/cartscreen/Cart";
import ContactUs from './components/contactForm';


function App() {
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <div className="leftcolumn">
          <Routes>
            <Route exact path="/" element={user ? <Homepage/> : <Login/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={user ? <Profile/> : <Login/>}/>
            <Route path="/help" element={user ? <Instructions/> : <Login/>}/>
            <Route exact path="/categories/:id" element={<Investment/>} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contactus" element={<ContactUs />} />

          </Routes>
        </div>
      </Router>
      <div className="rightcol">
        <Rightbar />
      </div>
    </div>
  );
}
export default App;
