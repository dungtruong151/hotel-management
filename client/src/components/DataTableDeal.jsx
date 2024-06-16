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
import { format } from "date-fns";

const columns = [
  {
    id: "reference_number",
    label: "Reference Number",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "deal_name",
    label: "Deal Name",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "reservations_left",
    label: "Reservations Left",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "end_date",
    label: "End Date",
    minWidth: 100,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "room_type",
    label: "Room Type",
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
  reference_number,
  deal_name,
  reservations_left,
  end_date,
  room_type,
  status,
  actions
) {
  return {
    reference_number,
    deal_name,
    reservations_left,
    end_date,
    room_type,
    status,
    actions,
  };
}

const statusFormat = (value) => {
  if (value === "New") {
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
  } else if (value === "Inactive") {
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
  } else if (value === "Ongoing") {
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
  } else if (value === "Full") {
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

export default function DataTableRoom({ searchValue }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(searchValue);
    if (isNaN(searchValue)) {
      axios
        .get("http://localhost:5000/deals")
        .then((response) => {
          setData(response.data);
          rows = [];
          for (const key in data[0]) {
            const rawEndDate = data[0][key].end_date;
            const formattedEndDate = format(new Date(rawEndDate), "yyyy-MM-dd");

            rows.push(
              createData(
                data[0][key].reference_number,
                data[0][key].deal_name,
                data[0][key].reservations_left,
                formattedEndDate,
                data[0][key].room_type,
                data[0][key].status,
                null
              )
            );
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:5000/deals/${searchValue}`)
        .then((response) => {
          setData(response.data);
          rows = [];
          rows.push(
            createData(
              data[0].reference_number,
              data[0].deal_name,
              data[0].reservations_left,
              data[0].end_date,
              data[0].room_type,
              data[0].status,
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
  const selectedDeal = rows.find(
    (deal) => deal.reference_number === selectedId
  );
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

    fetch(`http://localhost:5000/deals/delete/${selectedId}`, {
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

    const dealData = {
      reference_number: document.getElementById("reference_number").value,
      deal_name: document.getElementById("deal_name").value,
      reservations_left: document.getElementById("reservations_left").value,
      end_date: document.getElementById("end_date").value,
      room_type: document.getElementById("room_type").value,
      status: document.getElementById("status").value,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/deals/update/${selectedDeal.reference_number}`,
        dealData
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
                            ...(column.id === "reference_number"
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
                                      row.reference_number
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
                          ) : column.format && typeof value === Date() ? (
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
            id="reference_number"
            label="Reference Number"
            type="number"
            fullWidth
            variant="outlined"
            defaultValue={selectedDeal && selectedDeal.reference_number}
          />
          <TextField
            margin="dense"
            id="deal_name"
            label="Deal Name"
            type="text"
            fullWidth
            variant="outlined"
            defaultValue={selectedDeal && selectedDeal.deal_name}
          />
          <TextField
            margin="dense"
            id="reservations_left"
            label="Reservations Left"
            type="number"
            fullWidth
            variant="outlined"
            defaultValue={selectedDeal && selectedDeal.reservations_left}
          />
          <TextField
            margin="dense"
            id="end_date"
            label="End Date"
            type="date"
            fullWidth
            variant="outlined"
            defaultValue={selectedDeal && selectedDeal.end_date}
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
            defaultValue={selectedDeal && selectedDeal.room_type}
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
            defaultValue={selectedDeal && selectedDeal.status}
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
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}
