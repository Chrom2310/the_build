import runes from "../../data/runes";
import Tooltip from "../Tooltip/Tooltip";
import electr from '../../pages/mock/Electrocute.png';
import sorcery from '../../pages/mock/7202_Sorcery.png';
import { ImageRuna, Runa, RunesContainer, RunesLine, WrapperRune, ImageRunaMain, RunaMain, ContainerSelector, SelectorRunes, MainRune, SecondaryRune, WrraperRunesBuild } from "./styles";

const Runes = () => {
    return (
        <RunesContainer>
            <SelectorRunes>
                <ContainerSelector active>
                    <MainRune src={electr}/>
                    <SecondaryRune src={sorcery}/>
                </ContainerSelector>
                <ContainerSelector>
                    <MainRune src={electr}/>
                    <SecondaryRune src={sorcery}/>
                </ContainerSelector>
                <ContainerSelector>
                    <MainRune src={electr}/>
                    <SecondaryRune src={sorcery}/>
                </ContainerSelector>
                <ContainerSelector>
                    <MainRune src={electr}/>
                    <SecondaryRune src={sorcery}/>
                </ContainerSelector>
                <ContainerSelector>
                    <MainRune src={electr}/>
                    <SecondaryRune src={sorcery}/>
                </ContainerSelector>
            </SelectorRunes>
            <WrraperRunesBuild>
            {
                runes.map(rune => {
                    return (
                        <WrapperRune key={rune.id}>
                            
                            
                            <Tooltip title={rune.name}>
                                <RunaMain>
                                    <ImageRunaMain src={rune.icon}/>
                                </RunaMain>
                            </Tooltip>
                            {
                                rune.slots.map((el, index) => {
                                    return (
                                        <RunesLine key={index}>
                                            {
                                                el.runes.map(runEl => {
                                                    return (
                                                        <Runa key={runEl.id}>
                                                            <Tooltip  title={runEl.shortDesc}>
                                                                <ImageRuna src={runEl.icon}/>
                                                            </Tooltip>
                                                        </Runa>
                                                    )
                                                })
                                            }
                                        </RunesLine>
                                        
                                    )
                                })
                            }
                        </WrapperRune>
                    )
                })
            }
            </WrraperRunesBuild>
        </RunesContainer>
    )
}

export default Runes;