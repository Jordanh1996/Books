import React from 'react';
import moment from 'moment';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class BookItem extends React.Component {

    onRemove = () => {
        this.props.onRemove(this.props.title);
    };

    onEdit = () => {
        this.props.onEdit(this.props.title, this.props.author, this.props.date);
    };

    render() {
        const date = moment(this.props.date);
        const format = 'MMMM Do YYYY';
        const dateFormatted = date.isValid() ? `, ${date.format(format)}` : '';
        return (
            <Card
                className='BookItem-card'
            >
                <CardText className="BookItem-Divide">
                    <div>
                        <p className='BookItem-card-title'>
                            {this.props.title}
                        </p>
                        <p className='BookItem-card-author'>
                            Created by {this.props.author}{dateFormatted}.
                        </p>
                    </div>
                    <div>
                        <RaisedButton
                            primary
                            label='Edit'
                            className='BookItem-Edit BookItem-Button'
                            onClick={this.onEdit}
                        />
                        <RaisedButton
                            secondary
                            label='Remove'
                            className='BookItem-Button'
                            onClick={this.onRemove}
                        />
                    </div>
                </CardText>
            </Card>
        );
    };
    
};



export default BookItem;