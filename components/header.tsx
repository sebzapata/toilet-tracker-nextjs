import { Typography } from "@mui/material";
import React from "react";

const Header: React.FunctionComponent = () => (
  <Typography
    sx={{
      fontFamily: "PaperForYourAss",
      fontSize: {
        xxs: "1em",
        xs: "1.3em",
        sm: "1.7em",
        md: "2em",
        lg: "2.2em",
        xl: "2.4em",
      },
    }}
  >
    &lt;MY POO DATA FOR YOU&gt;
  </Typography>
);

export default Header;
