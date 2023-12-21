class ErrorHandler extends Error {
    status: number;
    errors: string[];
    message: string;

    constructor(status: number, message: string, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors
    }

    static UnauthorizedError(message?) {
        return new ErrorHandler(401, message ? message : "User not authorized");
    }

    static NotFound(message) {
        return new ErrorHandler(404, message);
    }

    static BadRequest(message, errors = []) {
        return new ErrorHandler(401, message, errors);
    }
}

export default ErrorHandler;
