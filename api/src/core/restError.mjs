export default class RestError extends Error {
  constructor(error) {
    const e = JSON.parse(error.message);
    super(e.message);
    this.statusCode = e.status || 500;
    this.reason = e.message;
  }
}