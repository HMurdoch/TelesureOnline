import { Component, OnInit } from '@angular/core';
import { WordsByNameService } from '../../shared/words-by-name.service';

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

  constructor(public wordsByNameService: WordsByNameService) { }

  ngOnInit(): void {
    this.loadWordsByNameNouns();
    this.loadWordsByNameVerbs();
    this.loadWordsByNameAdjectives();
    this.loadWordsByNameAdverbs();
    this.loadWordsByNamePronouns();
    this.loadWordsByNamePrepositions();
    this.loadWordsByNameConjunctions();
  }

  loadWordsByNameNouns(data) {
    return this.wordsByNameService.GetWordsByNameNouns(data.prefix).subscribe((data: {}) => {
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
