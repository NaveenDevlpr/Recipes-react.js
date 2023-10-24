import React, { useEffect ,useState} from "react";
import styled from "styled-components";
import {Splide,SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
const Popular=()=>{

    const [popular,setPopular]=useState([]);

    useEffect(()=>{
        getItems();
    },[])

    const API_KEY='6522510f45fa4d68ac6635ef37085320';

    const getItems=async()=>{

        const items=localStorage.getItem('popular');
        
        if(items){
            setPopular(JSON.parse(items))
        }else{
            const api_res=await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`);
            const data=await api_res.json();

            localStorage.setItem("popular",JSON.stringify(data.recipes));
            setPopular(data.recipes);
            console.log(data);
        }

      
    }

    return (
        <div>
             <Wrapper>
                <h2>Popular Picks </h2>
                <Splide options={
                    {
                        perPage:4  ,
                        arrows:false,
                        pagination:false,
                        drag:"free",
                        gap:'5rem',
                    }
                }>
                    {popular.map((recipe)=>{
                        return(
                        <SplideSlide key={recipe.id}>
                            <Link to={'/recipe/'+recipe.id}>
                            <Card>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}></img>
                                <Gradient/>
                            </Card>
                            </Link>
                        </SplideSlide>
                        );
                       })}
                 </Splide>
             </Wrapper>
        </div>
    )
}


const Wrapper=styled.div`
    margin: 2rem 0rem;
`

const Card=styled.div`
    min-height: 15rem;
    border-radius:2rem;
    overflow:hidden;
    position:relative;
   

    img {
        border-radius:2rem;
        position:absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit:cover;
    }

    p{
        position:absolute;
        z-index:10;
        left:50%;
        bottom:0%;
        transform:translate(-50%,0%);
        color:white;
        width:100%;
        text-align:center;
        font-weight:500;
        display:flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        font-size: .75rem;
    }
`;

const Gradient=styled.div`
    z-index: 3;
    position: absolute;
    width:100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));

`
export default Popular;