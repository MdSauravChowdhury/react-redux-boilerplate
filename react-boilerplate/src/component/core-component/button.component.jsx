import React from 'react'

const ButtonComponent = (props) => {
    return (
        <div>
            <button type="submit">{props.children}</button>
        </div>
    )
}

export default ButtonComponent
