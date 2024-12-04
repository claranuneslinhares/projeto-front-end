import { Component,Output, EventEmitter } from '@angular/core';
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

  @Output() produtoSelecionado = new EventEmitter<string>();

  selecionarProduto(produto: string) {
    this.produtoSelecionado.emit(produto);
  }

}
