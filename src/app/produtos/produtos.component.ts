import { Component,Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {
  produtos = ['Pica-Pau', 'Irmão do Jorel', ' Incrivel mundo de G', 'Jovens titans'];
  @Input() produtoslist: { nome: string, link: string }[] = [];
  @Input() mensagem!: string;
  @Output() eventoProd = new EventEmitter<string>();
    abrirLink(link: string) {
      this.eventoProd.emit(link);
      window.open(link, '_blank'); 
    }
  }
  


