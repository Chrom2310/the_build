import { CartChampionBlue, ColorBlue, ContainerIcons, ContainerTextInfo, IconChampions, IconSum, NameGamer, Rang, RangContainer, Runa, RunesContainer, SummonierWrapper, TextSmall, WrapperIcon, WrapperInfoGamer } from "./styles";
import image from '../../pages/mock/countr.jpg';
import flash from '../../pages/mock/SummonerFlash.png';
import fire from '../../pages/mock/SummonerDot.png';
import electr from '../../pages/mock/Electrocute.png';
import sorcery from '../../pages/mock/7202_Sorcery.png';
import silver from '../../pages/mock/silver.png';

const ChampionCartBlue = () => {
    return (
        <CartChampionBlue>
            <ColorBlue/>
            <RangContainer>
                <Rang src={silver}/>
            </RangContainer>
            <WrapperIcon>
                <ContainerIcons>
                    <IconChampions src={image}/>
                    <SummonierWrapper>
                        <IconSum src={flash}/>
                        <IconSum src={fire}/>
                    </SummonierWrapper>
                    <WrapperInfoGamer>
                        <NameGamer>WitchOfDawn</NameGamer>
                        <TextSmall>12W 5L</TextSmall>
                    </WrapperInfoGamer>
                </ContainerIcons>
                
                <ContainerTextInfo>
                    <TextSmall>KDA: 6/2/7</TextSmall>
                    <TextSmall>7 Played 42%</TextSmall>
                </ContainerTextInfo>
            </WrapperIcon>
            <RunesContainer>
                <Runa src={electr}/>
                <Runa src={sorcery}/>
            </RunesContainer>
        </CartChampionBlue>
    )
}

export default ChampionCartBlue;