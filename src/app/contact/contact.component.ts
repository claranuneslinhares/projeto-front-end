import { Component,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl:'./contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
nome: string = '';
email: string = '';
mensagem: string = '';
  
  @Output() enviarContato = new EventEmitter<{ nome: string; email: string; mensagem: string }>();

  enviarMensagem() {
    if (this.nome && this.email && this.mensagem) {
      this.enviarContato.emit({
        nome: this.nome,
        email: this.email,
        mensagem: this.mensagem
      });
      alert('Mensagem enviada com sucesso!');
      this.limparFormulario();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }

  limparFormulario() {
    this.nome = '';
    this.email = '';
    this.mensagem = '';
  }
}
