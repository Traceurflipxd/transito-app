import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  rutUsuario: string = '19.238.208-4';
  especialidad: string = 'PRIMERA LICENCIA B, C, D, E Y PRIMERA LICENCIA PROFESIONAL A1, A2, A3, A4, A5';
  
  fechaSeleccionada: Date | null = null;
  horaSeleccionada: string | null = null;
  horasDisponibles: string[] = [
    '09:00', '09:30', '10:00', '10:30', '11:00', 
    '11:30', '12:00', '12:30', '14:00', '14:30', 
    '15:00', '15:30', '16:00', '16:30'
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onDateSelected(event: Date): void {
    this.fechaSeleccionada = event;
    // Aquí podrías hacer una llamada al servicio para obtener las horas disponibles
    console.log('Fecha seleccionada:', event);
  }

  seleccionarHora(hora: string): void {
    this.horaSeleccionada = hora;
    console.log('Hora seleccionada:', hora);
  }

  volver(): void {
    this.router.navigate(['/login']);
  }

  continuar(): void {
    if (this.puedeAvanzar()) {
      // Aquí irá la lógica para continuar con la reserva
      console.log('Continuando con la reserva...');
    }
  }

  puedeAvanzar(): boolean {
    return this.fechaSeleccionada !== null && this.horaSeleccionada !== null;
  }
}
