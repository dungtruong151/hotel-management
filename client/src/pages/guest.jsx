import React from "react";
import { Container } from "@mui/material";
import DataTableGuest from "../components/DataTableGuest";
import Button from "@mui/material/Button";
import { blue, grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Search = styled("div")(() => ({
  position: "relative",
  float: "right",
  borderRadius: "5px",
  color: "#5D6679",
  border: "solid 0.1px #D0D3D9",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function Guest() {
  const [searchValue, setSearchValue] = React.useState();

  const handleSearch = (event) => {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      console.error("Input is not a number");
      return;
    }

    setSearchValue(value);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckIn = async () => {
    handleClose();

    const reservation_id = document.getElementById("reservation_id").value;
    const name = document.getElementById("name").value;
    const room_number = document.getElementById("room_number").value;
    const total_amount = document.getElementById("total_amount").value;
    const amount_paid = document.getElementById("amount_paid").value;
    const status = document.getElementById("status").value;

    const guestData = {
      reservation_id,
      name,
      room_number,
      total_amount,
      amount_paid,
      status,
    };

    console.log(guestData);

    try {
      const response = await axios.post(
        "http://localhost:5000/create",
        guestData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error creating guest", error);
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
      <p style={{ color: grey[400] }}>Guests</p>
      <div style={{ margin: "30px 0 20px 0" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#5D6679" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search by room number"
            inputProps={{ "aria-label": "search" }}
            value={searchValue}
            onChange={handleSearch}
          />
        </Search>

        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            borderRadius: "100px",
            backgroundColor: blue[50],
            color: blue[700],
            borderColor: blue[700],
          }}
        >
          check in
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Check In</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill in the details below.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="reservation_id"
              label="Reservation ID"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="room_number"
              label="Room Number"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="total_amount"
              label="Total Amount"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id="amount_paid"
              label="Amount Paid"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id="status"
              label="Status"
              type="text"
              fullWidth
              defaultValue="Clean"
              disabled
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleCheckIn}>Check In</Button>
          </DialogActions>
        </Dialog>
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
          check out
        </Button>
      </div>

      <DataTableGuest searchValue={searchValue} />
    </Container>
  );
}
