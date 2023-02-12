import React from "react";
import avatar_default from "../assets/images/avatar_default.jpg";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  InfoMain: {
    display: "flex",
    alignItems: "center",
    padding: "16px 20px",
    borderRadius: "12px",
    backgroundColor: "rgba(145, 158, 171, 0.12)",
  },
  InfoImage: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "40px",
    height: "40px",
    fontFamily: '"Public Sans", sans-serif',
    fontSize: "1.25rem",
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none",
    "& img": {
      width: "100%",
      height: "100%",
      textAlign: "center",
      objectFit: "cover",
      color: "transparent",
      textIndent: "10000px",
    },
  },
  InfoText: {
    marginLeft: "16px",
    "& h6": {
      fontSize: "13px",
    },
  },
}));
const SideUserInfo = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.InfoMain}>
        <Box className={classes.InfoImage}>
          <img src={avatar_default} alt="avatar" />
        </Box>
        <Box className={classes.InfoText}>
          <h6>User Name</h6>
        </Box>
      </Box>
    </>
  );
};

export default SideUserInfo;
