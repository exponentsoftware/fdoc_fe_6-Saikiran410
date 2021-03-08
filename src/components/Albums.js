import React from "react";
import PropTypes from 'prop-types';
// import Card from "@material-ui/core/Card"; 
// import CardContent from "@material-ui/core/CardContent"; 
// import Typography from "@material-ui/core/Typography"; 

function Albums({album, MovieName, musicDirector}){
    return(
        <div>
          <card>
          <h3>{MovieName}</h3>
      <div>{album}</div>
      <div>{musicDirector.join(', ')}.</div>
      </card>
        </div>
    );
}
Albums.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    musicDirector: PropTypes.arrayOf(PropTypes.string).isRequired,   
  }
export default Albums;

