import React from 'react';
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import linksList from './LinksList'
import './App.css'


class Portfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeButton: 'All'};
    }

    render() {
        let filteredArr = [];
        const activeButton = this.state.activeButton;
        const filters = ["All", "Websites", "Flayers", "Business Cards"];
        const onSelectFilter = (el) => {
            this.setState({activeButton: el})
        }

        for (let a of linksList) {
            if (a.category === activeButton || activeButton === 'All') filteredArr.push(a.img)
        }

        return (
            <div className='project__wrapper'>
                <Toolbar
                    filters={filters}
                    selected={activeButton}
                    onSelectFilter={(el) => onSelectFilter(el)}/>
                <ProjectList category={filteredArr}/>
            </div>
        );
    }
}

export default Portfolio;