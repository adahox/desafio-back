class ErrorHandler {
    code: number;
    message: string;

    constructor(code: number, message: string) {
        this.code = code; 
        this.message = message;
    }

    static badRequest(message: string) {
        return new ErrorHandler(400, message);
    }

    static internal(message: string) {
        return new ErrorHandler(500, message);
    }

    static notFound(message: string) {
        return new ErrorHandler(404, message);
    }
}


export default ErrorHandler;