import styled from "styled-components"

export default function Seat(props){
    const {seat, setSeat, assento} = props;
    const {select, setSelect, id, setId, nameSeat, setNameSeat} = props;
    
    return(
        <>

         <SeatItem data-test = "seat" onClick = {() => {
            if (id.includes(assento.id) === false && assento.isAvailable === true){
                let novoID = [...id, assento.id];
                let novoName = [...nameSeat, assento.name];
                setId(novoID)
                setNameSeat(novoName)
                setSelect(true)
                console.log(id,'estou no if')
             }else if(id.includes(assento.id) ){ 
                let novoID = id.filter (item => item !== assento.id);
                let novoName = nameSeat.filter (item => item !== assento.name);
                setId(novoID);
                setNameSeat(novoName)
                setSelect(false);
                console.log(select, id,'estou no else')
             }else if(!assento.isAvailable){
                alert('Esse assento não está disponível')
             }
         }
        }  
            color = {assento.isAvailable === false ? '#FBE192' : id.includes(assento.id) ? '#1AAE9E' : '#C3CFD9' }
            colorBorder = {assento.isAvailable === false ? '#F7C52B' : id.includes(assento.id) ? '#0E7D71' : '#808F9D' } >
            0{assento.name}
            </SeatItem>
        </>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => props.colorBorder};         // Essa cor deve mudar
    background-color: ${props => props.color};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`