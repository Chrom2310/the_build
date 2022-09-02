import styled from 'styled-components';
import background from '../../pages/fortuneBack.png'; 

export const LayoutContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-image: url(${background});
    background-size: cover;
`