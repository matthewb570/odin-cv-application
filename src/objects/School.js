import { v4 as uuidv4 } from "uuid";

export default class School {
  id;
  name;
  degreeTitle;
  startDate;
  endDate;

  constructor() {
    this.id = uuidv4();
    this.name = "";
    this.degreeTitle = "";
    this.startDate = "";
    this.endDate = "";
  }
}
