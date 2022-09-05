import { CountersContainer, TextSmall, WrapperCounters, Counter, ImageCounter, CounterWinrate, WinrateWrapper, WinrateText} from "./styles";
import image from '../../pages/mock/countr.jpg';

const Counters = () => {
    return (
        <CountersContainer>
            <TextSmall>Сложнейшие чемпионы</TextSmall>
            <WrapperCounters>
                <Counter>
                    <ImageCounter src={image}/>
                    <WinrateWrapper>
                        <WinrateText>WinRate</WinrateText>
                        <CounterWinrate>40,51%</CounterWinrate>
                    </WinrateWrapper>
                </Counter>
                <Counter>
                    <ImageCounter src={image}/>
                    <WinrateWrapper>
                        <WinrateText>WinRate</WinrateText>
                        <CounterWinrate>40,51%</CounterWinrate>
                    </WinrateWrapper>
                </Counter>
                <Counter>
                    <ImageCounter src={image}/>
                    <WinrateWrapper>
                        <WinrateText>WinRate</WinrateText>
                        <CounterWinrate>40,51%</CounterWinrate>
                    </WinrateWrapper>
                </Counter>
                <Counter>
                    <ImageCounter src={image}/>
                    <WinrateWrapper>
                        <WinrateText>WinRate</WinrateText>
                        <CounterWinrate>40,51%</CounterWinrate>
                    </WinrateWrapper>
                </Counter>
                <Counter>
                    <ImageCounter src={image}/>
                    <WinrateWrapper>
                        <WinrateText>WinRate</WinrateText>
                        <CounterWinrate>40,51%</CounterWinrate>
                    </WinrateWrapper>
                </Counter>
                <Counter>
                    <ImageCounter src={image}/>
                    <WinrateWrapper>
                        <WinrateText>WinRate</WinrateText>
                        <CounterWinrate>40,51%</CounterWinrate>
                    </WinrateWrapper>
                </Counter>
            </WrapperCounters>
        </CountersContainer>
    )
}

export default Counters;