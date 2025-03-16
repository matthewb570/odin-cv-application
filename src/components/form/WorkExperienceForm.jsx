import Form from "./Form";
import FormInput from "../input/FormInput";

export default function WorkExperienceForm({ jobs, setJobs, onSubmit }) {
  function setCompanyName(companyName) {
    setJobs([{ ...jobs[0], companyName }]);
  }

  function setPositionTitle(positionTitle) {
    setJobs([{ ...jobs[0], positionTitle }]);
  }

  function setJobResponsibilities(jobResponsibilities) {
    setJobs([{ ...jobs[0], jobResponsibilities }]);
  }

  function setStartDate(startDate) {
    setJobs([{ ...jobs[0], startDate }]);
  }

  function setEndDate(endDate) {
    setJobs([{ ...jobs[0], endDate }]);
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormInput
        type={"text"}
        label={"Company Name"}
        name={"companyName"}
        value={jobs[0].companyName}
        setValue={setCompanyName}
        placeholder={"Generic Software Development Company"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Position Title"}
        name={"positionTitle"}
        value={jobs[0].positionTitle}
        setValue={setPositionTitle}
        placeholder={"Software Engineer"}
        required={true}
      />
      <FormInput
        type={"textarea"}
        label={"Job Responsibilities"}
        name={"jobResponsibilities"}
        value={jobs[0].jobResponsibilities}
        setValue={setJobResponsibilities}
        placeholder={"Time on the job includes..."}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Employment Start Date"}
        name={"employmentStartDate"}
        value={jobs[0].startDate}
        setValue={setStartDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Employment End Date"}
        name={"employmentEndDate"}
        value={jobs[0].endDate}
        setValue={setEndDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
    </Form>
  );
}
