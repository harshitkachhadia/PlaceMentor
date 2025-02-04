import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import theme from "../../theme";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StoreContext } from "../../context/StoreContext";

const Profile = () => {
  const { url, studentData, setStudentData, token ,setInsightData} = useContext(StoreContext);

  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editedDetails, setEditedDetails] = useState({});
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [selectedPlacementId, setSelectedPlacementId] = useState(null);
 

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedDetails({ ...editedDetails, [name]: value });
  };

  const handleQuillChange = (value) => {
    setEditedDetails({ ...editedDetails, otherDetails: value });
  };
  // console.log("place id",selectedPlacementId);

  const handleSaveChanges = async (e) => {
    e.preventDefault(); 
    try {
      console.log("selected id",selectedPlacementId);

      const response = await axios.put(url + `/api/placementInsight/update/${selectedPlacementId}`,editedDetails,{
          headers: { token },
        }
      );
      setStudentData(response.data);
      setInsightData(response.data.data)
      setShowEditDialog(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleDeletePlacement = async (placementId) => {
    try {
      console.log(placementId);
      
     const response =  await axios.delete(`${url}/api/placementInsight/delete/${placementId}`, {
        headers: { token },
      });
      setStudentData(response.data)
      setInsightData(response.data.data)
      setShowDeleteDialog(false);
    } catch (error) {
      console.error("Error deleting placement:", error);
    }
  };

 

  const handleEditPlacement = (placement) => {
    setEditedDetails(placement);
    setShowEditDialog(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={3} style={{ marginTop: "30px" }}>
        <Grid item xs={12} md={8}>
          <Paper
            style={{
              backgroundColor: "#1E1E1E",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h2"
              style={{ color: "#00FFFF", marginBottom: "10px", fontWeight: "bold" }}
            >
              Placement Details
            </Typography>
            <Grid container spacing={3}>
              {studentData?.data?.length > 0 ? (
                studentData?.data.map((placement) => (
                  <Grid item xs={12} key={placement._id}>
                    <Paper
                      style={{
                        padding: "20px",
                        backgroundColor: "#252525",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Name : </strong>{placement.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Enrollment No:</strong> {placement.enrollmentNo}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Batch:</strong> {placement.batch}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Class Name:</strong> {placement.className}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Company:</strong> {placement.company}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Date:</strong> {placement.date}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Salary:</strong> {placement.salary}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Role Offered:</strong> {placement.rollOffered}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                            <strong>Tech Stack:</strong> {placement.techStack}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="body2" style={{ color: "#E0E0E0", marginTop: "10px" }}>
                            <strong>Other Details:</strong>
                            <span dangerouslySetInnerHTML={{ __html: placement.otherDetails }} />
                          </Typography>
                        </Grid>
                      </Grid>

                      {/* Edit and Delete Buttons */}
                      <Grid container spacing={2} style={{ marginTop: "15px" }}>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{
                              borderRadius: "5px",
                              textTransform: "none",
                            }}
                            onClick={() => {
                             setSelectedPlacementId(placement._id)
                              handleEditPlacement(placement)
                            }}
                          >
                            Edit Placement
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button
                            variant="contained"
                            color="error"
                            fullWidth
                            style={{
                              borderRadius: "5px",
                              textTransform: "none",
                            }}
                            onClick={() => {
                              setSelectedPlacementId(placement._id);
                              setShowDeleteDialog(true);
                            }}
                          >
                            Delete Placement
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                ))
              ) : (
                <Typography variant="body1" style={{ color: "#E0E0E0" }}>
                  
                </Typography>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Edit Placement Dialog */}
      <Dialog
        open={showEditDialog}
        onClose={() => setShowEditDialog(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>Edit Placement</DialogTitle>
        <form onSubmit={handleSaveChanges}>
          <DialogContent style={{ backgroundColor: "#000" }}>
            <Grid container spacing={2}>
              {Object.keys(editedDetails).map((key) => (
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
                        value={editedDetails[key]}
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
                      value={editedDetails[key]}
                      onChange={handleEditChange}
                      variant="outlined"
                      required
                      style={{ border: "1px solid #000" }}
                    />
                  )}
                </Grid>
              ))}
            </Grid>
            <DialogActions>
              <Button onClick={() => setShowEditDialog(false)} color="error">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save Changes
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete this placement?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDeleteDialog(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => handleDeletePlacement(selectedPlacementId)}
            color="error"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default Profile;
