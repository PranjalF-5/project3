import React, { useState } from "react";
import styled from "styled-components";

function NumberSelector({setError, error,selectedNumber,setSelectedNumber}) {
    const arr = [1, 2, 3, 4, 5, 6];
     // Initialize state with useState()

const numberSelectorHandler = (value) =>  {
    setSelectedNumber(value)
    setError ("")
}




    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
           <div className="flex">
            
            {
                arr.map((value, i) => (
                    <Box
                        isSelected={value === selectedNumber}
                        key={i}
                        onClick={()=>numberSelectorHandler(value) } // Call setSelectedNumber instead of assigning it a value
                    >
                        {value}
                    </Box>
                ))
            }
           </div>

           <p>
            Select Number
           </p>
        </NumberSelectorContainer>
    );
}

export default NumberSelector;


const NumberSelectorContainer = styled.div `
display: flex;
flex-direction: column;
align-items: flex-end;

.flex {
    display: flex;
    gap: 10px;
    
}

p {
    font-size: 24px;
    font-weight: 600;
    

}
.error {
    color: red;
   }
    
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    border-radius: 5px;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (props.isSelected ? "white" : "black")};

   
 
`;
