import { Component, input } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";
import { ProdutosComponent } from "../produtos/produtos.component";
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ContactComponent, ProdutosComponent,],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  readonly cartoonTitle = input<string>('Bem-vindo à nossa página de desenhos animados!');
contentTitle: any;

}


