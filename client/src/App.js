import React from 'react';
import './App.css';
import Programs from './components/programs';
import ProgramDetails from './components/programDetails';
import Enroll from './components/enroll';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>STEAM-ED</h1>
      <Switch>
        <Route 
              exact path="/" 
              render = {
                props => {
                  return (
                    <> 
                      <Programs {...props}/> 
                    </>
                  )}}
            />
        <Route 
              exact path="/detail" 
              render = {
                props => {
                  return (
                    <> 
                      <ProgramDetails {...props}/> 
                    </>
                  )}}
            />
        <Route 
              exact path="/enroll" 
              render = {
                props => {
                  return (
                    <> 
                      <Enroll {...props}/> 
                    </>
                  )}}
            />
      </Switch>
      
    </div>
  );
}

export default App;
