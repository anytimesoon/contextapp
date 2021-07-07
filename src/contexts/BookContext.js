import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: 'pillars of the earth', id: 1},
        {title: 'the final empire', id: 2},
        {title: 'dune', id: 3},
        {title: 'the hero of ages', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;