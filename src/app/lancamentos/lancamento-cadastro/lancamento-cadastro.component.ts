import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  tipos: any[];
  categorias: any[];
  pessoas: Array<any>;

  constructor() { }

  ngOnInit() {
    this.tipos = [
      {label: 'Receita', value: 'RECEITA'},
      {label: 'Despesa', value: 'DESPESA'}
    ];

    this.categorias = [
      {id: 1, label: 'Alimentação', value: 1},
      {id: 2, label: 'Educação', value: 2},
      {id: 3, label: 'Saúde', value: 3},
      {id: 4, label: 'Lazer', value: 4}
    ];

    this.pessoas = [
      {id: 1, label: 'Paulo Morais', value: 1},
      {id: 2, label: 'Patrícia Morais', value: 2},
      {id: 3, label: 'Fernanda Morais', value: 3},
      {id: 4, label: 'Diogo Morais', value: 4},
      {id: 5, label: 'Polliana Morais', value: 5},
      {id: 6, label: 'Ana Paula Morais', value: 6},
      {id: 7, label: 'Ricardo Morais', value: 7}
    ];
  }
}
