import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './word';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class WordsByNameService {
  // Base url
  baseurl = 'http://localhost:5000/api/words';
  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  };

//   // POST
//   CreateWord(data): Observable<Word> {
//     return this.http
//       .post<Word>(
//         this.baseurl + '/',
//         JSON.stringify(data),
//         this.httpOptions
//       )
//       .pipe(retry(1), catchError(this.errorHandle));
//   }

  // GET Nouns
  GetWordsByNameNouns(): Observable<Word> {
    console.log('Getting nouns');
    return this.http
      .get<Word>(this.baseurl + '/nouns/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Verbs
  GetWordsByNameVerbs(): Observable<Word> {
    console.log('Getting verbs');
    return this.http
      .get<Word>(this.baseurl + '/verbs/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Adjectives
  GetWordsByNameAdjectives(): Observable<Word> {
    console.log('Getting adjectives');
    return this.http
      .get<Word>(this.baseurl + '/adjectives/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Adverbs
  GetWordsByNameAdverbs(): Observable<Word> {
    console.log('Getting adverbs');
    return this.http
      .get<Word>(this.baseurl + '/adverbs/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Pronouns
  GetWordsByNamePronouns(): Observable<Word> {
    console.log('Getting pronouns');
    return this.http
      .get<Word>(this.baseurl + '/pronouns/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Prepositions
  GetWordsByNamePrepositions(): Observable<Word> {
    console.log('Getting prepositions');
    return this.http
      .get<Word>(this.baseurl + '/prepositions/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // GET Conjunctions
  GetWordsByNameConjunctions(): Observable<Word> {
    console.log('Getting conjunctions');
    return this.http
      .get<Word>(this.baseurl + '/conjunctions/')
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