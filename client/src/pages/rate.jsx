import React from "react";
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
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DataTableRate from "../components/DataTableRate.jsx";
import axios from "axios";

export default function Rate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRate = async () => {
    handleClose();

    const rateData = {
      room_type: document.getElementById("room_type").value,
      deals: document.getElementById("deals").value,
      cancellation_policy: document.getElementById("cancellation_policy").value,
      deal_price: document.getElementById("deal_price").value,
      rates: document.getElementById("rates").value,
      availability: document.getElementById("availability").value,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/rates/create",
        rateData
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error adding rate", error);
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
      <p style={{ color: grey[400] }}>Rate</p>
      <div style={{ margin: "30px 0 20px 0" }}>
        <div style={{ float: "right" }}>
          <Button
            variant="contained"
            sx={{ borderRadius: "7px" }}
            onClick={handleClickOpen}
          >
            Add rate
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
            visibility: "hidden",
          }}
        >
          Ongoing
        </Button>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Rate</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="room_type"
            label="Room Type"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="deals"
            label="Deals"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="cancellation_policy"
            label="Cancellation Policy"
            select
            fullWidth
            variant="outlined"
            SelectProps={{
              native: true,
            }}
          >
            <option value="Strict">Strict</option>
            <option value="Flexible">Flexible</option>
            <option value="Non refundable">Non refundable</option>
          </TextField>
          <TextField
            margin="dense"
            id="deal_price"
            label="Deal Price"
            type="number"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="rates"
            label="Rate"
            type="number"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="availability"
            label="Availability"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddRate}>Add</Button>
        </DialogActions>
      </Dialog>

      <DataTableRate />
    </Container>
  );
}
