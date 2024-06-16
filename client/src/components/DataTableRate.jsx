import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { grey, red, green, orange } from "@mui/material/colors";
import axios from "axios";
import { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const columns = [
  {
    id: "room_type",
    label: "Room Type",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "deals",
    label: "Deals",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cancellation_policy",
    label: "Cancellation Policy",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "deal_price",
    label: "Deal Price",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "rates",
    label: "Rate",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "availability",
    label: "Availability",
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
  room_type,
  deals,
  cancellation_policy,
  deal_price,
  rates,
  availability,
  actions
) {
  return {
    room_type,
    deals,
    cancellation_policy,
    deal_price,
    rates,
    availability,
    actions,
  };
}

const statusFormat = (value) => {
  if (value === "Strict") {
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
  } else if (value === "Flexible") {
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
  } else if (value === "Non refundable") {
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

export default function DataTableRate({ searchValue }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(searchValue);
    if (isNaN(searchValue)) {
      axios
        .get("http://localhost:5000/rates")
        .then((response) => {
          setData(response.data);
          rows = [];
          for (const key in data[0])
            rows.push(
              createData(
                data[0][key].room_type,
                data[0][key].deals,
                data[0][key].cancellation_policy,
                data[0][key].deal_price,
                data[0][key].rates,
                data[0][key].availability,
                null
              )
            );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:5000/rates/${searchValue}`)
        .then((response) => {
          setData(response.data);
          rows = [];
          rows.push(
            createData(
              data[0].room_type,
              data[0].deals,
              data[0].cancellation_policy,
              data[0].deal_price,
              data[0].rates,
              data[0].availability,
              null
            )
          );
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
  const selectedRate = rows.find((rate) => rate.room_type === selectedId);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event, id) => {
    setAnchorElUser(event.currentTarget);
    setSelectedId(id);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDelete = () => {
    handleCloseUserMenu();

    fetch(`http://localhost:5000/rates/delete/${selectedId}`, {
      method: "DELETE",
    }).then(() => {
      handleCloseUserMenu();
      window.location.reload();
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    handleClose();
    handleCloseUserMenu();

    const rateData = {
      room_type: document.getElementById("room_type").value,
      deals: document.getElementById("deals").value,
      cancellation_policy: document.getElementById("cancellation_policy").value,
      deal_price: document.getElementById("deal_price").value,
      rates: document.getElementById("rates").value,
      availability: document.getElementById("availability").value,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/rates/update/${selectedRate.room_type}`,
        rateData
      );
      console.log(response.data);
      handleClose();
    } catch (error) {
      console.error("Error adding deal", error);
    }
  };

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
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          sx={{ color: grey[600] }}
                          style={{
                            ...(column.id === "room_type"
                              ? { fontWeight: "bold" }
                              : {}),
                          }}
                        >
                          {value === null ? (
                            <Box>
                              <Tooltip title="Open settings">
                                <IconButton
                                  onClick={(event) =>
                                    handleOpenUserMenu(event, row.room_type)
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
        <DialogTitle>Edit Deal</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="room_type"
            label="Room Type"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue={selectedRate && selectedRate.room_type}
          />
          <TextField
            margin="dense"
            id="deals"
            label="Deals"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue={selectedRate && selectedRate.deals}
          />
          <TextField
            margin="dense"
            id="cancellation_policy"
            label="Cancellation Policy"
            select
            fullWidth
            variant="outlined"
            defaultValue={selectedRate && selectedRate.cancellation_policy}
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
            defaultValue={selectedRate && selectedRate.deal_price}
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
            defaultValue={selectedRate && selectedRate.rates}
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
            defaultValue={selectedRate && selectedRate.availability}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
