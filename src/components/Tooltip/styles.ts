import styled from 'styled-components'

export const WrapTooltip = styled.div`
    position: relative;
`

export const PlaceholderTooltip = styled.div`
    width: 300px;
    min-height: 60px;
    position: absolute;
    top: 50px;
    right: 0px;
    background-color: #57565F;
    padding: 15px;
    font-size: 12px;
    z-index: 1000;
    border-radius: 10px;
    font-style: italic;
`