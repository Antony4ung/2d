import React from "react";
import { Box, Typography, Container, useTheme, Tooltip } from "@mui/material";
import Image from "next/image";

const Information = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ mt: 5, pt: { xs: 0, md: 5 } }}>
      <Typography variant="h6" sx={{ color: theme.palette.warning.dark }}>
        Information about this website
      </Typography>

      <Typography variant="body1" sx={{ mt: 5, mb: 2 }}>
        This is a Live App for checking 2D result ,its all set(index) data are
        from official Thai stock Exchange{" "}
        <a
          style={{ color: theme.palette.info.dark }}
          href="https://www.set.or.th/"
        >
          {" "}
          https://www.set.or.th/.{" "}
        </a>
      </Typography>

      <Typography variant="caption" sx={{ mb: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>

      <Typography variant="body1" sx={{ my: 2 }}>
        It updates (4) sections 2D result <Typography variant="body1" sx={{color:'red'}}>( Myanmar Time UTC +6:30 : 11:00 AM ,
        12:00 PM , 3:00 PM and 4:30PM) ,</Typography>  can also check detail for each section
        result data.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2, mt: 5 }}>
        Contact developer
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Aung Thu">
          <Box sx={{ mr: 3 }}>
            <a href="https://www.facebook.com/offaung.offaung/">
              <Image
                width={40} height={40}
                src={"/images/facebook.png"}
                alt="facebook"
              />
            </a>
          </Box>
        </Tooltip>

        <Tooltip title="thua0524@gmail.com">
          <Box sx={{ mr: 3 }}>
            <a href="mailto:thua0524@gmail.com">
              <Image
                width={40} height={40}
                src={"/images/gmail.png"}
                alt="gmailImg"
              />
            </a>
          </Box>
        </Tooltip>
      </Box>
    </Container>
  );
};

export default Information;
