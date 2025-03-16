export default function EducationDisplay({ educationalInstitutions }) {
  return (
    <div className="resume-display">
      <h2>Education</h2>
      <div className={"educational-institution-list"}>
        {educationalInstitutions.map((educationalInstitution) => (
          <div className="educational-institution">
            <div>
              {formatDate(educationalInstitution.startDate)} -{" "}
              {formatDate(educationalInstitution.endDate)}
            </div>
            <div>{educationalInstitution.degreeTitle}</div>
            <div>{educationalInstitution.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", timeZone: "GMT" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
}
