class Item {
    constructor(public valor: double, public nome: string, public descricao: string) {}
}

class Pedido {
    constructor(public itens: Array<Item>, public valorTotal:double) {}
}

type double = {}