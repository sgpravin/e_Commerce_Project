import React, { useState } from "react";
import SubHeader from "./subHeader/subHeader";
import "./styles.css";

const Header = ({ onValChange }) => {
  const [product, setProduct] = useState([]);
  const handleLogout = () => {
    onValChange("error");
  };

  const showPrd = () => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          console.log("Network issue");
        }
        const fetchedData = await response.json();
        setProduct(fetchedData);
      } catch (error) {
        console.log("Error");
      }
    };
    fetchData();
  };

  console.log(product,"All prd");

  return (
    <div className="Header">
      <div className="CompanyName">
        <span className="Name">ABCart</span>
      </div>
      <div className="Login">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABjElEQVR4nO2Zz0oCURSHP4xcBa2Dcteilymx1FeIiNr0Dv2xXdA+EluUb5C9hqbZMggpKFsUoTcGThvBEufMnFvcD34gMuDvk3PHex0IBAKaZIEyUANawJukJe+V5BovWQe6gPsld0ABj5gBjicoPpoKkMEDpin/nUMfxsbFTN6qfFbmOa7AvdXCLiuUd5KihcCFokDVQqCtKNCyEOgrCvT/usCLhcCtokDTQqCmKHBuIVBSFNiwEJgFOgrlu5Y71IKCwBrGVGKUP8ADoi3x0ZQ70QwekZ9wTXR8GJufFnZR9jZN+bHry+uq3G2iawKBQMrkgDrwqrh9GJfoM66AJc3yzykUdyN50pKoG5R3kksNgTTGxiV50HHGic3AsPwgfn3oGQr0NAQahgINDYFtQ4EdDYE54MGg/CMwjxKrwDDF8sMkDvq7KQrskeA/0q8J33XyJMyinK4+FYt/AGfAAimSk8P8JA/2xqUN7MuXYsoKsAWcAjciFY3Du6QnT3OugRNgE1i2Lh0I8A/4AsVC6ighJMgVAAAAAElFTkSuQmCC"
          alt="UserIcon"
          className="userIcon"
        />
        <button type="button" className="btn btn-hover" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <SubHeader showPrd={showPrd}/>
    </div>
  );
};

export default Header;
