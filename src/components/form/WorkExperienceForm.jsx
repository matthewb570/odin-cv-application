import { useState } from "react";
import Form from "./Form";
import FormInput from "../input/FormInput";

export default function WorkExperienceForm() {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [jobResponsibilities, setJobResponsibilities] = useState("");
  const [employmentStartDate, setEmploymentStartDate] = useState("");
  const [employmentEndDate, setEmploymentEndDate] = useState("");

  return (
    <Form>
      <FormInput
        type={"text"}
        label={"Company Name"}
        name={"companyName"}
        value={companyName}
        setValue={setCompanyName}
        placeholder={"Generic Software Development Company"}
        required={true}
      />
      <FormInput
        type={"text"}
        label={"Position Title"}
        name={"positionTitle"}
        value={positionTitle}
        setValue={setPositionTitle}
        placeholder={"Software Engineer"}
        required={true}
      />
      <FormInput
        type={"textarea"}
        label={"Job Responsibilities"}
        name={"jobResponsibilities"}
        value={jobResponsibilities}
        setValue={setJobResponsibilities}
        placeholder={"Time on the job includes..."}
        required={true}
      />
      <FormInput
        type={"date"}
        label={"Employment Start Date"}
        name={"employmentStartDate"}
        value={employmentStartDate}
        setValue={setEmploymentStartDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
      <FormInput
        type={"date"}
        label={"Employment End Date"}
        name={"employmentEndDate"}
        value={employmentEndDate}
        setValue={setEmploymentEndDate}
        placeholder={"mm/dd/yyyy"}
        required={true}
      />
    </Form>
  );
}
