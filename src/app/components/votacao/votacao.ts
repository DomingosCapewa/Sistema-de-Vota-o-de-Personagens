import { Component, signal } from '@angular/core';
import { Personagem } from "../personagem/personagem";

@Component({
  selector: 'app-votacao',
  imports: [Personagem],
  templateUrl: './votacao.html',
  styleUrl: './votacao.css'
})
export class Votacao {
    personagens = [
      {
        nome: "Black Miranha",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8k__JGFiK3CMlsZLss1-s85tYbeXW9Fz9h6LqX_TI8fkyx9zqzr2MSZO-3CMDriOmGyrVwBK8iHQYcMk7dGrie1_hH4QWhRtxHuOdTcPJgkgKRTCTuKG8ntB4Cf21SlhuZNVjLQ3PPQA/s1600/boteco+de+oa+%25286%2529.jpg",
        votos: 0
      },
      {
        nome: "Deadpoll",
        imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKEvHHyPqRMOH1AB16lV4AZhVBtCPZiKp4Qe8FbS3m87dWApgcKcZaGwa3-wR8h5uVGmKnkDsLYicpQIYJWYRa6ff-7wWYZup18_3Ki1d9slKLZnsI0Oa3ah0bIgEeylbahfh3ysU_tQI/s1600/boteco+de+oa+%25285%2529.jpg",
        votos: 0
      }
    ];
    
    votar(index: number) {
      this.personagens[index].votos++;
    }
    // limpar(index: number) {
    //   this.personagens[index].votos--;
    // }
    
}