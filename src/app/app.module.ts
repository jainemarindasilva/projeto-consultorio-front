import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule, PoModalModule} from '@po-ui/ng-components';
import { DespesaComponent } from './despesa/despesa.component';
import { ReceitaComponent } from './receita/receita.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ProfissionalComponent } from './profissional/profissional.component';

@NgModule({
  declarations: [
    AppComponent,
    DespesaComponent,
    ReceitaComponent,
    PacienteComponent,
    ProfissionalComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoTemplatesModule,
    PoModule,
    RouterModule.forRoot([]),     
    PoModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
