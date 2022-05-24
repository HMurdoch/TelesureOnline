import { Component, OnInit, Injectable } from '@angular/core';
import { WordsByNameService } from '../../shared/words-by-name.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Word } from './word';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Sentence } from './sentence';

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
  sentenceForm: FormGroup;
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
  sentenceControl: FormControl;
  sentenceListControl: FormControl;
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
    this.loadSentences();
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
    this.sentenceControl = new FormControl("");
    this.sentenceListControl = new FormControl("");
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
      sentenceControl: this.sentenceControl
    });

    this.sentenceForm = new FormGroup({
      sentenceControl: this.sentenceListControl
    });
  }

  onSubmit() {
    //this.loadWordsByNameNouns(this.wordForm.controls['wordPrefixNoun'].value)
  }

  addWordNounToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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

  addWordVerbToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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

  addWordAdjectiveToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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

  addWordAdverbToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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

  addWordPronounToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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

  addWordPrepositionToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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

  addWordConjunctionToSentence(word: string) {
    console.log('Adding word');
    this.sentence = this.sentence + word + ' ';
    this.sentenceControl.setValue(this.sentence);
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
    console.log('Loading sentences...')
    var returnData = this.wordsByNameService.GetSentencesFromDatabase().subscribe((data: {}) => {
      this.SentencesList = data;
    });
    return returnData; 
  }
  changeSentence(sentence: string){
    console.log('Sentence:' + sentence)
    this.sentence = sentence;
  }
  postSentenceToDatabase(sentence: string) {
    var newdata = this.wordsByNameService.PostSentenceToDatabase(sentence).subscribe((data: {}) => {
      this.ngOnInit();
    });
    this.sentence = '';
    return newdata;
  }
}
