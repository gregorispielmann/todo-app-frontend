import React from 'react'
import PageHeader from '../template/PageHeader';

export default props => (
    
    <div>
        <PageHeader name='About' small='> Who made it?'></PageHeader>
        <p>This script was made by <a href="https://linkedin.com/in/gregorispielmann/" rel="noopener noreferrer" target="_blank">Gregori Spielmann</a> with ReactJS / MongoDB / Bootstrap and others!</p>
    <div>
    <hr></hr>
        <h5>How to use with keyboard?</h5>
        <div className="accordion" id="accordionExample">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Add ToDo
              </button>
            </h2>
          </div>
      
          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body">
              Type your text then press Enter 
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Make a search
              </button>
            </h2>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body">
              Type your text then press Shift + Enter
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Cancel or Refresh the List
              </button>
            </h2>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body">
              Press Esc / Escape
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


)
