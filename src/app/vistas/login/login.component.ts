import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { LoginI } from '../../modelos/login.interfaces';
import { ResponseI } from '../../modelos/response.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  }

  onLogin() {
    const formValue: LoginI = this.loginForm.value as LoginI;
    this.api.loginByEmail(formValue).subscribe(data => {
      console.log(data);
    });
  }
}



