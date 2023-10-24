import { Link,useParams } from "react-router-dom";
import motion from 'framer-motion'
import styled from "styled-components";
import { useEffect, useState } from "react";


const Cuisines=()=>{

    const [cuisines,setCuisines]=useState([]);

    let params=useParams();

    const API_KEY="6522510f45fa4d68ac6635ef37085320";
    const getCuisine=async(name)=>{
        const data=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${name}`);
        const recipes=await data.json();
        setCuisines(recipes.results);
    };

    useEffect(()=>{
        getCuisine(params.type);
    },[params.type])

    return(
        <Grid>
            {
                cuisines.map((recipe)=>{
                    return(
                      <Link to={'/recipe/'+recipe.id}>
                         <Card key={recipe.id}>
                            <img src={recipe.image} alt=""></img>
                            <h4>{recipe.title}</h4>
                        </Card>
                      </Link>
                    )
                })
            }
        </Grid>

    )
}

const Grid=styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
    grid-gap: 3rem;
`;

const Card=styled.div`
    width:200px;
    height: 200px;
    img{
        width: 100%;border-radius:2rem;
    }

    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding:1rem;
    }

`;


export default Cuisines;