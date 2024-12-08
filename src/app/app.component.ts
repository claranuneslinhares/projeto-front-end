import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos/produtos.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from "./body/body.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProdutosComponent, BodyComponent, ContactComponent, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mensagem!: string;
mostrarMensagem: any;
receberEvento($event: string) {
throw new Error('Method not implemented.');
}
  title = 'Mundo dos desenhos';
  produtos = [
    { nome: 'Pica-Pau', link: 'https://youtu.be/ML5NbVeJuLA'},
    { nome: 'Irmão do jorel', link: 'https://youtu.be/cReHy_vzXXQ' },
    { nome: 'Incrivel mundo de Gumball', link: 'https://youtu.be/IAWDCgc3SPE' },
    { nome: 'Jovens Titãs', link: 'https://youtu.be/V3gZK0-7CQ0' }
  ];

  mensagemProdutos = 'Confira nossos desenhos animados favoritos!';
  abrirLink(link: string) {
    console.log('Redirecionando para:', link);
  }  
}

  


