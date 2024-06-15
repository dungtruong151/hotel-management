import React from "react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { BarChart } from "@mui/x-charts/BarChart";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import { grey } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  flexGrow: 1,
  boxShadow: "none",
  borderRadius: "10px",
}));

const BoxStyle = styled("div")(() => ({
  backgroundColor: "#B6E9D1",
  color: "#0D824B",
  width: "60px",
  padding: "5px",
  textAlign: "center",
  borderRadius: "5px",
  margin: "5px 0",
}));

const dataset = [
  {
    percent: 85,
    month: "Aug",
  },
  {
    percent: 62,
    month: "Sep",
  },
  {
    percent: 80,
    month: "Oct",
  },
  {
    percent: 46,
    month: "Nov",
  },
  {
    percent: 95,
    month: "Dec",
  },
  {
    percent: 98,
    month: "Jan",
  },
  {
    percent: 80,
    month: "Fev",
  },
  {
    percent: 78,
    month: "Mar",
  },
  {
    percent: 88,
    month: "Apr",
  },
  {
    percent: 90,
    month: "May",
  },
];

const chartSetting = {
  series: [{ dataKey: "percent", dataset }],
  height: 300,
  width: 700,
};

export default function Dashboard() {
  return (
    <Container
      sx={{
        width: "100%",
        backgroundColor: "primary",
        position: "relative",
        marginTop: "20px",
      }}
    >
      <Stack spacing={2}>
        <Item>
          <Button
            variant="contained"
            sx={{ float: "right", zIndex: 1, borderRadius: "7px" }}
          >
            Create booking
          </Button>
          <p
            style={{
              textAlign: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </Item>
        <Item sx={{ border: "2px solid #d5d8dd" }}>
          <h2 style={{ margin: "5px 0 15px 5px" }}>Overview</h2>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between" }}
          >
            <div>
              <p style={{ margin: 0 }}>Today's</p>
              <p style={{ margin: 0 }}>
                <strong>Check-in </strong>
                <span style={{ fontSize: 25, color: "#1366D9", margin: "5px" }}>
                  23
                </span>
              </p>
            </div>
            <div>
              <p style={{ margin: 0 }}>Today's</p>
              <p style={{ margin: 0 }}>
                <strong>Check-out </strong>
                <span style={{ fontSize: 25, color: "#1366D9", margin: "5px" }}>
                  13
                </span>
              </p>
            </div>
            <div>
              <p style={{ margin: 0 }}>Today's</p>
              <p style={{ margin: 0 }}>
                <strong>In hotel </strong>
                <span style={{ fontSize: 25, color: "#1366D9", margin: "5px" }}>
                  60
                </span>
              </p>
            </div>
            <div>
              <p style={{ margin: 0 }}>Today's</p>
              <p style={{ margin: 0 }}>
                <strong>Available room </strong>
                <span style={{ fontSize: 25, color: "#1366D9", margin: "5px" }}>
                  10
                </span>
              </p>
            </div>
            <div>
              <p style={{ margin: 0 }}>Today's</p>
              <p style={{ margin: 0 }}>
                <strong>Occupied room </strong>
                <span style={{ fontSize: 25, color: "#1366D9", margin: "5px" }}>
                  90
                </span>
              </p>
            </div>
          </Stack>
        </Item>
        <Item sx={{ border: "2px solid #d5d8dd" }}>
          <h2 style={{ margin: "5px 0 15px 5px" }}>Rooms</h2>
          <Stack direction="row" spacing={2}>
            <Item sx={{ border: "2px solid #d5d8dd" }}>
              <IconButton aria-label="delete" sx={{ float: "right" }}>
                <MoreVertIcon />
              </IconButton>
              <BoxStyle>2 Deals</BoxStyle>
              <p style={{ margin: "10px 0" }}>Single sharing</p>
              <h2 style={{ margin: 0 }}>
                2<span style={{ fontSize: 17, color: grey[500] }}>/30</span>
              </h2>
              <h1 style={{ margin: "5px 0", color: "#137ae4" }}>
                $ 568
                <span style={{ fontSize: 17, color: "#858D9D" }}> /day</span>
              </h1>
            </Item>
            <Item sx={{ border: "2px solid #d5d8dd" }}>
              <IconButton aria-label="delete" sx={{ float: "right" }}>
                <MoreVertIcon />
              </IconButton>
              <BoxStyle>2 Deals</BoxStyle>
              <p style={{ margin: "10px 0" }}>Double sharing</p>
              <h2 style={{ margin: 0 }}>
                2<span style={{ fontSize: 17, color: grey[500] }}>/35</span>
              </h2>
              <h1 style={{ margin: "5px 0", color: "#137ae4" }}>
                $ 1,068
                <span style={{ fontSize: 17, color: "#858D9D" }}> /day</span>
              </h1>
            </Item>
            <Item sx={{ border: "2px solid #d5d8dd" }}>
              <IconButton aria-label="delete" sx={{ float: "right" }}>
                <MoreVertIcon />
              </IconButton>
              <BoxStyle sx={{ visibility: "hidden" }}>2 Deals</BoxStyle>
              <p style={{ margin: "10px 0" }}>Triple sharing</p>
              <h2 style={{ margin: 0 }}>
                2<span style={{ fontSize: 17, color: grey[500] }}>/25</span>
              </h2>
              <h1 style={{ margin: "5px 0", color: "#137ae4" }}>
                $ 1,568
                <span style={{ fontSize: 17, color: "#858D9D" }}> /day</span>
              </h1>
            </Item>
            <Item sx={{ border: "2px solid #d5d8dd" }}>
              <IconButton aria-label="delete" sx={{ float: "right" }}>
                <MoreVertIcon />
              </IconButton>
              <BoxStyle sx={{ visibility: "hidden" }}>2 Deals</BoxStyle>
              <p style={{ margin: "10px 0" }}>VIP Suit</p>
              <h2 style={{ margin: 0 }}>
                4<span style={{ fontSize: 17, color: grey[500] }}>/10</span>
              </h2>
              <h1 style={{ margin: "5px 0", color: "#137ae4" }}>
                $ 2,568
                <span style={{ fontSize: 17, color: "#858D9D" }}> /day</span>
              </h1>
            </Item>
          </Stack>
        </Item>
        <Stack direction="row" spacing={2}>
          <Item sx={{ border: "2px solid #d5d8dd" }}>
            <h2 style={{ margin: "5px 0 10px 5px" }}>Room status</h2>
            <Stack direction="row" spacing={15}>
              <Item>
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>
                      <strong>Occupied rooms</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <strong>104</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Clean</td>
                    <td style={{ textAlign: "right" }}>90</td>
                  </tr>
                  <tr>
                    <td>Dirty</td>
                    <td style={{ textAlign: "right" }}>4</td>
                  </tr>
                  <tr>
                    <td>Inspected</td>
                    <td style={{ textAlign: "right" }}>60</td>
                  </tr>
                </table>
              </Item>
              <Item>
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>
                      <strong>Available rooms</strong>
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <strong>20</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Clean</td>
                    <td style={{ textAlign: "right" }}>30</td>
                  </tr>
                  <tr>
                    <td>Dirty</td>
                    <td style={{ textAlign: "right" }}>19</td>
                  </tr>
                  <tr>
                    <td>Inspected</td>
                    <td style={{ textAlign: "right" }}>30</td>
                  </tr>
                </table>
              </Item>
            </Stack>
          </Item>
          <Item sx={{ border: "2px solid #d5d8dd" }}>
            <h2 style={{ margin: "5px 0 10px 5px" }}>Floor status</h2>
            <Stack direction="row">
              <Item>
                <Gauge
                  width={200}
                  height={100}
                  value={80}
                  startAngle={-90}
                  endAngle={90}
                  cornerRadius="50%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 20,
                      fontWeight: 500,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: "#448df2",
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: "#eef0f2",
                    },
                  })}
                  text={({ value }) => `${value}%`}
                />
              </Item>
              <Item>
                <Stack>
                  <Item>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4" r="4" fill="#448DF2" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>Competed</span>
                  </Item>
                  <Item>
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4" r="4" fill="#EEF0F2" />
                    </svg>
                    <span style={{ marginLeft: "10px" }}>Yet to Complete</span>
                  </Item>
                </Stack>
              </Item>
            </Stack>
          </Item>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Item sx={{ border: "2px solid #d5d8dd" }}>
            <Button
              variant="outlined"
              href=""
              startIcon={<CalendarMonthOutlinedIcon />}
              sx={{ float: "right", margin: "5px" }}
            >
              Monthly
            </Button>
            <h2 style={{ margin: "5px 0 10px 5px" }}>Occupancy Statistics</h2>
            <div style={{ width: "100%" }}>
              <BarChart
                dataset={dataset}
                xAxis={[
                  {
                    scaleType: "band",
                    dataKey: "month",
                    tickPlacement: "extremities",
                    tickLabelPlacement: "middle",
                    categoryGapRatio: 0.5,
                    colorMap: {
                      type: "ordinal",
                      colors: ["#5395f0"],
                    },
                  },
                ]}
                grid={{ horizontal: true }}
                {...chartSetting}
              />
            </div>
          </Item>
          <Item sx={{ border: "2px solid #d5d8dd" }}>
            <IconButton aria-label="delete" sx={{ float: "right" }}>
              <MoreVertIcon />
            </IconButton>
            <h2 style={{ margin: "5px 0 10px 5px" }}>Customers feedback</h2>
            <div style={{ margin: "0 0 0 5px" }}>
              <h3 style={{ float: "right" }}>A201</h3>
              <div>
                <p>
                  <strong>Mark</strong>
                </p>
                <p style={{ margin: 0 }}>Food could be better.</p>
              </div>
            </div>
            <Divider />
            <div style={{ margin: "0 0 0 5px" }}>
              <h3 style={{ float: "right" }}>A101</h3>
              <div>
                <p>
                  <strong>Christian</strong>
                </p>
                <p style={{ margin: 0 }}>
                  Facilities are not enough for amount paid.
                </p>
              </div>
            </div>
            <Divider />
            <div style={{ margin: "0 0 0 5px" }}>
              <h3 style={{ float: "right" }}>A301</h3>
              <div>
                <p>
                  <strong>Alexander</strong>
                </p>
                <p style={{ margin: 0 }}>Room cleaning could be better.</p>
              </div>
            </div>
            <Divider />
          </Item>
        </Stack>
      </Stack>
    </Container>
  );
}
