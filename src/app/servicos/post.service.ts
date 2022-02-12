import { Injectable } from '@angular/core';
import {Post} from '../Interfaces/Post';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {

  headers: new HttpHeaders(
    {
      'content-type' : 'application/json'
    }
  )

}


@Injectable({
  providedIn: 'root'
})
export class PostService {


  private URL = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/post';


  constructor(private http: HttpClient) { }

  pegaPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.URL);
  }

  criaPost(post : Post) :Observable<Post>{
      return this.http.post<Post>(this.URL,post,httpOptions);
  }

  pegaPostUnico(id:number): Observable<Post>{
    return this.http.get<Post>( `${this.URL}/${id}`);
  }

  
}
