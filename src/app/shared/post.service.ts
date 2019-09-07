import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, FireCreateResponse } from './interfaces';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class PostService {

    constructor(
        private http: HttpClient
    ) {

    }

    create(post: Post): Observable<Post> {
        return this.http.post(`${environment.fireDbUrl}posts.json`, post)
            .pipe(
                map((response: FireCreateResponse) => {
                    return {
                        ...post,
                        id: response.name,
                        date: new Date(post.date)
                    };
                })
            );
    }

    getAll(): Observable<Post[]> {
        return this.http.get(`${environment.fireDbUrl}posts.json`)
            .pipe(
                map((response: {[key: string]: any}) => {
                    return Object
                        .keys(response)
                        .map(key => ({
                            ...response[key],
                            id: key,
                            date: new Date(response[key].date)
                        }));
                })
            );
    }

    getById(id: string): Observable<Post> {
        return this.http.get<Post>(`${environment.fireDbUrl}posts/${id}.json`)
            .pipe(
                map((post: Post) => {
                    return {
                        ...post,
                        id,
                        date: new Date(post.date)
                    };
                })
            );
    }

    update(post: Post): Observable<Post> {
        return this.http.patch<Post>(`${environment.fireDbUrl}posts/${post.id}.json`, post);
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.fireDbUrl}posts/${id}.json`);
    }

}
