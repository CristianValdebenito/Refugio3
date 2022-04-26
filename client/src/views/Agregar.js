import React, { useEffect, useState } from 'react'
import MascotasForm from '../components/MascotasForm';
import { useNavigate} from 'react-router-dom';
import { validationMascota } from "../services/validationService";
import axios from 'axios';

export default () => {
    const [errors, setErrors] = useState([]); 
    const [mascota, setMascota] = useState([]);
    const navigate = useNavigate();
    const [triguer, setTriguer] = useState(false);
    const [mascota2, setMascota2] = useState([]);
    const [errorNameMsj, setErrorNameMsj] = useState(""); 
    const [errorTipoMsj, setErrorTipoMsj] = useState("");
    const [errorDescripcionMsj, setErrorDescripcionMsj] = useState("");
  
    const [error, setError] = useState([]);
   
    //LLAMADA PARA CREAR UN NUEVO PRODUCTO
    console.log(mascota,"mascotaaaaaaa ziiiii")

    const editValidate = (value) => {
        const resp = validationMascota(value);
        if(resp[0]==="name"){
            console.log(resp,"resp i 0")
       
            setErrorNameMsj(resp)
        }
        else if(resp[0]==="tipo"){
            setErrorTipoMsj(resp)
        }else{
            setErrorDescripcionMsj(resp) 
        }
       
        
    }


    const createMascota = mascot => {
        axios.post('http://localhost:8080/api/mascotas/new', mascot)
            .then(res=>{
                setMascota([...mascota, res.data.mascota])
                setMascota2([res.data.mascota])
            }).catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) 
                    errorArr.push(errorResponse[key].message)
                setErrors(errorArr);
                console.log(errorArr,"errorArr desde el back po lokoooooooooooooooooooooo")
            })
                         
        }
        
        console.log(mascota,"state mascota antes del effect")
        useEffect(()=>{
            //setMascota([...mascota2])
            console.log(mascota,"state mascota dentro del effect")
            console.log(mascota2.length,"mascota2.length dentro del effect")
            if(mascota2.length!==0){
                navigate("/")
           }else{console.log("length sigue siendo 0")}
        },[mascota2.length!==0])  
        console.log(mascota,"state mascota una vez salido del effect")
   
   
   

    return (
        <div>
           <MascotasForm errNameProp={errorNameMsj} errTipoProp={errorTipoMsj} errDescripcionProp={errorDescripcionMsj} errores={errors} onSubmitProp={createMascota} initialNombre={mascota.nombre} initialTipo={mascota.tipo} 
           initialDescripcion={mascota.descripcion} initialHabilidad1={mascota.habilidad1} initialHabilidad2={mascota.habilidad2} validateProp={editValidate} initialHabilidad3={mascota.habilidad3}/>
        </div>
    )
}