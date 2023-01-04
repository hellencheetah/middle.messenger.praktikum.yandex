import store from "./store";

class Services {
    public onClick(event: Event): void {
        const element = event.target as HTMLElement;

        if (element.dataset.value === 'chat-item') {
            const chatId = element.dataset.id;
            const chatTitle = element.dataset.title;

            store.setState('currentChatId', chatId);
            store.setState('currentChatTitle', chatTitle);
        }
    }
}

export default new Services();
