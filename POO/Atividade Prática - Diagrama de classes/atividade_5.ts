interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void;
}

interface ValorPedido {
    aplicarDescontoEmReais(desconto: number): void;
    recuperarValorTotal(): number;
    removeItem(item: string): void;
}

class Pedido implements ValorPedido, Desconto {
    private itens: ItemPedido[] = [];
    private valor: number = 0;

    constructor() {}

    add(item: ItemPedido): void {
        this.itens.push(item);
        this.valor += item.recuperarValorTotal();
    }

    recuperarValorTotal(): number {
        return this.valor;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }

    removeItem(item: string): void {
        const index = this.itens.findIndex((i) => i.nome === item);
        if (index > -1) {
            this.valor -= this.itens[index].recuperarValorTotal();
            this.itens.splice(index, 1);
        }
    }
}

class ItemPedido implements ValorPedido, Desconto {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }
}
