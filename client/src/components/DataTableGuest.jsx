import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { grey, blue, red, green, orange } from "@mui/material/colors";
import axios from "axios";
import { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const columns = [
  { id: "reservation_id", label: "Reservation ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "room_number",
    label: "Room Number",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "total_amount",
    label: "Total Amount",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "amount_paid",
    label: "Amount Paid",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actions",
    label: "",
    minWidth: 10,
  },
];

function createData(
  reservation_id,
  name,
  room_number,
  total_amount,
  amount_paid,
  status,
  actions
) {
  return {
    reservation_id,
    name,
    room_number,
    total_amount,
    amount_paid,
    status,
    actions,
  };
}

const statusFormat = (value) => {
  if (value === "Clean") {
    return (
      <div
        style={{
          color: blue[400],
          backgroundColor: blue[50],
          borderRadius: "16px",
          padding: "5px 10px",
          width: "max-content",
        }}
      >
        {value}
      </div>
    );
  } else if (value === "Dirty") {
    return (
      <div
        style={{
          color: red[400],
          backgroundColor: red[50],
          borderRadius: "16px",
          padding: "5px 10px",
          width: "max-content",
        }}
      >
        {value}
      </div>
    );
  } else if (value === "Inspected") {
    return (
      <div
        style={{
          color: green[400],
          backgroundColor: green[50],
          borderRadius: "16px",
          padding: "5px 10px",
          width: "max-content",
        }}
      >
        {value}
      </div>
    );
  } else if (value === "Pick up") {
    return (
      <div
        style={{
          color: orange[400],
          backgroundColor: orange[50],
          borderRadius: "16px",
          padding: "5px 10px",
          width: "max-content",
        }}
      >
        {value}
      </div>
    );
  }

  return value;
};

let rows = [];

export default function DataTableGuest({ searchValue }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(searchValue);

    if (isNaN(searchValue)) {

      axios.get('http://localhost:5000/products/')
      .then((response) => {
        setData(response.data);
        rows = [];
        for (const key in data[0])
          rows.push(createData(data[0][key].reservation_id, data[0][key].name, data[0][key].room_number, data[0][key].total_amount, data[0][key].amount_paid, data[0][key].status, null));      
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      axios.get(`http://localhost:5000/products/${searchValue}`)
      .then((response) => {
        setData(response.data);
        rows = [];
        rows.push(createData(data[0].reservation_id, data[0].name, data[0].room_number, data[0].total_amount, data[0].amount_paid, data[0].status, null));      
      })
      .catch((error) => {
        console.log(error);
      });

    }
  }, [searchValue, data]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [selectedId, setSelectedId] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const selectedGuest = rows.find(
    (guest) => guest.reservation_id === selectedId
  );
  //console.log(selectedGuest && selectedGuest.reservation_id);

  const handleOpenUserMenu = (event, id) => {
    setAnchorElUser(event.currentTarget);
    setSelectedId(id);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDelete = () => {
    try {
      axios.delete(`http://localhost:5000/products/delete/${selectedId}`);
      handleCloseUserMenu();
    } catch (error) {
      console.error("Error deleting guest", error);
    }
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = async () => {
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


      try {
          const response = await axios.put(`http://localhost:5000/products/update/${selectedId}`, guestData);
          console.log(response.data);
          handleClose();
      } catch (error) {
          console.error('Error creating guest', error);
      }

  };

  const currencies = [
    {
      value: "Clean",
      label: "Clean",
    },
    {
      value: "Dirty",
      label: "Dirty",
    },
    {
      value: "Inspected",
      label: "Inspected",
    },
    {
      value: "Pick up",
      label: "Pick up",
    },
  ];

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ color: grey[800], backgroundColor: grey[50] }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                //console.log(row.reservation_id);

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      let value = row[column.id];
                      if (column.id === "reservation_id") {
                        value = "#" + value;
                      } else if (
                        column.id === "total_amount" ||
                        column.id === "amount_paid"
                      ) {
                        value = "$ " + value;
                      }
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ color: grey[600] }}
                          style={{
                            ...(column.id === "reservation_id"
                              ? { fontWeight: "bold" }
                              : {}),
                          }}
                        >
                          {value === null ? (
                            <Box>
                              <Tooltip title="Open settings">
                                <IconButton
                                  onClick={(event) =>
                                    handleOpenUserMenu(
                                      event,
                                      row.reservation_id
                                    )
                                  }
                                  sx={{ p: 0 }}
                                >
                                  <MoreVertIcon />
                                </IconButton>
                              </Tooltip>
                              <Menu
                                sx={{ mt: "40px" }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "right",
                                }}
                                keepMounted
                                transformOrigin={{
                                  vertical: "top",
                                  horizontal: "right",
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                              >
                                <MenuItem onClick={handleDelete}>
                                  Delete
                                </MenuItem>
                                <MenuItem onClick={handleClickOpen}>
                                  Edit
                                </MenuItem>
                              </Menu>
                            </Box>
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            statusFormat(value)
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Updating Guests</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details below.
          </DialogContentText>
          <TextField
            margin="dense"
            id="reservation_id"
            label="Reservation ID"
            type="number"
            fullWidth
            defaultValue={selectedGuest && selectedGuest.reservation_id}
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            defaultValue={selectedGuest && selectedGuest.name}
          />
          <TextField
            margin="dense"
            id="room_number"
            label="Room Number"
            type="text"
            fullWidth
            defaultValue={selectedGuest && selectedGuest.room_number}
          />
          <TextField
            margin="dense"
            id="total_amount"
            label="Total Amount"
            type="number"
            fullWidth
            defaultValue={selectedGuest && selectedGuest.total_amount}
          />
          <TextField
            margin="dense"
            id="amount_paid"
            label="Amount Paid"
            type="number"
            fullWidth
            defaultValue={selectedGuest && selectedGuest.amount_paid}
          />
          <TextField
            margin="dense"
            id="status"
            select
            label="Status"
            defaultValue={selectedGuest && selectedGuest.status}
            SelectProps={{
              native: true,
            }}
            helperText="Please select the status"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdate}>Update</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
