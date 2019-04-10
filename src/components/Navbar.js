import React from 'react'
import Button from './Button'
import './_navbar.scss'

const ListButtons = ( props ) => (
    <div>
        <ul className="list">
            {
                props.buttons.map(button => (
                    <Button
                        key={button.id}
                        id={button.id}
                        name={button.name}
                    />
                ))
            }
        </ul>
    </div>
)

export default ListButtons