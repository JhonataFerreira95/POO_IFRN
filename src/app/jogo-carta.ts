import { Jogo } from "./jogo";

export class JogoCarta extends Jogo{
    protected _idadeMinima : number

    constructor(titulo : string, anoPublicacao : Date, fabricante : string, idadeMinima : number){
        super(titulo,anoPublicacao,fabricante);
        this._idadeMinima = idadeMinima;
    }
    override exibirRegra(): void {
        this._ragras =[
            'Regra Número 1: Vence quem completar todos os nipes',
            'Regra Número 2: O coringa é a carte chefe do jogo',
            'Regra Número 3: O ultimo colocado vai ter que pagar 5 reais para cada participante'
        ]
    }
}
