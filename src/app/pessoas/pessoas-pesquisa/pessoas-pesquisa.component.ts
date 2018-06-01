import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent implements OnInit {

  pessoas: any[];

  constructor() { }

  ngOnInit() {
    this.pessoas = [
      { nome: 'Paulo Morais', cidade: 'Parnamirim', estado: 'RN', status: true },
      { nome: 'Patricia Morais', cidade: 'Parnamirim', estado: 'RN', status: true },
      { nome: 'Fernanda Morais', cidade: 'Parnamirim', estado: 'RN', status: true },
      { nome: 'Diogo Morais', cidade: 'Parnamirim', estado: 'RN', status: false },
      { nome: 'Polliana Morais', cidade: 'Natal', estado: 'RN', status: false },
      { nome: 'Ana Paula Morais', cidade: 'Parnamirim', estado: 'RN', status: true },
      { nome: 'Ricardo Morais', cidade: 'Natal', estado: 'RN', status: true }
    ];
  }

}
