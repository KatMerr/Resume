import React from 'react'
import styled from 'styled-components'

const Tab = styled.div`

`;

const FavIcon = styled.img`
    display: inline-block;
    
`;

function renderTab(props){
    const { title, icon } = props;
    return (
        <Tab><FavIcon src={icon}></FavIcon>{title}</Tab>
    )
}

export default renderTab;