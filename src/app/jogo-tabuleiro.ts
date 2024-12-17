import { Jogo } from "./jogo";

export class JogoTabuleiro extends Jogo {
    protected _numeroJogadores : number;

    constructor(titulo : string, anoPublicacao : Date, fabricante : string ,numeroJogadores : number){
        super(titulo,anoPublicacao,fabricante);
        this._numeroJogadores = numeroJogadores;
    }

    override exibirRegra(): void {
        this._ragras = [
            'Regra número 1: Vence quem tiver a pontuação Maxima',
            'Regra Número 2: Não é permitido 5 minutos sem perder a amizade',
            'Regra Número 3: O ultimo colocado será a mulher do padre'
        ]
    }
    
}
