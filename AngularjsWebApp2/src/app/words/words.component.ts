import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Word } from './word';
import { WordsService } from './words.service';

@Component({
  selector: 'app-root',
  templateUrl: './words.component.html',
  providers: [WordsService],
  styleUrls: ['./words.component.css']
})

export class WordsComponent implements OnInit {
  words: Word[] = [];
  editWord: Word | undefined; // the word currently being edited
  wordName = '';

  constructor(private wordsService: WordsService) {}

  @ViewChild('wordEditInput')
  set wordEditInput(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus();
    }
  }

  ngOnInit() {
    this.getWords();
  }

  getWords(): void {
    this.wordsService.getWords()
      .subscribe(words => (this.words = words));
  }

  add(word: string, wordtype: string): void {
    word = word.trim();
    if (!word) {
      return;
    }

    wordtype = wordtype.trim();
    if (!wordtype) {
      return;
    }

    // The server will generate the id for this new word
    const newWord: Word = { word, wordtype } as Word;
    this.wordsService
      .addWord(newWord)
      .subscribe(word => this.words.push(word));
  }

  search(searchTerm: string) {
    if (searchTerm) {
      this.wordsService
        .searchWords(searchTerm)
        .subscribe(words => (this.words = words));
    } else {
      this.getWords();
    }
  }
}
