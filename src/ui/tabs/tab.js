import React from 'react'
import styled from 'styled-components'

const Tab = styled.div`

`;

function renderTab(props){
    const { title, icon } = props;
    return (
        <Tab>{title} {icon}</Tab>
    )
}

export default renderTab;