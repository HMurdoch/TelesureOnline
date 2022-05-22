import { Component, OnInit } from '@angular/core';
import { WordService } from '../../shared/word.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-words',
  templateUrl: './get-words.component.html',
  styleUrls: ['./get-words.component.css']
})
export class GetWordsComponent implements OnInit {
  WordsList: any = [];

  constructor(public wordService: WordService) { }

  ngOnInit(): void {
    this.loadWordsNouns();
    // this.loadWordsVerbs();
    // this.loadWordsAdjectives();
    // this.loadWordsAdverbs();
    // this.loadWordsPronouns();
    // this.loadWordsPrepositions();
    // this.loadWordsConjunctions();
  }

  loadWordsNouns() {
    return this.wordService.GetWordsNouns().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }

  loadWordsVerbs() {
    return this.wordService.GetWordsVerbs().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }

  loadWordsAdjectives() {
    return this.wordService.GetWordsAdjectives().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }

  loadWordsAdverbs() {
    return this.wordService.GetWordsAdverbs().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }

  loadWordsPronouns() {
    return this.wordService.GetWordsPronouns().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }

  loadWordsPrepositions() {
    return this.wordService.GetWordsPrepositionss().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }

  loadWordsConjunctions() {
    return this.wordService.GetWordsConjunctions().subscribe((data: {}) => {
      this.WordsList = data;
    });  
  }
}
