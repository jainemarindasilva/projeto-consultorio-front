import { PoModalComponent, PoPageAction, PoTableColumn, PoNotificationService, PoModalAction } from '@po-ui/ng-components';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

    @ViewChild('incluirPacienteModal', { static: true }) incluirPacienteModal: PoModalComponent;

    public readonly actions: Array<PoPageAction> = [
        { label: 'Incluir', action: this.incluirPaciente.bind(this) }
    ];

    public readonly columns: Array<PoTableColumn> = [
        { property: 'nome', label: 'Nome', type: 'link' },
        { property: 'idade', label: 'Idade' },
        { property: 'telefone', label: 'Telefone' },
        { property: 'email', label: 'Email' },
    ];

    public readonly items: Array<any> = [
        {
            nome: 'Germano Motin Velho', link: '/paciente-detalhe',
            idade: '10',
            telefone: '(54) 99999-6655',
            email: 'teste@gmail.com'
        },
        {
            nome: 'Marina Gobbi', link: '/paciente-detalhe',
            idade: '7',
            telefone: '(54) 99999-6655',
            email: 'teste@gmail.com'
        }
    ]

    constructor(private poNotification: PoNotificationService){}

    ngOnInit(): void {
    }

    close: PoModalAction = {
        action: () => {
          this.closeModal();
        },
        label: 'Cancelar'
    };
    
    confirm: PoModalAction = {
        action: () => {
            this.poNotification.success('Paciente incluído com sucesso.');
            this.closeModal();
        },
        label: 'Confirmar'
    };

    incluirPaciente(): void {
        this.incluirPacienteModal.open();
    }

    closeModal(): void {
        this.incluirPacienteModal.close();
    }

}
