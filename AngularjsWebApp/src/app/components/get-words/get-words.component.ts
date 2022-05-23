import { Component, OnInit } from '@angular/core';
import { WordsService } from '../../shared/words.service';

@Component({
  selector: 'app-get-words',
  templateUrl: './get-words.component.html',
  styleUrls: ['./get-words.component.css']
})
export class GetWordsComponent implements OnInit {
  WordsNounsList: any = [];
  WordsVerbsList: any = [];
  WordsAdjectivesList: any = [];
  WordsAdverbsList: any = [];
  WordsPronounsList: any = [];
  WordsPrepositionsList: any = [];
  WordsConjunctionsList: any = [];

  constructor(public wordsService: WordsService) { }

  ngOnInit(): void {
    this.loadWordsNouns();
    this.loadWordsVerbs();
    this.loadWordsAdjectives();
    this.loadWordsAdverbs();
    this.loadWordsPronouns();
    this.loadWordsPrepositions();
    this.loadWordsConjunctions();
  }

  loadWordsNouns() {
    return this.wordsService.GetWordsNouns().subscribe((data: {}) => {
      this.WordsNounsList = data;
    });  
  }

  loadWordsVerbs() {
    return this.wordsService.GetWordsVerbs().subscribe((data: {}) => {
      this.WordsVerbsList = data;
    });  
  }

  loadWordsAdjectives() {
    return this.wordsService.GetWordsAdjectives().subscribe((data: {}) => {
      this.WordsAdjectivesList = data;
    });  
  }

  loadWordsAdverbs() {
    return this.wordsService.GetWordsAdverbs().subscribe((data: {}) => {
      this.WordsAdverbsList = data;
    });  
  }

  loadWordsPronouns() {
    return this.wordsService.GetWordsPronouns().subscribe((data: {}) => {
      this.WordsPronounsList = data;
    });  
  }

  loadWordsPrepositions() {
    return this.wordsService.GetWordsPrepositions().subscribe((data: {}) => {
      this.WordsPrepositionsList = data;
    });  
  }

  loadWordsConjunctions() {
    return this.wordsService.GetWordsConjunctions().subscribe((data: {}) => {
      this.WordsConjunctionsList = data;
    });  
  }
}
