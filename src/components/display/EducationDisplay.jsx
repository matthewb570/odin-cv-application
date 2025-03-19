import DateUtils from "../../utils/DateUtils";

export default function EducationDisplay({ educationalInstitutions }) {
  return (
    <div className="resume-display">
      <h2>Education</h2>
      <div className={"educational-institution-list"}>
        {educationalInstitutions.map((educationalInstitution) => (
          <div
            className="educational-institution"
            key={educationalInstitution.id}
          >
            <h3>{educationalInstitution.name}</h3>
            <div>{educationalInstitution.degreeTitle}</div>
            <div>
              {DateUtils.formatDate(educationalInstitution.startDate)} -{" "}
              {DateUtils.formatDate(educationalInstitution.endDate)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
