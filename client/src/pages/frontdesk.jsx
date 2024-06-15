import React, { useState } from "react";
import { Container } from "@mui/material";
import { grey, blue } from "@mui/material/colors";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TableFrontDesk from "../components/TableFrontDesk";

export default function Frontdesk() {
  const [roomType, setRoomType] = React.useState("all");

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <Container
      sx={{
        width: "100%",
        height: "85vh",
        backgroundColor: "primary",
        position: "relative",
      }}
    >
      <p style={{ color: grey[400] }}>Front desk</p>
      <Container
        sx={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#f7f9fc",
          position: "relative",
          borderRadius: "10px",
          boxShadow: 3,
          marginBottom: "30px",
        }}
      >
        <div style={{ float: "right" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "7px", margin: "90px 0" }}
          >
            Check availability
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "45%",
            paddingTop: "20px",
          }}
        >
          <Button
            variant="outlined"
            href=""
            sx={
              roomType === "all"
                ? {
                    borderRadius: "100px",
                    backgroundColor: blue[50],
                    color: blue[700],
                    borderColor: blue[700],
                  }
                : {
                    borderRadius: "100px",
                    color: grey[700],
                    borderColor: grey[700],
                  }
            }
            onClick={() => setRoomType("all")}
          >
            All room
          </Button>
          <Button
            variant="outlined"
            href=""
            sx={
              roomType === "single"
                ? {
                    borderRadius: "100px",
                    backgroundColor: blue[50],
                    color: blue[700],
                    borderColor: blue[700],
                  }
                : {
                    borderRadius: "100px",
                    color: grey[700],
                    borderColor: grey[700],
                  }
            }
            onClick={() => setRoomType("single")}
          >
            Single
          </Button>
          <Button
            variant="outlined"
            href=""
            sx={
              roomType === "double"
                ? {
                    borderRadius: "100px",
                    backgroundColor: blue[50],
                    color: blue[700],
                    borderColor: blue[700],
                  }
                : {
                    borderRadius: "100px",
                    color: grey[700],
                    borderColor: grey[700],
                  }
            }
            onClick={() => setRoomType("double")}
          >
            Double
          </Button>
          <Button
            variant="outlined"
            href=""
            sx={
              roomType === "triple"
                ? {
                    borderRadius: "100px",
                    backgroundColor: blue[50],
                    color: blue[700],
                    borderColor: blue[700],
                  }
                : {
                    borderRadius: "100px",
                    color: grey[700],
                    borderColor: grey[700],
                  }
            }
            onClick={() => setRoomType("triple")}
          >
            Triple
          </Button>
          <Button
            variant="outlined"
            href=""
            sx={
              roomType === "vip"
                ? {
                    borderRadius: "100px",
                    backgroundColor: blue[50],
                    color: blue[700],
                    borderColor: blue[700],
                  }
                : {
                    borderRadius: "100px",
                    color: grey[700],
                    borderColor: grey[700],
                  }
            }
            onClick={() => setRoomType("vip")}
          >
            VIP
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "35%",
            paddingTop: "20px",
          }}
        >
          <div>
            <p style={{ color: grey[800], margin: 0, fontWeight: 600 }}>
              Check in
            </p>
            <TextField margin="dense" id="check_in" type="date" size="small" />
          </div>
          <div>
            <p style={{ color: grey[800], margin: 0, fontWeight: 600 }}>
              Check out
            </p>
            <TextField margin="dense" id="check_out" type="date" size="small" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            paddingTop: "20px",
          }}
        >
          <div>
            <p style={{ color: grey[800], margin: 0, fontWeight: 600 }}>
              Adult
            </p>
            <p style={{ color: grey[800], margin: "5px 0" }}>
              Older than 12 years
            </p>
          </div>
          <div>
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <IconButton>
              <span>{count}</span>
            </IconButton>
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </div>
          <div>
            <p style={{ color: grey[800], margin: 0, fontWeight: 600 }}>
              Children
            </p>
            <p style={{ color: grey[800], margin: "5px 0" }}>0 - 12 years</p>
          </div>
          <div>
            <IconButton onClick={handleDecrement}>
              <RemoveIcon />
            </IconButton>
            <IconButton>
              <span>{count}</span>
            </IconButton>
            <IconButton onClick={handleIncrement}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
      </Container>

      <TableFrontDesk />
    </Container>
  );
}
