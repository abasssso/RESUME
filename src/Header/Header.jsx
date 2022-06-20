import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const location = useLocation();
  console.log(location);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        maxWidth="xl"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "#52A3B7",
          width: "100%",
        }}>
        <Link to="about" style={{ marginRight: "50px" }}>
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color={location.pathname === "/about" ? "success" : "primary"}>
            About
          </Button>
        </Link>
        <Link to="carrier">
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color={location.pathname === "/carrier" ? "success" : "primary"}>
            Carrier
          </Button>
        </Link>
        <Toolbar disableGutters>
          <img
            src="https://nftnow.com/wp-content/uploads/2021/08/bayc-1.png"
            style={{ width: "220px" }}
            alt=""
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}>
            ABBA PRODUCTION
          </Typography>
        </Toolbar>
        <Link to="skills">
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color={location.pathname === "/skills" ? "success" : "primary"}>
            Skills
          </Button>
        </Link>
        <Link to="collection">
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color={location.pathname === "/collection" ? "success" : "primary"}>
            Collection
          </Button>
        </Link>
      </Container>
    </AppBar>
  );
};
export default Header;
