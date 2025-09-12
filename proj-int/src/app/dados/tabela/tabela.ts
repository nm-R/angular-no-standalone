import { Component } from '@angular/core';
import { Produto } from '../modelo/produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  dataSource: Produto[] = [
    { nome: 'Produto 1', valor: 10.0 },
    { nome: 'Produto 2', valor: 20.0 },
    { nome: 'Produto 3', valor: 30.0 }
  ]
  displayedColumns: string[] = ['nome', 'valor', 'acoes'];
  
}
