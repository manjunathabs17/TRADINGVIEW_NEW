import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { IframeComponent } from './iframe/iframe.component';
import { LearnComponent } from './components/learn/learn.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, IframeComponent, LearnComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
