import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import DesktopPage from "./DesktopVersion/DesktopPage";
import MobilePage from "./MobileVersion/MobilePage";
function App() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return isDesktop ? <DesktopPage /> : <MobilePage />;
}

export default App;
