

export const toUpperCase = (str) => {
    str = str.replace(/(^|\s)[a-z]/g, FirstLetter => {
        return FirstLetter.toUpperCase();
    });
    return str;
};

export const toAlphaNumeric = (str) => {
    str = str.replace(/[^\w\s]/gi, '');
    return str;
};