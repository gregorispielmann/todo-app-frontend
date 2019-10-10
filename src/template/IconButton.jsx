import React from 'react'

import If from './If'

export default props => (
        
    <If test={!props.hide}>
        <button className={'mr-1 btn btn-'+props.color}
            onClick={props.onClick}>
                <i className={props.icon}></i>
        </button>
    </If>

)