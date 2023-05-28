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
    const [seat, setSeat] = useState([]);
    const [name, setName] = useState('');
    const [id, setId] = useState([]);
    const [cpf, setCPF] = useState('');
    const [sessao, setSessao] = useState([]);
    const [nameSeat, setNameSeat] = useState([]);
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
            <Route path="/sessoes/:idFilme" element = {<SessionsPage sessao = {sessao} setSessao = {setSessao} />} />
            <Route path="/assentos/:idSessao" element = {<SeatsPage nameSeat = {nameSeat} setNameSeat = {setNameSeat} id = {id} setId = {setId} seat = {seat} setSeat = {setSeat} name = {name} setName = {setName} cpf = {cpf} setCPF = {setCPF} />} />
            <Route path="/sucesso" element = {<SuccessPage setId = {setId} setName = {setName} setCPF = {setCPF} setNameSeat = {setNameSeat} nameSeat = {nameSeat} seat = {seat}  name = {name} cpf = {cpf} sessao = {sessao} />} />
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
