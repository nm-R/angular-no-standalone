import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
    mostrarMensagem = true;
   

    listaAluno = [
            {id:12, nome:'Ana', status: false},
             {id:19, nome:'Bia', status: true},
             {id:25, nome:'Carlos', status: true} ];

             statusshow(status: boolean): string {
                return status ? 'Ativo' : 'Inativo';
                }

          
             toggleMensagem() {
                 this.mostrarMensagem = !this.mostrarMensagem;
             }

             
               tamanhofont = 20;
              aumentarFonte() {
                this.tamanhofont = this.tamanhofont + 5;
              }
              diminuirFonte() {
                this.tamanhofont = this.tamanhofont - 5;
              }
               
}
