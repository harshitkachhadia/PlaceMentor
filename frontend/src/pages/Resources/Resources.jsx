import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Grid, Card, CardContent, Button, Chip, Box, Pagination, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';

const resources = [
  { id: 1, title: 'DSA Basics', description: 'Learn data structures and algorithms.', category: 'DSA' },
  { id: 2, title: 'Advanced Java', description: 'Master advanced Java concepts.', category: 'Java' },
  { id: 3, title: 'JavaScript Best Practices', description: 'Write clean and efficient JS code.', category: 'JavaScript' },
  { id: 4, title: 'Operating Systems', description: 'Understand OS fundamentals.', category: 'OS' },
  { id: 5, title: 'Database Management Systems', description: 'Explore relational and non-relational databases.', category: 'DBMS' },
  { id: 6, title: 'Computer Networks', description: 'Understand networking concepts.', category: 'Networking' },
  { id: 7, title: 'System Design', description: 'Master system design concepts for interviews.', category: 'System Design' },
];

const categories = ['All', 'DSA', 'Java', 'JavaScript', 'OS', 'DBMS', 'Networking', 'System Design'];

const Resources = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);
  const resourcesPerPage = 3;

  const filteredResources = resources.filter(resource => 
    (selectedCategory === 'All' || resource.category === selectedCategory) &&
    resource.title.toLowerCase().includes(search.toLowerCase())
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const paginatedResources = filteredResources.slice(
    (page - 1) * resourcesPerPage,
    page * resourcesPerPage
  );

  return (
    <div>
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" gutterBottom color="primary" sx={{ marginTop: "50px" }}>
            Resources
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Search and Filter Row */}
      <Box display="flex" justifyContent="space-between" alignItems="center" padding="20px">
        {/* Category Chips */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {categories.map((category) => (
            <Chip 
              label={category}
              clickable
              key={category}
              color={selectedCategory === category ? 'primary' : 'default'}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {/* Search Bar with Placeholder Behavior */}
        <TextField 
          variant="outlined"
          label="Search Resources"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon position="start" style={{marginRight:"0.5rem"}}/>,
          }}
          style={{ width: '300px' }} // Reverted width and style
        />
      </Box>

      {/* Grid of Resource Cards */}
      <Grid container spacing={3} style={{ padding: '20px' }}>
        {paginatedResources.map((resource) => (
          <Grid item xs={12} sm={6} md={4} key={resource.id}>
            <Card>
              <CardContent>
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>
                  {resource.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {resource.description}
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                  View Resource
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination for Resources */}
      <Box display="flex" justifyContent="center" padding="20px">
        <Pagination 
          count={Math.ceil(filteredResources.length / resourcesPerPage)} 
          page={page} 
          onChange={handlePageChange} 
          color="primary"
        />
      </Box>

      {/* Practice Section */}
      <Box padding="20px">
        <Typography variant="h3" gutterBottom color="primary" sx={{ mb: "40px" }}>
          Coding Practice Platforms
        </Typography>
        <Box display="flex" gap="20px" alignItems="center">
          {/* HackerRank */}
          <Box display="flex" alignItems="center">
            <CodeIcon style={{ marginRight: '10px', color: '#2E7D32' }} />
            <Button variant="text" color="primary" href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">
              HackerRank
            </Button>
          </Box>

          {/* LeetCode */}
          <Box display="flex" alignItems="center">
            <TerminalIcon style={{ marginRight: '10px', color: '#1976D2' }} />
            <Button variant="text" color="primary" href="https://leetcode.com" target="_blank" rel="noopener noreferrer">
              LeetCode
            </Button>
          </Box>

          {/* Codeforces */}
          <Box display="flex" alignItems="center">
            <CodeIcon style={{ marginRight: '10px', color: '#FF5722' }} />
            <Button variant="text" color="primary" href="https://codeforces.com" target="_blank" rel="noopener noreferrer">
              Codeforces
            </Button>
          </Box>

          {/* CodeChef */}
          <Box display="flex" alignItems="center">
            <TerminalIcon style={{ marginRight: '10px', color: '#FFD600' }} />
            <Button variant="text" color="primary" href="https://www.codechef.com" target="_blank" rel="noopener noreferrer">
              CodeChef
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Resources;
