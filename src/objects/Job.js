import { v4 as uuidv4 } from "uuid";

export default class Job {
  id;
  companyName;
  positionTitle;
  jobResponsibilities;
  startDate;
  endDate;

  constructor() {
    this.id = uuidv4();
    this.companyName = "";
    this.positionTitle = "";
    this.jobResponsibilities = "";
    this.startDate = "";
    this.endDate = "";
  }
}
