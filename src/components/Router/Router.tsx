import { createContext, useState, useContext, useCallback } from 'react';
import { ReactBaseComponent } from '../../@types/base';

const RouterContext = createContext('');
type TRootRouterContext = [string, (path: string) => void];
const RootRouterContext = createContext<TRootRouterContext>(['', (path: string) => {}]);

interface RouterProps extends ReactBaseComponent {
    path: string;
}

export const Router = ({ children, path }: RouterProps) => {
    const [currentRouter] = useContext(RootRouterContext);
    if (currentRouter !== path) return null;
    return (
        <RouterContext.Provider value={path}>
            {children}
        </RouterContext.Provider>
    )
}

interface RootRouterProps extends ReactBaseComponent {
    initRoouter: string;
}

export const RootRouter = ({ children, initRoouter }: RootRouterProps) => {
    const [currentRouter, setCurrentRouter] = useState(initRoouter);
    const setRouter = useCallback((path: string) => {
        setCurrentRouter(path);
    }, []);
    return (
        <RootRouterContext.Provider value={[currentRouter, setRouter]}>
            {children}
        </RootRouterContext.Provider>
    )
}

type TUseRouter = [string, (path: string) => void];

export const useRouter = (): TUseRouter => {
    const [,setRouter] = useContext(RootRouterContext);
    const path = useContext(RouterContext);
    return [path, setRouter];
} 