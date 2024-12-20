import { Jogo } from "./jogo";

export class Biblioteca {
     private listaDejogos : Jogo [] = [];

    adicionarJogo(nome: Jogo) : void{
        this.listaDejogos.push(nome);
    }
    removerJogo(indice : number): void{
        this.listaDejogos.splice(indice,1);
    }
    exibirLista (): Jogo[] {
        return this.listaDejogos
    } 
}
