import axios from 'axios';
import React, { useState, useEffect,useReducer } from "react";
import { Link, useParams,useNavigate} from 'react-router-dom';
import MascotasForm from '../components/MascotasForm';
import { validationMascota } from "../services/validationService";

export default props => {
    const {id} = useParams()
    const [putok, setPutok] = useState();
    const [nombre, setNombre] = useState();
    const [tipo, setTipo] = useState();
    const [descripcion, setDescripcion] = useState();
    const [habilidad1, setHabilidad1] = useState();
    const [habilidad2, setHabilidad2] = useState();
    const [habilidad3, setHabilidad3] = useState();
    const [eee,setEee] = useState()
    const navigate = useNavigate()
    const [msj, setMsj] = useState("")
    const [errors, setErrors] = useState([]); 
    const [errorNameMsj, setErrorNameMsj] = useState(""); 
    const [errorTipoMsj, setErrorTipoMsj] = useState("");
    const [errorDescripcionMsj, setErrorDescripcionMsj] = useState("");
    console.log(id,"id en actualiza")
    
  
   
    //------------------------

    
    useEffect(() => {
        
           
            axios.get(`http://localhost:8080/api/mascotas/${id}`)
           .then((res)=>{
            setNombre(res.data.detalle.nombre);
            setTipo(res.data.detalle.tipo)
            setDescripcion(res.data.detalle.descripcion)
            setHabilidad1(res.data.detalle.habilidad1)
            setHabilidad2(res.data.detalle.habilidad2)
            setHabilidad3(res.data.detalle.habilidad3)
            console.log(res,"ressss en el then")
           })
            
        .catch(err=>console.log(err)) 
    }, [id])

  
  
    const editValidate = (value) => {
        const resp = validationMascota(value);
        if(resp[0]==="name"){
            setErrorNameMsj(resp)
        }
        else if(resp[0]==="tipo"){
            setErrorTipoMsj(resp)
        }else{
            setErrorDescripcionMsj(resp) 
        }
       
        console.log(resp[0],"resp i 0")
        console.log(resp[1],"resp i 1")    
    }


    const editarMascota = (values)=> {
        axios.put(`http://localhost:8080/api/mascotas/update/${id}`,values /* {
            
        } */)
            .then(res=>setPutok(res))
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) 
                    errorArr.push(errorResponse[key].message)
                setErrors(errorArr);
                console.log(errorArr,"errorArr desde actualiza lokoooooooooooooooooooooo")
            })
            /* console.log(err,"error que llega del back")    */
    }

    useEffect(() => {
       
        console.log(errors, "error del back pero actualizado en effectttttttttttttttttttttttttttttttt")
     
    }, [errors])

    useEffect(() => {
        console.log(putok, "put ok en useefect")
      if(putok!==undefined){
        navigate("/")
      }else{  console.log(putok, "put ok del else")}
    }, [putok])


 console.log(nombre,"nombreeee")
    return (
        <div>
           {nombre&&<MascotasForm errNameProp={errorNameMsj} errTipoProp={errorTipoMsj} errDescripcionProp={errorDescripcionMsj} validateProp={editValidate} onSubmitProp={editarMascota} initialNombre={nombre} initialTipo={tipo} 
           initialDescripcion={descripcion} initialHabilidad1={habilidad1} initialHabilidad2={habilidad2} initialHabilidad3={habilidad3} errores={errors}/>
    }  
        </div>
    )
}










