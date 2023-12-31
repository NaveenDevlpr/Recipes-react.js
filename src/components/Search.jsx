import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Search = () => {

    const [input,setInput]=useState("");

    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+ input);
    }

  return (
    <FontStyle  onSubmit={submitHandler}>
        <div>
            <FaSearch/>
            <input type='text' placeholder='search'  onChange={(e)=>setInput(e.target.value)} value={input}>
            </input>
        </div>
    </FontStyle>
  )
}

const FontStyle=styled.form`

    margin: 0rem 10rem;
   

    div{    
        width: 100%;
        position: relative;
    }

    input{
        width: 100%;
        border: none;
        background: linear-gradient(35deg, #494949,#313131);
        font-size: 1rem;
        color: white;
        padding: .75rem 3rem;
        border-radius: 1rem;
        outline: none;
    }

    svg{
        position: absolute;
        top: 50%;
        left:0% ;
        transform: translate(100%,-50%);
        color: white;
    }
`;

export default Search