import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function SuccessPage(props) {
const navigate = useNavigate()
const {name,setName, setId, setCPF, setNameSeat, cpf, seat, nameSeat} = props;
    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test = "movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{seat.movie.title}</p>
                <p>{seat.day.date} - {seat.name}</p>
            </TextContainer>

            <TextContainer data-test = "seats-info">
                <strong><p>Ingressos</p></strong>
               {nameSeat.map( assento => <p>Assento {assento}</p>)} 
            </TextContainer>

            <TextContainer data-test = "client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </TextContainer>

            <button data-test = "go-home-btn" onClick= {() => {
                setName('');
                setCPF('');
                setId([]);
                setNameSeat([]);
                navigate('/')}}>Voltar para Home</button>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
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
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`