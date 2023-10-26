import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/Navbar";
import { FlexSection } from "./components/Menu/style";
import { ImageWithText } from "./components/Menu/Menu";
import MinhaGaleriaDeFotos from "./components/Fotos/Fotos.tsx";
import ReservaComponent from "./components/Reservas/Reservas";
import Avaliacoes from "./components/Fotos/Avaliações/Avaliacao.tsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <FlexSection>
        <ImageWithText
          img={"https://www.dairyqueen.com/dA/d0d6bb0e30/hamburger.png"}
          title="Hambúrguer Kids"
          text="Para as crianças."
        />

        <ImageWithText
          img={
            "https://i.pinimg.com/originals/a0/16/87/a016878919bbd44e858b57dc176e7379.png"
          }
          title="Hamburguer VIP"
          text="Só para quem é VIP!"
        />

        <ImageWithText
          img={
            "https://www.restaurantejangada.com.br/wp-content/themes/jangada/assets/img/salmao-crosta-top-view.png"
          }
          title="Novidade"
          text="Peixe com Maracujá"
        />

        <ImageWithText
          img={
            "https://conchamar.pt/wp-content/uploads/2021/01/inicio-prato-04.png"
          }
          title="Lagosta"
          text="Lagosta VIP!"
        />

        <ImageWithText
          img={
            "https://mardivinopescados.com.br/wp-content/uploads/2021/03/prato-risoto-camarao.png"
          }
          title="Camarão refogado"
          text="Camarão norueguês fresco"
        />

        <ImageWithText
          img={
            "https://saborimperialrestaurante.com.br/wp-content/uploads/2018/12/slide1.png"
          }
          title="Peixe + acompanhamento"
          text="Peixe e salada grega"
        />
      </FlexSection>

      <ReservaComponent></ReservaComponent>

      <MinhaGaleriaDeFotos></MinhaGaleriaDeFotos>

      <Avaliacoes></Avaliacoes>
    </>
  );
}

export default App;
