import { useAppDispatch } from '../Config/hooks';
import { decrementar, incrementar } from '../Config/modules/saldoSlice';
import ValorContador from '../components/valorContador';
// import { useAppSelector } from '../Config/hooks';


export default function Home() {

const dispatch = useAppDispatch();
  return (
    <>
      <h1>Contador</h1>
      {/* <button onClick={()=> {dispatch(incrementar())}} >+</button> */}
      <ValorContador />
      {/* <button onClick={()=> {dispatch(decrementar())}} >-</button> */}
    </>
  );
}
