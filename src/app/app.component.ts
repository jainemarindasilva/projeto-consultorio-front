import { Component } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    collapsedMenu: boolean = true;

    menus: Array<PoMenuItem> = [
        { label: 'Atendimentos', icon: 'po-icon po-icon-history', shortLabel: 'Atendim.',link:'./atendimento'},
        { label: 'Finanças', icon: 'po-icon po-icon-finance', shortLabel: 'Finanças',  subItems: [
            { label: 'Receitas', link:'./receita'},
            { label: 'Despesas', link:'./despesa'}                           
        ]},        
        { label: 'Pacientes', icon: 'po-icon po-icon-user', shortLabel: 'Pacientes', link:'./paciente', subItems: []},
        { label: 'Configurações', icon: 'po-icon po-icon-settings', shortLabel: 'Config.', subItems: [
            { label: 'Profissionais', link:'./profissional'}
        ]}
    ];

    notificationActions: Array<PoToolbarAction> = [
        { label: 'Incluído com sucesso!'},
    ];

}
