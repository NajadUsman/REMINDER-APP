import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventhistoryComponent } from './eventhistory/eventhistory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:`dashboard`,component:DashboardComponent 
  },
  {
    path:``,component: LoginComponent 
  },
  {
    path:`register`,component: RegisterComponent
  },
  {
  path:`eventhistory`,component: EventhistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
