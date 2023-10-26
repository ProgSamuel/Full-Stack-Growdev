import styled from "styled-components";

export const FlexSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-color: #c5e1ff;
  padding-top: 0;
  width: 100vw;
  height: 80vh;
`;

export const ContainerImg = styled.section`
  padding: 3rem 0;
  margin: 0;
  color: darkblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30vw;

  h3 {
    margin: 0;
  }

  p {
    margin: 0.5rem;
    font-size: 1.5rem;
    font-weight: 300;
  }

  img {
    filter: drop-shadow(3px 3px 10px black);
    height: 5em;
  }
`;

export const NavbarStyled = styled.nav`
  background-color: transparent;
  width: 80vw;
  max-height: 5em;
  padding: 1em 2em;
  display: flex;
  justify-content: space-around;
`;
