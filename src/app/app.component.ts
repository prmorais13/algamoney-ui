import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra pão', dataVencimento: '26/05/2018', dataPagamento: null,
      valor: 4.55, pessoa: 'Padaria Parque Verde' },
    { tipo: 'DESPESA', descricao: 'Compra frutas', dataVencimento: '30/05/2018', dataPagamento: null,
      valor: 12.30, pessoa: 'Atacadão das frutas' },
    { tipo: 'RECEITA', descricao: 'Salário PMN', dataVencimento: '30/05/2018', dataPagamento: '30/05/2018',
      valor: 4700, pessoa: 'Prefeitura de Natal' }
  ];
}
