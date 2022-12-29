import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Animais } from '../animais';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {

  //animais$ !: Observable<Animais>;
  //constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService) { }
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const username = usuario.name ?? '';
        return this.animaisService.listaUsuario(username);
      })
    )*/
    this.activatedRoute.params.subscribe(param => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }

}
