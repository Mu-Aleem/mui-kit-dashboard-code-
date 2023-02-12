import { useState } from "react";
// material
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import {
  Input,
  Slide,
  Button,
  IconButton,
  InputAdornment,
  ClickAwayListener,
} from "@mui/material";
// component
import Iconify from "../Iconify";

const useStyles = makeStyles((theme) => ({
  ButtomMain: {
    "& .css-1pizp5u-MuiButtonBase-root-MuiButton-root": {
      background: "rgb(91, 229, 132)",
      color: "rgb(22, 28, 36)",
    },
    "& .css-1pizp5u-MuiButtonBase-root-MuiButton-root:hover": {
      background: "rgb(91, 229, 132)",
    },
  },
}));

// ----------------------------------------------------------------------

const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const SearchbarStyle = styled("div")(({ theme }) => ({
  top: 0,
  left: 0,
  zIndex: 99,
  width: "100%",
  display: "flex",
  position: "absolute",
  alignItems: "center",
  height: APPBAR_MOBILE,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  padding: theme.spacing(0, 3),
  // boxShadow: theme.customShadows.z8,
  backgroundColor: "rgba(0, 171, 85, 0.16)",
  [theme.breakpoints.up("md")]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

export default function Searchbar() {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButton onClick={handleOpen}>
            <Iconify icon="eva:search-fill" width={20} height={20} />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <Iconify
                    icon="eva:search-fill"
                    sx={{ color: "text.disabled", width: 20, height: 20 }}
                  />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: "fontWeightBold" }}
            />
            <div className={classes.ButtomMain}>
              <Button variant="contained" onClick={handleClose}>
                Search
              </Button>
            </div>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
