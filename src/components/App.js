import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';
import reducer, { initialState } from '../reducers';
import { applyNumber } from '../actions';

function App() {
  // use useReducer to access state and dispatch
  const [state, dispatch] = useReducer(reducer, initialState)
  // handles click events as integers for each buttons value
  const onNumberClick = (e) => dispatch(applyNumber(parseInt(e.target.value)))
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={onNumberClick} />
              <CalcButton value={2} onClick={onNumberClick}/>
              <CalcButton value={3} onClick={onNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={onNumberClick}/>
              <CalcButton value={5} onClick={onNumberClick}/>
              <CalcButton value={6} onClick={onNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={onNumberClick}/>
              <CalcButton value={8} onClick={onNumberClick}/>
              <CalcButton value={9} onClick={onNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
