import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Books } from '../models/Books';

@Injectable( {
	providedIn: 'root'
})
export class BooksService {
	// books :Books[];
	

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Books> {
    return this.http.get<Books>('https://www.googleapis.com/books/v1/users/117658592008928068402/bookshelves/1001/volumes');
  }

}
