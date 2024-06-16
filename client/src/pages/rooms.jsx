import React from "react";
import DataTableRoom from "../components/DataTableRoom";
import { blue, grey } from "@mui/material/colors";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

export default function Rooms() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRoom = async () => {
    handleClose();
    // Collect room data from input fields
    const roomData = {
      room_number: document.getElementById("room_number").value,
      bed_type: document.getElementById("bed_type").value,
      room_floor: document.getElementById("room_floor").value,
      room_facility: document.getElementById("room_facility").value,
      status: document.getElementById("status").value,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/rooms/create",
        roomData
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error adding room", error);
    }
  };

  return (
    <Container
      sx={{
        width: "100%",
        height: "83vh",
        backgroundColor: "primary",
        position: "relative",
      }}
    >
      <p style={{ color: grey[400] }}>Room</p>
      <div style={{ margin: "30px 0 20px 0" }}>
        <div style={{ float: "right" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "7px" }}
            onClick={handleClickOpen}
          >
            Add room
          </Button>
        </div>
        <Button
          variant="outlined"
          href=""
          sx={{
            borderRadius: "100px",
            backgroundColor: blue[50],
            color: blue[700],
            borderColor: blue[700],
          }}
        >
          All room(100)
        </Button>
        <Button
          variant="outlined"
          href=""
          sx={{
            borderRadius: "100px",
            margin: "0 10px",
            color: grey[700],
            borderColor: grey[700],
          }}
        >
          Available room(20)
        </Button>
        <Button
          variant="outlined"
          href=""
          sx={{
            borderRadius: "100px",
            margin: "0 10px",
            color: grey[700],
            borderColor: grey[700],
          }}
        >
          Booked(80)
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Room</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="room_number"
            label="Room Number"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="bed_type"
            label="Bed Type"
            select
            fullWidth
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="Single bed">Single bed</option>
            <option value="Double bed">Double bed</option>
            <option value="Suite">Suite</option>
            <option value="VIP">VIP</option>
          </TextField>

          <TextField
            margin="dense"
            id="room_floor"
            label="Room Floor"
            select
            fullWidth
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="Floor -1">Floor -1</option>
            <option value="Floor -2">Floor -2</option>
            <option value="Floor -3">Floor -3</option>
            <option value="Floor -4">Floor -4</option>
            <option value="Floor -5">Floor -5</option>
          </TextField>

          <TextField
            margin="dense"
            id="room_facility"
            label="Room Facility"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue="AC, shower, Double bed, towel, bathtub, TV"
          />

          <TextField
            margin="dense"
            id="status"
            label="Status"
            select
            fullWidth
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="Waitlist">Waitlist</option>
            <option value="Booked">Booked</option>
            <option value="Available">Available</option>
            <option value="Reserved">Reserved</option>
            <option value="Blocked">Blocked</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddRoom}>Add</Button>
        </DialogActions>
      </Dialog>

      <DataTableRoom />
    </Container>
  );
}
