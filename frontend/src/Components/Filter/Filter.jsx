import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Filter = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleFilter = () => {
    onFilter({ location, jobType });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Job Type"
          variant="outlined"
          fullWidth
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Button variant="contained" color="primary" onClick={handleFilter}>
          Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
