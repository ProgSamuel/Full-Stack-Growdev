interface InitialCardsProps {
  title: string;
  description: string;
  image: string;
}

export function InitialCards(props: InitialCardsProps) {
  return (
    <>
      <img src={props.image} alt="" className="cardImg" />
      <h5>{props.title}</h5>
      <small>{props.description}</small>
    </>
  );
}

export default InitialCards;
