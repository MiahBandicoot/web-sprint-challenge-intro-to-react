// Write your Character component here
import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

const StyleDiv = styled.div`
    background-color:opacity .5 black;
`

const Character = props => {
    const {data} = props
    console.log(data)
    return(  
     <StyleDiv className = 'pokeName'>
      <h1>{data.name}</h1>
      <a href={data.url}>Data</a>
     </StyleDiv>
              
    )        
          
          
        
   
}

export default Character