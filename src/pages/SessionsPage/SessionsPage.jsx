import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios";
export default function SessionsPage(props) {
    const {idFilme} = useParams();
    const {sessao, setSessao} = props;
    const {days} = sessao;
    useEffect(() => {
        const promiseSessao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)
        promiseSessao.then(resposta => {setSessao(resposta.data)});
       
    }, []);
    
    //const {showtimes} = days;
   console.log(days,'sessions')
  // console.log(showtimes)
   
    return (
        <PageContainer>
            Selecione o horário
            {sessao.length === 0 && <div>"loading"</div>}
            {sessao.length !== 0 && ( 
                <>
            {days.map(day => <div>    
                <SessionContainer>
                    
                    {day.weekday} - {day.date}
                    <div>
                    {day.showtimes.map(time => <Link key = {time.id} to={`/assentos/${time.id}`}>
                    <ButtonsContainer>
                        <button >{time.name}</button>
                        
                    </ButtonsContainer></Link>)}
                    </div>
                </SessionContainer>
            </div>)}

            <FooterContainer>
                <div>
                    <img src={sessao.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{sessao.overview}</p>
                </div>
            </FooterContainer>
            </>
            )}
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
    div{
        display: flex;
    }
`
const ButtonsContainer = styled.div`
    display: flex;
    margin: 20px 0;
    border-radius: 3px;
    button {
        
        margin-right: 20px;
        width: 83px;
        height: 43px;
        background: #E8833A;
        color: white;
        border: none;
        border-radius: 3px;
    }    
    
    a{
        text-decoration: none;
       
    }
`
const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`