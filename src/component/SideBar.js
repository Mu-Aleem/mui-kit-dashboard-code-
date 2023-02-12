import React from "react";
import SimpleBarReact from "simplebar-react";
import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Collapse,
} from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import LogoSvg from "./shared/LogoSvg";
import SideUserInfo from "./SideUserInfo";
import PersonIcon from "@mui/icons-material/Person";
import StarBorder from "@mui/icons-material/StarBorder";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const useStyles = makeStyles((theme) => ({
  SideBarMain: {
    padding: "24px 20px 16px",
  },
  SideBarMenu: {
    marginTop: "20px",
    "& .css-13r7g14-MuiButtonBase-root-MuiListItemButton-root": {
      padding: "8px 12px 8px 16px",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      textTransform: "capitalize",
      color: "rgb(145, 158, 171)",
      borderRadius: "8px",
      "& svg": { color: "rgb(145, 158, 171)" },
    },
    "& .css-13r7g14-MuiButtonBase-root-MuiListItemButton-root:hover": {
      textDecoration: "none",
      backgroundColor: "rgba(145, 158, 171, 0.08)",
    },
    "& .css-wqlo6h-MuiButtonBase-root-MuiListItemButton-root": {
      padding: "8px 12px 8px 16px",
      transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      textTransform: "capitalize",
      color: "rgb(145, 158, 171)",
      borderRadius: "8px",
      "& svg": { color: "rgb(145, 158, 171)", width: "10px", height: "10px" },
    },
    "& .css-wqlo6h-MuiButtonBase-root-MuiListItemButton-root:hover": {
      textDecoration: "none",
      backgroundColor: "rgba(145, 158, 171, 0.08)",
    },
  },
}));

// active color
// color: "rgb(91, 229, 132)",
// backgroundColor: "rgba(0, 171, 85, 0.16)"

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: "100%",
  "& .simplebar-scrollbar": {
    "&:before": {
      backgroundColor: "gray",
    },
    "&.simplebar-visible:before": {
      opacity: 1,
    },
  },
  "& .simplebar-track.simplebar-vertical": {
    width: 10,
  },
  "& .simplebar-track.simplebar-horizontal .simplebar-scrollbar": {
    height: 6,
  },
  "& .simplebar-mask": {
    zIndex: "inherit",
  },
}));

const SideBar = ({
  Propclasses,
  mobileOpen,
  handleDrawerToggle,
  drawerWidth,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const classes = useStyles();
  return (
    <div className="my-scrollable-container">
      {/* This is for the mobile */}
      <Drawer
        className={Propclasses.drawer}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
          paper: Propclasses.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <SimpleBarStyle>
          <div className={classes.SideBarMain}>
            <LogoSvg />
            <SideUserInfo />

            <div className={classes.SideBarMenu}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="User" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                  {open ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText primary="Shop" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </div>
        </SimpleBarStyle>
      </Drawer>
      {/* This is for the desktop */}
      <Drawer
        className={Propclasses.drawer}
        variant="permanent"
        classes={{
          paper: Propclasses.drawerPaper,
        }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <SimpleBarStyle>
          <div className={classes.SideBarMain}>
            <LogoSvg />
            <SideUserInfo />

            <div className={classes.SideBarMenu}>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="User" />
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText primary="Product" />
                  {open ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText primary="Shop" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </div>
          </div>
        </SimpleBarStyle>
      </Drawer>
    </div>
  );
};

export default SideBar;
