
import React from 'react';
 const Movie = ({ title, releaseDate }) => {
     console.log('Movie Rendered');
    return (
      <React.Farment>
          <div>Movie title: {title}</div>
        <div>Release date: {releaseDate}</div>
      </React.Farment>
    );
  }
  
  export default React.memo(Movie);

  // React.Memo 
  // react is a higher function that stop rendering compoent if it has saame prop values.
  // simillar to should shouldComponentUpdate lifecycel hook.
  // React.Fargment ||  <div></div> || <></> 