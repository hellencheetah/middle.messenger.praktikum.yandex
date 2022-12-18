export { Chats } from './chats';

const buttonOpts = {
    btnText: 'Send',
    btnType: 'submit',
    btnClass: 'chats__main-btn btn--disabled',
}

const contactsData = [
    {
        id: '1',
        name: 'Ivan Ivanov',
    },
    {
        id: '2',
        name: 'Petr Petrov',
    }
]

const choosenContact = {
    id: '1',
    name: 'Ivan Ivanov',
}

const messagesData = [
    {
        id: 2,
        my: false,
        text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.!',
        time: '12:20',
    },
    {
        id: 1,
        my: true,
        text: 'Great!',
        time: '12:20',
    },
]

