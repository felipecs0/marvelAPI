import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailsComponent } from './modules/hero-details/hero-details.component';
import { HeroListComponent } from './modules/hero-list/hero-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListComponent
  },
  {
    path: 'detalhes/:id',
    component: HeroDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
