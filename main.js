function Encomenda(nomeCliente, massa, molhadoCom, recheio, cobertura) {
    this.nomeCliente = nomeCliente;
    this.massa = massa;
    this.molhadoCom = molhadoCom;
    this.recheio = recheio;
    this.cobertura = cobertura;
}

Encomenda.prototype.getDescricao = function() {
    let tipoTexto = this.tipo ? `${this.tipo}: ` : "";
    return `${tipoTexto}O bolo do(a) cliente ${this.nomeCliente} será com a massa ${this.massa}, molhado com ${this.molhadoCom}, terá o recheio de ${this.recheio} e será com a cobertura de ${this.cobertura}.`;
};

function BoloDeCasamento(nomeCliente, massa, molhadoCom, recheio, cobertura) {
    Encomenda.call(this, nomeCliente, massa, molhadoCom, recheio, cobertura);
    this.tipo = "Bolo de Casamento";
}
BoloDeCasamento.prototype = Object.create(Encomenda.prototype);
BoloDeCasamento.prototype.constructor = BoloDeCasamento;

function BoloDeAniversario(nomeCliente, massa, molhadoCom, recheio, cobertura) {
    Encomenda.call(this, nomeCliente, massa, molhadoCom, recheio, cobertura);
    this.tipo = "Bolo de Aniversário";
}
BoloDeAniversario.prototype = Object.create(Encomenda.prototype);
BoloDeAniversario.prototype.constructor = BoloDeAniversario;

const form = document.getElementById("formPedido");
const pedidosDiv = document.getElementById("pedidos");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nomeCliente = document.getElementById("nomeCliente").value;
    const massa = document.getElementById("massa").value;
    const molhadoCom = document.getElementById("molhadoCom").value;
    const recheio = document.getElementById("recheio").value;
    const cobertura = document.getElementById("cobertura").value;
    const tipo = document.getElementById("tipoBolo").value;

    let bolo;
    if(tipo === "casamento") {
        bolo = new BoloDeCasamento(nomeCliente, massa, molhadoCom, recheio, cobertura);
    } else {
        bolo = new BoloDeAniversario(nomeCliente, massa, molhadoCom, recheio, cobertura);
    }

    const p = document.createElement("p");
    p.textContent = bolo.getDescricao();
    pedidosDiv.appendChild(p);

    form.reset();
});
