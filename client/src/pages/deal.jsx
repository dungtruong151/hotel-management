import React, { useState } from "react";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import DataTableDeal from "../components/DataTableDeal.jsx";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import axios from "axios";

export default function Deal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddDeal = async () => {
    handleClose();

    const dealData = {
      reference_number: document.getElementById("reference_number").value,
      deal_name: document.getElementById("deal_name").value,
      reservations_left: document.getElementById("reservations_left").value,
      end_date: document.getElementById("end_date").value,
      room_type: document.getElementById("room_type").value,
      status: document.getElementById("status").value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/deals/create",
        dealData
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error adding deal", error);
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
      <p style={{ color: grey[400] }}>Deal</p>
      <div style={{ margin: "30px 0 20px 0" }}>
        <div style={{ float: "right" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "7px" }}
            onClick={handleClickOpen}
          >
            Add deal
          </Button>
          <Button
            variant="outlined"
            startIcon={<FilterAltOutlinedIcon />}
            sx={{
              margin: "0 10px",
              borderRadius: "7px",
              color: grey[700],
              borderColor: grey[700],
            }}
          >
            Filter
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
          Ongoing
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
          Finished
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Deal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="reference_number"
            label="Reference Number"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="deal_name"
            label="Deal Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="reservations_left"
            label="Reservations Left"
            type="number"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="end_date"
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="room_type"
            label="Room Type"
            select
            fullWidth
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
            <option value="VIP">VIP</option>
          </TextField>

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
            <option value="New">New</option>
            <option value="Inactive">Inactive</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Full">Full</option>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddDeal}>Add</Button>
        </DialogActions>
      </Dialog>

      <DataTableDeal />
    </Container>
  );
}
