const JobCard = () => {
  return (
    <section>
      <div className="img-container">
        <img className="img" alt="company-logo" />
      </div>
      <div className="job-info-container">
        <p>PhotoSnap</p>
        <p>New!</p>
        <p>Featured</p>
      </div>
      <p>Senior FrontEnd Developer</p>
      <div className="job-specification-container">
        <p>1d ago</p>
        <p>Full Time</p>
        <p>USA Only</p>
      </div>
      <div className="job-tags-container">
        <p>Frontend</p>
        <p>Senior</p>
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
      </div>
    </section>
  );
};

export default JobCard;
