import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  height: 100vh;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #28272E;

  button {
    margin-top: 24px;
  }
`

export const Menu = styled.div`
  height: 600px;
  width: 200px;
  background-color: #1D1C22;
`

export const Wrapper = styled.div`
  height: 600px;
  width: 800px;
  background-color: #1D1C22;
`

export const ContainerMenu = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 240px;
  animation: ${rotate} 15s linear infinite;
`

export const Header = styled.p`
  margin-top: 24px;
  font-size: 22px;
  letter-spacing: 8px;
  font-weight: bold;
  text-align: center;
`
export const Text = styled.p`
  font-size: 16px;
`