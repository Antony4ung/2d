import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Tooltip,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { GlobalContext } from "../context/GlobalProvider";
import { useRouter } from "next/router";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const theme = useTheme();
  const router = useRouter();

  const { toggleColorMode } = React.useContext(GlobalContext);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              px: { xs: "20px", md: "40px" },
              py: 2,
            }}
            variant="dense"
          >
            <Tooltip title="home">
              <Box
                onClick={() => router.push("/")}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  style={{ marginRight: "10px" }}
                  width={20}
                  height={20}
                  alt="logo"
                  src={"/images/logo.png"}
                />
                <Typography
                  sx={{ fontWeight: "bold" }}
                  variant="h6"
                  color={"white"}
                >
                  2D live
                </Typography>

                <IconButton color="primary" sx={{ mr: { md: 2 } }}>
                  <Image
                    style={{}}
                    width={20}
                    height={20}
                    alt="logo"
                    src={"/images/home.png"}
                  />
                </IconButton>
              </Box>
            </Tooltip>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Tooltip
                onClick={() => router.push("/results")}
                title="2D ရလဒ်များ"
              >
                <IconButton color="primary" sx={{ mr: { md: 2 } }}>
                  <Image
                    style={{}}
                    width={20}
                    height={20}
                    alt="logo"
                    src={"/images/calendar.png"}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                onClick={() => router.push("/history")}
                title="ထွက်ခဲ့သောဂဏန်းများ "
              >
                <IconButton color="primary" sx={{ mr: { md: 2 } }}>
                  <Image
                    style={{}}
                    width={20}
                    height={20}
                    alt="logo"
                    src={"/images/history.png"}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                onClick={() => router.push("/information")}
                title="အကြောင်းအရာ"
              >
                <IconButton color="primary" sx={{ mr: { md: 2 } }}>
                  <Image
                    style={{}}
                    width={20}
                    height={20}
                    alt="logo"
                    src={"/images/information.png"}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title={`${theme.palette.mode} mode`}>
                <IconButton onClick={toggleColorMode} color="warning" sx={{}}>
                  {theme.palette.mode === "dark" ? (
                    <Brightness4Icon fontSize="medium" />
                  ) : (
                    <Brightness7Icon fontSize="medium" />
                  )}
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
