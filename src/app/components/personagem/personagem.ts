import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-personagem',
  imports: [CommonModule],
  templateUrl: './personagem.html',
  styleUrl: './personagem.css'
})
export class Personagem {
  // nome = input<string>();
  // imagem = input<string>();
  // totalVotos = input<number>();
  personagens = input<Array<{ nome: string; imagem: string; votos: number }>>();

  // Output para comunicar o voto ao componente pai
  votar = output<number>();
  limpar = output<number>();

  votarPersonagem(index: number) {
    this.votar.emit(index);
  }

  limparValores() {
      
  }
 
}
