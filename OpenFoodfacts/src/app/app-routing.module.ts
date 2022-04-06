import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CaratteristicheComponent } from './caratteristiche/caratteristiche.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent},
  { path: 'caratteristiche', component: CaratteristicheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
