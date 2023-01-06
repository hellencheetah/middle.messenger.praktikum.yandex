export enum ValidateRuleType {
    Login = 'login',
    Password = 'password',
    Email = 'email',
    Firstname = 'first_name',
    Lastname = 'second_name',
    Phone = 'phone',
    Message = 'message',
    DisplayName = 'display_name',
}

export enum FormValidityType {
    Valid = 'valid',
    Invalid = 'invalid',
}

type ValidatationItem = {
    regex: any;
    message: string;
    msg: string;
}

const validations: Record<string, ValidatationItem> = {
    message: {
        regex: /^[-\s]+(\s+[-\s]+)*$/,
        message: 'Поле обязательно для заполнения',
        msg: 'Поле обязательно для заполнения',
    },
    first_name: {
        regex: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        message: 'Допустимы латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).',
        msg: 'Введите корректное имя',
    },
    second_name: {
        regex: /^[А-ЯЁA-Z][А-ЯЁA-Zа-яёa-z-]+$/,
        message: 'Допустимы латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).',
        msg: 'Введите корректную фамилию',
    },
    login: {
        regex: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
        message: 'Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
        msg: 'Введите корректный логин',
    },
    display_name: {
        regex: /^(?=.*[a-zA-Z])([a-zA-Z0-9-_]){3,20}$/,
        message: 'Логин должен быть от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
        msg: 'Введите корректный никнейм',
    },
    email: {
        regex: /^([\w.-])+@([\w.-])+\.([A-Za-z]{2,4})$/,
        message: 'Введите корректный email',
        msg: 'Введите корректный email',
    },
    password: {
        regex: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/,
        message: 'Пароль должен быть от 8 до 40 символов, хотя бы одна заглавная буква и цифра.',
        msg: 'Пароль слишком простой',
    },
    phone: {
        regex: /^[+-d]?\d{10,15}$/,
        message: 'Телефон должен быть от 10 до 15 символов, состоять из цифр, может начинаться с плюса.',
        msg: 'Введите корректный телефон',
    },
};

export function validateForm (type: string, value: string) {
    if (type === ValidateRuleType.Message) {
        return validateMessageField(value);
    }
    let error = '';
    const regex = validations[type].regex;

    if (value.length === 0) {
        error = 'Поле обязательно для заполнения';
    } else if (!regex.test(value)) {
        error = validations[type].msg;
    }
    return error;
}

export function validateFullForm(formId: string) {
    // Получаем форму в виде объекта
    const form = getDataFromForm(formId);

    // Создаем объект ошибок
    const errorsObject: Record<string, string> = {}
    const formKeys = Object.keys(form);
    formKeys.forEach(key => {
        errorsObject[key] = validateForm(key, form[key])
    })

    // Устанавливаем ошибки в соответствующие блоки
    const errorKeys = Object.keys(errorsObject);
    const formInvalid = errorKeys.some(key => errorsObject[key] !== '');

    if (formInvalid) {
        errorKeys.forEach(key => {
            const errorElem = document.getElementById(`${key}_error`) as HTMLElement;
            errorElem.innerHTML = errorsObject[key];
        })

        return 'invalid';
    }

    return form;
}

function validateMessageField(value: string) {
    const { message: { regex, msg } } = validations;
    if (value.length === 0 || regex.test(value)) {
        return msg;
    }
    return '';
}

export function getDataFromForm(formId: string) {
    const formElement = document.getElementById(formId) as HTMLFormElement;
    const formData = new FormData(formElement);
    let form: any = {};
    for (let [key, value] of formData.entries()) {
        form[key] = value;
    }
    return form;
}
