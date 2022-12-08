import "../src/Percentagecalc.scss";
import React from "react";

function Percentagecalc() {
  return (
    <>
    <div className="main">
    <div className="imagediv">

    </div>
    <div className="form">
<h2>Sign up</h2><br></br>
<h3>First Name</h3>
<input placeholder="TYPE First Name"></input>
<h3>EMAIL</h3>
<input placeholder="TYPE Email"></input>
<h3>Username</h3>
<input placeholder="TYPE Username"></input>
<h3>Password</h3>
<input type="password" placeholder="TYPE Password"></input>
<h3>Repeat Password</h3>
<input type="password" placeholder="TYPE Again"></input><br></br>
<div className="wrapper">
<input type="checkbox"></input><h4>I agree to term of user</h4>
</div>
<button>Sign Up</button>
<button>Sign In</button>
    </div>
    </div>
    </>
  );
}

export default Percentagecalc;
