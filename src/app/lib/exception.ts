export class AuthRequiredError extends Error{
    constructor(message = 'Auth is required to access this resources') {
    super(message)
    this.name = "AuthRequiredError"
    }
}