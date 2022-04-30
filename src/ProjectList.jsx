import React from 'react';
import PropTypes from "prop-types";

const ProjectList = (props) => {
    return (
        <div className='img__wrapper'>
            {props.category.map((el, index) =>
                <img key={index} className='project__img' src={el} alt=""/>
            )}
        </div>
    );
};
ProjectList.propTypes = {
    category: PropTypes.array

}
export default ProjectList;