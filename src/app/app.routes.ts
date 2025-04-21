import { Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { EditarComponent } from './vistas/editar/editar.component';
import { ReservaComponent } from './vistas/reserva/reserva.component';
export const routes: Routes = [
  { path: '', redirectTo: '/nuevo', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'nuevo', component: NuevoComponent },
  { path: 'editar', component: EditarComponent },
  { path: 'reserva', component: ReservaComponent }
]; 