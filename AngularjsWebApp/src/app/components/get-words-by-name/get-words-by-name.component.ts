import { Component, OnInit, Injectable } from '@angular/core';
import { WordsByNameService } from '../../shared/words-by-name.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Word } from './word';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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
  SentencesList: any = [];
  WordsByNameNounsList: any = [];
  WordsByNameVerbsList: any = [];
  WordsByNameAdjectivesList: any = [];
  WordsByNameAdverbsList: any = [];
  WordsByNamePronounsList: any = [];
  WordsByNamePrepositionsList: any = [];
  WordsByNameConjunctionsList: any = [];
  wordForm: FormGroup;
  wordNoun: FormControl;
  wordPrefixNoun: FormControl;
  wordVerb: FormControl;
  wordPrefixVerb: FormControl;
  wordAdjective: FormControl;
  wordPrefixAdjective: FormControl;
  wordAdverb: FormControl;
  wordPrefixAdverb: FormControl;
  wordPronoun: FormControl;
  wordPrefixPronoun: FormControl;
  wordPreposition: FormControl;
  wordPrefixPreposition: FormControl;
  wordConjunction: FormControl;
  wordPrefixConjunction: FormControl;
  NewWord: Word = new Word();
  sentence: string = '';
  
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
    this.wordNoun = new FormControl("");
    this.wordPrefixNoun = new FormControl("");
    this.wordVerb = new FormControl("");
    this.wordPrefixVerb = new FormControl("");
    this.wordAdjective = new FormControl("");
    this.wordPrefixAdjective = new FormControl("");
    this.wordAdverb = new FormControl("");
    this.wordPrefixAdverb = new FormControl("");
    this.wordPronoun = new FormControl("");
    this.wordPrefixPronoun = new FormControl("");
    this.wordPreposition = new FormControl("");
    this.wordPrefixPreposition = new FormControl("");
    this.wordConjunction = new FormControl("");
    this.wordPrefixConjunction = new FormControl("");
    }

  createForm() {
    this.wordForm = new FormGroup({
      wordNoun: this.wordNoun,
      wordPrefixNoun: this.wordPrefixNoun,
      wordVerb: this.wordVerb,
      wordPrefixVerb: this.wordPrefixVerb,
      wordAdjective: this.wordAdjective,
      wordPrefixAdjective: this.wordPrefixAdjective,
      wordAdverb: this.wordAdverb,
      wordPrefixAdverb: this.wordPrefixAdverb,
      wordPronoun: this.wordPronoun,
      wordPrefixPronoun: this.wordPrefixPronoun,
      wordPreposition: this.wordPreposition,
      wordPrefixPreposition: this.wordPrefixPreposition,
      wordConjunction: this.wordConjunction,
      wordPrefixConjunction: this.wordPrefixConjunction,      
    });
  }

  onSubmit() {
    //this.loadWordsByNameNouns(this.wordForm.controls['wordPrefixNoun'].value)
  }

  addWordNounToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordNoun'].value + ' ';
  }
  loadWordsByNameNouns(prefix: string) {
    return this.wordsByNameService.GetWordsByNameNouns(prefix).subscribe((data: {}) => {
      this.WordsByNameNounsList = data;
    });  
  }
  postWordNoun(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'n.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordNoun(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNameNouns(word);
    return newdata;
  }

  addWordVerbToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordVerb'].value + ' ';
  }
  loadWordsByNameVerbs(prefix: string) {
    return this.wordsByNameService.GetWordsByNameVerbs(prefix).subscribe((data: {}) => {
      this.WordsByNameVerbsList = data;
    });  
  }
  postWordVerb(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'v.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordVerb(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNameVerbs(word);
    return newdata;
  }

  addWordAdjectiveToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordAdjective'].value + ' ';
  }
  loadWordsByNameAdjectives(prefix: string) {
    return this.wordsByNameService.GetWordsByNameAdjectives(prefix).subscribe((data: {}) => {
      this.WordsByNameAdjectivesList = data;
    });  
  }
  postWordAdjective(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'a.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordAdjective(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNameAdjectives(word);
    return newdata;
  }

  addWordAdverbToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordAdverb'].value + ' ';
  }
  loadWordsByNameAdverbs(prefix: string) {
    return this.wordsByNameService.GetWordsByNameAdverbs(prefix).subscribe((data: {}) => {
      this.WordsByNameAdverbsList = data;
    });  
  }
  postWordAdverb(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'adv.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordAdverb(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNameAdverbs(word);
    return newdata;
  }

  addWordPronounToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordPronoun'].value + ' ';
  }
  loadWordsByNamePronouns(prefix: string) {
    return this.wordsByNameService.GetWordsByNamePronouns(prefix).subscribe((data: {}) => {
      this.WordsByNamePronounsList = data;
    });  
  }
  postWordPronoun(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'pron.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordPronoun(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNamePronouns(word);
    return newdata;
  }

  addWordPrepositionToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordPreposition'].value + ' ';
  }
  loadWordsByNamePrepositions(prefix: string) {
    return this.wordsByNameService.GetWordsByNamePrepositions(prefix).subscribe((data: {}) => {
      this.WordsByNamePrepositionsList = data;
    });  
  }
  postWordPreposition(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'prep.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordPreposition(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNamePrepositions(word);
    return newdata;
  }

  addWordConjunctionToSentence() {
    console.log('Adding word');
    this.sentence = this.sentence + this.wordForm.controls['wordConjunction'].value + ' ';
  }
  loadWordsByNameConjunctions(prefix: string) {
    return this.wordsByNameService.GetWordsByNameConjunctions(prefix).subscribe((data: {}) => {
      this.WordsByNameConjunctionsList = data;
    });  
  }
  postWordConjunction(word: string) {
    this.NewWord.word = word;
    this.NewWord.wordtype = 'conj.';
    this.NewWord.definition = 'Custom word';
    var newdata = this.wordsByNameService.PostWordConjunction(word).subscribe((data: {}) => {
      
    });
    this.loadWordsByNameConjunctions(word);
    return newdata;
  }  

  loadSentences() {
    return this.wordsByNameService.GetSentencesFromDatabase().subscribe((data: {}) => {
      this.SentencesList = data;
    });  
  }
  postSentenceToDatabase() {
    var newdata = this.wordsByNameService.PostSentenceToDatabase(this.sentence).subscribe((data: {}) => {
    });
    this.loadSentences();
    return newdata;
  }
}
