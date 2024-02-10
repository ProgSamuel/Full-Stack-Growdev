import { useAppSelector } from "../Config/hooks"

export default function ValorContador ()  {
    const contador = useAppSelector((state)=> state.contador.valor)

  return (
    <>
    <h1> {contador}</h1>
    </>
  )
}
