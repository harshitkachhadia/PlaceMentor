import React, { useState } from 'react';
import {
  Box, Typography, Button, List, ListItem, Dialog, DialogActions,
  DialogContent, DialogTitle, TextField, Divider
} from '@mui/material';
import { Add } from '@mui/icons-material';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import parse from 'html-react-parser';

const ExperiencePage = () => {
  const [open, setOpen] = useState(false);
  const [viewDetailsOpen, setViewDetailsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [newExperience, setNewExperience] = useState({
    studentName: '',
    className: '',
    enrollmentNumber: '',
    batch: '',
    companyName: '',
    package: '',
    rounds: '',
    date: null,
    role: '',
    techStack: '',
    otherDetails: '',
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleViewDetailsClose = () => setViewDetailsOpen(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleDetailsChange = (value) => {
    setNewExperience({ ...newExperience, otherDetails: value });
  };

  const handleSubmit = () => {
    setExperiences([...experiences, newExperience]);
    handleClose();
    resetForm();
  };

  const resetForm = () => {
    setNewExperience({
      studentName: '',
      className: '',
      enrollmentNumber: '',
      batch: '',
      companyName: '',
      package: '',
      rounds: '',
      date: null,
      role: '',
      techStack: '',
      otherDetails: '',
    });
  };

  const openDetailsDialog = (experience) => {
    setSelectedExperience(experience);
    setViewDetailsOpen(true);
  };

  return (
    <Box sx={{ backgroundColor: '#000', color: 'white', padding: '20px', minHeight: '100vh', position: 'relative' }}>
      <Typography variant="h3" sx={{ color: '#18FFFF', marginBottom: '20px', fontWeight: 'bold' }}>
        Student Experiences
      </Typography>

      {/* Add Experience Button - Top-right Corner */}
      <Box sx={{ position: 'absolute', top: '20px', right: '20px' }}>
        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{ backgroundColor: '#18FFFF', color: 'black' }}
          onClick={handleClickOpen}
        >
          Add Your Experience
        </Button>
      </Box>

      {/* Experience List with Header */}
      <Typography variant="h5" sx={{ marginTop: '30px', color: '#18FFFF' }}>
        Experience List
      </Typography>
      <Divider sx={{ backgroundColor: '#18FFFF', marginBottom: '10px' }} />
      <List>
        <ListItem sx={{ borderBottom: '2px solid #18FFFF' }}>
          <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>No.</Typography>
          <Typography sx={{ flexGrow: 3, fontWeight: 'bold' }}>Student Name</Typography>
          <Typography sx={{ flexGrow: 3, fontWeight: 'bold' }}>Company Name</Typography>
          <Typography sx={{ flexGrow: 1, fontWeight: 'bold' }}>Date</Typography>
        </ListItem>
        <Divider sx={{ backgroundColor: '#18FFFF', marginBottom: '10px' }} />
        {experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <ListItem
              button
              key={index}
              onClick={() => openDetailsDialog(experience)}
              sx={{ borderBottom: '1px solid #18FFFF', padding: '10px', '&:hover': { backgroundColor: '#1c1c1c' } }}
            >
              <Typography sx={{ flexGrow: 1 }}>{index + 1}</Typography>
              <Typography sx={{ flexGrow: 3 }}>{experience.studentName}</Typography>
              <Typography sx={{ flexGrow: 3 }}>{experience.companyName}</Typography>
              <Typography sx={{ flexGrow: 1 }}>{experience.date ? experience.date.toLocaleDateString() : ''}</Typography>
            </ListItem>
          ))
        ) : (
          <Typography>No experiences shared yet.</Typography>
        )}
      </List>

      {/* Dialog to View Experience Details */}
      {selectedExperience && (
        <Dialog open={viewDetailsOpen} onClose={handleViewDetailsClose}>
          <DialogTitle>Experience Details</DialogTitle>
          <DialogContent>
            <Typography><strong>Student Name:</strong> {selectedExperience.studentName}</Typography>
            <Typography><strong>Class:</strong> {selectedExperience.className}</Typography>
            <Typography><strong>Enrollment Number:</strong> {selectedExperience.enrollmentNumber}</Typography>
            <Typography><strong>Batch:</strong> {selectedExperience.batch}</Typography>
            <Typography><strong>Company Name:</strong> {selectedExperience.companyName}</Typography>
            <Typography><strong>Date:</strong> {selectedExperience.date ? selectedExperience.date.toLocaleDateString() : ''}</Typography>
            <Typography><strong>Package Offered:</strong> {selectedExperience.package}</Typography>
            <Typography><strong>Total Number of Rounds:</strong> {selectedExperience.rounds}</Typography>
            <Typography><strong>Role Offered:</strong> {selectedExperience.role}</Typography>
            <Typography><strong>Tech Stack:</strong> {selectedExperience.techStack}</Typography>
            <Typography><strong>Details:</strong> {parse(selectedExperience.otherDetails)}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleViewDetailsClose} sx={{ color: 'black' }}>Close</Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Dialog to Add New Experience */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Your Experience</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="studentName"
            label="Student Name"
            fullWidth
            variant="outlined"
            value={newExperience.studentName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="className"
            label="Class (e.g., CE-4)"
            fullWidth
            variant="outlined"
            value={newExperience.className}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="enrollmentNumber"
            label="Enrollment Number"
            fullWidth
            variant="outlined"
            value={newExperience.enrollmentNumber}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="batch"
            label="Batch"
            fullWidth
            variant="outlined"
            value={newExperience.batch}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="companyName"
            label="Company Name"
            fullWidth
            variant="outlined"
            value={newExperience.companyName}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="package"
            label="Package Offered"
            fullWidth
            variant="outlined"
            value={newExperience.package}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="rounds"
            label="Total Number of Rounds"
            fullWidth
            variant="outlined"
            value={newExperience.rounds}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="role"
            label="Role Offered"
            fullWidth
            variant="outlined"
            value={newExperience.role}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="techStack"
            label="Tech Stack (Programming Languages, Tools)"
            fullWidth
            variant="outlined"
            value={newExperience.techStack}
            onChange={handleInputChange}
          />
          <Typography sx={{ marginTop: '10px' }}>Other Details</Typography>
          <ReactQuill value={newExperience.otherDetails} onChange={handleDetailsChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: 'black' }}>Cancel</Button>
          <Button onClick={handleSubmit} sx={{ backgroundColor: '#18FFFF', color: 'black' }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ExperiencePage;
