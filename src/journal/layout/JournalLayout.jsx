import { Box, Toolbar } from "@mui/material";

import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar React component */}
      <NavBar drawerWidth={drawerWidth} />

      {/* SideBar */}
      <SideBar drawerWidth={drawerWidth} />

      <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
        {/* Tool Bar */}
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};
