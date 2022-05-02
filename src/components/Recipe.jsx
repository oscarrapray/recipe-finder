import React from 'react'
//import {Link} from 'react-router-dom'

export const Recipe = ({mov}) =>{
  const {recipe:{image},recipe:{label}} = mov
  return(
    <div className="card">
            <div className="card-img">
              <img src={image} alt="recipe"/>
            </div>
              <div className="movie-name">
               <span >{label}</span>
              </div>
              <div className="info-movie">
                <span >see recipe</span>
              </div>
    </div>
)
}