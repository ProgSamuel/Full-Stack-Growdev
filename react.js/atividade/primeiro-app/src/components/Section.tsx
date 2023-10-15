import { TextDiv, ImageDiv } from "../Style";

interface contentSectionProps {
  title: string;
  description: string;
}
interface ImageSectionProps {
  image: string;
}

export function ContentSectionText(props: contentSectionProps) {
  return (
    <>
      <TextDiv>
        <h3> {props.title} </h3>
        <p> {props.description}</p>
      </TextDiv>
      
    </>
  );
}

export function ContenSectionImage(props: ImageSectionProps){
  return(
    <>
    <ImageDiv>
        <img src={props.image} alt="" />
      </ImageDiv>
    </>
  )
}
