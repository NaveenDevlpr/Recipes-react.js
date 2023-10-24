import React from "react";
import Pages from "./pages/Pages";
import Categories from "./components/Categories";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiChickenLeg } from "react-icons/gi";
const App=()=>{
  return (
    <div>
       <BrowserRouter>
       <Nav>
          <GiChickenLeg/>
          <Logo to={'/'}>Foodie</Logo>
       </Nav>
        <Search/>
        <Categories/>
        <Pages/>
       </BrowserRouter>
    </div>
  )
}


const Logo=styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight:600 ;
    color: #222;
    margin-left: 0.5rem;
`;

const Nav=styled.div`

    padding: 4rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg{
      font-size: 2.5rem;
    }

`;

export default App;