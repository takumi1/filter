import React from 'react';

const ProjectList = (props) => {
    return (
        <div className='img__wrapper'>
            {props.category.map((el, index) =>
                <img key={index} className='project__img' src={el} alt=""/>
            )}
        </div>
    );
};

export default ProjectList;