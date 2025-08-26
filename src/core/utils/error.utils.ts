import {ValidationError} from "../../drivers/types/validationError";

export const createErrorMessage = (error: ValidationError[]): {errorMessage: ValidationError[] } => {
    return {errorMessage: error}
}