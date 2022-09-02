import { WrapTooltip, PlaceholderTooltip } from "./styles";
import { ReactBaseComponent } from '../../@types/base';
import { useState } from "react";

interface IProps extends ReactBaseComponent{
    title: string;
}

const Tooltip = ({title, children}: IProps) =>{
    const [active, setActive] = useState(false);
    return (
        <WrapTooltip onMouseMove={()=>setActive(true)} onMouseLeave={()=>setActive(false)}>
            {active && <PlaceholderTooltip>{title}</PlaceholderTooltip>}
            {children}
        </WrapTooltip>
    )
}

export default Tooltip;