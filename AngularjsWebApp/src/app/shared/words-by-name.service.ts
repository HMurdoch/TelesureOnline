import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Word } from './word';
import { Sentence } from './sentence';
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

    return this.http
      .get<Word>(this.baseurl + '/nouns/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Noun
  PostWordNoun(word: string): Observable<Word> {
    console.log('Posting noun');
    return this.http
      .post<Word>(this.baseurl + '/nouns/' + word, { title: 'Telesure POST Noun' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // GET Verbs
  GetWordsByNameVerbs(prefix: string): Observable<Word> {
    console.log('Getting verbs');
    prefix = prefix.trim();

    return this.http
      .get<Word>(this.baseurl + '/verbs/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Verb
  PostWordVerb(word: string): Observable<Word> {
    console.log('Posting verb');
    return this.http
      .post<Word>(this.baseurl + '/verbs/' + word, { title: 'Telesure POST Verb' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // GET Adjectives
  GetWordsByNameAdjectives(prefix: string): Observable<Word> {
    console.log('Getting adjectives');
    prefix = prefix.trim();

    return this.http
      .get<Word>(this.baseurl + '/adjectives/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Adjective
  PostWordAdjective(word: string): Observable<Word> {
    console.log('Posting adjective');
    return this.http
      .post<Word>(this.baseurl + '/adjectives/' + word, { title: 'Telesure POST Adjective' })
      .pipe(retry(1), catchError(this.errorHandle));
  }
  
  // GET Adverbs
  GetWordsByNameAdverbs(prefix: string): Observable<Word> {
    console.log('Getting adverbs');
    prefix = prefix.trim();

    return this.http
      .get<Word>(this.baseurl + '/adverbs/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Adverb
  PostWordAdverb(word: string): Observable<Word> {
    console.log('Posting adverb');
    return this.http
      .post<Word>(this.baseurl + '/adverbs/' + word, { title: 'Telesure POST Adverb' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // GET Pronouns
  GetWordsByNamePronouns(prefix: string): Observable<Word> {
    console.log('Getting pronouns');
    prefix = prefix.trim();

    return this.http
      .get<Word>(this.baseurl + '/pronouns/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Pronoun
  PostWordPronoun(word: string): Observable<Word> {
    console.log('Posting noun');
    return this.http
      .post<Word>(this.baseurl + '/pronouns/' + word, { title: 'Telesure POST Pronoun' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // GET Prepositions
  GetWordsByNamePrepositions(prefix: string): Observable<Word> {
    console.log('Getting prepositions');
    prefix = prefix.trim();

    return this.http
      .get<Word>(this.baseurl + '/prepositions/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Prepositions
  PostWordPreposition(word: string): Observable<Word> {
    console.log('Posting preposition');
    return this.http
      .post<Word>(this.baseurl + '/prepositions/' + word, { title: 'Telesure POST Preposition' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // GET Conjunctions
  GetWordsByNameConjunctions(prefix: string): Observable<Word> {
    console.log('Getting conjunctions');
    prefix = prefix.trim();

    return this.http
      .get<Word>(this.baseurl + '/conjunctions/' + prefix)
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Conjunctions
  PostWordConjunction(word: string): Observable<Word> {
    console.log('Posting conjunction');
    return this.http
      .post<Word>(this.baseurl + '/conjunctions/' + word, { title: 'Telesure POST Conjunction' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

  // GET Conjunctions
  GetSentencesFromDatabase(): Observable<Sentence> {
    console.log('Getting sentences');
    return this.http
      .get<Sentence>(this.baseurl + '/sentences/')
      .pipe(retry(1), catchError(this.errorHandle));
  }
  // POST Conjunctions
  PostSentenceToDatabase(sentence: string): Observable<Word> {
    console.log('Posting conjunction');
    return this.http
      .post<Word>(this.baseurl + '/sentences/' + sentence, { title: 'Telesure POST Sentence' })
      .pipe(retry(1), catchError(this.errorHandle));
  }

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