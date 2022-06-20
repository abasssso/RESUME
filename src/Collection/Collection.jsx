import { Button, Rating } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import "./Collection.css";

const Collection = ({ apes }) => {
  // console.log(apes);

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "5px 0px" }}>
        MY collection of APES
      </h2>
      <div className="list">
        {apes.map(item => (
          <div className="card" key={item.id}>
            <img
              style={{
                width: "100px",
                borderRadius: "20px",
              }}
              src={item.image}
              alt=""
            />
            <h2>#{item.name}</h2>
            <h4>Price: {item.price}</h4>
            <Rating name="simple-controlled" defaultValue={5} />
            <Button style={{ borderRadius: "20px" }} variant="contained">
              Buy
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
