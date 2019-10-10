import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markAsDone, markAsUndone, deleteTodo } from './todoActions'

import IconButton from '../template/IconButton'

const TodoList = props => {
    const actions = {
        width: '120px'
    }
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(item => (
            <tr key={'tr'+item._id}>
                <td>{item.done ? <del className="text-muted">{item.description}</del> : item.description}</td>
                <td>
                    <IconButton color="success" icon="fas fa-check"
                        hide={item.done}
                        onClick={() => props.markAsDone(item)}></IconButton>
                    <IconButton color="warning" icon="fas fa-undo" 
                        hide={!item.done}
                        onClick={() => props.markAsUndone(item)}></IconButton>
                    <IconButton color="danger" icon="fas fa-trash-alt"
                        onClick={() => props.deleteTodo(item)}
                        onKeyUp={(e) => props.onKeyUpEvent(e)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table mt-4'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th style={actions}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>

    )

}

const mapStateToProps = state => ({ list: state.todo.list })

const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsUndone, deleteTodo }, dispatch)

export default connect (mapStateToProps, mapDispatchToProps)(TodoList)