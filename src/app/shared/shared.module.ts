import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';

//classe para reunir módulos importados por mais de um outro módulo

@NgModule({
  imports: [
    CommonModule,
    MensagemModule,
    ReactiveFormsModule
  ],
  exports: [
    MensagemModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
