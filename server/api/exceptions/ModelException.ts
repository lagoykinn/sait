export class ModelException extends Error {
    status: number;
    message: string;
    
    constructor(status,message) {
        super(message);
        this.status = status;
    }

    static ModelExists(message?) {
        return new ModelException(409, message ? message : "Has exists");
    }

    static ModelNotFound(message?) {
        return new ModelException(404, message ? message : 'Not found');
    }
}