/**
* HttpClient
*   This client will return a standard Http client that is built into angular2.
*   
*   This client will auth the X-UserToken to the request header for authenticated API requests
*   once deployed to the ServiceNow platform. 
*
*   If your application is running on the localhost development server, it will work
*   without this custom wrapper. However, your appplication will break once deployed.
*    
*/

import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    console.log(window.location);
    if (typeof window['_g_ck'] !== 'undefined' && window['_g_ck'] !== '') {
      headers.append('X-UserToken', window['_g_ck']);
    }
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }

  delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    });
  }
}