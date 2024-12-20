export abstract class Jogo {
    _titulo : string;
    _anoPublicacao : Date;
    _fabricante : string;
    _ragras : string [] = []

    constructor(titulo : string, anoPublicacao : Date, fabricante : string){
        this._titulo = titulo;
        this._anoPublicacao = anoPublicacao;
        this._fabricante = fabricante;
    }

    exibirRegra(): void{
        this._ragras = []
    }
}
