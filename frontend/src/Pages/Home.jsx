import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    // position: "relative",
    width: "100%",
    height: "680px",
    background: `url('img/2.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  },

  heading: {
    color: "#000000",
    textShadow: "5px 0 3px #FF0000",
  },
  paragraph: {
    fontSize: "2em",
    color: "rgb(102,0,0)",
    textAlign: "center", /* Center the text horizontally */
    margin: "0 auto",
    
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.container}>
        <div>
          <Typography
            className={classes.heading}
            style={{ fontSize: isSmallScreen ? "2em" : "4em" }}
          >
            Sugarcane Disease Detection
          </Typography>
          <p
            className={classes.paragraph}
            style={{ fontSize: isSmallScreen ? "1.5em" : "2em" }}
          >
            Early detection of sugarcane diseases is crucial for implementing
            preventive measures, optimizing crop management, and ultimately
            ensuring a sustainable sugarcane industry. This project contributes
            to precision agriculture by empowering farmers with a tool to
            monitor and address potential threats to sugarcane health, leading
            to improved crop yield and quality.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
