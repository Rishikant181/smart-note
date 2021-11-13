// This file contains various validator functions related to accounting

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Validator for checking password
export function password(minLength: number, maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        return (control.value.length >= minLength && control.value.length <= maxLength) ? null : { invalidPassword: { value: control.value }};
    }
}