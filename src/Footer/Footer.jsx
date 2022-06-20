import { Box, Button, Input, TextField } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#52A3B7",
        // bottom: "0",
        height: "250px",
        position: "fixed",
        width: "100%",
      }}>
      <div className="footer-contact">
        <div className="footer-text">YOU CAN FIND US ON </div>
        <div id="footer-logos">
          <img
            src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1216/1216915.png"
            alt=""
          />
          <img
            src="https://uploads-ssl.webflow.com/61f43e56998ca70d656033bc/61f4437b6b76fc6e3c34c835_Opensea_Ship.png"
            alt=""
          />
          <img src="https://svgsilh.com/svg/1873373.svg" alt="" />
        </div>
      </div>
      <div className="footer-text">OR WE CAN CONTACT YOU</div>
      <Box
        // class="footer-contact"
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
            display: "flex",
            justifyContent: "space-between",
          },
        }}
        noValidate
        autoComplete="off">
        <TextField
          label="Name"
          variant="filled"
          color="success"
          focused
          style={{ marginRight: "10px" }}
        />
        <TextField label="Surname" variant="filled" color="success" focused />
        <Button color="success">Submit</Button>
      </Box>
    </div>
  );
};

export default Footer;
