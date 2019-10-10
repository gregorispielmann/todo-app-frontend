import React from 'react'

export default props => (

    <nav className='navbar navbar-dark bg-dark navbar-expand-lg rounded-sm'>
        <a className="navbar-brand" href="#home">
            <i className="fa fa-calendar-check-o"></i> TodoApp
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbar" className="navbar-collapse collapse">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link" href="#/todos">ToDos</a></li>
                <li className="nav-item"><a className="nav-link" href="#/about">About</a></li>
            </ul>
        </div>
    </nav>

)