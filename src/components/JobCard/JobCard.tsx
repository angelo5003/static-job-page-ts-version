// JobDataProps describes the expected shape of an object representing job data. It includes properties like id, company, logo, etc.
type JobDataProps = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

//JobCardProps specifies that the jobData prop passed to JobCard should conform to the JobDataProps type.
type JobCardProps = {
  jobData: JobDataProps;
};

const JobCard: React.FC<JobCardProps> = ({ jobData }) => {
  return (
    <section>
      <div className="img-container">
        <img src={jobData.logo} className="img" alt="company-logo" />
      </div>
      <div className="job-info-container">
        <p>{jobData.company}</p>
        <p>{jobData.new}</p>
        <p>{jobData.featured}</p>
      </div>
      <p>{jobData.position}</p>
      <div className="job-specification-container">
        <p>{jobData.postedAt}</p>
        <p>{jobData.contract}</p>
        <p>{jobData.location}</p>
      </div>
      <div className="job-tags-container">
        <p>{jobData.role}</p>
        <p>{jobData.level}</p>
        {/* <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p> */}
      </div>
    </section>
  );
};

export default JobCard;
