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

  loadWordsByNameNouns() {
    return this.wordsByNameService.GetWordsByNameNouns().subscribe((data: {}) => {
      this.WordsByNameNounsList = data;
    });  
  }

  loadWordsByNameVerbs() {
    return this.wordsByNameService.GetWordsByNameVerbs().subscribe((data: {}) => {
      this.WordsByNameVerbsList = data;
    });  
  }

  loadWordsByNameAdjectives() {
    return this.wordsByNameService.GetWordsByNameAdjectives().subscribe((data: {}) => {
      this.WordsAdjectivesList = data;
    });  
  }

  loadWordsByNameAdverbs() {
    return this.wordsByNameService.GetWordsByNameAdverbs().subscribe((data: {}) => {
      this.WordsAdverbsList = data;
    });  
  }

  loadWordsByNamePronouns() {
    return this.wordsByNameService.GetWordsByNamePronouns().subscribe((data: {}) => {
      this.WordsPronounsList = data;
    });  
  }

  loadWordsByNamePrepositions() {
    return this.wordsByNameService.GetWordsByNamePrepositions().subscribe((data: {}) => {
      this.WordsPrepositionsList = data;
    });  
  }

  loadWordsByNameConjunctions() {
    return this.wordsByNameService.GetWordsByNameConjunctions().subscribe((data: {}) => {
      this.WordsConjunctionsList = data;
    });  
  }
}
