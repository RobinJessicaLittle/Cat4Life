import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 50px 100px;
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: top;
`;

export const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #c3b1e1;
  padding: 25px 25px 25px 25px;
  margin: 25px;
  max-width: 250px;
  border-radius: 10px;
  color: white;
`;

export const Button = styled.button`
  border: none;
  background-color: black;
  color: white;
  padding: 15px 10px;
  border-radius: 5px;
  cursor: pointer;
  border: 2px solid black;
  &:hover {
    background-color: transparent;
    border: 2px solid black;
    cursor: pointer;
  }
`;

export const Button1 = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 16px;
  margin: 16px;
  padding: 4px16px;
  border: 2pxsolid ${(props) => props.background};
  border-radius: 3px;
  &:hover {
    background: none;
    color: ${(props) => props.background};
  }
`;