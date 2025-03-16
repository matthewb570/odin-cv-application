import DateUtils from "../../utils/DateUtils";

export default function EducationDisplay({ educationalInstitutions }) {
  return (
    <div className="resume-display">
      <h2>Education</h2>
      <div className={"educational-institution-list"}>
        {educationalInstitutions.map((educationalInstitution) => (
          <div className="educational-institution">
            <div>
              {DateUtils.formatDate(educationalInstitution.startDate)} -{" "}
              {DateUtils.formatDate(educationalInstitution.endDate)}
            </div>
            <div>{educationalInstitution.degreeTitle}</div>
            <div>{educationalInstitution.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
