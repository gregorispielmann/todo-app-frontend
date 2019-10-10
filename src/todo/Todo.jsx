import React, { Component } from 'react'
import axios from 'axios'

//components
import PageHeader from '../template/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    state = {
        description: '',
        list: ['Olá']
    }

    constructor(props) {
        super(props);
        this.refresh()
    }
    

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(res => this.setState({
                ...this.state,
                description,
                list: res.data
            }))
    }

    cleanForm = () => {
        this.refresh()
    }

    handleAdd = () => {

        const description = this.state.description

        if(description === ''){
            alert('Make sure you fill the todo text field')
            return false
        }

        axios.post(URL, { description })
            .then(
                res => this.refresh()
            )
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            description: e.target.value
        })
    }

    handleRemove = (item) => {
        axios.delete(`${URL}/${item._id}`)
            .then(res => this.refresh())
    }

    handleCheck = (item) => {
        axios.put(`${URL}/${item._id}`, {...item, done: true})
            .then(res => this.refresh(this.state.description))
    }

    handleUncheck = (item) => {
        axios.put(`${URL}/${item._id}`, {...item, done: false})
            .then(res => this.refresh(this.state.description))
    }

    handleSearch = () => {
        this.refresh(this.state.description)
    }



render(){
    return(
        <div className="container">
            <PageHeader name="ToDos" small="> List"></PageHeader>
            <TodoForm
                description={this.state.description}
                handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                handleSearch={this.handleSearch}
                cleanForm={this.cleanForm}
                onKeyUpEvent={this.onKeyUpEvent}></TodoForm>
            <TodoList list={this.state.list} handleEdit={this.handleEdit} handleRemove={this.handleRemove} handleCheck={this.handleCheck} handleUncheck={this.handleUncheck}></TodoList>
            <TodoFooter></TodoFooter>
        </div>
    )
}
}