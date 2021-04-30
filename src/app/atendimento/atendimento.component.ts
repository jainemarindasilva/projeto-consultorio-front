import { PoDisclaimer, PoPageAction, PoTableColumn, PoModalComponent, PoPageFilter, PoModalAction } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {

    @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;

    filters: Array<PoDisclaimer> = [];
    filteredItems: Array<any> = [];

    public readonly filterSettings: PoPageFilter = {
        advancedAction: this.advancedFilterActionModal.bind(this),
        placeholder: 'Pesquisar'
    };

    public readonly advancedFilterPrimaryAction: PoModalAction = {
        action: () => {
          this.advancedFilterModal.close();
        },
        label: 'Pesquisar'
    };

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

    advancedFilterActionModal(): void {
        this.advancedFilterModal.open();
    }

}
