import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Crypto Insurance
          
        </Typography>
      
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Onboarding
            </Link>
            <Link to="/payment" className={classes.link}>
              Payments
            </Link>
            <Link to="/claim-request" className={classes.link}>
              Claims
            </Link>
            <Link to="/admin" className={classes.link}>
              Admin
            </Link>

          </div>
        
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
