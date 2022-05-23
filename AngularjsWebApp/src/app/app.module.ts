import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { GetWordsComponent } from './components/get-words/get-words.component';
import { GetWordsByNameComponent } from './components/get-words-by-name/get-words-by-name.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WordsService } from './words.service';

@NgModule({
  declarations: [
    AppComponent,
    GetWordsComponent,
    GetWordsByNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [WordsService],
  bootstrap: [AppComponent]
})

export class AppModule { }
