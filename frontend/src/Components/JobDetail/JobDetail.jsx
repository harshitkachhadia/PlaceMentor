import React from 'react';

const JobDetail = ({ job, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h1>{job.position}</h1>
      <h2>{job.company}</h2>
      <img src={job.company_logo} alt={job.company} style={{ maxWidth: '100px' }} />
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
      <p>Salary: ${job.salary_min} - ${job.salary_max}</p>
      <a href={job.apply_url} target="_blank" rel="noopener noreferrer">Apply Now</a>
    </div>
  );
};

export default JobDetail;
