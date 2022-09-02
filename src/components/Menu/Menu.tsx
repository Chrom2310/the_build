import { Container, ContainerMenu, ImageHeader, Button, TextHeader, ButtonSetting } from './styles'

const Menu = () => {
    return (
        <Container>
            <ImageHeader/>
            <ContainerMenu>
                <TextHeader>Текущая игра</TextHeader>
                <Button>Чемпионы</Button>
                <Button>В игре</Button>
            </ContainerMenu>
            <ContainerMenu>
                <TextHeader>О чемпионах</TextHeader>
                <Button>Tier List</Button>
                <Button>Combo видео</Button>
            </ContainerMenu>
            <ButtonSetting>Settings</ButtonSetting>
        </Container>
    )
}

export default Menu;