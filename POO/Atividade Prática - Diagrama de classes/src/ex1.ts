class Item {
    valor: 'double' 
    nome: string;
    descicao: string; 

    constructor(valor: 'double', nome: string, descricao: string) {
        this.valor = valor;
        this.nome = nome;
        this.descicao = descricao;
    }
}

class Pedido {
    itens: Array<Item>;
    valorTotal: 'double'; 
    constructor(itens: Array<Item>, valorTotal: 'double') {
        this.itens = itens;
        this.valorTotal = valorTotal;
    }
    mostrar(){
        console.log(this.itens);
    }
    valortotal(){
        let valorTotalA:number = 0
        for (const i of this.itens) {
            valorTotalA += this.valorTotal
        }
        return valorTotalA
    }
}
