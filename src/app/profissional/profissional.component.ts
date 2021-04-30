import { Component, OnInit, ViewChild } from '@angular/core';
import { PoComboOption, PoModalAction, PoModalComponent, PoNotificationService, PoPageAction, PoPageFilter, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.scss'],
  providers: [PoNotificationService]
})
export class ProfissionalComponent implements OnInit {

    @ViewChild('advancedFilterModal', { static: true }) advancedFilterModal: PoModalComponent;
    @ViewChild('incluirProfissionalModal', { static: true }) incluirProfissionalModal: PoModalComponent;

    listaEspecialidades: Array<PoComboOption>;

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
        { label: 'Incluir', action: this.incluirProfissional.bind(this) }
    ];

    public readonly columns: Array<PoTableColumn> = [
        { property: 'nome', label: 'Nome', type: 'link' },
        { property: 'especialidade', label: 'Especialidade' },
        { property: 'telefone', label: 'Telefone' },
        { property: 'email', label: 'Email' },
    ];

    public readonly items: Array<any> = [
        {
            nome: 'Milena Rizzon', link: '/profissional-detalhe',
            especialidade: 'Fonodiologia',
            telefone: '(54) 99999-6655',
            email: 'teste@gmail.com'
        },
        {
            nome: 'Vívian Lima', link: '/profissional-detalhe',
            especialidade: 'Psicologia',
            telefone: '(54) 99999-6655',
            email: 'teste@gmail.com'
        }
    ]

    constructor(private poNotification: PoNotificationService){}

    ngOnInit(): void {
        this.listaEspecialidades = this.getEspecialidade();
    }

    close: PoModalAction = {
        action: () => {
          this.closeModal();
        },
        label: 'Cancelar'
      };
    
    confirm: PoModalAction = {
        action: () => {
            this.poNotification.success('Profissional incluído com sucesso.');
            this.closeModal();
        },
        label: 'Confirmar'
    };

    closeModal(): void {
        this.incluirProfissionalModal.close();
    }

    incluirProfissional(): void {
        this.incluirProfissionalModal.open();
    }   

    getEspecialidade() {
        return [
          { label: 'Fonoaudiologia', value: 'fonodiologia' },
          { label: 'Psicologia ', value: 'psicologia ' },
          { label: 'Pedagogia ', value: 'pedagogia ' },
          { label: 'Terapia Ocupacional', value: 'tocupacional' }
        ];
    }

    advancedFilterActionModal(): void {
        this.advancedFilterModal.open();
    }

}
