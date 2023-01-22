import router from './router/router';

export const redirect = (error: unknown) => {
    switch (error) {
        case 'Cookie is not valid':
            router.go('/page5');
            break;
        case 'User already in system':
            router.go('/messenger');
            break;
    }
};
