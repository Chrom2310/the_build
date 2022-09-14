import { Container, ContainerMainInformation, Header, ImageHeader, NameHeader, WrapperChampionsLeft, WrapperLine, WrapperChampionsRight, ContainerImage } from "./styles";
import image from '../../pages/mock/countr.jpg';
import ChampionCartBlue from "./ChampionCartBlue";
import TopAdc from "../Lines/TopAdc";
import Jungle from "../Lines/Jungle";
import Mid from "../Lines/Mid";
import Support from "../Lines/Support";
import ChampionCartRed from "./ChampionCartRed";



const InGamePage = () => {
    const champBlue = [...Array(5)];
    const array = champBlue.map(el => "2")
    console.log(array, 'array');
    
    return (
        <Container>
            <Header>
                <NameHeader>WitchOfDawn</NameHeader>
                <ImageHeader src={image}/>
            </Header>
            <ContainerMainInformation>
                <tbody>
                    <tr>
                        <WrapperChampionsLeft>
                            {champBlue.map((el, index) => <ChampionCartBlue key={index} />)}
                        </WrapperChampionsLeft>
                        <WrapperLine>
                            <ContainerImage>
                                <TopAdc active={true} top={true}/>
                                <Jungle active={true}/>
                                <Mid active={true}/>
                                <TopAdc active={true} top={false}/>
                                <Support active={true}/>
                            </ContainerImage>
                        </WrapperLine>
                        <WrapperChampionsRight>
                            {champBlue.map((el, index) =>  <ChampionCartRed key={index} />)}
                        </WrapperChampionsRight>
                    </tr>
                </tbody>
            </ContainerMainInformation>
        </Container>
    )
}

export default InGamePage;