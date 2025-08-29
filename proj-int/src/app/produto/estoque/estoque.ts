import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
  produtos = [
    {nome: 'notebook', preco: 3500, estoque: 5},
    {nome: 'smartphone', preco: 2000, estoque: 10},
    {nome: 'tablet', preco: 1500, estoque: 8},
    {nome: 'smartwatch', preco: 1000, estoque: 15},
    {nome: 'fones', preco: 500, estoque: 0}
  ];

  aumentarPreco(){
    this.produtos.forEach(produto => {
      produto.preco *= 1.1;
    });
  }

  diminuirPreco(){
    this.produtos.forEach(produto => {
      produto.preco *= 0.9;
    });
  }


}
