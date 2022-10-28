import { Box, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import GlobalProvider from "../context/GlobalProvider";
import { Prop } from "../types";
import AppHeader from "../components/AppBar";
import { Provider } from "react-redux";
import store from "../redux/store";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }: Prop) {
  const theme = useTheme();

  return (
    <GlobalProvider>
      <Provider store={store}>
        <AnimatePresence>
          <Box
            sx={{
              maxWidth: "100vw",
              bgcolor: "background.default",
              color: "text.primary",
              minHeight: "100vh",
              pb: { xs: 5, md: 0 },
            }}
          >
            <AppHeader children={<div />} />
            {children}
            {/* <Footer/> */}
          </Box>
        </AnimatePresence>
      </Provider>
    </GlobalProvider>
  );
}
