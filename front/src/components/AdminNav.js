import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Link } from "react-router-dom";
import logo from "../images/sacem-logo.png";
import menu from "../images/menu.png";

const AdminNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    // localStorage.setItem("token", null);
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  src={menu}
                  alt=""
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "fade-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
                  <Link
                    to="/admin/addarticles"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    gestion articles
                  </Link>{" "}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/admin/addproduits"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    gestion produits
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    to="/admin/logout"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Logout
                  </Link>
                </MenuItem>
              </Menu>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <img src={logo} alt="" style={{ backgroundColor: "white" }} />
              </Link>
            </Typography>
            <Button color="inherit" onClick={handleLogout}>
              <Link style={{ textDecoration: "none", color: "inherit" }}>
                Logout
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default AdminNav;
