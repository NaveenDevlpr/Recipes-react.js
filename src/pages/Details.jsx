import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const Details = () => {

    let params=useParams();


    const [details,setDetails]=useState({});

    const [activeTab,setActive]=useState("instructions");

    const API_KEY='6522510f45fa4d68ac6635ef37085320';
    const getDetails=async()=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${API_KEY}`);
        const dataDetail=await data.json();
        setDetails(dataDetail);
    }

    useEffect(() => {
        getDetails();
    }, [params.name])


  return (
    <Wrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt=""></img>
        </div>

        <Info>
            <Button className={activeTab==='ingredients'?'active':''}
            onClick={()=>setActive('instructions')}>
                Instructions
            </Button  >
            <Button className={activeTab==='instructions'?'active':''}
            onClick={()=>setActive('ingredients')} >Ingredients
            </Button>

            {activeTab==='instructions' &&(
                  <div >
                  <h3 
                  dangerouslySetInnerHTML={{__html:details.summary}}></h3>
                  <h3  dangerouslySetInnerHTML={{__html:details.instructions}}></h3>
              </div>
            )}

            {activeTab==='ingredients' &&(

                    <ul>
                    {details.extendedIngredients.map((items)=>{
                       return(
                        <li key={items.id}>
                        {items.original}
                        </li>
                       )
                    })}
                    </ul>
            )}
        </Info>
    </Wrapper>
  )
}


const Wrapper=styled.div`



    display: flex;
    margin-top: 10rem;
    margin-bottom: 5rem;
    

    .active{
        background: linear-gradient(35deg, #494949,#313131);
        color: white;
        border: 2px orange solid;
    }
    h2{
        margin-bottom: 2rem;
        color: #222;
        font-size: 1.5rem;
    }

    li{
        font-size: 1.5rem;
        line-height:2.5rem;

    }
    ul{
        margin-top: 2rem;
    }
    img{
        width: 100%
        
    }
`;

const Button=styled.button`

    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border:2px solid black;
    margin-right: 2rem;
    font-weight:500;
    margin-top: 1.5rem;
    

`;

const Info=styled.div`

    margin-left: 10rem;
    width: 100%;
    margin-top: 10px;
`;

export default Details