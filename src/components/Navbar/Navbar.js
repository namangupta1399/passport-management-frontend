import React from "react";
import {
  AppBar,
  Container,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/images/hop_logo_new.png";
import LoginService from "../../services/LoginService";
import MoreIcon from "@material-ui/icons/MoreVert";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    background: "#000000",
    color: "white",
    backgroundImage:
      "linear-gradient(45deg, black 28%, transparent 54%), linear-gradient(45deg, #000 25%, #DBAA33)",
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    margin: "0 10px",
  },
  sectionDesktop: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const loginService = new LoginService();
const { isLoggedIn, signout } = loginService;
const user = isLoggedIn();

const navList = [
  {
    name: "Home",
    path: "/",
    type: "common",
  },
  {
    name: "About",
    path: "/about",
    type: "common",
  },
  {
    name: "Contact Us",
    path: "/contact",
    type: "common",
  },
];

const currentTab = (history, path) => {
  if (
    history.location.pathname === path ||
    (path.includes("/applicant") &&
      history.location.pathname.includes("/applicant")) ||
    (path.includes("/admin") && history.location.pathname.includes("/admin"))
  ) {
    return "active";
  }
};

const Navbar = ({ history }) => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user && (
        <Link
          className={`nav-link ${currentTab(
            history,
            `${user.userRole === "applicant" ? "/applicant" : "/admin"}`
          )}`}
          to={`${user.userRole === "applicant" ? "/applicant" : "/admin"}`}
        >
          Dashboard
        </Link>
      )}
      {navList.map((navItem, index) => {
        return (
          <MenuItem component={Link} to={navItem.path} key={index}>
            {navItem.name}
          </MenuItem>
        );
      })}
      {!user && (
        <MenuItem component={Link} to="/signin">
          Sign In
        </MenuItem>
      )}
      {!user && (
        <MenuItem component={Link} to="/signup">
          Sign Up
        </MenuItem>
      )}
      {user && (
        <Link
          className={`nav-link`}
          variant="contained"
          onClick={() => {
            signout(() => {
              history.push("/");
            });
          }}
        >
          Signout
        </Link>
      )}
    </Menu>
  );

  return (
    <div id="navbar" className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar
          style={{
            boxShadow: "0 2px 2px 0px #fff",
            zIndex: 9,
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: "17rem" }} />
          </Link>
          <Container className={classes.sectionDesktop}>
            <Typography variant="h6" className={classes.title}>
              {/* House of Passports */}
            </Typography>
            {user && (
              <Link
                className={`nav-link ${currentTab(
                  history,
                  `${user.userRole === "applicant" ? "/applicant" : "/admin"}`
                )}`}
                to={`${
                  user.userRole === "applicant" ? "/applicant" : "/admin"
                }`}
              >
                Dashboard
              </Link>
            )}
            {navList.map((navItem, index) => {
              return (
                <Link
                  className={`nav-link ${currentTab(history, navItem.path)}`}
                  to={navItem.path}
                  key={index}
                >
                  {navItem.name}
                </Link>
              );
            })}
            {!user && (
              <>
                <Link
                  className={`nav-link ${currentTab(history, "/signin")}`}
                  to="/signin"
                >
                  Sign In
                </Link>
                <Link
                  className={`nav-link ${currentTab(history, "/signup")}`}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </>
            )}
            {user && (
              <Link
                className="nav-link"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </Link>
            )}
          </Container>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default withRouter(Navbar);
