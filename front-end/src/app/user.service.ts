import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from './user';
import { Observable } from 'rxjs/Observable';

import { AppConfig } from './app.config';

@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }

    public getAll(): Observable<Response> {
        return this.http.get(`${this.config.API_URL}/users`, this.jwt()).map((response: Response) => response.json());
    }

    public getById(id: number): Observable<Response> {
        return this.http.get(`${this.config.API_URL}/users/id`, this.jwt()).map((response: Response) => response.json());
    }

    public create(user: User): Observable<Response> {
        return this.http.post(`${this.config.API_URL}/users`, user, this.jwt()).map((response: Response) => response.json());
    }

    public update(user: User): Observable<Response> {
        return this.http.put(`${this.config.API_URL}/users/user.id`, user, this.jwt()).map((response: Response) => response.json());
    }

    public delete(id: number): Observable<Response> {
        return this.http.delete(`${this.config.API_URL}/users/id`, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods
    private jwt(): RequestOptions {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}