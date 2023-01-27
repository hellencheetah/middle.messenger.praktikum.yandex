import { expect } from 'chai';
import HttpTransport from "./http-transport";
var FakeXMLHTTPRequests = require('fake-xml-http-request');
var requests: any[] = [];

(global as any).XMLHttpRequest = function() {
    var r =  new FakeXMLHTTPRequests()
    requests.push(r)
    return r
}

describe('HttpTransport', () => {

    it('should be a proper url', () => {
        const instance = new HttpTransport('/chats');
        instance.get('/');
        const request = requests[0];
        expect(request.url).to.eq('https://ya-praktikum.tech/api/v2/chats/?');
    });

    it('should be a proper method', () => {
        const instance = new HttpTransport('/chats');
        instance.put('/', {});
        const request = requests[1];
        expect(request.method).to.eq('PUT');
    });
});
