import React from "react";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import Searchbar from "./dashboardItem/Searchbar";
import AccountPopover from "./dashboardItem/AccountPopover";
import Iconify from "./Iconify";
const DashboardNavbar = ({ onOpenSidebar }) => {
  return (
    <>
      <IconButton
        onClick={onOpenSidebar}
        sx={{ mr: 1, color: "text.primary", display: { lg: "none" } }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </IconButton>

      <Searchbar />
      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        {/* <LanguagePopover /> */}
        {/* <NotificationsPopover /> */}
        <AccountPopover />
      </Stack>
    </>
  );
};

export default DashboardNavbar;
