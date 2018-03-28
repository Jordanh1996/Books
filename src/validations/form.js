import { ValidatorForm } from 'react-material-ui-form-validator';
import {toAlphaNumeric, toUpperCase} from './validations';

export const requiredRule = () => {
    return ValidatorForm.addValidationRule('Required', (value) => {
        const Trimmed = value.trim();
        if (Trimmed.length > 0) {
            return true;
        };
        return false;
    });
};

export const alphanumericRule = () => {
    return ValidatorForm.addValidationRule('AlphaNumeric', (value) => {
        const Alpha = toAlphaNumeric(value).trim();
        if (Alpha.length > 0) {
            return true;
        };
        return false;
    });
};

export const itemExistRule = (getParams) => {
    return ValidatorForm.addValidationRule('TitleTaken', (value) => {
        const { old, arr, prop } = getParams();
        const validatedValue = toUpperCase(toAlphaNumeric(value)).trim();
        for (let i = 0 ; i < arr.length ; i++) {
            if (arr[i][prop] === validatedValue && validatedValue !== old) {
                return false;
            };
        };
        return true
    });
};