import ChampionInfo from "../ChampionInfo/ChampionInfo";
import Menu from "../Menu/Menu";
import { RootRouter, Router, useRouter, useCurrentRouter } from "../Router";
import { LayoutContainer } from "./styles";

const HomePage = () => {
    const [, push] = useRouter();
    const click = () => push('/about');
    return (
        <div>
            <h3 style={{ color: '#fff'}}>Homepage</h3>
            <button onClick={click}>to about</button>
        </div>
    )
}

const AboutPage = () => {
    const [, push] = useRouter();
    const click = () => push('/home');
    return (
        <div>
            <h3 style={{ color: '#fff'}}>Aboutpage</h3> 
            <button onClick={click}>to home</button>
        </div>
    )
}

const Header = () => {
    const currentPath = useCurrentRouter();
    return (
        <div>
            <h1 style={{ color: '#fff'}}>{currentPath}</h1>
        </div>
    )
}

const Layout = () => {
    return (
        <LayoutContainer>
            <RootRouter initRoouter="/champion">
                <Menu/>
                <Router path="/champion">
                    <ChampionInfo/>
                </Router>
                {/* <Router path="/home">
                    <HomePage/>
                </Router>
                <Router path="/about">
                    <AboutPage/>
                </Router> */}
            </RootRouter>
        </LayoutContainer>
        
    )
}

export default Layout;