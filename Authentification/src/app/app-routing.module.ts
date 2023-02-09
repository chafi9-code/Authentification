import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthentificationGuard } from './authentification.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'auth', component: AuthentificationComponent},
  {path: 'auth', component: AdminComponent, canActivate:[AuthentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
