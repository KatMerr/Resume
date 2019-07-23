import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Tab from './tab'
import { addTab} from '../../redux/actions/tabs.actions'

const TabSet = styled.div`

`;

function RenderTabSet(){
    const tabs = useSelector(state => {
        return state.tabs
    });
    const dispatch = useDispatch();
    const addNewTab = useCallback(
<<<<<<< HEAD
        () => dispatch(addTab("New Tab", "default")),
=======
        () => dispatch(addTab("My Tab", "Is Great")),
>>>>>>> 5f7fa24513338e4bec84109bc09eb36f5b611276
        [dispatch]
    )

    return (
        <TabSet>
            {(tabs && tabs.length) ?
                tabs.map(tab => <Tab title={tab.title} icon={tab.icon}>My new Tab</Tab>)
                : <span>No tabs</span>
            }
            <div onClick={addNewTab}>Add Another Tab</div>
        </TabSet>
    )
}

export default RenderTabSet;