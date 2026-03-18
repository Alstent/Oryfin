class ApiErrors extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }

  static badRequest(msg) {
    return new ApiErrors(msg, 400);
  }

  static conflict(msg) {
    return new ApiErrors(msg, 409);
  }

  static unauthorized(msg) {
    return new ApiErrors(msg, 401);
  }

  static notFound(msg) {
    return new ApiErrors(msg, 404);
  }
}

export { ApiErrors };
