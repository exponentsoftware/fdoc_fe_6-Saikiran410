// import React from "react";
// //import   './components/Images/logo1.png';
// import Album from './components/Album';

// function App(){
//   return(
//     <div>
//       <Album />
//     </div>
//   );
// }

// export default App;

import React from "react";
import './App.css';
import movies from './components/Data';
import Albums from './components/Albums';

function App(){
  return(
    

    <div className="movie-albums">
      {movies.map(movie =>
        <Albums
        musicDirector={movie.musicDirector}
          //key={animal.name}
          MovieName={movie.MovieName}
          album={movie.album}
        />
      )}
   
    </div>
  );

}
export default App;