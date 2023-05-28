import styled from "styled-components"

export default function Seat(props){
    const {seat, setSeat, assento} = props;
    const {select, setSelect, id, setId} = props;
    
    return(
        <>

         <SeatItem  onClick = {() => {
            if (id.includes(assento.id) === false && assento.isAvailable === true){
                let novoID = [...id, assento.id];
                setId(novoID)
                setSelect(true)
                console.log(id,'estou no if')
             }else if(id.includes(assento.id) ){ 
                let novoID = id.filter (item => item !== assento.id);
                setId(novoID);
                setSelect(false);
                console.log(select, id,'estou no else')
             }
         }
        }  
            color = {assento.isAvailable === false ? '#F7C52B' : id.includes(assento.id) ? '#1AAE9E' : '#808F9D' } >
            0{assento.name}
            </SeatItem>
        </>
    )
}

const SeatItem = styled.div`
    border: 1px solid ${props => props.color};         // Essa cor deve mudar
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