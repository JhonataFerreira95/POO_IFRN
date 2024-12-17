import { Jogo } from "./jogo";

export class Biblioteca {
    listaDejogos : Jogo [] = [];

    adicionarJogo(nome: Jogo) : void{
        this.listaDejogos.push(nome);
    }
    removerJogo(indice : number): void{
        this.listaDejogos.splice(indice,1);
    }
    exibirLista (): void{
        this.listaDejogos.forEach(jogos => console.log(jogos))
    } 
}
