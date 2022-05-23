import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetWordsComponent } from './components/get-words/get-words.component';
import { GetWordsByNameComponent } from './components/get-words-by-name/get-words-by-name.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'get-words-by-name' },
  { path: 'get-words', component: GetWordsComponent },
  { path: 'get-words-by-name', component: GetWordsByNameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
