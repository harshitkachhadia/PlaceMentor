import React, { useState, useEffect } from 'react';
import JobList from '../../Components/JobList/JobList'; 
import JobDetail from '../../Components/JobDetail/JobDetail'; 
import Filter from '../../Components/Filter/Filter';
import axios from 'axios';

const Opportunities = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  // Fetch jobs from the RemoteOK API
  const fetchJobs = async () => {
    try {
      const response = await axios.get('https://remoteok.com/api');
      console.log(response.data); // Log the API response for debugging
      setJobs(response.data.jobs || []); // Set jobs state
      setFilteredJobs(response.data.jobs || []); // Initialize filtered jobs
    } catch (error) {
      console.error('Error fetching job listings:', error);
    }
  };

  // Fetch jobs on component mount
  useEffect(() => {
    fetchJobs();
  }, []);

  const handleFilter = ({ location, jobType }) => {
    const filtered = jobs.filter((job) =>
      (location ? job.location.toLowerCase().includes(location.toLowerCase()) : true) &&
      (jobType ? job.job_type === jobType : true)
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <h1>Opportunities</h1>
      {selectedJob ? (
        <JobDetail job={selectedJob} onBack={() => setSelectedJob(null)} />
      ) : (
        <>
          <Filter onFilter={handleFilter} />
          <JobList jobs={filteredJobs} onSelectJob={setSelectedJob} />
        </>
      )}
    </div>
  );
};

export default Opportunities;
