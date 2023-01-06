export enum Methods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE=  'DELETE',
};

type Options = {
    method?: Methods;
    headers?: Record<string, string>;
    data?: any;
    timeout?: number;
};

export interface IError {
    text: string;
    code: number;
}

type HTTPMethod = (url: string, data?: unknown, headers?: Record<string, string>) => Promise<unknown>

// function queryStringify(data: any) {
//     if (typeof data !== 'object') {
//         throw new Error('Data must be object');
//     }
//
//     const keys = Object.keys(data);
//     return keys.reduce((result, key, index) => {
//         return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
//     }, '?');
// }

class HTTPTransport {

    static API_URL = 'https://ya-praktikum.tech/api/v2';
    url: string;

    constructor(type: string) {
        this.url = `${HTTPTransport.API_URL}${type}`;
    }

    get: HTTPMethod = (url, data, headers) => {
        return this.request(this.url + url, {method: Methods.GET, data, headers});
    };

    post: HTTPMethod = (url, data, headers) => {
        return this.request(this.url + url, {method: Methods.POST, data, headers});
    };

    put: HTTPMethod = (url, data, headers) => {
        return this.request(this.url + url, {method: Methods.PUT, data, headers});
    };

    delete: HTTPMethod = (url, data, headers) => {
        return this.request(this.url + url, {method: Methods.DELETE, data, headers});
    };

    request = (url: string, options: Options = {}): Promise<XMLHttpRequest> =>  {
        const { method, data = {}, headers = {} } = options;

        // @ts-ignore
        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.withCredentials = true;
            xhr.responseType = 'json';

            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(xhr)
                } else {
                    const error = { text: xhr.response.reason, code: xhr.status };
                    reject(error);
                }
            };
            xhr.onabort = () => reject({ reason: 'Abort' });
            xhr.onerror = () => reject({ reason: 'Error' });
            xhr.ontimeout = () => reject({ reason: 'Timeout' });



            if (method === Methods.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}

export default HTTPTransport;
