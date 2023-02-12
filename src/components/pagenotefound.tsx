import logo from "../logo.svg";
import pablo from "../img/pablo-sign-in.svg";
import { useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

interface error {
    code: number;
    message: string;
    status: string;
}

function PageNotFound() {
    const navigate = useNavigate();

  return (
    <>
        <div className="section align-middle wf-section">
        <div className="container w-container">
            <div className="row row-2 _w-100">
                <div className="col col-py-4">
                    <div className="logo">
                        <img src={logo} loading="lazy" alt=""></img>
                    </div>
                    <div className="center-img-wrapper">
                        <img src={pablo} loading="lazy" id="w-node-f28a1217-a232-3947-f964-e77863501bb7-2719fc1a" alt=""></img>
                    </div>
                </div>
                <div id="w-node-_165cf382-a921-b164-5ab9-01c58a2063c9-2719fc1a" className="col col-py-4">
                    <div className="head-wrapper">
                        <h1 className="heading">Page Not Found!</h1>
                        <div className="text-block">The page you are looking for does not exist.</div>
                    </div>
                    <div>
                        <button className="btn-w-100 mt-4 w-button" onClick={()=> { navigate(-1)}}>Go back</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default PageNotFound;