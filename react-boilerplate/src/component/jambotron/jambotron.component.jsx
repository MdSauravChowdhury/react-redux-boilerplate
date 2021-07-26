import React from 'react'
import {Jumbotron} from 'react-bootstrap'

const JambotronComponent = (props) => {
    return (
        <div>
            <Jumbotron>
                {props.children}
            </Jumbotron>            
        </div>
    )
}

export default JambotronComponent
