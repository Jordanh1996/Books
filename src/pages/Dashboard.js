import React from 'react';
import {connect} from 'react-redux';

import {dispatchSetBooks, dispatchRemoveBook, dispatchEditBook, dispatchAddBook} from '../actions/Books';
import BookList from '../components/BookList';
import Introduction from '../components/Introduction';
import {RequestBooks} from '../requests/Books';
import FormModal from '../components/FormModal';
import RemoveModal from '../components/RemoveModal';
import {toUpperCase, toAlphaNumeric} from '../validations/validations';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

class Dashboard extends React.Component {

    componentDidMount() {
        RequestBooks().then(res => {
            const books = res.data.map(book => {
                book.title = toUpperCase(toAlphaNumeric(book.title));
                book.author = toUpperCase(toAlphaNumeric(book.author));
                return book;
            });
            this.props.dispatchSetBooks(books);
        });
    };

    onEdit = (title, author, date) => {
        this.refs.FormModal.openModal();
        this.refs.FormModal.onStartEdit(title, author, date);
    };

    onAdd = () => {
        this.refs.FormModal.openModal();
        this.refs.FormModal.onStartAdd();
    };

    onRemove = (title) => {
        this.refs.RemoveModal.openModal(title);
    };

    render() {
        return (
            <div className='container__column'>
                <Introduction 
                    onAdd={this.onAdd}
                />
                <BookList
                    books={this.props.books}
                    onEdit={this.onEdit}
                    onRemove={this.onRemove}
                />
                <FormModal
                    onAdd={this.props.dispatchAddBook}
                    onEdit={this.props.dispatchEditBook}
                    books={this.props.books}
                    ref='FormModal'
                />
                <RemoveModal
                    onRemove={this.props.dispatchRemoveBook}
                    ref='RemoveModal'
                />
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    books: state
});

const mapDispatchToProps = (dispatch) => ({
    dispatchSetBooks: (books) => dispatch(dispatchSetBooks(books)),
    dispatchRemoveBook: (title) => dispatch(dispatchRemoveBook(title)),
    dispatchEditBook: (updatedBook, previousTitle) => dispatch(dispatchEditBook(updatedBook, previousTitle)),
    dispatchAddBook: (book) => dispatch(dispatchAddBook(book))
});


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);