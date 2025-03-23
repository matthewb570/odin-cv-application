export default class StringUtils {
  static isEmpty(string) {
    return string === undefined || string === null || string === "";
  }
}
