import "./JobCardStyles.css";

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

  // tell TS that it expects one argument, and that argument should be a string.
  handleSelectedTags: (tag: string) => void;
};

const JobCard: React.FC<JobCardProps> = ({ jobData, handleSelectedTags }) => {
  return (
    <section className="card-outer-container">
      <div className="card-container">
        <div className="card-company-logo-container">
          <img
            src={jobData.logo}
            alt="company-logo"
            className="card-company-logo"
          />
        </div>
        <section className="card-inner-container">
          <ul className="card-header-info">
            <li className="card-company-name">{jobData.company}</li>
            <li className={jobData.new ? "card-new-tag" : ""}>
              {jobData.new ? "new!".toUpperCase() : ""}
            </li>
            <li className={jobData.featured ? "card-featured-tag" : ""}>
              {jobData.featured ? "featured".toUpperCase() : ""}
            </li>
          </ul>
          <p className="card-job-position">{jobData.position}</p>
          <ul className="card-job-details">
            <li className="job-details">{jobData.postedAt}</li>
            <li className="job-details">{jobData.contract}</li>
            <li className="job-details">{jobData.location}</li>
          </ul>
          <hr />
          <ul className="card-job-work-info">
            <li
              className="job-info"
              onClick={() => handleSelectedTags(jobData.role)}
            >
              {jobData.role}
            </li>
            <li
              className="job-info"
              // jobData.role is a string, so it fits with (tag: string).
              onClick={() => handleSelectedTags(jobData.level)}
            >
              {jobData.level}
            </li>
            {jobData.languages.map((lang, id) => {
              return (
                <li
                  key={id}
                  className="job-info"
                  onClick={() => handleSelectedTags(lang)}
                >
                  {lang}
                </li>
              );
            })}
            {jobData.tools.map((tool, id) => {
              return (
                <li
                  key={id}
                  className="job-info"
                  onClick={() => handleSelectedTags(tool)}
                >
                  {tool}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default JobCard;
