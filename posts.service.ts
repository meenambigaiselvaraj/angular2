import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class postsService{
    constructor(private http: Http){
        console.log('Post service initialized.....');
    }
    getPosts(){
        // return this.http.get('file:///C:/Users/prakash/Desktop/projectss/node/index.html');
       return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json());
    }
}
