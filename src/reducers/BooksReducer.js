import {
    SET_BOOKS,
    ADD_BOOK,
    REMOVE_BOOK,
    EDIT_BOOK,
} from '../actions/actionTypes';

export default (state = [], action) => {
    switch(action.type) {

        case SET_BOOKS:
            return action.books;

        case ADD_BOOK:
            return [
                action.book,
                ...state
            ];

        case REMOVE_BOOK:
            return state.filter((book) => book.title !== action.title);

        case EDIT_BOOK:
            return state.map((book) => {
                if (book.title === action.previousTitle) {
                    return {
                        ...book,
                        ...action.updatedBook
                    };
                } else return book;
            });

        default:
            return state;
    };
};