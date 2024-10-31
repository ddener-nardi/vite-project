import {styled} from "styled-components";

export const Title = styled.h2`
  color: #5F7590;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  margin: 0 30px;
  box-sizing: border-box;
  border-radius: 0 0 10px 10px;
  background: #D9D9D9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const TiposWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 736px) {
    display: block;
  }
`;

export const TipoCurso = styled.button`
  width: 100%;
  padding: 20px;
  border: none;
  box-sizing: border-box;
  color: #0F324D;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #32A5D4;
  }
`;

export const CursoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 736px) {
    flex-direction: column;
  }
`;

export const View = styled.div`
  margin-left: 30px;
  @media (max-width: 736px) {
    margin-left: 0;
  }
`;

export const Image = styled.img`
`;

export const NomeCurso = styled.p`
  color: #32A5D4;
  font-size: 25px;
  font-weight: 600;
  @media (max-width: 736px) {
    text-align: center;
  }
`