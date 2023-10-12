
interface BgSectionProps {
  title: string;
}

export function  BgSection (props: BgSectionProps) {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  );
};

export default BgSection;
