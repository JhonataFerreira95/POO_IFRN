import { Jogo } from "./jogo";

export class Biblioteca {
    listaDejogos : Jogo [] = [];

    adicionarJogo(nome: Jogo) : void{
        this.listaDejogos.push(nome);
    }
    removerJogo(): void{

    }
    exibirLista (): void{
        this.listaDejogos.forEach(jogos => console.log(jogos))
    } 
}
