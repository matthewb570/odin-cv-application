import Form from "./Form";
import FormInput from "../input/FormInput";
import FormSelect from "../input/FormSelect";
import { useState } from "react";
import Job from "../../objects/Job";

export default function WorkExperienceForm({ jobs, setJobs, onSubmit }) {
  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id);

  const selectedJobIndex = jobs.findIndex((job) => job.id === selectedJobId);

  function setCompanyName(companyName) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].companyName = companyName;
    setJobs(updatedJobs);
  }

  function setPositionTitle(positionTitle) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].positionTitle = positionTitle;
    setJobs(updatedJobs);
  }

  function setJobResponsibilities(jobResponsibilities) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].jobResponsibilities = jobResponsibilities;
    setJobs(updatedJobs);
  }

  function setStartDate(startDate) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].startDate = startDate;
    setJobs(updatedJobs);
  }

  function setEndDate(endDate) {
    const updatedJobs = [...jobs];
    updatedJobs[selectedJobIndex].endDate = endDate;
    setJobs(updatedJobs);
  }

  function handleAddClick() {
    const newJob = new Job();
    setJobs([...jobs, newJob]);
    setSelectedJobId(newJob.id);
  }

  function handleDeleteClick() {
    const updatedJobs = [...jobs];
    updatedJobs.splice(selectedJobIndex, 1);
    setJobs(updatedJobs);
    setSelectedJobId(
      selectedJobIndex === jobs.length - 1
        ? updatedJobs[updatedJobs.length - 1].id
        : jobs[selectedJobIndex + 1].id,
    );
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className="form-row">
        <FormSelect
          label={"Company"}
          name={"selectedJob"}
          value={selectedJobId}
          setValue={setSelectedJobId}
          required={false}
          options={jobs.map((job) => {
            return {
              value: job.id,
              displayName: job.companyName,
            };
          })}
          className={"fill"}
        />
        <button type="button" onClick={handleAddClick}>
          Add
        </button>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <FormInput
        type={"text"}
        label={"Company Name"}
        name={"companyName"}
        value={jobs[selectedJobIndex].companyName}
        setValue={setCompanyName}
        placeholder={"Generic Software Development Company"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Position Title"}
        name={"positionTitle"}
        value={jobs[selectedJobIndex].positionTitle}
        setValue={setPositionTitle}
        placeholder={"Software Engineer"}
        required={true}
      />
      <FormInput
        type={"textarea"}
        label={"Job Responsibilities"}
        name={"jobResponsibilities"}
        value={jobs[selectedJobIndex].jobResponsibilities}
        setValue={setJobResponsibilities}
        placeholder={"Time on the job includes..."}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Employment Start Date"}
        name={"employmentStartDate"}
        value={jobs[selectedJobIndex].startDate}
        setValue={setStartDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
      <FormInput
        type={"month"}
        label={"Employment End Date"}
        name={"employmentEndDate"}
        value={jobs[selectedJobIndex].endDate}
        setValue={setEndDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
    </Form>
  );
}
