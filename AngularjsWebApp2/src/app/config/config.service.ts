import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
    wordsNounsUrl: string;
    wordsVerbsUrl: string;
    wordsAdjectivesUrl: string;
    wordsAdverbsUrl: string;
    wordsPronounsUrl: string;
    wordsPrepositionsUrl: string;
}

@Injectable()
export class ConfigService {
    configUrl = 'assets/config.json';
    constructor(private http: HttpClient) { }

    getConfig() {
        return this.http.get<Config>(this.configUrl);
    }

    getConfigResponse(): Observable<HttpResponse<Config>> {
        return this.http.get<Config>(
          this.configUrl, { observe: 'response' });
    }  
}