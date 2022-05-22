import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GetWordsComponent } from './components/get-words/get-words.component';
import { GetWordsByNameComponent } from './components/get-words-by-name/get-words-by-name.component';

@NgModule({
  declarations: [
    AppComponent,
    GetWordsComponent,
    GetWordsByNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
