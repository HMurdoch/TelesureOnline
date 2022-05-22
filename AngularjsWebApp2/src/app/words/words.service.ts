import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Word } from './word';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class WordsService {
  wordsUrl = 'http://localhost:5000/api/nouns';  // URL to web api
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('WordsService');
  }

  /** GET words from the server */
  getWords(): Observable<Word[]> {
    return this.http.get<Word[]>(this.wordsUrl)
      .pipe(
        catchError(this.handleError('getWords', []))
      );
  }

  /* GET words whose name contains search term */
  searchWords(term: string): Observable<Word[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('word', term) } : {};

    return this.http.get<Word[]>(this.wordsUrl, options)
      .pipe(
        catchError(this.handleError<Word[]>('searchWords', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new word to the database */
  addWord(word: Word): Observable<Word> {
    return this.http.post<Word>(this.wordsUrl, word, httpOptions)
      .pipe(
        catchError(this.handleError('addWord', word))
      );
  }
}
