import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss'],
  providers: [PoNotificationService]
})
export class ProfissionalComponent implements OnInit {

    @ViewChild('incluirProfissionalModal', { static: true }) incluirProfissionalModal: PoModalComponent;

    public readonly actions: Array<PoPageAction> = [
        { label: 'Incluir', action: this.incluirProfissional.bind(this) }
    ];

    public readonly columnsExport: Array<PoTableColumn> = [
        { property: 'nome', label: 'Nome', type: 'link' },
        { property: 'servico', label: 'Serviço' },
        { property: 'telefone', label: 'Telefone' },
        { property: 'email', label: 'Email' },
    ];

    public readonly itemsExport: Array<any> = [
        {
            nome: 'Milena Rizzon', link: '/profissional-detail',
            servico: 'Fonodiologia',
            telefone: '(54) 99999-6655',
            email: 'teste@gmail.com'
        },
        {
            nome: 'Milena', link: '/profissional-detail',
            servico: 'Fonodiologia',
            telefone: '(54) 99999-6655',
            email: 'teste@gmail.com'
        }
    ]

    constructor(private poNotification: PoNotificationService){}

    ngOnInit(): void {}

    close: PoModalAction = {
        action: () => {
          this.closeModal();
        },
        label: 'Cancelar'
      };
    
      confirm: PoModalAction = {
        action: () => {
          
        },
        label: 'Confirmar'
      };

    incluirProfissional(): void {
        this.incluirProfissionalModal.open();
    }

    closeModal(): void {
        this.incluirProfissionalModal.close();
    }

}
