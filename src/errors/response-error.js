export class ResponseError extends Error {
  constructor(code, message, data = [], errors = []) {
    super(message);
    this.code = code;
    this.data = data;
    this.errors = errors;
  }
}
