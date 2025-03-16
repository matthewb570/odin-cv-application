export default class DateUtils {
  static formatDate(dateString) {
    const options = { year: "numeric", month: "long", timeZone: "GMT" };
    return new Intl.DateTimeFormat("en-US", options).format(
      new Date(dateString),
    );
  }
}
