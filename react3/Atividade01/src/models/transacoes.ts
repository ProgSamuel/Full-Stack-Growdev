export default interface transacao {
    valor:number,
    tipo: "Entrada"|"Saída", 
    obs?:string
}