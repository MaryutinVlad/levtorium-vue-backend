class BadRequest {
  constructor(message) {
    super(message)
    this.statusCode = 400
  }
}

module.exports = BadRequest