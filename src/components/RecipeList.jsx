import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Search } from './Search'
import { Recipe } from './Recipe'

export const RecipeList = () =>{
const APP_ID = "271d5f2f";
const APP_KEY = "88fd0eadad48157387707fa0a2eefafb";
const[search, setSearch] = useState('egg')
const[recipelist, setRecipelist] = useState([])

//const {recipe:{image},recipe:{label}} = recipelist

const consultarApi = async () =>{
    if(search === '' ) return;
    const URL =  `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    const resp = await axios.get(URL)
    setRecipelist(resp.data.hits)
}
 useEffect(()=>{
     consultarApi()
     // eslint-disable-next-line
 },[search])

    return(
        <>
        <div className="container">
          <div className="l-container">
              <Search setSearch = {setSearch}/>
              <div className="container-card">
                  {recipelist.length===0?(
                      <h2>Cargando ...</h2>
                  ):(
                    recipelist.map( mov =>(
                      <Recipe 
                      key = {mov.recipe.label}
                      mov = {mov}
                      />
                    ))
              )}
              </div>
         </div>
       </div>
        </>
    )
}