import { useState } from "react";
import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Grid, useTheme, TextField } from "@mui/material";

const useStyles = makeStyles(() => ({
  image_container: {
    width: "100%",
    height: "auto", // Set height to auto for responsiveness
    backgroundImage: `url("img/8.jpg")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    padding: useTheme().spacing(2), // Add padding for better spacing
  },
  heading: {
    color: "#990000",
    textShadow: "4px 0 5px #401641",
    textAlign: "center",
  },
  selected_image_preview: {
    paddingTop: "15px",
    fontSize:"1.5em",
    textAlign: "center",
    color: "#66090c",
    textShadow: "3px 0 3px #5b3ab0",
  },
  box: {
    width: "100%", // Adjust width to 100% for responsiveness
    maxWidth: "600px", // Set max-width for larger screens
    border: "4px dashed rgb(83, 29, 29)",
    borderRadius: "10px",
  
    padding: useTheme().spacing(2),
  },
  result_section: {
    backgroundColor: "azure",
    textAlign: "center",
    borderRadius: "5px",
    paddingTop:"15px",
    marginTop: useTheme().spacing(2),
 
   
    // padding: useTheme().spacing(2),
  },
  span: {
    paddingTop: "1em",
    borderBottom: "2px solid #000000",
  },
}));

const Predict_Disease = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`http://localhost:8000/predict`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setPredictionResult(data);
        console.log("Prediction:", data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.image_container}
    >
      <Grid item className={classes.box}>
        <Typography variant="h4" className={classes.heading}>
          Sugarcane Leaf Disease Detection
        </Typography>
        <TextField
          style={{
            color: "rgb(51,0,25)",
            textAlign: "center",
            margin: "0 auto",
            display: "block",
            padding: "0",
          
          }}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Grid>
      {selectedImage && (
        <Grid item>
          <div>
            <h3 className={classes.selected_image_preview}>
              Selected Image Preview:
            </h3>
          </div>

          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Selected"
            style={{
              width: "100%", // Set width to 100% for responsiveness
              maxWidth: "100%", // Ensure maximum width is 100%
              maxHeight: "300px",
              borderRadius: useTheme().spacing(1), // Use theme spacing for consistency
              border: "4px solid #FF5733",
              marginTop:"10px",
            }}
          />

          {predictionResult && (
            <div className={classes.result_section}>
              <h3 style={{ color: "#8b1b13", fontSize: "1.5em" }}>
                Prediction:
              </h3>
              <span style={{ color: "red", fontSize: "1.5em" }}>
                <p>Label: {predictionResult.class}</p>
              </span>
              <span style={{ color: "rgb(153,0,76)", fontSize: "1.5em" }}>
                <p>Confidence: {predictionResult.confidence.toFixed(2)}</p>
              </span>
            </div>
          )}
        </Grid>
      )}
    </Grid>
  );
};

export default Predict_Disease;
