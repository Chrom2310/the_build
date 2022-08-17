import { Button } from '../Button'
import { Container, Image, Header, Menu, Wrapper, ContainerMenu } from './styles'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World');

    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <Menu>
        <Header>META LoL</Header>
        <ContainerMenu>
          
        </ContainerMenu>
      </Menu>
      <Wrapper>

      </Wrapper>
      {/* <Image
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
      <Button onClick={handleSayHello}>Send message to main process</Button> */}
    </Container>
  )
}
 
