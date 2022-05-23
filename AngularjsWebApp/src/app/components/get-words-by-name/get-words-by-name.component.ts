import { Component, OnInit, Injectable } from '@angular/core';
import { WordsByNameService } from '../../shared/words-by-name.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// @Injectable({
//   providedIn: 'root'
// })
// export class Service {
//   constructor(private http: HttpClient) { }

//   opts = [];

//   getData() {
//     return this.opts.length ?
//       of(this.opts) :
//       this.http.get<any>('http://localhost:5000/api/words-by-name/nouns/ab').pipe(tap(data => this.opts = data))
//   }
// }

@Component({
  selector: 'app-get-words-by-name',
  templateUrl: './get-words-by-name.component.html',
  styleUrls: ['./get-words-by-name.component.css']
})

export class GetWordsByNameComponent implements OnInit {
  WordsByNameNounsList: any = [];
  WordsByNameVerbsList: any = [];
  WordsAdjectivesList: any = [];
  WordsAdverbsList: any = [];
  WordsPronounsList: any = [];
  WordsPrepositionsList: any = [];
  WordsConjunctionsList: any = [];
  wordForm: FormGroup;
  wordPrefixNoun: FormControl;
  
  constructor(public wordsByNameService: WordsByNameService, public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
   //this.loadWordsByNameNouns();
    // this.loadWordsByNameVerbs();
    // this.loadWordsByNameAdjectives();
    // this.loadWordsByNameAdverbs();
    // this.loadWordsByNamePronouns();
    // this.loadWordsByNamePrepositions();
    // this.loadWordsByNameConjunctions();
  }

  createFormControls() {
    this.wordPrefixNoun = new FormControl("");
  }

  createForm() {
    this.wordForm = new FormGroup({
      wordPrefixNoun: this.wordPrefixNoun
    });
  }

  // filter(val: string): Observable<any[]> {
  // // call the service which makes the http-request
  //   return this.service.getData()
  //     .pipe(
  //       map(response => response.filter(option => { 
  //         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
  //       }))
  //     )
  // }  


  onSubmit() {
    //this.loadWordsByNameNouns(this.wordForm.controls['wordPrefixNoun'].value)
  }

  loadWordsByNameNouns(prefix: string) {
    return this.wordsByNameService.GetWordsByNameNouns(prefix).subscribe((data: {}) => {
      this.WordsByNameNounsList = data;
    });  
  }

  loadWordsByNameVerbs(data) {
    return this.wordsByNameService.GetWordsByNameVerbs(data.prefix).subscribe((data: {}) => {
      this.WordsByNameVerbsList = data;
    });  
  }

  loadWordsByNameAdjectives(data) {
    return this.wordsByNameService.GetWordsByNameAdjectives(data.prefix).subscribe((data: {}) => {
      this.WordsAdjectivesList = data;
    });  
  }

  loadWordsByNameAdverbs(data) {
    return this.wordsByNameService.GetWordsByNameAdverbs(data.prefix).subscribe((data: {}) => {
      this.WordsAdverbsList = data;
    });  
  }

  loadWordsByNamePronouns(data) {
    return this.wordsByNameService.GetWordsByNamePronouns(data.prefix).subscribe((data: {}) => {
      this.WordsPronounsList = data;
    });  
  }

  loadWordsByNamePrepositions(data) {
    return this.wordsByNameService.GetWordsByNamePrepositions(data.prefix).subscribe((data: {}) => {
      this.WordsPrepositionsList = data;
    });  
  }

  loadWordsByNameConjunctions(data) {
    return this.wordsByNameService.GetWordsByNameConjunctions(data.prefix).subscribe((data: {}) => {
      this.WordsConjunctionsList = data;
    });  
  }
}
