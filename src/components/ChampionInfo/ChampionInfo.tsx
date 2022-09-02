import { Container, WrapperInfo, WrapperRunes, WrapperLine, InfoChampion, ImageChamp, WrapperMagic, Text, Samonier, ImageSamonier, TextSmall, WrapperSummoner, WrraperBuild, SkillOrder, Skill, SkillOrderTable, BuildContainer, StartBuild, MainBuild, RunesContainer} from "./styles";
import page from '../../pages/mock/Ahri.jpg';
import flash from '../../pages/mock/SummonerFlash.png';
import fire from '../../pages/mock/SummonerDot.png';
import { dotDes, flashDes } from "../../data/summoner";
import Tooltip from "../Tooltip/Tooltip";
import Support from "../Lines/Support";
import Mid from "../Lines/Mid";
import Jungle from "../Lines/Jungle";
import TopAdc from "../Lines/TopAdc";
import soul from '../../pages/mock/Ahri_SoulEater2.png';
import foxFire from '../../pages/mock/AhriFoxFire.png';
import { useState } from "react";
import { champion } from "../../data/champion";
import Skills from "./Skills";
import BuildItems from "./BuildItems";
import SkillsOrder from "./SkillsOrder";
import Runes from "./Runes";

const ChampionInfo = () => {
    
    
    const [activeLine, setActiveLine] = useState({
        top: false,
        jungle: false,
        mid: true,
        adc: false,
        support: false,
    });
    return (
        <Container>
            <WrapperInfo>
                <WrapperLine>
                    <TopAdc active={activeLine.top} top={true}/>
                    <Jungle active={activeLine.jungle}/>
                    <Mid active={activeLine.mid}/>
                    <TopAdc active={activeLine.adc} top={false}/>
                    <Support active={activeLine.support}/>
                </WrapperLine>
                <InfoChampion>
                    <ImageChamp src={page}/>
                    <WrapperMagic>
                        <Text>Дух цветения Ари</Text>
                        <WrapperSummoner>
                            <TextSmall>Заклинания призывателя</TextSmall>
                            <Samonier>
                                <Tooltip title={flashDes.description}>
                                    <ImageSamonier src={flash} alt="flash"/>
                                </Tooltip>
                                <Tooltip title={dotDes.description}>
                                    <ImageSamonier src={fire} alt="fire"/>
                                </Tooltip>
                            </Samonier>
                        </WrapperSummoner>
                        <Skills/>
                    </WrapperMagic>
                </InfoChampion>
                <WrraperBuild>
                    <SkillsOrder/>
                    <BuildItems/>
                </WrraperBuild>
            </WrapperInfo>
            <WrapperRunes>
                <Runes/>
            </WrapperRunes>
        </Container>
    )
}

export default ChampionInfo;