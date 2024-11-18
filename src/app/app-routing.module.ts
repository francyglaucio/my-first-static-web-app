import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloWorld2Component } from './hello-world2/hello-world2.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'hello-world2', component: HelloWorld2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }