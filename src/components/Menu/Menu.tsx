import { useCurrentRouter, useRouter } from '../Router';
import { Container, ContainerMenu, ImageHeader, Button, TextHeader, ButtonSetting } from './styles'

const Menu = () => {
    const [, push] = useRouter();
    const currentPath = useCurrentRouter();
    return (
        <Container>
            <ImageHeader/>
            <ContainerMenu>
                <TextHeader>Текущая игра</TextHeader>
                <Button onClick={()=>push('/champion')}>Чемпионы</Button>
                <Button onClick={()=>push('/game')}>В игре</Button>
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