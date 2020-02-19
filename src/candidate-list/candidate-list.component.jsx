import React from 'react';
import './candidate-list.styles.css';
import ShowApplications from '../show-applications/show-applications.component';

class CandidateList extends React.Component {
    constructor() {
        super();
        this.state = {
            selectValue : ''
        }
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({
            selectValue: value,
        });
      }

    render () {
        let planets = this.props.state.planets;
        let optionItems = planets.map((planet) =>
                <option key={planet.id} value={planet.applicationId}>{planet.name}</option>
            );

        return (
         <div>
             <select className="dropdown" onChange={this.handleChange} >
                {optionItems}
             </select>
             <ShowApplications state={this.state}/>
         </div>
        )
    }
}

export default CandidateList;