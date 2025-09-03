function Encomenda(massa, molhadoCom, recheio, cobertura) {
    this.massa = massa;
    this.molhadoCom = molhadoCom;
    this.recheio = recheio;
    this.cobertura = cobertura;
}

Encomenda.prototype.getDescricao = function() {
    return `O bolo será com a massa ${this.massa}, molhado com ${this.molhadoCom}, terá o recheio de ${this.recheio} e será com a cobertura de ${this.cobertura}.`;
};

function BoloDeCasamento(massa, molhadoCom, recheio, cobertura) {
    Encomenda.call(this, massa, molhadoCom, recheio, cobertura);
    this.tipo = "Bolo de Casamento";
}
BoloDeCasamento.prototype = Object.create(Encomenda.prototype);
BoloDeCasamento.prototype.constructor = BoloDeCasamento;

function BoloDeAniversario(massa, molhadoCom, recheio, cobertura) {
    Encomenda.call(this, massa, molhadoCom, recheio, cobertura);
    this.tipo = "Bolo de Aniversário";
}
BoloDeAniversario.prototype = Object.create(Encomenda.prototype);
BoloDeAniversario.prototype.constructor = BoloDeAniversario;

const BoloDeCasamentoDaMaria = new BoloDeCasamento("Chocolate", "leite", "trufa", "ganache");
const BoloDeAniversarioDoManoel = new BoloDeAniversario("Branca", "licor", "creme", "chantilly");
const BoloDeCasamentoDoJoaquim = new BoloDeCasamento("Chocolate", "guaraná", "brigadeiro", "buttercream");

console.log(BoloDeAniversarioDoManoel.getDescricao());
console.log(BoloDeCasamentoDaMaria.getDescricao());
console.log(BoloDeCasamentoDoJoaquim.getDescricao());
