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
    this.loadWordsByNameNouns('A');
    this.loadWordsByNameVerbs('A');
    this.loadWordsByNameAdjectives('A');
    this.loadWordsByNameAdverbs('A');
    this.loadWordsByNamePronouns('A');
    this.loadWordsByNamePrepositions('A');
    this.loadWordsByNameConjunctions('A');
  }

  createFormControls() {
    this.wordPrefixNoun = new FormControl("");
  }

  createForm() {
    this.wordForm = new FormGroup({
      wordPrefixNoun: this.wordPrefixNoun
    });
  }

  onSubmit() {
    //this.loadWordsByNameNouns(this.wordForm.controls['wordPrefixNoun'].value)
  }

  loadWordsByNameNouns(prefix: string) {
    return this.wordsByNameService.GetWordsByNameNouns(prefix).subscribe((data: {}) => {
      this.WordsByNameNounsList = data;
    });  
  }

  loadWordsByNameVerbs(prefix: string) {
    return this.wordsByNameService.GetWordsByNameVerbs(prefix).subscribe((data: {}) => {
      this.WordsByNameVerbsList = data;
    });  
  }

  loadWordsByNameAdjectives(prefix: string) {
    return this.wordsByNameService.GetWordsByNameAdjectives(prefix).subscribe((data: {}) => {
      this.WordsAdjectivesList = data;
    });  
  }

  loadWordsByNameAdverbs(prefix: string) {
    return this.wordsByNameService.GetWordsByNameAdverbs(prefix).subscribe((data: {}) => {
      this.WordsAdverbsList = data;
    });  
  }

  loadWordsByNamePronouns(prefix: string) {
    return this.wordsByNameService.GetWordsByNamePronouns(prefix).subscribe((data: {}) => {
      this.WordsPronounsList = data;
    });  
  }

  loadWordsByNamePrepositions(prefix: string) {
    return this.wordsByNameService.GetWordsByNamePrepositions(prefix).subscribe((data: {}) => {
      this.WordsPrepositionsList = data;
    });  
  }

  loadWordsByNameConjunctions(prefix: string) {
    return this.wordsByNameService.GetWordsByNameConjunctions(prefix).subscribe((data: {}) => {
      this.WordsConjunctionsList = data;
    });  
  }
}
