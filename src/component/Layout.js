import React from "react";
import { SideBar } from "./";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import DashboardNavbar from "./DashboardNavbar";

let DrawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& .css-p25sbl-MuiPaper-root-MuiAppBar-root": {
      // zIndex: "9999 !important",
      backgroundColor: theme.palette.background.default,
      width: `calc(100% - ${DrawerWidth}px)`,
      marginLeft: DrawerWidth,
      backgroundImage: "none",
      boxShadow: "none",
      backdropFilter: "blur(6px)",
      backgroundColor: "rgba(22, 28, 36, 0.8)",
      transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    },
    // [theme.breakpoints.only("sm")]: {
    //   width: `100% !important`,
    //   marginLeft: "0px !important",
    // },
  },

  drawer: {
    width: DrawerWidth,
    flexShrink: 0,
    "& .css-15b8vjn-MuiPaper-root-MuiDrawer-paper": {
      backgroundColor: theme.palette.background.default,
      borderRight: "1px dashed rgba(145, 158, 171, 0.24)",
    },
  },
  drawerPaper: {
    width: DrawerWidth,
  },
  content: {
    // flexGrow: 1,
    padding: "100px 16px",
  },
  "@media only screen and (max-width:600px)": {
    root: {
      "& .css-p25sbl-MuiPaper-root-MuiAppBar-root": {
        width: `100% !important`,
        marginLeft: "0px !important",
      },
    },
    content: {
      // flexGrow: 1,
      overflowX: "hidden",
    },
  },
}));

const Layout = (props) => {
  const { children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <SideBar
          Propclasses={classes}
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          drawerWidth={DrawerWidth}
        />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <DashboardNavbar onOpenSidebar={handleDrawerToggle} />
            </Toolbar>
          </AppBar>

          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
