import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StandardLayoutComponent } from './components/layouts/standard-layout/standard-layout.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { FormsModule } from '@angular/forms';
import { NewLayoutComponent } from './components/layouts/new-layout/new-layout.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { KeyboardComponent } from './components/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    StandardLayoutComponent,
    ResultPageComponent,
    NewLayoutComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
