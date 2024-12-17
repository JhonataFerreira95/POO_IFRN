export abstract class Jogo  {
    protected _titulo : string;
    protected _anoPublicacao : Date;
    protected _fabricante : string;
    protected _ragras : string [] = []

    constructor(titulo : string, anoPublicacao : Date, fabricante : string){
        this._titulo = titulo;
        this._anoPublicacao = anoPublicacao;
        this._fabricante = fabricante;
    }

    exibirRegra(): void{
        this._ragras = []
    }
}
