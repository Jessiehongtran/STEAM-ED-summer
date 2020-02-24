import React from 'react';
import '../styles/enroll.scss';

class Enroll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campus: '',
            program: '',
            schedule: '',
        }

        this.handleChangeCampus = this.handleChangeCampus.bind(this)
        this.handleChangeProgram = this.handleChangeProgram.bind(this)
        this.handleChangeSchedule = this.handleChangeSchedule.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChangeCampus (e){
        this.setState({
            campus: e.target.value
        })
    }

    handleChangeProgram (e){
        this.setState({
            program: e.target.value
        })
    }

    handleChangeSchedule (e){
        this.setState({
            schedule: e.target.value
        })
    }

    handleSubmit (){

    }

    render(){
        console.log('campus', this.state.campus)
        console.log('program', this.state.program)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Campus you would like to enroll
                    <select onChange={this.handleChangeCampus}>    
                        <option value="fremont">Fremont</option>
                        <option value="warmSprings">Warm Springs</option>
                        <option value="misson">Mission</option>
                    </select>
                </label>
                <label>
                    Program you would like to enroll
                    <select onChange={this.handleChangeProgram}>    
                        <option value="1">Program 1</option>
                        <option value="2">Program 2</option>
                        <option value="3">Program 3</option>
                    </select>
                </label>
                <label>
                    When you would like to join
                    <select onChange={this.handleChangeSchedule}>    
                        <option value="1">Schedule 1</option>
                        <option value="2">Schedule 2</option>
                        <option value="3">Schedule 3</option>
                    </select>
                </label>
                <button>Next</button>
            </form>
        )
    }
}

export default Enroll;