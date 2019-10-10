import React, {Component} from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from './todoActions'

import Grid from '../template/Grid'
import IconButton from '../template/IconButton';

class TodoForm extends Component {

    componentWillMount() {
        this.props.search()
    }

    onKeyUpEvent = (e) => {
        if(e.key === 'Escape'){
            this.props.clear()
        }
        if(e.shiftKey && e.key === 'Enter'){
            this.props.search(this.props.description)
        }
        if(e.shiftKey === false && e.key === 'Enter'){
            this.props.add(this.props.description)
        }
    }
    
    render(){
        return (
            <div role='form' className='container todoForm'>
                <div className='row'>
                    <Grid cols='12 9 10'>
                        <input id='description' className='form-control' placeholder='Search or Add new todo // press + or Enter to add'
                            value={this.props.description}
                            onChange={this.props.changeDescription}
                            onKeyUp={this.onKeyUpEvent}></input>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton color='primary' icon='fas fa-plus' 
                            onClick={() => this.props.add(this.props.description)}></IconButton>
                        <IconButton color='info' icon='fas fa-search'
                            onClick={() => this.props.search(this.props.description)}></IconButton>
                        <IconButton color='secondary' icon='fas fa-sync'
                            onClick={() => this.props.clear()}></IconButton>
                    </Grid>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.todo.description })

const mapDispatchToProps = dispatch => bindActionCreators({ 
    changeDescription,
    search,
    add,
    clear
 }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)