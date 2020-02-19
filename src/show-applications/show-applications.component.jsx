import React from 'react';
import './show-applications.styles.css';
import MenuItem from '../menu-item/menu-item.components';


class ShowApplications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showApplications: []
         };
    }

    componentDidMount() {
        let initialApplications = [];
        fetch('http://localhost:3010/applications')
            .then(response => {
                return response.json();
            }).then(data => {
            initialApplications = data.map((app) => {
                return app
            });
            console.log(initialApplications);
            this.setState({
                showApplications: initialApplications,
            });
        });
    }

    render() {
        const { showApplications } = this.state;
        let selectedValue = this.props.state.selectValue;
        localStorage.setItem('selectValue',selectedValue);
        console.log(localStorage);
        console.log();
        return(
            <div className='shop-page'>
                {
                    showApplications.map((item)=> (
                        selectedValue == item.id ? 
                        <MenuItem key={item.id} {...item} /> : 'aakash'
                    ))
                }
            </div>
        )
        
    }

}

export default ShowApplications;