import styled from 'styled-components';
import header from '../../pages/Fortune_Game.png';

export const Container = styled.div`
  height: 640px;
  width: 220px;
  padding: 10px;
  background-color: rgba(33, 32, 40, 0.8);
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-radius: 10px;
`

export const ImageHeader = styled.div`
  height: 50px;
  width: 180px;
  margin: 10px auto 0px;
  background-image: url(${header});
  background-size: cover;
`

export const Header = styled.p`
  margin-top: 24px;
  font-size: 22px;
  letter-spacing: 8px;
  font-weight: bold;
  text-align: center;
  color: white;
`

export const ContainerMenu = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const TextHeader = styled.p`
  font-size: 16px;
  color: #FF7242;
  font-weight: bold;
  align-self: flex-start;
  letter-spacing: 3px;
`

export const Button = styled.button`
  width: 180px;
  height: 30px;
  background: none;
  border: none;
  font-size: 16px;
  color: #85848C;
  text-align: left;
  padding-left: 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 1;

  &:hover{
    background-color: #343D7D;
    color: white;
    transition: all 0.3s ease;
  }
`

export const ButtonSetting = styled.button`
  width: 180px;
  height: 30px;
  background: none;
  border: none;
  font-size: 16px;
  color: #85848C;
  text-align: left;
  border-radius: 5px;
  cursor: pointer;
  margin-top: auto;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover{
    color: #FF7242;
    transition: all 0.3s ease;
  }
`

