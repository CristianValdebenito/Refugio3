import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
//import MascotasForm from '../components/MascotasForm';
import MascotasList from '../components/MascotasList';
import axios from 'axios';
export default () => {
    const [errors, setErrors] = useState([]); 
    const [mascota, setMascota] = useState([]);
    const [listMascota, setlistMascota] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const [error, setError] = useState([]);
   
  
    /* const createMascota = mascot => {
        axios.post('http://localhost:8080/api/mascotas/new', mascot)
            .then(res=>{
                setMascota([...mascota, res.data.mascota])
            }).catch(err=>{
                const errorResponse = err.response.data.errors; 
                console.log(errorResponse,"viendo que llega")
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                
                setErrors(errorArr);
            })               
        } */

        /* useEffect(()=>{
            console.log(error,"error desde el back")
        },[error])   */
    
    useEffect(()=>{
        axios.get('http://localhost:8080/api/mascotas')
            .then(res=>{
                setlistMascota(res.data);
                setLoaded(true);
               
            }); 
    },[]) 
    
   
    return (
        <div>
           {/* <MascotasForm errores={errors} onSubmitProp={createMascota} initialNombre={mascota.nombre} initialTipo={mascota.tipo} initialDescripcion={mascota.descripcion}/>
           <hr/> */}
           {loaded && <MascotasList mascotas={listMascota}/>}
        </div>
    )
}