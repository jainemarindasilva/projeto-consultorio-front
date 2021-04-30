import { PoDisclaimer, PoPageAction, PoTableColumn } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

    filters: Array<PoDisclaimer> = [];
    filteredItems: Array<any> = [];

    public readonly actions: Array<PoPageAction> = [
        { label: 'Incluir', action: this.novoAtendimento.bind(this) }
    ];

    public readonly columns: Array<PoTableColumn> = [
        { property: 'paciente', label: 'Paciente', type: 'link' },
        { property: 'servico', label: 'Serviço' },
        { property: 'profissional', label: 'Profissional' },
        { property: 'data', label: 'Data' },
    ];

    public readonly items: Array<any> = [
        {
            
        },
        {
            
        }
    ]

    constructor() { }

    ngOnInit(): void {
    }

    novoAtendimento(): void {
        
    }

    

}
