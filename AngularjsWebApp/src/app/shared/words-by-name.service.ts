import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Word } from './word';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class WordsByNameService {
  // Base url
  baseurl = 'http://localhost:5000/api/words-by-name';
  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

  // GET Nouns
  GetWordsByNameNouns(prefix: string): Observable<Word> {
    console.log('Getting nouns');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/nouns/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Verbs
  GetWordsByNameVerbs(prefix: string): Observable<Word> {
    console.log('Getting verbs');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/verbs/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Adjectives
  GetWordsByNameAdjectives(prefix: string): Observable<Word> {
    console.log('Getting adjectives');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/adjectives/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Adverbs
  GetWordsByNameAdverbs(prefix: string): Observable<Word> {
    console.log('Getting adverbs');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/adverbs/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Pronouns
  GetWordsByNamePronouns(prefix: string): Observable<Word> {
    console.log('Getting pronouns');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/pronouns/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Prepositions
  GetWordsByNamePrepositions(prefix: string): Observable<Word> {
    console.log('Getting prepositions');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/prepositions/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Conjunctions
  GetWordsByNameConjunctions(prefix: string): Observable<Word> {
    console.log('Getting conjunctions');
    prefix = prefix.trim();
    const options = prefix ?
     { params: new HttpParams().set('prefix', prefix) } : {};

    return this.http
      .get<Word>(this.baseurl + '/conjunctions/', options)
      .pipe(retry(1), catchError(this.errorHandle));
  }

//   // GET
//   GetIssue(id): Observable<Word> {
//     return this.http
//       .get<Word>(this.baseurl + '/Wordtracking/' + id)
//       .pipe(retry(1), catchError(this.errorHandle));
//   }
//   // PUT
//   UpdateWord(id, data): Observable<Word> {
//     return this.http
//       .put<Word>(
//         this.baseurl + '/Wordtracking/' + id,
//         JSON.stringify(data),
//         this.httpOptions
//       )
//       .pipe(retry(1), catchError(this.errorHandle));
//   }
//   // DELETE
//   DeleteWord(id) {
//     return this.http
//       .delete<Word>(this.baseurl + '/Wordtracking/' + id, this.httpOptions)
//       .pipe(retry(1), catchError(this.errorHandle));
//   }

  // Error handling
  errorHandle(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}