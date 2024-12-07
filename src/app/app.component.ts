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
  title = 'Mundo dos desenhos';

  produtos = ['Pica-Pau', 'Irmão do Jorel', ' Incrivel mundo de Gumball', 'Jovens titans'];
  mostrarMensagem = true;
  mensagem = "Mensagem do Componente Pai";
  receberEvento(mensagem: string) {
    console.log(mensagem);
    this.mensagem = mensagem;


  }
}

