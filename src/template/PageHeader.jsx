import React from 'react'

export default props => (

    <div>
    <header className='mt-2 p-3 rounded'>
        <h2>{props.name} <small className=" text-muted font-weight-light">{props.small}</small></h2>
    </header>
    <hr></hr>
    </div>

)