import React from 'react';
import './App.css';
import Programs from './components/programs';
import ProgramDetails from './components/programDetails';
import Enroll from './components/enroll';
import { Route, Switch } from "react-router-dom";
import {programs} from './data/programData'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      programs: programs
    }
  }

  render(){
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
                      <Programs 
                        {...props} 
                        programs={programs} 
                      /> 
              
                    </>
                  )}}
            />
        <Route 
              exact path={`/detail/:programName`}
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
}

export default App;
