import React from 'react';

const JobList = ({ jobs, onSelectJob }) => {
  if (jobs.length === 0) {
    return <p>No jobs found.</p>;
  }

  return (
    <div>
      {jobs.map((job) => (
        <div key={job.id} onClick={() => onSelectJob(job)} style={{ cursor: 'pointer', marginBottom: '20px', border: '1px solid #ccc', padding: '15px' }}>
          <h2>{job.position}</h2>
          <h4>{job.company}</h4>
          <img src={job.company_logo} alt={job.company} style={{ maxWidth: '100px' }} />
          <p>{job.description.slice(0, 100)}...</p>
          <p>Salary: ${job.salary_min} - ${job.salary_max}</p>
          <p>Tags: {job.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
