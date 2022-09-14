import styled from 'styled-components'

export const Container = styled.div`
    width: 830px;
    height: 640px;
    display: flex;
    justify-content: space-between;
`

export const WrapperInfo = styled.div`
    width: 480px;
    height: 100%;
    background-color: rgba(33, 32, 40, 0.8);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`

export const WrapperRunes = styled.div`
    width: 340px;
    height: 100%;
    background-color: rgba(33, 32, 40, 0.8);
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const WrapperLine = styled.div`
    width: 250px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
`

export const InfoChampion = styled.div`
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: flex-start;;
    align-items: flex-start;
    gap: 20px;
`

export const ImageChamp = styled.img`
    width: 140px;
    height: 220px;
    object-fit: cover;
    box-shadow: 0px 0px 15px #FF7242;
`

export const Text = styled.p`
    font-size: 20px;
    font-weight: bold;
    height: 50px;
    color: white;
    letter-spacing: 3px;
`

export const TextSmall = styled.p`
    font-size: 12px;
    color: #CCCCCC;
`

export const WrapperMagic = styled.div`
    width: 300px;
    height: 220px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const WrapperSummoner = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Samonier = styled.div`
    width: 80px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

export const ImageSamonier = styled.img.attrs(props => ({
    src: props.src,
}))`
    width: 35px;
    height: 35px;
    cursor: pointer;
`

export const SkillsWrapper = styled.div`
    width: 250px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SkillsInfo = styled.div`
    width: 100$;
    height: 50px;
    display: flex;
    justify-content: space-between;
`

export const SkillImg = styled.img`
    width: 40px;
    height: 40px;
`

export const SkillKey = styled.p`
    width: 20px;
    height: 20px;
    background-color: rgba(33, 32, 40, 0.9);
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    color: #D9D9D9; 
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    right: 0px;
    border: 1px solid #FF7242;
`

export const WrraperBuild = styled.div`
    width: 100%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 15px;
`

export const SkillOrder = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const SkillOrderTable = styled.table`
    width: 100%;
    height: 120px;
`

export const SkillNumber = styled.td`
    width: 10px;
    height: 5px;
    font-size: 12px;
    text-align: center;
    color: #CCCCCC;
`

export const Skill = styled.td`
    width: 30px;
    height: 20px;
    font-size: 12px;
    border-radius: 5px;
    text-align: center;
    color: #FF7242;
    background-color: rgba(0, 0, 0, 0.7);
    text-transform: uppercase;
`

export const BuildContainer = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: space-between;
    
`

export const ContainerBuildWithTextStart = styled.div`
    max-width: 160px;
    height: 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ContainerBuildWithTextMain = styled.div`
    max-width: 300px;
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const StartBuild = styled.div`
    max-width: 160px;
    height: 40px;
    display: flex;
    gap: 10px;
`

export const MainBuild = styled.div`
    width: 290px;
    height: 100px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

export const Item = styled.img`
    width: 35px;
    height: 35px;
`

export const RunesContainer = styled.div`
    width: 100$;
    height: 460px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const WrraperRunesBuild = styled.div`
    width: 100%;
    height: 260px;
    display: flex;
`

export const WrapperRune = styled.div`
    width: 50%;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

export const ContainerSelector = styled.div.attrs(props => ({
    // @ts-ignore
    active: props.active,
}))`
    width: 60px;
    height: 60px;
    position: relative;
    filter: ${props => props.active ? "grayscale(0)" : "grayscale(0.9)"};
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        box-shadow: 0px 0px 10px #FF7242;
        filter: grayscale(0);
    }
`

export const MainRune = styled.img`
    width: 60px;
    height: 60px;
`

export const SecondaryRune = styled.img`
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    background-color: black;
    border-radius: 50%;
   
`

export const SelectorRunes = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
`

export const Runa = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    filter: grayscale(0.9);

    &:nth-child(2) {
        filter: grayscale(0);
    }
`

export const RunaMain = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

export const RunesLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ImageRunaMain = styled.img`
    width: 35px;
    height: 35px;
    object-fit: contain;
`

export const ImageRuna = styled.img`
    width: 25px;
    height: 25px;
    object-fit: contain;
`

export const StatsContainer = styled.div`
    width: 50%;
    height: 120px;
    margin-left: auto;
`

export const CountersContainer = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const WrapperCounters = styled.div`
    width: 100%;
    height: 140px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`
export const Counter = styled.div`
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const WinrateWrapper = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`

export const CounterWinrate = styled.p`
    font-size: 12px;
    font-weight: bold;
`
export const WinrateText = styled.p`
    font-size: 12px;
    color: #85848C;
`

export const ImageCounter = styled.img`
    width: 40px;
    height: 40px;
`