import React from 'react';

import {toAlphaNumeric, toUpperCase} from '../validations/validations';
import {requiredRule, alphanumericRule, itemExistRule} from '../validations/form';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { TextValidator, ValidatorForm, DateValidator} from 'react-material-ui-form-validator';

export default class FormModal extends React.Component {
    state = {
        open: false,
        title: '',
        author: '',
        date: null,
        edit: undefined,
    };

    componentWillMount() {
        requiredRule();
        alphanumericRule();
        itemExistRule(() => {
            return { old: this.state.edit, arr: this.props.books, prop: 'title' };
        });
    };

    openModal = () => {
        this.setState(() => ({open: true}));
    };

    closeModal = () => {
        this.setState(() => ({open: false}))
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    };

    onAuthorChange = (e) => {
        const author = e.target.value;
        this.setState(() => ({author}));
    };

    onDateChange = (e, date) => {
        this.setState(() => ({date}));
    };

    onStartEdit = (title, author, date) => {
        this.setState(() => ({
            title,
            author,
            date: new Date(date),
            edit: title
        }));
    };

    onStartAdd = () => {
        this.setState(() => ({
            title: '',
            author: '',
            date: null,
            edit: false
        }));
    };

    onSubmit = (e) => {
        e.preventDefault
        const validatedTitle = toUpperCase(toAlphaNumeric(this.state.title)).trim()
        const validatedAuthor = toUpperCase(toAlphaNumeric(this.state.author)).trim()
        if (this.state.edit) {
            this.props.onEdit({
                title: validatedTitle, 
                author: validatedAuthor, 
                date: this.state.date.getTime()
            }, this.state.edit)
        } else {
            this.props.onAdd({
                title: validatedTitle, 
                author: validatedAuthor, 
                date: this.state.date.getTime()
            });
        };
        this.closeModal();
    };

    render() {

        return (
            <div>
                <Dialog
                    modal={true}
                    open={this.state.open}
                    contentStyle={{width: "50%"}}
                    autoScrollBodyContent
                >
                    <h1 className='FormModal-title'>
                        {this.state.edit ? `Edit ${this.state.edit}` : 'Add Book'}
                    </h1>
                    <ValidatorForm 
                        className='FormModal'
                        onSubmit={this.onSubmit}
                    >
                        <TextValidator
                            hintText="Enter Title"
                            floatingLabelText="Title"
                            name='Title'
                            validators={['Required', 'AlphaNumeric', 'TitleTaken']}
                            errorMessages={[
                                'This field is required', 
                                'Must only include alphanumeric letters',
                                'This title is alredy taken'
                            ]}
                            value={this.state.title}
                            onChange={this.onTitleChange}
                            className='FormModal-textfield'
                        />
                        <TextValidator
                            hintText="Enter Author"
                            floatingLabelText="Author"
                            name='Author'
                            validators={['Required', 'AlphaNumeric']}
                            errorMessages={['This field is required', 'Must only include alphanumeric letters']}
                            value={this.state.author}
                            onChange={this.onAuthorChange}
                            className='FormModal-textfield'
                        />
                        <DateValidator
                            openToYearSelection={true}
                            floatingLabelText="Date"
                            name='Text'
                            value={this.state.date}
                            onChange={this.onDateChange}
                            autoOk={true}
                            validators={['required']}
                            errorMessages={['This field is required']}
                            className='FormModal-textfield'
                            textFieldStyle={{width: '100%'}}
                            maxDate={new Date()}
                        />

                        <RaisedButton
                            label={this.state.edit ? 'Save' : 'Submit'}
                            type='submit'
                            primary={true}
                            className='FormModal-submit'
                        />
                        
                        <RaisedButton
                            label="Cancel"
                            primary={true}
                            onClick={this.closeModal}
                        />
                    </ValidatorForm>
                </Dialog>
            </div>
        );
    };
};