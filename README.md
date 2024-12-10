# ProjetoFrontEnd
# Componentes: Laridsa Sales Alves e Maria Clara Nunes Linhares
Projeto como uma página web sobre desenhos animados 
Ao clicar em um dos produtos(desenhos animados) o usuário será redirecionado para um link no YouTube com um episódio do desenho.
# Comando para instalação do angular
npm install -g @angular/cli
# Comando para rodar o site 
ng serve
# Criação de componentes 
ng genarate component header 
ng generate component body 
ng genarate component produtos 
ng genarate component contact 
ng genarate component sidebar
ng generate component footer 
# Usando elementos pedidos
1. O @Input foi utilizado para passar a lista de produtos e uma mensagem personalizada ao componente.
2. O @Output foi utilizado para emitir o link do produto selecionado.
3. A interpolação foi utilizada para exibir informações como nome e mensagens no HTML.
4. O Property Binding foi utilizado para definir dinamicamente os atributos das imagens.
5. O Event Binding foi utilizado para capturar o clique do botão.
6. O *ngIf e *ngElse foram usados para exibir mensagens condicionais.
7. O *ngFor foi usado para iterar sobre a lista de produtos e renderizar dinamicamente.





