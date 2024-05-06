import { Component } from '@angular/core';
import { FooterComponent } from '../../component/footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../common/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FooterComponent,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  nuevoUsuario: Usuario = {
    nombre: '',
    apellido: '',
    email: '',
    contraseya: '',
    id: 0
  };

  constructor(private authService: AuthService,private router:Router) {}

  registrarUsuario(): void {
    this.authService.registrarUsuario(this.nuevoUsuario).subscribe({
      next: (usuario) => {
        console.log('Usuario registrado correctamente:', usuario);
        this.router.navigate(['/iniciosesion']);
       
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
      }
    });
  }

}
