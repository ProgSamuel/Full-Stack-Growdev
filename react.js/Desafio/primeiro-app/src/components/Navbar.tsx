import {NavbarStyled} from './Menu/style';

export default function Navbar (){
    return (
        <NavbarStyled>
                <img src="https://www.regatec.com.br/wp-content/uploads/2019/02/AGUA-1.png" alt="Logo" className='imgLogo'/>
                <h3><a href="#menu"> Menu </a></h3>
                <h3><a href="#reservas"> Reservas </a></h3>
                <h3><a href="#fotos"> Fotos</a></h3>
                <h3><a href="#avaliacoes"> Avaliações</a></h3>
        </NavbarStyled>
    ) 
}