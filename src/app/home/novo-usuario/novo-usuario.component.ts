import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

//formulário reativo (diferentemente do login (formulário por template))

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService,
    private router: Router) { }

  ngOnInit(): void { //ngOnInit é executado após a classe ter sido criada com sucesso
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      fullName: ['',[Validators.required, Validators.minLength(4)]],
      userName: ['',[minusculoValidator,this.usuarioExistenteService.usuarioJaExiste()]], 
      password: [''],
    },
    {
      validators: [usuarioSenhaIguaisValidator],
    });
  }

  cadastrar(){
    if(this.novoUsuarioForm.valid){
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate(['']);
      }, (error) => { console.log(error); });
    }
  }
}
