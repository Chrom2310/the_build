import { SkillOrder, SkillOrderTable, Skill, TextSmall, SkillNumber } from "./styles";
import soul from '../../pages/mock/Ahri_SoulEater2.png';
import foxFire from '../../pages/mock/AhriFoxFire.png';
import sphere from '../../pages/mock/AhriOrbofDeception.png';
import seduce from '../../pages/mock/AhriSeduce.png';
import tumble from '../../pages/mock/AhriTumble.png';

const SkillsOrder = () => {
    const skils = ['q', 'e', 'w', 'q', 'q', 'r', 'q', 'w', 'q', 'w', 'r', 'w', 'w', 'e', 'e', 'r', 'e', 'e'];
    return (
        <SkillOrder>
            <TextSmall>Порядок прокачки умений</TextSmall>
            <SkillOrderTable>
                <tbody>
                    <tr>
                        <th>
                            <img src={soul} width="20"/>
                        </th>
                        {
                            skils.map((el, index) => {
                                return (
                                    <SkillNumber key={el+index}>{index+1}</SkillNumber>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>
                            <img src={sphere} width="20"/>
                        </th>
                        {
                            skils.map((el, index) => {
                                return (
                                    <Skill key={el+index}>{el === 'q' ? el : ''}</Skill>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>
                            <img src={foxFire} width="20"/>
                        </th>
                        {
                            skils.map((el, index) => {
                                return (
                                    <Skill key={el+index}>{el === 'w' ? el : ''}</Skill>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>
                            <img src={seduce} width="20"/>
                        </th>
                        {
                            skils.map((el, index) => {
                                return (
                                    <Skill key={el+index}>{el === 'e' ? el : ''}</Skill>
                                )
                            })
                        }
                    </tr>
                    <tr>
                        <th>
                            <img src={tumble} width="20"/>
                        </th>
                        {
                            skils.map((el, index) => {
                                return (
                                    <Skill key={el+index}>{el === 'r' ? el : ''}</Skill>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </SkillOrderTable>
        </SkillOrder>
    )
}

export default SkillsOrder;