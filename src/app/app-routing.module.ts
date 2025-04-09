import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', loadChildren: () => import('./vistas/login/login.module').then(m => m.LoginModule)},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'nuevo', component: NuevoComponent},
      {path: 'editar', component: EditarComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DashboardComponent, NuevoComponent, EditarComponent];
