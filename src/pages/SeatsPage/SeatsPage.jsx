import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Seat from "../../components/Seat";

export default function SeatsPage(props) {
    const {idSessao} = useParams();
    const {seat, setSeat} = props;
    const {nameSeat, setNameSeat, id, setId} = props;
    const [select, setSelect] = useState(false);
    const {name, setName} = props;
    const {cpf, setCPF} = props;
    const navigate = useNavigate()
    useEffect(() => {
        const promiseSeats = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promiseSeats.then(resposta => setSeat(resposta.data));

    }, []);
    function sucesso (event){
        if(id.length === 0){
            alert('Você não selecionou um assento')
        }else{
        event.preventDefault();
        const promiseSuccess = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', {
            ids: id,
            name: name,
            cpf: cpf
        })
       promiseSuccess.then (() => navigate("/sucesso"))
    }
    }

    
    return (
        <PageContainer>
            Selecione o(s) assento(s)
            {seat.length === 0 && <div>"loading"</div>}
            {seat.length !== 0 && (
            <SeatsContainer>
                {seat.seats.map ( assento => 
                <Seat nameSeat = {nameSeat} setNameSeat = {setNameSeat} seat = {seat} setSeat = {setSeat} select = {select} setSelect = {setSelect} assento = {assento} id = {id} setId = {setId}/>)}
            </SeatsContainer>
            )}
            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle color = '#1AAE9E' colorBorder = '#0E7D71' />
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color = '#C3CFD9' colorBorder = '#7B8B99' />
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color = '#FBE192' colorBorder = '#F7C52B' />
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                <form onSubmit = {sucesso}>
                    Nome do Comprador:
                    <input type = "text" required value = {name} onChange = {e => setName (e.target.value)} placeholder="Digite seu nome..." />

                    CPF do Comprador:
                    <input type = "number" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required value = {cpf} onChange = {e => setCPF (e.target.value)} placeholder="Digite seu CPF..." />

                   <button type="submit">Reservar Assento(s)</button>
                </form>
            </FormContainer>
            {seat.length === 0 && <div>"loading"</div>}
            {seat.length !== 0 && (
            <FooterContainer>
                <div>
                    <img src={seat.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{seat.movie.title}</p>
                    <p>{seat.day.weekday} - {seat.name}</p>
                </div>
            </FooterContainer>
            )}
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
        width: 225px;
        height: 42px;
        margin-top: 50px;
        background: #E8833A;
        border-radius: 3px;
        color: white;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;

    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.colorBorder};         // Essa cor deve mudar
    background-color: ${props => props.color};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
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