import { Injectable } from '@angular/core';
import { Usuario } from '../common/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loger:boolean=false;
  nombreUsuario?: string;
  apellidoUsuario?: string;

  constructor() { }
  private get usuarios(): Usuario[] {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }

  private set usuarios(usuarios: Usuario[]) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  registrarUsuario(usuario: Usuario): Observable<Usuario> {
    usuario.id = this.usuarios.length + 1;
    const usuariosActualizados = [...this.usuarios, usuario];
    this.usuarios = usuariosActualizados;
    return of(usuario);
  }

  iniciarSesion(email: string, contraseña: string): Observable<Usuario | null> {
    const usuario = this.usuarios.find(u => u.email === email && u.contraseya === contraseña);
    if (usuario) {
      this.loger = true;
      this.nombreUsuario = usuario.nombre;
      this.apellidoUsuario = usuario.apellido || '';
    }
    return of(usuario || null);
  }
  cerrarSesion() {
    this.loger = false;
    this.nombreUsuario = '';
    this.apellidoUsuario = ''; 
  }
}
