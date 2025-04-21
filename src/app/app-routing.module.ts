import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { LoginComponent } from './vistas/login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: '/nuevo', pathMatch: 'full'},
      { path: 'login', loadComponent: () => import('./vistas/login/login.component').then(m => m.LoginComponent)},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'nuevo', component: NuevoComponent},
      {path: 'editar', component: EditarComponent},
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, NuevoComponent, EditarComponent, LoginComponent];
