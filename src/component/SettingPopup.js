import React, { useState, useRef } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, Box, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    "& .MuiButtonBase-root": {
      padding: "4px",
      height: "36px",
      minWidth: "38px",
      right: "24px",
      bottom: "50px",
      zIndex: "999",
      position: "fixed",
      borderRadius: "50%",
      boxShadow: "rgb(99 115 129 / 36%) -12px 12px 32px -4px",
      backdropFilter: "blur(6px)",
      backgroundColor: theme.palette.background.settingbg,
      "& svg": {
        color: theme.palette.color.setting,
      },
    },
  },
}));

const SettingPopup = () => {
  const classes = useStyles();
  const drawerContainer = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Box className={classes.main}>
        <Button onClick={() => setDrawerOpen(true)}>
          <SettingsIcon />
        </Button>
      </Box>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        container={drawerContainer.current}
      >
        <div
          // ref={drawerContainer}
          style={{ width: "300px", height: "100%" }}
        ></div>
      </Drawer>
    </>
  );
};

export default SettingPopup;
