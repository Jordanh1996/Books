import {
    SET_BOOKS,
    ADD_BOOK,
    REMOVE_BOOK,
    EDIT_BOOK,
} from './actionTypes';

export const dispatchSetBooks = (books) => ({
    type: SET_BOOKS,
    books
});

export const dispatchAddBook = (book) => ({
    type: ADD_BOOK,
    book
});

export const dispatchRemoveBook = (title) => ({
    type: REMOVE_BOOK,
    title
});

export const dispatchEditBook = (updatedBook, previousTitle) => ({
    type: EDIT_BOOK,
    updatedBook,
    previousTitle
});
