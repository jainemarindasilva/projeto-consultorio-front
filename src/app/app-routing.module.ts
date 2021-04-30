import { AtendimentoComponent } from './atendimento/atendimento.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ReceitaComponent } from './receita/receita.component';
import { DespesaComponent } from './despesa/despesa.component';

const routes: Routes = [
    {path: 'despesa', component: DespesaComponent},
    {path: 'receita', component: ReceitaComponent},
    {path: 'paciente', component: PacienteComponent},
    {path: 'profissional', component: ProfissionalComponent},
    {path: 'atendimento', component: AtendimentoComponent}    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
