import React from 'react'
import styled from 'styled-components'

const Tab = styled.div`

`;

<<<<<<< HEAD
const FavIcon = styled.img`
    display: inline-block;
    
`;

function renderTab(props){
    const { title, icon } = props;
    return (
        <Tab><FavIcon src={icon}></FavIcon>{title}</Tab>
=======
function renderTab(props){
    const { title, icon } = props;
    return (
        <Tab>{title} {icon}</Tab>
>>>>>>> 5f7fa24513338e4bec84109bc09eb36f5b611276
    )
}

export default renderTab;