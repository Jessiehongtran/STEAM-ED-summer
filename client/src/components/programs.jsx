import React from 'react';
import '../styles/programs.scss';
import {Link} from 'react-router-dom';

class Programs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            interest: [0,0,0,0,0,0,0]
        }
    }

    showInterest = (id) => {
        console.log('id', id)
        // let increase = this.state.interest[id-1] + 1
        // this.setState({interest: [...this.state.interest, increase]})
        if (id == 1){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [increase, this.state.interest[1], this.state.interest[2], this.state.interest[3], this.state.interest[4], this.state.interest[5], this.state.interest[6]]})
        }
        else if (id == 2){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [this.state.interest[0], increase, this.state.interest[2], this.state.interest[3], this.state.interest[4], this.state.interest[5], this.state.interest[6]]})
        }
        else if (id == 3){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [this.state.interest[0], this.state.interest[1], increase, this.state.interest[3], this.state.interest[4], this.state.interest[5], this.state.interest[6]]})
        }
        else if (id == 4){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [this.state.interest[0], this.state.interest[1], this.state.interest[2], increase, this.state.interest[4], this.state.interest[5], this.state.interest[6]]})
        }
        else if (id == 5){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [this.state.interest[0], this.state.interest[1], this.state.interest[2], this.state.interest[3], increase, this.state.interest[5], this.state.interest[6]]})
        }
        else if (id == 6){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [this.state.interest[0], this.state.interest[1], this.state.interest[2], this.state.interest[3], this.state.interest[4], increase, this.state.interest[6]]})
        }
        else if (id == 7){
            let increase = this.state.interest[id-1] + 1
            this.setState({interest: [this.state.interest[0], this.state.interest[1], this.state.interest[2], this.state.interest[3], this.state.interest[4], this.state.interest[5], increase]})
        }
        
    }

    render(){
        console.log('interest', this.state.interest)
        
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
                            <img 
                                onClick={() => this.showInterest(program.id)}
                                className="interest-btn" 
                                src="https://res.cloudinary.com/dfulxq7so/image/upload/v1583852893/thumbs-up-like-gesture-512_l9emsq.png"/>
                            <p>{this.state.interest[program.id-1]}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        )
    }
}

export default Programs;