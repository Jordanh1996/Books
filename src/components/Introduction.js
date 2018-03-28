import React from 'react';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

const Introduction = ({onAdd}) => (
    <div className='Introduction-container'>
        <h1 className='Introduction-title'>
            Books
        </h1>
        <RaisedButton
            label='Add A Book'
            onClick={onAdd}
            className='Introduction-button'
            backgroundColor='#0091EA'
            labelColor='#FFFFFF'
        />
    </div>
);

export default Introduction;