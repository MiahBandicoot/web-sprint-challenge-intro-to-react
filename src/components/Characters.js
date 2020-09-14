// Write your Character component here
import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

const StyleDiv = styled.div`
    background-color: black;
    opacity:.6;
    color: darkmagenta;
    -webkit-text-stroke: .5px whitesmoke;
`

const Character = props => {
   const {data} = props
    const newArray = [...data]
console.log(newArray)
// return()
//     data.forEach(eachPoke => {
//         return(
//       <StyleDiv className = 'pokeName'>  
//             <h1>{eachPoke.name}</h1>                 
//             <a href={eachPoke.url}>Data</a>
//       </StyleDiv>
//       )
//     })
    
    return newArray.map((eachPoke) =>{
        return(
              <StyleDiv className = 'pokeName'>  
                <h1>{eachPoke.name}</h1>                 
                <a href={eachPoke.url}>Data</a>
               </StyleDiv>
               )
    })
    
       