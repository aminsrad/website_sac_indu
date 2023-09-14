import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/sacem-logo.png";
export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src={logo} alt="" style={{ backgroundColor: "white" }} />

        <ul
          style={{
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            margin: 40,
            padding: 0,
          }}
        >
          <li style={{ margin: "0 10px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Accueil
            </Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link
              to="/histoire"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Histoire
            </Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link
              to="/listactualite"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Actualité
            </Link>
          </li>
          <li style={{ margin: "0 10px" }}>
            <Link
              to="/listproduits"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Produits
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Login
            </Link>{" "}
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};
