import Termek from "./Termek/Termek.js";

export default function Termekek(props){
    return(
        props.termekek.map((elem, index) =>{
            return(<Termek key = {index} cim = {elem.cim} kep = {elem.kep} index = {index} leiras = {elem.leiras} ar = {elem.ar}/>)
        })
    )
}