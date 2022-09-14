import styled from 'styled-components';

export const Container = styled.div`
    width: 830px;
    height: 640px;
    background-color: rgba(33, 32, 40, 0.8);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    width: 100$;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    background-color: rgba(23, 23, 28, 0.8);
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
`

export const ImageHeader = styled.img`
    width: 40px;
    height: 40px;
`

export const NameHeader = styled.h2`
    font-size: 16px;
`

export const ContainerMainInformation = styled.table`
    width: 800px;
    height: 550px;
    border: none;
`

export const WrapperChampionsLeft = styled.td`
    width: 370px;
    height: 550px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const WrapperChampionsRight = styled(WrapperChampionsLeft)`
    align-items: flex-end;
`

export const WrapperLine = styled.td`
    width: 60px;
    height: 550px;
`

export const ContainerImage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const CartChampionBlue = styled.div`
    width: 350px;;
    height: 100px;
    background-color: rgba(23, 23, 28, 0.8);
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
    display: flex;
    gap: 10px;
`

export const ColorBlue = styled.div`
    width: 20px;
    height: 100%;
    background-color: #295AA3;
`

export const ColorRed = styled(ColorBlue)`
    background-color: #A32C29;
`

export const CartChampionRed = styled(CartChampionBlue)`
    flex-direction: row-reverse;
    justify-content: flex-start;
`

export const InfoChampion = styled.div`
    width: 150px;
    height: 100%;
`

export const WrapperIcon = styled.div`
    width: 160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`

export const WrapperIconRed = styled(WrapperIcon)`
    align-items: flex-end;
`

export const ContainerIcons = styled.div`
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`

export const ContainerIconsRed = styled(ContainerIcons)`
    flex-direction: row-reverse;
`

export const IconChampions = styled.img`
    width: 40px;
    height: 40px;
`

export const IconSum = styled.img`
    width: 20px;
    height: 20px;
`

export const ContainerTextInfo = styled.div`
    width: 100%;
    height: 30px;
`

export const TextSmall = styled.p`
    font-size: 12px;
    color: #85848C;
`

export const TextSmallRed = styled(TextSmall)`
    text-align: end;
`

export const SummonierWrapper = styled.div`
    width: 20px;
    height: 100%;
`

export const WrapperInfoGamer = styled.div`
    width: 90px;
    height: 100%;
`

export const NameGamer = styled.p`
    font-size: 14px;
    font-weight: bold;
`

export const RangContainer = styled.div`
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Rang = styled.img`
    width: 50px;
    height: 50px;
`

export const RunesContainer = styled.div`
    width: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`

export const Runa = styled.img`
    width: 30px;
    height: 30px;
`