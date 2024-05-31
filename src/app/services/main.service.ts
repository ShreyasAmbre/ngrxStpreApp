import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Post } from '../models/allInterfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  postUrl:string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl).pipe(
      map((res: Post[]) => res),
      catchError(error => throwError(() => error))
    );
  }


  addPost(obj:Post): Observable<any>{
    return this.http.post(this.postUrl, obj).pipe(
      map(res => {
        return res
      }),
      catchError(error => {
        throw error
      })
    )
  }

}
