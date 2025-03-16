import DateUtils from "../../utils/DateUtils";

export default function WorkExperienceDisplay({ jobs }) {
  return (
    <div className="resume-display">
      <h2>Work Experience</h2>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job">
            <div>
              {DateUtils.formatDate(job.startDate)} -{" "}
              {DateUtils.formatDate(job.endDate)}
            </div>
            <div>{job.positionTitle}</div>
            <div>{job.companyName}</div>
            <div>{job.jobResponsibilities}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
