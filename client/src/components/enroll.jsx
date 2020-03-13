import React from 'react';
import '../styles/enroll.scss';

class Enroll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            campus: '',
            program: this.props.location.state.program,
            schedule: [],
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
        var options = e.target.options
        var values = []
        for (var i = 0; i < options.length; i++){
            if (options[i].selected){
                values.push(options[i].value)
            }
        }
        this.setState({
            schedule: values
        })
    }

    handleSubmit (e){
        e.preventDefault()
        console.log(this.state)
      
    }

    render(){
        console.log('campus', this.state.campus)
        console.log('program', this.state.program)
        console.log('schedule', this.state.schedule)
        console.log('props in Enroll', this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Campus you would like to enroll
                    <select value="fremont" onChange={this.handleChangeCampus}>    
                        <option value="fremont">Fremont</option>
                        <option value="warmSprings">Warm Springs</option>
                        <option value="misson">Mission</option>
                    </select>
                </label>
                <label>
                    Program you would like to enroll
                    <select value={this.state.program.id} onChange={this.handleChangeProgram}>    
                        <option value={this.state.program.id}>{this.state.program.name}</option>
                        
                    </select>
                </label>
                 {this.state.program.id == '2' || this.state.program.id == '3' || this.state.program.id == '4' || this.state.program == '6'? (
                    <label>
                    When you would like to join (Ctrl to choose many options)
                        <select className="schedule" multiple={true} onChange={this.handleChangeSchedule}>    
                            <option value="6/15-6/26">6/15-6/26</option>
                            <option value="6/29-7/10">6/29-7/10</option>
                            <option value="7/13-7/24">7/13-7/24</option>
                            <option value="7/27-8/7">7/27-8/7</option>
                            <option value="8/10-8/14">8/10-8/14</option>
                            <option value="8/17-8/21">8/17-8/21</option>
                        </select>
                    </label> 
                
                ) : ( 
                    <label>
                    When you would like to join (Ctrl to choose many options)
                        <select className="schedule" multiple={true} onChange={this.handleChangeSchedule}>    
                            <option value="6/15-6/19">6/15-6/19</option>
                            <option value="6/22-6/26">6/22-6/26</option>
                            <option value="6/29-7/3">6/29-7/3</option>
                            <option value="7/6-7/10">7/6-7/10</option>
                            <option value="7/13-7/17">7/13-7/17</option>
                            <option value="7/20-7/24">7/20-7/24</option>
                            <option value="7/27-7/31">7/27-7/31</option>
                            <option value="8/3-8/7">8/3-8/7</option>
                            <option value="8/10-8/14">8/10-8/14</option>
                            <option value="8/17-8/21s">8/17-8/21</option>
                        </select>
                    </label>
                )}
                
                <button onClick={() => this.props.history.push('/end')}>Next</button>
            </form>
        )
    }
}

export default Enroll;