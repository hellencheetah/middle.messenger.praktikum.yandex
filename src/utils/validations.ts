export enum ValidateRuleType {
    Login = 'login',
    Password = 'password',
    Email = 'email',
    Firstname = 'first_name',
    Lastname = 'second_name',
    Phone = 'phone',
    Message = 'message'
}

type ValidateRule = {
    value: string;
    type: ValidateRuleType;
}


const validations = {
    message: {
        regex: /(.|\s)*\S(.|\s)*/,
        message: 'Поле обязательно для заполнения',
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

export function validateForm (type, value) {
    let error = '';

    // switch (type) {
    //     case ValidateRuleType.Login:
    //         error = validateLogin(value);
    //         break;
    //     case ValidateRuleType.Email:
    //         error = validateEmail(value);
    //         break;
    //     case ValidateRuleType.Password:
    //         error = validatePassword(value);
    //         break;
    //     case ValidateRuleType.Firstname:
    //         error = validateName(value);
    //         break;
    //     case ValidateRuleType.Lastname:
    //         error =validateName(value);
    //         break;
    //     case ValidateRuleType.Phone:
    //         error = validatePhone(value);
    //         break;
    //     case ValidateRuleType.Message:
    //         error = validateMessage(value);
    //         break;
    // }

    const regex = validations[type].regex;

    if (!regex.test(value)) {
        error = validations[type].msg;
    }
    return error;
}

function validateLogin(value) {

}
function validateEmail(value) {

}
function validatePassword(value) {

}
function validateName(value) {

}
function validatePhone(value) {

}
function validateMessage(value) {

}
