import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"

export default function App() {
    axios.defaults.headers.common['Authorization'] = 'vlGgSdWYuWevVEZOB1qCiUQE';
    const [filmes, setFilmes] = useState([]);
    

    useEffect(() => {
        const promiseLista = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        promiseLista.then(resposta => {setFilmes(resposta.data)});
       
    }, []);

    return (
        
        <>
        <BrowserRouter>
           <NavContainer>CINEFLEX</NavContainer>
            <Routes>
            <Route path="/" element = {<HomePage filmes = {filmes} setFilmes = {setFilmes} />} />
            <Route path="/sessoes/:idFilme" element = {<SessionsPage />} />
            <Route path="/assentos/:idSessao" element = {<SeatsPage />} />
            <Route path="/sucesso" element = {<SuccessPage />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
