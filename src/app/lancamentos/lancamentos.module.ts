import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';

import {CurrencyMaskModule} from 'ng2-currency-mask';

import {LancamentoCadastroComponent} from './lancamento-cadastro/lancamento-cadastro.component';
import {LancamentosPequisaComponent} from './lancamentos-pequisa/lancamentos-pequisa.component';
import {LancamentoGridComponent} from './lancamento-grid/lancamento-grid.component';

@NgModule({
  imports: [
    CommonModule,

    TableModule,
    SelectButtonModule,
    CalendarModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    ButtonModule,
    TooltipModule,

    CurrencyMaskModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPequisaComponent,
    LancamentoGridComponent
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPequisaComponent
  ]
})
export class LancamentosModule { }
