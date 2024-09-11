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
import "../StartupStatus.css";

const StatusTable = () => {
  const location = useLocation(); // Get the current location
  const [rows, setRows] = useState([]);

  // Extract the query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const investorName = queryParams.get("name");

  useEffect(() => {
    if (investorName) {
      
        // const parsedData = JSON.parse(storedData).status;
        // const filteredRows = parsedData.filter(
        //   (row) => row.investorName === investorName
        // );
        // setRows(filteredRows); // Set filtered rows to state
    
        // If no data in localStorage, fetch from startupStatus.json
        fetch("/statusData.json")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            // localStorage.setItem("statusData", JSON.stringify(data)); // Save to localStorage
            const filteredRows = data.status.filter(
              (row) => row.startupName === investorName
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
       Funding Status of {investorName}
      </h3>
      
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StatusTable;
