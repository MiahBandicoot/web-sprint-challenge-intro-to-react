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
    

// return()
//     data.forEach(eachPoke => {
//         return(
//       <StyleDiv className = 'pokeName'>  
//             <h1>{eachPoke.name}</h1>                 
//             <a href={eachPoke.url}>Data</a>
//       </StyleDiv>
//       )
//     })
    
    
        return(
              <StyleDiv className = 'pokeName'>  
                <h1>{data.name}</h1>                 
                <a href={data.url}>Data</a>
               </StyleDiv>
               )

    
       
             
           
                        
                            
                            
           
 
          
          
        
   
}

export default Character