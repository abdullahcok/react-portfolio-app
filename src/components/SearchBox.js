import React from 'react';

const SearchBox = ({SearchField, SearchChange}) => {
    return(
        <div className='pa2'>
            <input style={{color: '#fff'}}
                          className = 'pa3 ba b--blue bg-light-blue'
                         type='search'
                         placeholder='search for any project...'
                         onChange={SearchChange}/>
        </div>
    );
}

export default SearchBox;
