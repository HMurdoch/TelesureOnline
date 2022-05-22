import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { WordsComponent } from './words.component';

@NgModule({
  declarations: [
    WordsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [WordsComponent]
})
export class WordsModule { }
