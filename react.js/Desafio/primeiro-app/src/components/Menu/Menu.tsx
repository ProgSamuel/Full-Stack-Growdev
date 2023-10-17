import { ContainerImg } from "./style";

interface IImgWithText {
    img: string;
    title: string;
    text: string;
}

export function ImageWithText (props: IImgWithText) {
    return (
        <ContainerImg>
            <img src={props.img} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </ContainerImg>
    );
}