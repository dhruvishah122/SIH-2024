import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // Import TextField for funds sanctioned input
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // For green tick icon
import "../StartupStatus.css";

const StatusTable = () => {
  const location = useLocation(); // Get the current location
  const [rows, setRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [actionStatus, setActionStatus] = useState("");
  const [fundsSanctioned, setFundsSanctioned] = useState(0); // State to hold funds sanctioned

  // Extract the query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const investorName = queryParams.get("name");

  useEffect(() => {
    if (investorName) {
      // Fetch from startupStatus.json
      fetch("/statusData.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const filteredRows = data.status.filter(
            (row) => row.investorName === investorName
          );
          setRows(filteredRows); // Set filtered rows to state
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [investorName]); // Re-fetch when investorName changes

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

  // Function to download the table data as CSV
  const downloadCSV = () => {
    const csvContent = [
      [
        "Investor Name",
        "Startup Name",
        "Funding Details",
        "Date",
        "Status",
        "Funds Sanctioned",
      ],
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

  // Function to handle the status change
  const handleStatusChange = (index) => {
    const currentStatus = rows[index].status;

    // Check if the status is already approved or rejected
    if (currentStatus === "Approved" || currentStatus === "Rejected") {
      alert(`Application is already ${currentStatus} and cannot be changed.`);
      return; // Prevent further actions
    }

    const updatedRows = [...rows];

    // Update the status and date
    updatedRows[index].status =
      actionStatus === "Request Changes" ? "In Progress" : actionStatus;
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

  return (
    <div className="Table">
      <h3
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="../../public/govLogo.png"
          alt="Logo"
          style={{ width: "70px", height: "70px", marginRight: "10px" }}
        />
        Investments Status of {investorName}
      </h3>
      <Button
        variant="contained"
        color="primary"
        className="csv-btn"
        onClick={downloadCSV}
        style={{ marginTop: "10px" }}
      >
        Download Report
      </Button>
      <br></br>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Investor Name</b>
              </TableCell>
              <TableCell align="left">
                <b>Startup Name</b>
              </TableCell>
              <TableCell align="left">
                <b>Funding Details</b>
              </TableCell>
              <TableCell align="left">
                <b>Date</b>
              </TableCell>
              <TableCell align="left">
                <b>Status</b>
              </TableCell>
              <TableCell align="left">
                <b>Funds Sanctioned</b>
              </TableCell>
              <TableCell align="left">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row._id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                }}
              >
                <TableCell>{row.investorName}</TableCell>
                <TableCell align="left">{row.startupName}</TableCell>
                <TableCell align="left">
                  <a
                    href={row.fundingDetails}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="colChange"> View Funding Details</div>
                  </a>
                </TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span
                    className="status-btn"
                    style={makeStatusStyle(row.status)}
                  >
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left">{row.funds_sanctioned}</TableCell>
                <TableCell align="left">
                  {row.status === "Approved" || row.status === "Rejected" ? (
                    <CheckCircleIcon
                      style={{ color: "green", fontSize: "2rem" }} // Show green tick
                    />
                  ) : selectedRow === index ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                      }}
                    >
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
                          onChange={(e) => setFundsSanctioned(e.target.value)}
                          style={{ marginTop: "10px" }}
                        />
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleStatusChange(index)}
                        style={{ marginTop: "10px" }}
                      >
                        Submit
                      </Button>
                    </div>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
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
