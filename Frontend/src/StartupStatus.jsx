import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField"; // Import TextField
import Button from "@mui/material/Button"; // Import Button
import "./StartupStatus.css";

const StatusTable = () => {
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [actionStatus, setActionStatus] = useState("");
  const [fundsSanctioned, setFundsSanctioned] = useState(0); // State to hold funds sanctioned

  useEffect(() => {
    const data = localStorage.getItem("statusData");
   
      setRows(JSON.parse(data).status); // Load data from localStorage if it exists
   
      // If no data in localStorage, fetch from startupStatus.json
      fetch("/statusData.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem("statusData", JSON.stringify(data)); // Save to localStorage
          setRows(data.status); // Set the rows from the fetched data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    
  }, []);
  

  // Function to style the status based on the status value
  const makeStatusStyle = (status) => {
    if (status === "Approved") {
      return {
        backgroundColor: "rgb(145 254 159 / 47%)",
        color: "green",
      };
    } else if (status === "Rejected") {
      return {
        backgroundColor: "#ffadad8f",
        color: "red",
      };
    } else {
      return {
        backgroundColor: "#59bfff",
        color: "blue",
      };
    }
  };

  // Handle status change
  // Handle status change
const handleStatusChange = (index) => {
  const updatedRows = [...rows];

  // Update the status and date
  updatedRows[index].status = actionStatus === "Request Changes" ? "In Progress" : actionStatus;
  updatedRows[index].date = new Date().toLocaleDateString("en-GB");

  // Update funds sanctioned if approved
  if (actionStatus === "Approved") {
    updatedRows[index].funds_sanctioned = fundsSanctioned; // Update funds sanctioned
  }

  setRows(updatedRows);
  setSelectedRow(null); // Hide dropdown after action is applied
  setFundsSanctioned(0); // Reset funds sanctioned input
  setActionStatus(""); // Reset action status

  // Update the data in local storage
  localStorage.setItem("statusData", JSON.stringify({ status: updatedRows }));

  // Send the updated object to the Node server
  const updatedObject = updatedRows[index]; // Get the updated object

  fetch("http://localhost:8080/update-status", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObject), // Send the updated object
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data); // Handle success response
    })
    .catch((error) => {
      console.error("Error:", error); // Handle error response
    });
};


  // Function to download the table data as CSV
  const downloadCSV = () => {
    const csvContent = [
      ["Investor Name", "Startup Name", "Funding Details", "Date", "Status", "Funds Sanctioned"],
      ...rows.map((row) => [
        row.investorName,
        row.startupName,
        row.fundingDetails,
        row.date,
        row.status,
        row.funds_sanctioned,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "status-tracking.csv";
    link.click();
  };

  return (
    <div className="Table">
      <h3>Application Status Tracking</h3>
      <Button variant="contained" color="primary" className="csv-btn" onClick={downloadCSV}>
        Download as CSV
      </Button>
      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Investor Name</TableCell>
              <TableCell align="left">Startup Name</TableCell>
              <TableCell align="left">Funding Details</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Funds Sanctioned</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={row._id} style={{ backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff" }}>
                <TableCell>{row.investorName}</TableCell>
                <TableCell align="left">{row.startupName}</TableCell>
                <TableCell align="left">
                  <a href={row.fundingDetails} target="_blank" rel="noopener noreferrer">View Funding Details</a>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status-btn" style={makeStatusStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left">{row.funds_sanctioned}</TableCell>
                <TableCell align="left">
                  {selectedRow === index ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <select
                        className="action-dropdown"
                        value={actionStatus}
                        onChange={(e) => setActionStatus(e.target.value)}
                      >
                        <option value="">Select Action</option>
                        <option value="Approved">Approve</option>
                        <option value="Rejected">Reject</option>
                        <option value="Request Changes">Request Changes</option>
                      </select>
                      {actionStatus === "Approved" && (
                        <TextField
                          variant="outlined"
                          type="number"
                          label="Funds Sanctioned"
                          value={fundsSanctioned}
                          onChange={(e) => setFundsSanctioned(Number(e.target.value))}
                          style={{ marginTop: "10px", width: "200px" }} // Add some margin and set width
                        />
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        className="action-btn"
                        onClick={() => handleStatusChange(index)}
                        style={{ marginTop: "10px" }} // Add margin for spacing
                      >
                        Confirm
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      className="action-btn"
                      onClick={() => setSelectedRow(index)}
                    >
                      Change Status
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StatusTable;
