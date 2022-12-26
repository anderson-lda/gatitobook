import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  usuarioJaExiste(){
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) => //troca o fluxo
        this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario))
      ),
      map((usuarioExiste) => //troca o resultado
      (usuarioExiste ? { usuarioExistente: true } : null),
      first()); //encerra o observable
    }
  }
}
