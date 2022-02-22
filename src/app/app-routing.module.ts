import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StandardLayoutComponent } from './components/layouts/standard-layout/standard-layout.component';
import { NewLayoutComponent } from './components/layouts/new-layout/new-layout.component';
import { ResultPageComponent } from './components/result-page/result-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'standard-layout', component: StandardLayoutComponent },
  { path: 'new-layout', component: NewLayoutComponent },
  { path: 'result-page', component: ResultPageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
