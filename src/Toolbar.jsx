import React from 'react';
import PropTypes from 'prop-types'
import './App.css'

const Toolbar = (props) => {
    return (
        <div className='button__wrapper'>
            {props.filters.map((el) =>
                <div
                    key={el}
                    onClick={() => props.onSelectFilter(el)}
                    className={props.selected === el ?
                        'project__button__active' :
                        'project__button'}>{el}
                </div>
            )}
        </div>
    );
};
Toolbar.propTypes = {
    filters: PropTypes.array,
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func
}
export default Toolbar;

