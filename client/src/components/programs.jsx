import React from 'react';
import '../styles/programs.scss';
import {Link} from 'react-router-dom';

class Programs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

    render(){
        
        return (
            <div className="programs">
                {this.props.programs.map(program => (
                    <div className="each-program" >
                        <img src={program.imageUrl}/>
                        <div className="text">
                            <Link 
                            to={{
                                pathname: `/detail/${program.name}`,
                                state: { program: program }
                              }}
                            >
                                <h1>{program.name}</h1>
                            </Link>
                            <p>{program.type}</p>
                            <p>Ages {program.age}</p>
                            <p>{program.level}</p>
                            <p>{program.duration}</p>
                            <button onClick={() => this.props.history.push('/enroll')}>Enroll</button>
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Programs;