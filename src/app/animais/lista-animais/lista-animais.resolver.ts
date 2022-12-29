import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

//objetivo: carregar informação antes da rota ser resolvida
//aqui a busca por animais é feita antes do componente estiver pronto

@Injectable({
  providedIn: 'root'
})
export class ListaAnimaisResolver implements Resolve<Animais> {

  constructor(private animaisService: AnimaisService, private usuarioService: UsuarioService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Animais> {
    return this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaUsuario(userName);
      }),
      take(1) //faz 1 vez esse fluxo
    );
  }
}
