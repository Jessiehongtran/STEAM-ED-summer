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
                    <div className="each-program" key={program.id}>
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
                            <Link 
                            to={{
                                pathname: `/enroll/${program.name}`,
                                state: { program: program }
                              }}
                            >
                            <button>Enroll</button>
                            </Link>
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Programs;