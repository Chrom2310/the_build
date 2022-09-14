import { CartChampionRed, ColorRed, WrapperIcon, TextSmallRed, IconChampions, ContainerIconsRed, SummonierWrapper, IconSum, ContainerTextInfo, WrapperIconRed, WrapperInfoGamer, NameGamer, TextSmall, RunesContainer, Runa, RangContainer, Rang } from "./styles";
import image from '../../pages/mock/countr.jpg';
import flash from '../../pages/mock/SummonerFlash.png';
import fire from '../../pages/mock/SummonerDot.png';
import electr from '../../pages/mock/Electrocute.png';
import sorcery from '../../pages/mock/7202_Sorcery.png';
import silver from '../../pages/mock/silver.png';

const ChampionCartRed = () => {
    return (
        <CartChampionRed>
            <ColorRed/>
            <RangContainer>
                <Rang src={silver}/>
            </RangContainer>
            <WrapperIconRed>
                <ContainerIconsRed>
                    <IconChampions src={image}/>
                    <SummonierWrapper>
                        <IconSum src={flash}/>
                        <IconSum src={fire}/>
                    </SummonierWrapper>
                    <WrapperInfoGamer>
                        <NameGamer>WitchOfDawn</NameGamer>
                        <TextSmallRed>12W 5L</TextSmallRed>
                    </WrapperInfoGamer>
                </ContainerIconsRed>
                <ContainerTextInfo>
                    <TextSmallRed>KDA: 6/2/7</TextSmallRed>
                    <TextSmallRed>20 Played 42%</TextSmallRed>
                </ContainerTextInfo>
                
            </WrapperIconRed>
            <RunesContainer>
                <Runa src={electr}/>
                <Runa src={sorcery}/>
            </RunesContainer>
        </CartChampionRed>
    )
}

export default ChampionCartRed;