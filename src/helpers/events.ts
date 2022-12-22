import {validateForm, ValidateRuleType} from "../utils/validations";

export function onBlur($event: FocusEvent, type: string) {
    const element = $event.target as HTMLInputElement;
    let error = validateForm(type, element.value);
    const err = document.getElementById(`${type}_error`);
    err.innerHTML = error;
}

export function onFocus(type) {
    const err = document.getElementById(`${type}_error`);
    err.innerHTML = '';
}
