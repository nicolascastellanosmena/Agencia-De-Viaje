import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-iniciosesion',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './iniciosesion.component.html',
  styleUrl: './iniciosesion.component.css'
})
export class IniciosesionComponent {
  credenciales: { email: string; contraseya: string } = {
    email: '',
    contraseya: ''
  };
  error: boolean = false;


  constructor(private authService: AuthService,private router:Router) {}

  iniciarSesion(): void {
    this.authService.iniciarSesion(this.credenciales.email, this.credenciales.contraseya).subscribe({
      next: (usuario) => {
        if (usuario) {
          console.log('Inicio de sesión exitoso:', usuario);
          this.router.navigate(['/home']);

          
        } else {
          console.log('Error de inicio de sesión');
          this.error=true;
        }
      },
      error: (error) => {
        console.error('Error al iniciar sesión:', error);
        
      }
    });
  }
}
