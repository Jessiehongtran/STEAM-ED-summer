import React from 'react';
import '../styles/programDetails.scss'

class ProgramDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }

    render(){
        console.log('props in ProgramDetails', this.props)
        return (
            <div>
                <h1>{this.props.location.state.program.name}</h1>
                <p>{this.props.location.state.program.type}</p>
                <p>{this.props.location.state.program.age}</p>
                <p>{this.props.location.state.program.level}</p>
                <p>{this.props.location.state.program.duration}</p>
                <img src={this.props.location.state.program.imageUrl} />
            </div>
        )
    }
}

export default ProgramDetails;
