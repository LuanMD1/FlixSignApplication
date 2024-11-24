import styled from 'styled-components';

export const Title = styled.h1`
font-family: arial;
font-size: 1rem;
color: #041D3D;
display: inline;
justify-content: center;
`

export const FormContainer = styled.div`
  width: 15rem;
  background-color: #FFFFFF;
  padding: 0rem 3rem;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  height: 85dvh;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.h1`
  display: flex;
  font-size: 2rem;
  font-family: arial;
  color: #041D3D;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
`;

export const ButtonBuscar = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ButtonAdicionar = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Footer = styled.h1`
  font-size: 5px;
  color: black;
  font-size: 16px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

export const li = styled.li`
  width: 100%;
  font-size: 1.rem;
  font-family: arial;
  height: 1rem;
  padding: 0.5rem;
  margin-right: 50rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  font-weight: bold;
`;

export const ul = styled.ul`
  color: black;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  font-size: 1.5rem;
  font-family: arial;
  margin: 0;
`;

//** Container Styles **//
export const Container = styled.section`
  min-width: 80rem;
  height: 85dvh;
  padding-top: 2rem;
  border-radius: .5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const ContainerList = styled.section`
  max-width: 80rem;
  height: 90dvh;
  background-color: #FFFFFF;
  margin: 0rem auto;
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Main = styled.div`
  background-color: #B0C9E0;
  min-width: 100rem;
  height: 95dvh;
  display: flex;
  border-radius: 1%;
  justify-content: center;
  padding: 1rem;
  gap: 0.5rem;
`;
