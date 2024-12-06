import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() mensagem: string = '';
  @Output() eventoContato = new EventEmitter<string>();

  enviarMensagem() {
    this.eventoContato.emit('Mensagem Enviada pelo Componente Contact');
  }

}
