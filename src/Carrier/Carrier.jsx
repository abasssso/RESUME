import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "0px 50px",
      }}>
      <Typography style={{ fontSize: "50px" }}>MY JOURNEY</Typography>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary">
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            {/* <TimelineDot> */}
            <img
              src="https://www.facebook.com/images/fb_icon_325x325.png"
              alt=""
            />
            {/* </TimelineDot> */}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Facebook
            </Typography>
            <Typography>Middle Frontend Developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            {/* <TimelineDot color="primary"> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
              alt=""
            />
            {/* </TimelineDot> */}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "43px", px: 2 }}>
            <Typography variant="h6" component="span">
              Google
            </Typography>
            <Typography>Senior Frontend Developer</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary">
            2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            {/* <TimelineDot color="primary" variant="outlined"> */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
              alt=""
            />
            {/* </TimelineDot> */}
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "40px", px: 2 }}>
            <Typography variant="h6" component="span">
              Apple Inc.
            </Typography>
            <Typography>Frontend Team Lead</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary">
            2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <img
                src="https://bootcamp.makers.kg/assets/img/makers_logo.svg"
                alt=""
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Makers Boothcamp
            </Typography>
            <Typography>Student of the JS21 group</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div>
        <img
          style={{ borderRadius: "300px", width: "400px" }}
          src="https://i.pinimg.com/1200x/24/c0/f5/24c0f52390e03e5e7db4cc07167cceb3.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
