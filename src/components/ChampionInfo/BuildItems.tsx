import { BuildContainer, TextSmall, StartBuild, MainBuild, Item, ContainerBuildWithTextStart,  ContainerBuildWithTextMain} from "./styles";
import doran from '../../pages/mock/start/1056.png';
import health from '../../pages/mock/start/2003.png';
import everfrost from '../../pages/mock/main/6656.png';
import shoes from '../../pages/mock/main/3020.png';
import shadowflame from '../../pages/mock/main/4645.png';
import zhonya from '../../pages/mock/main/3157.png';
import rabadon from '../../pages/mock/main/3089.png';
import staff from '../../pages/mock/main/3135.png';

const BuildItems = () => {
    const startBuild = [doran, health, health];
    const mainBuild = [everfrost, shoes, shadowflame, zhonya, rabadon, staff];
    return (
        <BuildContainer>
            <ContainerBuildWithTextStart>
                <TextSmall>Начальные предметы</TextSmall>
                <StartBuild>
                    {
                        startBuild.map((el, index) => {
                            return (
                                <Item key={index} src={el}/>
                            )
                        })
                    }
                </StartBuild>
            </ContainerBuildWithTextStart>
            <ContainerBuildWithTextMain>
                <TextSmall>Основные предметы</TextSmall>
                <MainBuild>
                    {
                        mainBuild.map((el, index) => {
                            return (
                                <Item key={index} src={el}/>
                            )
                        })
                    }
                </MainBuild>
            </ContainerBuildWithTextMain>
        </BuildContainer>
    )
}

export default BuildItems;