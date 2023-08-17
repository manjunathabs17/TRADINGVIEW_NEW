import { LearnComponent } from './components/learn/learn.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  // { path: '', component: HomePageComponent },
  { path: 'iframe', component: HomePageComponent },
  {
    path: 'learn',
    component: LearnComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
