import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForwardComponent } from './forward/forward.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {
    path:'forward',
    component: ForwardComponent,
  },
  {
    path:'',
    component: LoginPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
