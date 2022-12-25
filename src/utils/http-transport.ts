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

type HTTPMethod = (url: string, options?: Options) => Promise<unknown>

class HTTPTransport {

    queryStringify(data: any) {
        if (typeof data !== 'object') {
            throw new Error('Data must be object');
        }

        const keys = Object.keys(data);
        return keys.reduce((result, key, index) => {
            return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
        }, '?');
    }

    get: HTTPMethod = (url, options= {}) => {
        return this.request(url, {...options, method: Methods.GET}, options.timeout);
    };

    post: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: Methods.POST}, options.timeout);
    };

    put: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: Methods.PUT}, options.timeout);
    };

    delete: HTTPMethod = (url, options = {}) => {
        return this.request(url, {...options, method: Methods.DELETE}, options.timeout);
    };

    request = (
        url: string,
        options: Options = {},
        timeout = 5000
    ): Promise<XMLHttpRequest> =>  {
        const {headers = {}, method, data} = options;

        // @ts-ignore
        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === Methods.GET;

            xhr.open(method, isGet && !!data ? `${url}${this.queryStringify(data)}` : url);

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = () => {
                const { status, response } = xhr;
                return status === 200
                    ? resolve(response)
                    : reject(response);
            };

            resolve(xhr);

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}

export default HTTPTransport;
