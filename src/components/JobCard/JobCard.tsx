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
      <ul className="job-info-container">
        <li>{jobData.company}</li>
        <li>{jobData.new ? "new".toUpperCase() : null}</li>
        <li>{jobData.featured ? "featured".toUpperCase() : null}</li>
      </ul>
      <p>{jobData.position}</p>
      <ul className="job-specification-container">
        <li>{jobData.postedAt}</li>
        <li>{jobData.contract}</li>
        <li>{jobData.location}</li>
      </ul>
      <div className="job-tags-container">
        <p>{jobData.role}</p>
        <p>{jobData.level}</p>
        {jobData.languages.map((lang) => {
          return <li key={lang}>{lang}</li>;
        })}
        {jobData.tools.map((tool) => {
          return <li key={tool}>{tool}</li>;
        })}
      </div>
    </section>
  );
};

export default JobCard;
