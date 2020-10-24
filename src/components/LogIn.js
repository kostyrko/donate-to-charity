import React, { useState } from "react";
import { Link } from "react-router-dom";

// import { FirebaseContext } from '../components/Firebase';
import * as ROUTES from "../constants/routers";


const LogIn = () => (
  <div>
    <h1>SignUp</h1>
    <div>
        Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </div>
  </div>
);

export default LogIn;
