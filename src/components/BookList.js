import React, {Component} from 'react';

class BookList extends Component {
    render() { 
        return ( 
            <div className="book-list">
                <ul>
                    <li>the pillars of the earth</li>
                    <li>the final empire</li>
                    <li>dune</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;