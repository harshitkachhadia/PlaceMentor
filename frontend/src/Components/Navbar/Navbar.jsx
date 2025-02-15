import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

const pages = ["Home", "Resources", "Placement Insights", "Opportunities"];

const Navbar = ({ setShowLogin }) => {
  const { token, setToken } = React.useContext(StoreContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

const handleProfile = () => {
  navigate("/profile")
}

  const handleLogOut = () => {
    console.log("sdfghj")
    setToken("")
    localStorage.removeItem("token")
    
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          disableGutters
        >
          <Link to="/">
            <img
              src={assets.logo}
              alt="logo"
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ marginRight: "-20px" }}
            >
              <MenuIcon
                sx={{ color: "white", width: "100%", fontSize: "1.5rem" }}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={`/${page.toLowerCase().replace(/\s/g, "")}`}
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: "2rem",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page.toLowerCase().replace(/\s/g, "")}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontSize: "0.9rem",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!token
            ?(<Button onClick={() => setShowLogin(true)} variant="contained" color="primary" sx={{ margin: "0 10px" }}>
            Sign In
          </Button>)
          :(<Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
              <Avatar alt="Remy Sharp" src={assets.user} />
            </IconButton>
          </Tooltip>)}
            
            
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography onClick={handleProfile}  sx={{ textAlign: "center", padding: "4px 0" }}>
                    Profile
                  </Typography>
                  <Typography onClick={handleLogOut} sx={{ textAlign: "center", padding: "4px 0" }}>
                    Log out
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
