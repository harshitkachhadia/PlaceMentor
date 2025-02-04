import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import Parser from "html-react-parser"; // Import the parser
import ReactQuill from "react-quill"; // Import React Quill
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { StoreContext } from "../../context/storeContext";
import axios from "axios";

// Initial sample data
const initialExperiences = [];

const PlacementInsightsList = () => {
  const { insightData, setInsightData, url, token } = useContext(StoreContext);
  const [newExperience, setNewExperience] = useState({
    name: "",
    enrollmentNo: "",
    className: "",
    batch: "",
    company: "",
    date: "",
    salary: "",
    rollOffered: "",
    techStack: "",
    otherDetails: "",
  });
  const [showDialog, setShowDialog] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  useEffect(() => {
    console.log(newExperience);
    
  },[newExperience])

  const handleQuillChange = (value) => {
    setNewExperience({ ...newExperience, otherDetails: value });
  };

  const handleRowClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleCloseDetails = () => {
    setSelectedExperience(null);
  };

  const placeData = async () => {
    try {
      const response = await axios.get(url + "/api/placementInsight/data");
      setInsightData(response.data.data);
    } catch (error) {
      console.error("Error fetching placement data:", error);
    }
  };


  const onAddExperience = async (e) => {
    // await handleSubmit();
    e.preventDefault();
    console.log("here");
    const response = await axios.post(
      `${url}` + "/api/placementInsight/addExperiance",
      newExperience,
      {
        headers: { token },
      }
    );
    console.log(response.data);
    setInsightData(response.data.data)
    setNewExperience({
          name: "",
          enrollmentNo: "",
          className: "",
          batch: "",
          company: "",
          date: "",
          salary: "",
          rollOffered: "",
          techStack: "",
          otherDetails: "",
        });
        setShowDialog(false)
  };

useEffect(() => {
  placeData()
},[])

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "80px 0 20px 0",
        }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#FFFFFF" }}
        >
          Campus Placement Stories
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowDialog(true)}
        >
          Add Experience
        </Button>
      </div>

      {/* Dialog for adding new experience */}
      <Dialog open={showDialog} onClose={() => setShowDialog(false)}>
        <DialogTitle>Add Your Experience</DialogTitle>
        <DialogContent style={{ backgroundColor: "#000" }}>
          <form onSubmit={onAddExperience} style={{ marginTop: "1rem" }}>
            <Grid container spacing={2}>
              {Object.keys(newExperience).map((key) => (
                <Grid
                  item
                  xs={12}
                  sm={key === "otherDetails" ? 12 : 6}
                  key={key}
                >
                  {key === "otherDetails" ? (
                    <>
                      <Typography
                        variant="body1"
                        style={{ marginBottom: "8px", color: "#FFFFFF" }}
                      >
                        <strong>Other Details:</strong>
                      </Typography>
                      <ReactQuill
                        value={newExperience[key]}
                        onChange={handleQuillChange}
                        theme="snow"
                      />
                    </>
                  ) : (
                    <TextField
                      fullWidth
                      name={key}
                      label={
                        key.charAt(0).toUpperCase() +
                        key.slice(1).replace(/([A-Z])/g, " $1")
                      }
                      value={newExperience[key]}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      style={{ border: "1px solid #000" }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            <Button
            type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Add Experience
            </Button>
            <Button
              variant="contained"
              color="error" // Use red variant
              onClick={() => setShowDialog(false)}
              style={{ marginTop: "20px", marginLeft: "10px" }}
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "#18FFFF", fontWeight: "bold" }}>
                No.
              </TableCell>
              <TableCell style={{ color: "#18FFFF", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell style={{ color: "#18FFFF", fontWeight: "bold" }}>
                Company
              </TableCell>
              <TableCell style={{ color: "#18FFFF", fontWeight: "bold" }}>
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {insightData?.map((experience, index) => (
              <TableRow
                hover
                key={experience.id}
                onClick={() => handleRowClick(experience)}
                style={{
                  cursor: "pointer",
                  backgroundColor: "#000000",
                  ":hover": {
                    backgroundColor: "#18ffff",
                  },
                }}
              >
                <TableCell style={{ color: "#E0E0E0" }}>{index + 1}</TableCell>
                <TableCell style={{ color: "#E0E0E0" }}>
                  {experience.name}
                </TableCell>
                <TableCell style={{ color: "#E0E0E0" }}>
                  {experience.company}
                </TableCell>
                <TableCell style={{ color: "#E0E0E0" }}>
                  {experience.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog to show selected experience details */}
      {selectedExperience && (
        <Dialog
          open={Boolean(selectedExperience)}
          onClose={handleCloseDetails}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Experience Details</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              {/* Personal Info Section */}
              <Grid item xs={12}>
                <Typography variant="h3" style={{ color: "#18FFFF" }}>
                  {selectedExperience.name}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Enrollment No:</strong>{" "}
                  {selectedExperience.enrollmentNo}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Class:</strong> {selectedExperience.className}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Batch:</strong> {selectedExperience.batch}
                </Typography>
              </Grid>

              {/* Company Info Section */}
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Company:</strong> {selectedExperience.company}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Date:</strong> {selectedExperience.date}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>salary:</strong> {selectedExperience.salary}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Roll Offered:</strong>{" "}
                  {selectedExperience.rollOffered}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Tech Stack:</strong> {selectedExperience.techStack}
                </Typography>
              </Grid>

              {/* Other Details Section */}
              <Grid item xs={12}>
                <Typography variant="body1" style={{ marginBottom: "0.4rem" }}>
                  <strong>Other Details:</strong>
                </Typography>
                <Typography>
                  {Parser(selectedExperience.otherDetails)}
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetails} color="error">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default PlacementInsightsList;
