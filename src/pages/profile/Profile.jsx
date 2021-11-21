import React from "react";
import "./profile.css";
import { useContext, useState } from "react";
import Context from "E:/Hackathon/agrostocks/src/context/Context.js";
import axios from "axios";
import logo from "./logo.png";

export default function Profile() {
  // const [file, setFile] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [fathername, setFathername] = useState("");
  const [state, setState] = useState("");
  const [panno, setPanno] = useState("");
  const [mob_no, setMob_no] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  // const PF = "http://localhost:5000/images/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user._id,
      name,
      email,
      fathername,
      state,
      panno,
      mob_no,
      address,
    };
    try {
      const res = await axios.put("/users/" + user._id, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  // const handleSet = async (e) => {
  //   const updateUser = {
  //     userId: user._id,
  //     name,
  //   };
  //   if (file) {
  //     const data = new FormData();
  //     const filename = Date.now() + file.name;
  //     data.append("file", file);
  //     data.append("name", name);
  //     updateUser.profilePic = filename;
  //     try {
  //       await axios.post("/upload", data);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  // };

  return (
    <div>
      <div class="container">
        <div class="jumbotron">
          <div class="row">
            <div class="col-4 leftcol">
              <center>
                <div class="logo my-4 settingsPP">
                  {/* <form onSubmit={handleSet()}> */}
                    <img
                      // src={
                      //   file ? URL.createObjectURL(file) : PF+user.profilePic
                      // }
                      src={logo}
                      alt=""
                    />
                    <b class="username">{user.username}</b>
                    <br />
                    {/* <label htmlFor="fileinput">
                      <i class="settingPPIcon"> Set Profile Pic.</i>{" "}
                    </label>
                    <input
                      type="file"
                      class="settingsPPInput"
                      id="fileInput"
                      // style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    /> */}
                    {/* <button type="submit">Submit</button> */}
                  {/* </form> */}
                </div>
              </center>
            </div>
            <div class="col-8 rightcol">
              <form className="userform" onSubmit={handleSubmit}>
                <div class="row">
                  <div class="col">
                    <label htmlFor="uname">Name</label>
                    <br />
                    <input
                      type="text"
                      class="my-2 name"
                      id="name"
                      placeholder={user.name}
                      name={user.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label htmlFor="fname">Father's Name</label>
                    <br />
                    <input
                      type="text"
                      class="my-2 name"
                      id="fathername"
                      placeholder={user.fathername}
                      name={user.fathername}
                      onChange={(e) => setFathername(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label htmlFor="pan_no">Pan No.</label>
                    <br />
                    <input
                      type="text"
                      class="my-2 name"
                      id="panno"
                      placeholder={user.panno}
                      name={user.panno}
                      onChange={(e) => setPanno(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label htmlFor="mob_no">Mobile no.</label>
                    <br />
                    <input
                      type="number"
                      class="my-2 name"
                      placeholder={user.mob_no}
                      name={user.mob_no}
                      onChange={(e) => setMob_no(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label htmlFor="state">State</label>
                    <br />
                    <input
                      type="text"
                      class="my-2 name"
                      id="state"
                      placeholder={user.state}
                      name={user.state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  <div class="col">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="text"
                      class="my-2 email"
                      id="email"
                      placeholder={user.email}
                      name={user.email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div class="row">
                  <div class="col">
                    <label htmlFor="pan_no">Address</label>
                    <br />
                    <textarea
                      type="text"
                      class="my-2 name"
                      id="address"
                      placeholder={user.address}
                      name={user.address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="submit">
                  Update
                </button>
                {success && (
                  <span
                    style={{
                      color: "green",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  >
                    Profile has been updated...
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
