import { SkillsWrapper, TextSmall, SkillsInfo, SkillImg, SkillKey } from "./styles";
import Tooltip from "../Tooltip/Tooltip";
import soul from '../../pages/mock/Ahri_SoulEater2.png';
import foxFire from '../../pages/mock/AhriFoxFire.png';
import sphere from '../../pages/mock/AhriOrbofDeception.png';
import seduce from '../../pages/mock/AhriSeduce.png';
import tumble from '../../pages/mock/AhriTumble.png';
import { champion } from "../../data/champion";

const Skills = () => {
    const keys = ['q', 'w', 'e', 'r'];
    const images = [sphere, foxFire, seduce, tumble]
    return (
        <SkillsWrapper>
            <TextSmall>Список умений</TextSmall>
            <SkillsInfo>
                <Tooltip title={champion.data.Ahri.passive.description}>
                    <SkillImg src={soul}/>
                </Tooltip>
                {
                    champion.data.Ahri.spells.map((el, index) => {
                        return (
                            <Tooltip key={index} title={el.description}>
                                <SkillImg src={images[index]}/>
                                <SkillKey>{keys[index]}</SkillKey>
                            </Tooltip>
                        )
                    })
                }
                {/* <Tooltip title={champion.data.Ahri.spells[0].description}>
                    <SkillImg src={sphere}/>
                    <SkillKey>q</SkillKey>
                </Tooltip>
                <Tooltip title={champion.data.Ahri.spells[1].description}>
                    <SkillImg src={foxFire}/>
                    <SkillKey>w</SkillKey>
                </Tooltip>
                <Tooltip title={champion.data.Ahri.spells[2].description}>
                    <SkillImg src={seduce}/>
                    <SkillKey>e</SkillKey>
                </Tooltip>
                <Tooltip title={champion.data.Ahri.spells[3].description}>
                    <SkillImg src={tumble}/>
                    <SkillKey>r</SkillKey>
                </Tooltip> */}
                
            </SkillsInfo>
        </SkillsWrapper>
    )
}

export default Skills;