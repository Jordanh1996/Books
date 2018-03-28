import axios from 'axios';

export const RequestBooks = () => {
    return axios.get('/books/books.json');
};